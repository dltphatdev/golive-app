import Header from "@/components/Header";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useRef, useState } from "react";
import {
	Dimensions,
	FlatList,
	Image,
	ListRenderItemInfo,
	SafeAreaView,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";

interface Category {
	name: string;
	image: any;
}

const categories: Category[] = [
	{ name: "Thực phẩm", image: require("@/assets/images/noimage.png") },
	{ name: "Thuốc", image: require("@/assets/images/noimage.png") },
	{ name: "Quà lưu niệm", image: require("@/assets/images/noimage.png") },
	{ name: "CDs", image: require("@/assets/images/noimage.png") },
	{ name: "Quần thời trang", image: require("@/assets/images/noimage.png") },
	{
		name: "Thể thao thời trang",
		image: require("@/assets/images/noimage.png"),
	},
	{
		name: "Thể thao thời trang",
		image: require("@/assets/images/noimage.png"),
	},
	{
		name: "Thể thao thời trang 11",
		image: require("@/assets/images/noimage.png"),
	},
	{
		name: "Thể thao thời trang 12 ",
		image: require("@/assets/images/noimage.png"),
	},
	{
		name: "Thể thao thời trang 13",
		image: require("@/assets/images/noimage.png"),
	},
	{
		name: "Thể thao thời trang 13",
		image: require("@/assets/images/noimage.png"),
	},
	{
		name: "Thể thao thời trang 13",
		image: require("@/assets/images/noimage.png"),
	},
	{
		name: "Thể thao thời trang 13",
		image: require("@/assets/images/noimage.png"),
	},
	{
		name: "Thể thao thời trang 13",
		image: require("@/assets/images/noimage.png"),
	},
	{
		name: "Thể thao thời trang 13",
		image: require("@/assets/images/noimage.png"),
	},
	{
		name: "Thể thao thời trang 13",
		image: require("@/assets/images/noimage.png"),
	},
	{
		name: "Thể thao thời trang 13",
		image: require("@/assets/images/noimage.png"),
	},
	{
		name: "Thể thao thời trang 13",
		image: require("@/assets/images/noimage.png"),
	},
	{
		name: "Thể thao thời trang 13",
		image: require("@/assets/images/noimage.png"),
	},
	{
		name: "Thể thao thời trang 13",
		image: require("@/assets/images/noimage.png"),
	},
	{
		name: "Thể thao thời trang 13",
		image: require("@/assets/images/noimage.png"),
	},
	{
		name: "Thể thao thời trang 13",
		image: require("@/assets/images/noimage.png"),
	},
	{
		name: "Thể thao thời trang 13",
		image: require("@/assets/images/noimage.png"),
	},
	{
		name: "Thể thao thời trang 13",
		image: require("@/assets/images/noimage.png"),
	},
	{
		name: "Thể thao thời trang 13",
		image: require("@/assets/images/noimage.png"),
	},
	{
		name: "Thể thao thời trang 13",
		image: require("@/assets/images/noimage.png"),
	},
	{
		name: "Thể thao thời trang 13",
		image: require("@/assets/images/noimage.png"),
	},
	{
		name: "Thể thao thời trang 13",
		image: require("@/assets/images/noimage.png"),
	},
	{
		name: "Thể thao thời trang 13",
		image: require("@/assets/images/noimage.png"),
	},
	{
		name: "Thể thao thời trang 13",
		image: require("@/assets/images/noimage.png"),
	},
	{
		name: "Thể thao thời trang 13",
		image: require("@/assets/images/noimage.png"),
	},
	{
		name: "Thể thao thời trang 13",
		image: require("@/assets/images/noimage.png"),
	},
	{
		name: "Thể thao thời trang 13",
		image: require("@/assets/images/noimage.png"),
	},
];

const { width } = Dimensions.get("window");

const chunkArray = (arr: any[], size: number) => {
	const chunked = [];
	for (let i = 0; i < arr.length; i += size) {
		chunked.push(arr.slice(i, i + size));
	}
	return chunked;
};

export default function SettingsScreen() {
	const flatListRef = useRef<FlatList>(null);
	const [currentIndex, setCurrentIndex] = useState(0);
	const rows = chunkArray(categories, 8);
	const totalSlides = rows.length;

	useEffect(() => {
		const interval = setInterval(() => {
			const nextIndex = currentIndex + 1;

			if (nextIndex < totalSlides) {
				flatListRef.current?.scrollToIndex({
					index: nextIndex,
					animated: true,
				});
				setCurrentIndex(nextIndex);
			} else {
				// Reset về slide đầu sau khi đến cuối
				flatListRef.current?.scrollToIndex({ index: 0, animated: false });
				setCurrentIndex(0);
			}
		}, 5000);

		return () => clearInterval(interval);
	}, [currentIndex, totalSlides]);

	const renderSlide = ({ item }: ListRenderItemInfo<Category[]>) => {
		return (
			<View style={styles.slide}>
				{[0, 1].map((rowIndex) => (
					<View style={styles.row} key={rowIndex}>
						{item.slice(rowIndex * 4, rowIndex * 4 + 4).map((cat, index) => (
							<TouchableOpacity key={index} style={styles.item}>
								<Image source={cat.image} style={styles.image} />
								<Text style={styles.label} numberOfLines={2}>
									{cat.name}
								</Text>
							</TouchableOpacity>
						))}
					</View>
				))}
			</View>
		);
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
					contentContainerStyle={{ paddingBottom: 35 }}
				>
					{/* Header */}
					<Header />

					<FlatList
						ref={flatListRef}
						data={rows}
						renderItem={renderSlide}
						keyExtractor={(_, index) => index.toString()}
						horizontal
						pagingEnabled
						showsHorizontalScrollIndicator={false}
					/>
				</ScrollView>
			</LinearGradient>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: { flex: 1 },
	gradient: { flex: 1 },
	content: { flex: 1, paddingVertical: 40, paddingHorizontal: 10 },
	slide: {
		width: width,
		paddingVertical: 10,
	},
	row: {
		flexDirection: "row",
		marginVertical: 10,
		gap: 20,
	},
	item: {
		alignItems: "center",
		width: width / 4 - 20,
	},
	image: {
		width: 56,
		height: 56,
		borderRadius: 56,
		marginBottom: 10,
	},
	label: {
		fontSize: 11,
		textAlign: "center",
		color: "white",
	},
});
