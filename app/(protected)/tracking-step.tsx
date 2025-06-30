import { Pedometer } from "expo-sensors";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function TrackingStepScreen() {
	const [isAvailable, setIsAvailable] = useState(false);
	const [currentStepCount, setCurrentStepCount] = useState(0);
	useEffect(() => {
		let subscription: any = null;

		// Kiểm tra thiết bị có cảm biến không
		Pedometer.isAvailableAsync().then((result) => {
			setIsAvailable(result);
			if (result) {
				// Bắt đầu lắng nghe bước chân
				subscription = Pedometer.watchStepCount((result) => {
					setCurrentStepCount(result.steps);
				});
			}
		});

		return () => {
			// Hủy đăng ký khi component unmount
			subscription && subscription.remove();
		};
	}, []);
	return (
		<View style={{ padding: 20, marginTop: 100 }}>
			<Text>Cảm biến có sẵn: {isAvailable ? "✅ Có" : "❌ Không"}</Text>
			<Text style={{ fontSize: 18, marginTop: 10 }}>
				Bước chân ghi nhận từ khi mở app: {currentStepCount}
			</Text>
		</View>
	);
}
