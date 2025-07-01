import stepApi from "@/apis/step.api";
import HeaderSpoint from "@/assets/images/header-spoint.svg";
import StrakeIcon from "@/assets/images/strake.svg";
import { AppContext } from "@/context/app.context";
import { formatNumberCurrency } from "@/utils/common";
import { Ionicons } from "@expo/vector-icons";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "expo-router";
import { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HeaderOther() {
	const { profile } = useContext(AppContext);
	const router = useRouter();
	const getStepMutation = useQuery({
		queryKey: ["get_step"],
		queryFn: stepApi.getStep,
	});

	const dataStep = getStepMutation.data?.data.data;
	return (
		<View style={styles.header}>
			<View style={styles.headerLeft}>
				<TouchableOpacity onPress={() => router.back()}>
					<Ionicons name="arrow-back" size={24} color="white" />
				</TouchableOpacity>
				<View style={styles.headerStrake}>
					<StrakeIcon width={14} height={18} />
					<Text style={styles.headerStrakeText}>
						Chuỗi {dataStep?.lastStreakCount || 0} ngày liên tục
					</Text>
				</View>
			</View>
			<TouchableOpacity
				style={styles.headerRight}
				onPress={() => router.push("/(protected)/history")}
			>
				<HeaderSpoint width={21} />
				<Text style={styles.headerSpointNumber}>
					{profile?.spoint
						? formatNumberCurrency(profile.spoint).toString()
						: "00.00"}
				</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	header: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	headerLeft: {
		flexDirection: "row",
		alignItems: "center",
		gap: 12,
	},
	headerStrake: {
		flexDirection: "row",
		gap: 9,
		alignItems: "center",
		paddingVertical: 8,
		paddingInline: 14,
		backgroundColor: "rgba(255, 255, 255, 0.2)",
		borderRadius: 60,
	},
	headerStrakeText: {
		fontSize: 12,
		fontWeight: 600,
		color: "white",
	},
	headerSpointNumber: {
		fontSize: 12,
		fontWeight: 600,
		color: "white",
	},
	headerRight: {
		flexDirection: "row",
		gap: 4,
		alignItems: "center",
		paddingVertical: 8,
		paddingInline: 14,
		backgroundColor: "rgba(255, 255, 255, 0.2)",
		borderRadius: 60,
	},
});
