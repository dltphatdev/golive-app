import { useRouter } from "expo-router";
import {
	Dimensions,
	Image,
	ImageSourcePropType,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
const { width } = Dimensions.get("window");
const cardWidth = (width - 34) / 2; // 2 columns with padding

interface Props {
	newsItem: {
		id: number;
		title: string;
		image: ImageSourcePropType;
	};
}
export default function NewsItem({ newsItem }: Props) {
	const router = useRouter();
	return (
		<TouchableOpacity
			style={styles.newsItem}
			onPress={() => router.push(`/news-detail/${newsItem.id}`)}
		>
			<Image source={newsItem.image} style={styles.newsImg} />
			<View style={styles.newsContent}>
				<View style={styles.newsContainerTitle}>
					<Text style={styles.newsTitle} numberOfLines={2}>
						{newsItem.title}
					</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
}
const styles = StyleSheet.create({
	newsItem: {
		position: "relative",
		borderRadius: 12,
		overflow: "hidden",
		width: cardWidth,
		height: cardWidth * 1.4,
	},
	newsImg: {
		width: "100%",
		height: "100%",
		resizeMode: "cover",
	},
	newsContent: {
		position: "absolute",
		padding: 8,
		bottom: 0,
		left: 0,
		gap: 1,
	},
	newsContainerTitle: {
		marginBottom: 4,
		paddingVertical: 3,
		paddingInline: 8,
		borderRadius: 14,

		backgroundColor: "rgba(146, 146, 146, 0.6)",
	},
	newsTitle: {
		fontSize: 13,
		color: "#fff",
		fontWeight: "500",
		textTransform: "uppercase",
	},
});
