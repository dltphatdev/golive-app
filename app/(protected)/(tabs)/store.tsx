import Header from "@/components/Header";
import { FontAwesome } from "@expo/vector-icons";
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

const products = [
	{
		id: 1,
		title: "Product name 1",
		star: 4,
		sold: 1000,
		view: 683,
		price: 8.95,
		unit: "$",
		type: "dexuat",
		image: require("@/assets/images/noimage.png"),
	},
	{
		id: 2,
		title: "Product name 2",
		star: 3.2,
		sold: 2000,
		view: 1083,
		price: 10.95,
		unit: "$",
		type: "dexuat",
		image: require("@/assets/images/noimage.png"),
	},
	{
		id: 3,
		title: "Product name 3",
		star: 5,
		sold: 2200,
		view: 83,
		price: 20.95,
		unit: "$",
		type: "dexuat",
		image: require("@/assets/images/noimage.png"),
	},
	{
		id: 4,
		title: "Product name 4",
		star: 2.8,
		sold: 1200,
		view: 1283,
		price: 5.95,
		unit: "$",
		type: "dexuat",
		image: require("@/assets/images/noimage.png"),
	},
	{
		id: 5,
		title: "Product name 5",
		star: 2.8,
		view: 203,
		price: 8.95,
		unit: "$",
		type: "banchay",
		image: require("@/assets/images/noimage.png"),
	},
	{
		id: 6,
		title: "Product name 6",
		star: 3.8,
		view: 103,
		price: 9.95,
		unit: "$",
		type: "banchay",
		image: require("@/assets/images/noimage.png"),
	},
	{
		id: 7,
		title: "Product name 7",
		star: 4.8,
		view: 83,
		price: 19.95,
		unit: "$",
		type: "hangmoive",
		image: require("@/assets/images/noimage.png"),
	},
	{
		id: 8,
		title: "Product name 8",
		star: 5,
		view: 1023,
		price: 29.95,
		unit: "$",
		type: "hangmoive",
		image: require("@/assets/images/noimage.png"),
	},
];

const tabs = [
	{
		id: 1,
		name: "Đề xuất",
		type: "dexuat",
	},
	{
		id: 2,
		name: "Bán chạy",
		type: "banchay",
	},
	{
		id: 3,
		name: "Hàng mới về",
		type: "hangmoive",
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

function displayRating(order: number, rating: number) {
	if (order <= rating) return 100;
	if (order > rating && order - rating < 1)
		return (rating - Math.floor(rating)) * 100;
	return 0;
}

export default function StoreScreen() {
	const flatListRef = useRef<FlatList>(null);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [tabActive, setTabActive] = useState("dexuat");
	const rows = chunkArray(categories, 8);
	const totalSlides = rows.length;
	const rating = 3.5;

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
					contentContainerStyle={{ paddingBottom: 125 }}
				>
					{/* Header */}
					<Header />

					<Text style={styles.title}>Danh mục</Text>

					<FlatList
						ref={flatListRef}
						data={rows}
						renderItem={renderSlide}
						keyExtractor={(_, index) => index.toString()}
						horizontal
						pagingEnabled
						showsHorizontalScrollIndicator={false}
					/>

					<View>
						<View style={styles.tabList}>
							{tabs.map((tab) => {
								const tabItemActive =
									tabActive === tab.type ? styles.tabItemActive : "";
								return (
									<TouchableOpacity
										key={tab.id}
										style={[styles.tabItem, tabItemActive]}
										onPress={() => setTabActive(tab.type)}
									>
										<Text style={styles.tabText}>{tab.name}</Text>
									</TouchableOpacity>
								);
							})}
						</View>

						<View style={styles.productList}>
							{products
								.filter((product) => product.type === tabActive)
								.map((product) => {
									return (
										<TouchableOpacity
											key={product.id}
											style={styles.productItem}
											onPress={() => {}}
										>
											<Image source={product.image} style={styles.productImg} />
											<View style={styles.productContent}>
												<Text style={styles.productName}>{product.title}</Text>
												<View style={{ flexDirection: "row" }}>
													{Array(5)
														.fill(0)
														.map((_, i) => {
															return (
																<View
																	key={i}
																	style={[
																		{
																			position: "relative",
																			flexDirection: "row",
																		},
																		{ width: 20 * 5, height: 20 },
																	]}
																>
																	{/* <View
																		style={[
																			styles.absoluteRow,
																			{
																				width: `100%`,
																			},
																		]}
																	>
																		<FontAwesome
																			key={`gray`}
																			name="star"
																			size={20}
																			color="rgba(255, 255, 255, 0.15)"
																		/>
																	</View> */}
																	<View
																		style={[
																			styles.absoluteRow,
																			{
																				width: `${displayRating(
																					i + 1,
																					rating
																				)}%`,
																			},
																		]}
																	>
																		<FontAwesome
																			key={`yellow`}
																			name="star"
																			size={20}
																			color="rgba(255, 255, 255, 0.85)"
																		/>
																	</View>
																</View>
															);
														})}
												</View>
											</View>
										</TouchableOpacity>
									);
								})}
						</View>
					</View>
				</ScrollView>
			</LinearGradient>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: { flex: 1 },
	gradient: { flex: 1 },
	title: {
		fontSize: 18,
		fontWeight: "bold",
		color: "rgba(255, 255, 255, 0.85)",
		marginTop: 20,
	},
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
	tabList: {
		flexDirection: "row",
		marginTop: 20,
		gap: 10,
		marginBottom: 16,
	},
	tabItem: {
		paddingInline: 10,
		paddingVertical: 8,
		borderRadius: 24,
		marginBottom: 10,
	},
	tabItemActive: {
		backgroundColor: "rgba(255, 255, 255, 0.2)",
		borderColor: "rgba(255, 255, 255, 0.8)",
		borderWidth: 2,
	},
	tabText: {
		color: "rgba(255, 255, 255, 0.85)",
	},
	productList: {
		flexDirection: "row",
		flexWrap: "wrap",
		flex: 1,
		justifyContent: "space-between",
	},
	productItem: {
		width: width / 2 - 20,
	},
	productImg: {
		width: "100%",
		height: 269,
		borderRadius: 12,
	},
	productName: {
		fontSize: 12,
		color: "rgba(255, 255, 255, 1)",
	},
	productPrice: {
		fontSize: 12,
		color: "rgba(255, 255, 255, 0.8)",
	},
	productContent: {
		padding: 8,
	},
	absoluteRow: {
		position: "absolute",
		top: 0,
		left: 0,
		height: "100%",
		flexDirection: "row",
		overflow: "hidden",
	},
});
