import { newsData } from "@/app/(protected)/(tabs)/news";
import HeaderOther from "@/components/HeaderOther";
import { LinearGradient } from "expo-linear-gradient";
import { useLocalSearchParams } from "expo-router";
import { Platform, SafeAreaView, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

export default function NewsDetailScreen() {
	const { id } = useLocalSearchParams();
	const news = newsData.find((item) => item.id === Number(id));
	if (!news) return;
	const html = news.content;

	return (
		<SafeAreaView style={styles.container}>
			<LinearGradient
				colors={["rgba(33, 124, 197, 1)", "rgba(30, 105, 134, 1)"]}
				style={{
					padding: 10,
					...(Platform.OS === "android" && { marginTop: 40 }),
				}}
				start={{ x: 0.5, y: 0 }}
				end={{ x: 0.5, y: 1 }}
			>
				<HeaderOther />
			</LinearGradient>

			{/* WebView nội dung */}
			<WebView
				originWhitelist={["*"]}
				source={{ html }}
				style={styles.webview}
				showsHorizontalScrollIndicator={false}
				scalesPageToFit
			/>
		</SafeAreaView>
	);
}
const styles = StyleSheet.create({
	container: { flex: 1 },
	gradient: { flex: 1 },
	header: {
		height: 60,
		backgroundColor: "#217cc5",
		flexDirection: "row",
		alignItems: "center",
		paddingHorizontal: 12,
	},
	backButton: {
		flexDirection: "row",
		alignItems: "center",
	},
	backText: {
		color: "white",
		fontSize: 16,
		marginLeft: 6,
	},
	headerTitle: {
		color: "white",
		fontSize: 18,
		fontWeight: "bold",
		marginLeft: 16,
	},
	webview: {
		flex: 1,
	},
});
