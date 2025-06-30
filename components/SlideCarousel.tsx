import React, { useCallback, useEffect, useRef, useState } from "react";
import {
	Animated,
	Dimensions,
	Image,
	Linking,
	NativeScrollEvent,
	NativeSyntheticEvent,
	Pressable,
	ScrollView,
	StyleSheet,
	TouchableOpacity,
	View,
} from "react-native";

const { width: screenWidth } = Dimensions.get("window");

interface SlideData {
	id: string;
	image: any;
	link: string;
}

const slideData: SlideData[] = [
	{
		id: "1",
		image: require("@/assets/images/b1.jpg"),
		link: "http://mbbank.com.vn/",
	},
	{
		id: "2",
		image: require("@/assets/images/b2.jpg"),
		link: "https://co-opmart.com.vn/",
	},
	{
		id: "3",
		image: require("@/assets/images/b3.jpg"),
		link: "https://abtower.vn/",
	},
];

// 👉 Tạo mảng slide có clone đầu/cuối
const loopSlides = [
	slideData[slideData.length - 1], // clone cuối lên đầu
	...slideData,
	slideData[0], // clone đầu xuống cuối
];

const SlideCarousel: React.FC = () => {
	const scrollX = useRef(new Animated.Value(0)).current;
	const scrollRef = useRef<ScrollView>(null);
	const [currentIndex, setCurrentIndex] = useState(1);

	const SLIDE_WIDTH = screenWidth * 0.72;
	const SIDE_PADDING = screenWidth * 0.14;

	// 👉 Scroll đến slide thật đầu tiên khi khởi tạo
	useEffect(() => {
		setTimeout(() => {
			scrollRef.current?.scrollTo({
				x: SLIDE_WIDTH,
				animated: true,
			});
		}, 10);
	}, [SLIDE_WIDTH]);

	const handleScrollEnd = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
		const offsetX = e.nativeEvent.contentOffset.x;
		let index = Math.round(offsetX / SLIDE_WIDTH);

		if (index === 0) {
			// clone cuối → reset về cuối thật
			setTimeout(() => {
				scrollRef.current?.scrollTo({
					x: slideData.length * SLIDE_WIDTH,
					animated: false,
				});
				setCurrentIndex(slideData.length);
			}, 32);
		} else if (index === loopSlides.length - 1) {
			// clone đầu → reset về đầu thật
			setTimeout(() => {
				scrollRef.current?.scrollTo({
					x: SLIDE_WIDTH,
					animated: false,
				});
				setCurrentIndex(1);
			}, 32);
		} else {
			setCurrentIndex(index);
		}
	};

	const scrollToIndex = useCallback(
		(index: number) => {
			scrollRef.current?.scrollTo({
				x: index * SLIDE_WIDTH,
				animated: true,
			});
		},
		[SLIDE_WIDTH]
	);

	// Auto-play
	useEffect(() => {
		const interval = setInterval(() => {
			let nextIndex = currentIndex + 1;
			scrollToIndex(nextIndex);
		}, 3000);
		return () => clearInterval(interval);
	}, [currentIndex, scrollToIndex]);

	const renderSlide = (item: SlideData, index: number) => {
		const inputRange = [
			(index - 1) * SLIDE_WIDTH,
			index * SLIDE_WIDTH,
			(index + 1) * SLIDE_WIDTH,
		];

		const scale = scrollX.interpolate({
			inputRange,
			outputRange: [0.92, 1, 0.92],
			extrapolate: "clamp",
		});

		return (
			<Pressable onPress={() => Linking.openURL(item.link)} key={index}>
				<Animated.View
					key={index}
					style={[
						styles.slide,
						{
							width: SLIDE_WIDTH,
							transform: [{ scale }],
						},
					]}
				>
					<Image source={item.image} style={styles.image} />
				</Animated.View>
			</Pressable>
		);
	};

	return (
		<>
			<Animated.ScrollView
				ref={scrollRef}
				horizontal
				snapToInterval={SLIDE_WIDTH}
				decelerationRate="fast"
				showsHorizontalScrollIndicator={false}
				scrollEventThrottle={16}
				bounces={false}
				contentContainerStyle={{ paddingHorizontal: SIDE_PADDING }}
				onScroll={Animated.event(
					[{ nativeEvent: { contentOffset: { x: scrollX } } }],
					{ useNativeDriver: true }
				)}
				onMomentumScrollEnd={handleScrollEnd}
			>
				{loopSlides.map(renderSlide)}
			</Animated.ScrollView>

			<View style={styles.dotsContainer}>
				{slideData.map((_, index) => (
					<TouchableOpacity
						key={index}
						style={[
							styles.dot,
							currentIndex === index + 1
								? styles.activeDot
								: styles.inactiveDot,
						]}
						onPress={() => scrollToIndex(index + 1)}
					/>
				))}
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	slide: {
		borderRadius: 8,
		overflow: "hidden",
	},
	image: {
		width: "100%",
		height: 130,
	},
	dotsContainer: {
		flexDirection: "row",
		justifyContent: "center",
		marginTop: 12,
	},
	dot: {
		width: 12,
		height: 4,
		borderRadius: 4,
		marginHorizontal: 4,
	},
	activeDot: {
		width: 24,
		backgroundColor: "rgba(255, 255, 255, 0.85)",
	},
	inactiveDot: {
		backgroundColor: "rgba(255, 255, 255, 0.45)",
	},
});

export default SlideCarousel;
