import stepApi from "@/apis/step.api";
import { CircleProgress } from "@/components/CircleProgress";
import Header from "@/components/Header";
import MetricCard from "@/components/MetricCard";
import WeeklyChart from "@/components/WeeklyChart";
import { ChartStep, GetStepRes } from "@/types/step";
import { useQuery } from "@tanstack/react-query";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { useState } from "react";

import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
	const router = useRouter();
	// const [data, setData] = useState<any>(null);
	const [dataStep, setDataStep] = useState<GetStepRes>();
	const goal = 5000;
	// useStepWhenAppOpen(); // Khi mở app
	// useStepSyncOnFocus(); // Khi app quay lại

	const getStepLogMutation = useQuery({
		queryKey: ["get_step_logs"],
		queryFn: stepApi.getStepLog,
	});

	const getStepLogs = getStepLogMutation.data?.data.data.logs;

	const handleReceiveStepsFromHeaderComponent = (data: GetStepRes) => {
		if (data) {
			setDataStep(data);
		}
		return;
	};

	// const data = useStepTracker(); // tự động chạy mỗi 5s và trả về stepData

	// useEffect(() => {
	// 	const loadData = async () => {
	// 		const fitData = await getGoogleFitDataAndroid();
	// 		setData(fitData);
	// 	};

	// 	loadData();
	// }, []);

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
					{/* <View>
						<Text>Bước chân hôm nay: {data?.steps ?? 0}</Text>
					</View> */}
					{/* <View>
						<Text>Số bước: {data.steps}</Text>
						<Text>Quãng đường: {data.distance.toFixed(2)} m</Text>
						<Text>Calories: {data.calories.toFixed(2)} kcal</Text>
						<Text>Nhịp tim: {data.heartRate?.length ?? 0} mẫu</Text>
						<Text>Giấc ngủ: {data.sleep?.length ?? 0} phiên</Text>
						<Text>Cân nặng: {data.weight ?? "N/A"} kg</Text>
						<Text>Thời gian bắt đầu: {data.startTime ?? "?"}</Text>
						<Text>Thời gian kết thúc: {data.endTime ?? "?"}</Text>
					</View> */}
					{/* <TouchableOpacity
						onPress={() => router.push("/(protected)/tracking-step")}
					>
						<Text>Test tracking step</Text>
					</TouchableOpacity> */}
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
