import HeaderOther from "@/components/HeaderOther";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

function Section({
	title,
	children,
}: {
	title: string;
	children: React.ReactNode;
}) {
	return (
		<View style={{ marginBottom: 20 }}>
			<Text style={styles.sectionTitle}>{title}</Text>
			<Text style={styles.paragraph}>{children}</Text>
		</View>
	);
}

function Bullet({ children }: { children: React.ReactNode }) {
	return <Text style={styles.bullet}>• {children}</Text>;
}

export default function FAQScreen() {
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
					contentContainerStyle={{ paddingBottom: 60 }}
				>
					{/* Header */}
					<HeaderOther />

					{/* Main */}
					<View style={{ marginTop: 20 }}>
						<Section title="1. GO LIVE là gì?">
							GO LIVE là ứng dụng giúp bạn đi bộ mỗi ngày để tích lũy điểm
							thưởng. Số bước chân của bạn được ghi nhận và quy đổi thành điểm
							(S Points), từ đó có thể đổi quà tặng, voucher, mã giảm giá, hoặc
							tham gia các thử thách và sự kiện có thưởng.
						</Section>

						<Section title="2. Tôi cần gì để sử dụng ứng dụng GO LIVE?">
							Bạn chỉ cần:
							<Bullet>Smartphone có kết nối internet</Bullet>
							<Bullet>
								Tài khoản GO LIVE (đăng ký bằng số điện thoại hoặc email)
							</Bullet>
							<Bullet>
								Cho phép ứng dụng truy cập dữ liệu chuyển động/sức khỏe để đếm
								bước chân (Google Fit, Apple Health)
							</Bullet>
						</Section>

						<Section title="3. GO LIVE đếm bước chân như thế nào?">
							GO LIVE sẽ đồng bộ dữ liệu bước chân từ:
							<Bullet>Google Fit (với Android)</Bullet>
							<Bullet>Apple Health (với iOS)</Bullet>
							Ứng dụng không yêu cầu đồng hồ thông minh – chỉ cần điện thoại của
							bạn mang theo khi di chuyển.
						</Section>

						<Section title="4. Tôi sẽ được gì khi đi bộ?">
							Mỗi bước chân bạn đi được sẽ:
							<Bullet>Được chuyển đổi thành S Points</Bullet>
							<Bullet>
								Dùng để đổi quà như mã giảm giá, phiếu mua hàng, phần quà đặc
								biệt, vé quay thưởng
							</Bullet>
							<Bullet>
								Có thể giúp bạn leo bảng xếp hạng, nhận huy hiệu thành tích và
								thưởng thêm
							</Bullet>
						</Section>

						<Section title="5. Có giới hạn số bước tích điểm mỗi ngày không?">
							Có. Mỗi ngày bạn có thể tích lũy điểm tối đa từ X bước (ví dụ:
							10.000 bước). Các bước vượt quá giới hạn vẫn được ghi nhận, nhưng
							không quy đổi thêm điểm trong ngày hôm đó.
						</Section>

						<Section title="6. Tôi có thể đổi điểm lấy quà ở đâu?">
							Bạn có thể:
							<Bullet>Vào mục “Đổi quà” trong ứng dụng</Bullet>
							<Bullet>
								Chọn các phần thưởng bạn thích: voucher ăn uống, mua sắm, nạp
								điện thoại, quà tặng sự kiện…
							</Bullet>
						</Section>

						<Section title="7. Làm sao để tham gia thử thách?">
							GO LIVE thường xuyên tổ chức các thử thách cá nhân hoặc theo nhóm
							(ví dụ: đi 50.000 bước trong 5 ngày). Bạn chỉ cần:
							<Bullet>Truy cập tab “Thử thách”</Bullet>
							<Bullet>Chọn thử thách muốn tham gia và nhấn Tham gia</Bullet>
						</Section>

						<Section title="8. GO LIVE có miễn phí không?">
							Ứng dụng hoàn toàn miễn phí sử dụng. Một số tính năng nâng cao
							hoặc chương trình quà tặng giới hạn có thể yêu cầu bạn hoàn thành
							nhiệm vụ hoặc giới thiệu bạn bè để mở khoá.
						</Section>

						<Section title="9. Tôi gặp lỗi không đếm được bước, phải làm sao?">
							Hãy kiểm tra:
							<Bullet>
								Đã cấp quyền truy cập dữ liệu sức khoẻ/chuyển động chưa?
							</Bullet>
							<Bullet>
								Google Fit hoặc Apple Health có đang hoạt động không?
							</Bullet>
							<Bullet>
								Ứng dụng GO LIVE đã được cập nhật bản mới nhất chưa?
							</Bullet>
							Nếu vẫn gặp sự cố, liên hệ Hỗ trợ người dùng trong ứng dụng hoặc
							gửi email đến info@golive.com.vn.
						</Section>

						<Section title="10. Làm sao để mời bạn bè và nhận điểm thưởng?">
							Vào mục “Mời bạn bè”, bạn sẽ có:
							<Bullet>Link hoặc mã giới thiệu</Bullet>
							<Bullet>
								Khi bạn bè đăng ký và bắt đầu đi bộ, cả hai sẽ nhận điểm thưởng
								hoặc phần quà từ GO LIVE.
							</Bullet>
						</Section>
					</View>
				</ScrollView>
			</LinearGradient>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: { flex: 1 },
	gradient: { flex: 1 },
	content: { flex: 1, paddingTop: 50, paddingInline: 10 },
	sectionTitle: {
		fontSize: 16,
		fontWeight: "bold",
		marginBottom: 8,
		color: "white",
	},
	paragraph: {
		fontSize: 14,
		lineHeight: 22,
		color: "white",
	},
	bullet: {
		fontSize: 14,
		lineHeight: 22,
		marginLeft: 10,
		color: "white",
	},
});
