import stepApi from "@/apis/step.api";
import { CircleProgress } from "@/components/CircleProgress";
import Header from "@/components/Header";
import MetricCard from "@/components/MetricCard";
import WeeklyChart from "@/components/WeeklyChart";
import usePedometerSteps from "@/hooks/usePedometerSteps";
import { ChartStep, GetStepRes } from "@/types/step";
import { useMutation, useQuery } from "@tanstack/react-query";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useMemo, useRef, useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
	const [dataStep, setDataStep] = useState<GetStepRes>();
	const { steps, startStepTime, lastStepTime } = usePedometerSteps();

	const lastSyncedStepRef = useRef<number>(0);
	const totalStep = useMemo(
		() => Number(dataStep?.stepLogToday.steps) + steps,
		[dataStep?.stepLogToday.steps, steps]
	);
	const goal = 5000;

	const getStepLogMutation = useQuery({
		queryKey: ["get_step_logs"],
		queryFn: stepApi.getStepLog,
	});

	const updateStepMutation = useMutation({
		mutationFn: stepApi.updateStep,
	});

	const getStepLogs = getStepLogMutation.data?.data.data.logs;

	useEffect(() => {
		const interval = setInterval(async () => {
			if (
				totalStep > Number(dataStep?.stepLogToday.steps) && // phải lớn hơn db
				totalStep <= 5000 &&
				startStepTime &&
				lastStepTime &&
				totalStep !== lastSyncedStepRef.current
			) {
				try {
					await updateStepMutation.mutateAsync({
						steps: totalStep,
						start_time: startStepTime?.toISOString() as string,
						last_time: lastStepTime?.toISOString() as string,
					});
					lastSyncedStepRef.current = totalStep;
				} catch (err) {
					console.error("❌ Sync lỗi:", err);
				}
			}
		}, 5000);

		return () => clearInterval(interval);
	}, [
		steps,
		startStepTime,
		lastStepTime,
		totalStep,
		updateStepMutation,
		dataStep?.stepLogToday.steps,
	]);

	const handleReceiveStepsFromHeaderComponent = (data: GetStepRes) => {
		if (data) {
			setDataStep(data);
		}
		return;
	};

	return (
		<SafeAreaView style={styles.container}>
			<LinearGradient
				colors={["rgba(33, 124, 197, 1)", "rgba(30, 105, 134, 1)"]}
				style={[styles.gradient, StyleSheet.absoluteFill]}
				start={{ x: 0.5, y: 0 }}
				end={{ x: 0.5, y: 1 }}
			>
				<ScrollView
					style={styles.content}
					contentContainerStyle={{ paddingBottom: 55 }}
				>
					{/* Header */}
					<Header onSendData={handleReceiveStepsFromHeaderComponent} />
					{/* CircleProgress */}
					<View style={styles.circleProgressWp}>
						<CircleProgress
							steps={dataStep?.stepLogToday.steps as number}
							goal={goal}
						/>
					</View>

					{/* WeeklyChart */}
					<WeeklyChart data={dataStep?.chartData as ChartStep[]} />

					{/* Metric Card */}
					<View style={styles.metricBox}>
						<Text style={styles.metricLabel}>Hoạt động</Text>
						{getStepLogs &&
							getStepLogs?.length > 0 &&
							getStepLogs?.map((item, index) => {
								const marginBottomNumber =
									index === getStepLogs.length - 1 ? 0 : 16;
								return (
									<View
										key={item.id}
										style={[{ marginBottom: marginBottomNumber }]}
									>
										<MetricCard log={item} />
									</View>
								);
							})}
					</View>
				</ScrollView>
			</LinearGradient>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: { flex: 1 },
	gradient: { flex: 1 },
	content: { flex: 1, paddingVertical: 40, paddingInline: 10 },
	metricBox: {
		marginTop: 16,
	},
	metricLabel: {
		color: "rgba(255, 255, 255, 0.8)",
		fontSize: 18,
		fontWeight: 600,
		marginBottom: 10,
	},
	circleProgressWp: {
		marginTop: 20,
	},
});
