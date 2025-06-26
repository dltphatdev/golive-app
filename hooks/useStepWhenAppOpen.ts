import getMockStepData from "@/utils/getMockStepData";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";

export default function useStepWhenAppOpen() {
	useEffect(() => {
		(async function () {
			const steps = getMockStepData();
			// if (!isRunningInBuild) {
			// } else {
			// 	if (Platform.OS === "ios") {
			// 		const data = await getAppleHealthDataIOS();
			// 		steps = data?.steps || 0;
			// 	} else if (Platform.OS === "android") {
			// 		const data = await getGoogleFitDataAndroid();
			// 		steps = data?.steps || 0;
			// 	}
			// }
			const start = new Date();
			start.setHours(0, 0, 0, 0);
			const payload = {
				steps,
				start_time: start.toISOString(),
				last_time: new Date().toISOString(),
			};
			await AsyncStorage.setItem("step_data", JSON.stringify(payload));
		})();
	}, []);
}
