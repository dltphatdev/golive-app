import getMockStepData from "@/utils/getMockStepData";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";

export default function useStepWhenAppOpen() {
	useEffect(() => {
		(async function () {
			const steps = getMockStepData();
			// if (!isRunningInBuild) {
			// } else {

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
