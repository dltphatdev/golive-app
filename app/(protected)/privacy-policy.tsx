import HeaderOther from "@/components/HeaderOther";
import { LinearGradient } from "expo-linear-gradient";
import {
	Linking,
	SafeAreaView,
	ScrollView,
	StyleSheet,
	Text,
	View,
} from "react-native";

function SectionTitle({ children }: { children: React.ReactNode }) {
	return <Text style={styles.sectionTitle}>{children}</Text>;
}

function Bullet({ children }: { children: React.ReactNode }) {
	return <Text style={styles.bullet}>• {children}</Text>;
}

function Divider() {
	return <View style={styles.divider} />;
}

export default function PrivacyPolicyScreen() {
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
						<Text style={styles.paragraph}>
							GO LIVE cam kết bảo vệ tuyệt đối quyền riêng tư và dữ liệu cá nhân
							của người dùng. Chính sách này giải thích cách chúng tôi thu thập,
							sử dụng và bảo vệ thông tin cá nhân của bạn.
						</Text>

						<Divider />

						<SectionTitle>1. Thông tin chúng tôi thu thập</SectionTitle>
						<Text style={styles.paragraph}>
							Khi bạn sử dụng GO LIVE, chúng tôi có thể thu thập các loại thông
							tin sau:
						</Text>
						<Bullet>
							Thông tin cá nhân: Họ tên, email, số điện thoại, ảnh đại diện (nếu
							bạn cung cấp)
						</Bullet>
						<Bullet>
							Dữ liệu hoạt động: Bước chân, số km đã đi, lượng calo tiêu thụ
							(đồng bộ từ Google Fit hoặc Apple Health)
						</Bullet>
						<Bullet>
							Thông tin thiết bị: Loại thiết bị, hệ điều hành, ngôn ngữ, IP truy
							cập
						</Bullet>
						<Bullet>
							Thông tin vị trí (tuỳ chọn): Nếu bạn cho phép, chúng tôi có thể
							thu thập vị trí để hỗ trợ tính năng bản đồ, sự kiện địa phương,
							thử thách khu vực
						</Bullet>

						<Divider />

						<SectionTitle>2. Cách chúng tôi sử dụng thông tin</SectionTitle>
						<Bullet>Tính toán và cập nhật số điểm tích lũy (GO Points)</Bullet>
						<Bullet>Đổi thưởng, gửi mã quà tặng</Bullet>
						<Bullet>Gợi ý thử thách phù hợp</Bullet>
						<Bullet>Phát hiện gian lận hoặc hành vi bất thường</Bullet>
						<Bullet>
							Cải thiện trải nghiệm người dùng và phát triển tính năng mới
						</Bullet>
						<Bullet>
							Gửi thông báo, ưu đãi, hoặc bản tin theo nhu cầu cá nhân
						</Bullet>

						<Divider />

						<SectionTitle>3. Chia sẻ thông tin với bên thứ ba</SectionTitle>
						<Text style={styles.paragraph}>
							Chúng tôi{" "}
							<Text style={styles.bold}>
								không bán, trao đổi hay chia sẻ thông tin cá nhân
							</Text>{" "}
							trừ các trường hợp:
						</Text>
						<Bullet>Có sự đồng ý của bạn</Bullet>
						<Bullet>
							Đối tác vận hành dịch vụ đổi thưởng hoặc vận chuyển quà tặng
						</Bullet>
						<Bullet>
							Yêu cầu bởi cơ quan pháp luật, theo đúng quy định pháp luật Việt
							Nam
						</Bullet>

						<Divider />

						<SectionTitle>4. Bảo mật dữ liệu người dùng</SectionTitle>
						<Bullet>Mã hóa thông tin (SSL)</Bullet>
						<Bullet>Xác thực OTP khi đăng nhập</Bullet>
						<Bullet>Giới hạn quyền truy cập hệ thống nội bộ</Bullet>
						<Bullet>Theo dõi và ghi nhận các truy cập bất thường</Bullet>

						<Divider />

						<SectionTitle>5. Quyền của người dùng</SectionTitle>
						<Bullet>Xem, chỉnh sửa, cập nhật thông tin cá nhân</Bullet>
						<Bullet>
							Thu hồi quyền truy cập dữ liệu sức khỏe, vị trí (trong cài đặt ứng
							dụng hoặc thiết bị)
						</Bullet>
						<Bullet>Yêu cầu xoá tài khoản và toàn bộ dữ liệu liên quan</Bullet>
						<Bullet>
							Không nhận thông báo marketing (có thể tắt trong mục “Cài đặt”)
						</Bullet>

						<Divider />

						<SectionTitle>6. Lưu trữ và thời gian giữ thông tin</SectionTitle>
						<Text style={styles.paragraph}>
							Thông tin của bạn sẽ được lưu trữ{" "}
							<Text style={styles.bold}>
								trong suốt thời gian bạn sử dụng ứng dụng
							</Text>
							. Nếu bạn xoá tài khoản, chúng tôi sẽ xoá hoặc ẩn toàn bộ thông
							tin trong vòng <Text style={styles.bold}>30 ngày</Text>.
						</Text>

						<Divider />

						<SectionTitle>7. Thay đổi chính sách</SectionTitle>
						<Text style={styles.paragraph}>
							Chính sách bảo mật có thể được cập nhật để phù hợp với quy định
							pháp luật hoặc cải tiến sản phẩm. Mọi thay đổi sẽ được thông báo
							rõ ràng trong ứng dụng hoặc qua email.
						</Text>

						<Divider />

						<SectionTitle>8. Liên hệ</SectionTitle>
						<Text style={styles.paragraph}>
							Nếu bạn có câu hỏi về chính sách bảo mật, vui lòng liên hệ:
						</Text>
						<Text
							style={styles.link}
							onPress={() => Linking.openURL("mailto:info@golive.com.vn")}
						>
							📧 info@golive.com.vn
						</Text>
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
	paragraph: {
		fontSize: 14,
		lineHeight: 22,
		marginBottom: 8,
		color: "white",
	},
	sectionTitle: {
		fontSize: 16,
		fontWeight: "bold",
		marginTop: 16,
		marginBottom: 8,
		color: "white",
	},
	bullet: {
		fontSize: 14,
		lineHeight: 22,
		marginLeft: 8,
		marginBottom: 6,
		color: "white",
	},
	bold: {
		fontWeight: "bold",
	},
	link: {
		color: "white",
		marginTop: 4,
		fontSize: 14,
	},
	divider: {
		borderBottomColor: "#ccc",
		borderBottomWidth: 1,
		marginVertical: 12,
	},
});
