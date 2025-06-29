import { getGoogleFitDataAndroid } from "@/utils/googleFit";
import { getAppleHealthDataIOS } from "@/utils/iosFit";
import { useEffect, useRef, useState } from "react";
import { Alert, Platform } from "react-native";

type StepData = {
	steps: number;
	source: "GoogleFit" | "Pedometer" | "AppleHealth" | "Unknown";
};

export default function useStepTracker(intervalMs: number = 5000) {
	const [stepData, setStepData] = useState<StepData | null>(null);
	const hasAlertedRef = useRef(false);
	const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

	useEffect(() => {
		const fetchSteps = async () => {
			let steps = 0;
			let source: StepData["source"] = "Unknown";
			if (Platform.OS === "android") {
				const data = await getGoogleFitDataAndroid();
				if (data?.steps && data.steps > 0) {
					steps = data.steps;
					source = "GoogleFit";
				}
			} else if (Platform.OS === "ios") {
				const data = await getAppleHealthDataIOS();
				if (data?.steps && data.steps > 0) {
					steps = data.steps;
					source = "AppleHealth";
				}
			}

			setStepData({ steps, source });

			if (steps > 0 && !hasAlertedRef.current) {
				Alert.alert("🚶‍♂️ Bước chân hôm nay", `Đã đi ${steps} bước (${source})`);
				hasAlertedRef.current = true;
			}
		};

		fetchSteps();
		intervalRef.current = setInterval(fetchSteps, intervalMs);

		return () => {
			if (intervalRef.current) clearInterval(intervalRef.current);
		};
	}, [intervalMs]);

	return stepData;
}
