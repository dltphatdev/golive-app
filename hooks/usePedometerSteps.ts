import { Pedometer } from "expo-sensors";
import { useEffect, useState } from "react";

export default function usePedometerSteps() {
	const [isAvailable, setIsAvailable] = useState(false);
	const [startStepTime, setStartStepTime] = useState<Date | null>(null);
	const [lastStepTime, setLastStepTime] = useState<Date | null>(null);
	const [currentStepCount, setCurrentStepCount] = useState(0);

	useEffect(() => {
		let subscription: any = null;
		Pedometer.isAvailableAsync().then((result) => {
			setIsAvailable(result);
			if (result) {
				subscription = Pedometer.watchStepCount((result) => {
					setCurrentStepCount(result.steps);
					const now = new Date();
					setStartStepTime((prev) => prev ?? now);
					setLastStepTime(now);
				});
			}
		});
		return () => {
			subscription && subscription.remove();
		};
	}, []);

	return {
		isAvailable,
		steps: currentStepCount,
		startStepTime,
		lastStepTime,
	};
}
