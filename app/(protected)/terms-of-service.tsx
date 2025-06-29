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

const Section = ({
	title,
	children,
}: {
	title: string;
	children: React.ReactNode;
}) => (
	<View style={styles.section}>
		<Text style={styles.sectionTitle}>{title}</Text>
		<View style={styles.bulletList}>{children}</View>
	</View>
);

const Bullet = ({ children }: { children: React.ReactNode }) => (
	<Text style={styles.bullet}>
		• <Text>{children}</Text>
	</Text>
);

const Bold = ({ children }: { children: React.ReactNode }) => (
	<Text style={styles.bold}>{children}</Text>
);

export default function TermsOfService() {
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
							Khi bạn cài đặt, đăng ký tài khoản và sử dụng ứng dụng GO LIVE,
							đồng nghĩa với việc bạn đã đồng ý và tuân thủ các điều khoản dưới
							đây.
						</Text>

						<Section title="1. Đăng ký và sử dụng tài khoản">
							<Bullet>
								Người dùng phải cung cấp{" "}
								<Bold>thông tin chính xác và đầy đủ</Bold> khi đăng ký (họ tên,
								số điện thoại, email, v.v.).
							</Bullet>
							<Bullet>
								Mỗi cá nhân chỉ nên sở hữu <Bold>01 tài khoản duy nhất</Bold>.
								Trường hợp phát hiện tạo nhiều tài khoản để trục lợi sẽ bị xử
								lý.
							</Bullet>
							<Bullet>
								Người dùng có trách nhiệm{" "}
								<Bold>bảo mật thông tin đăng nhập</Bold> và không chia sẻ tài
								khoản cho người khác.
							</Bullet>
						</Section>

						<Section title="2. Quy định về sử dụng dịch vụ">
							<Bullet>
								GO LIVE cung cấp tính năng{" "}
								<Bold>ghi nhận bước chân, tích lũy điểm (S Points)</Bold>, tham
								gia <Bold>thử thách</Bold> và <Bold>đổi quà</Bold>.
							</Bullet>
							<Bullet>
								Việc gian lận (dùng app đếm ảo, giả lập bước chân, hack điểm,
								v.v.) sẽ bị xử lý bằng cách{" "}
								<Bold>cảnh cáo, khóa tính năng hoặc xoá tài khoản</Bold>.
							</Bullet>
							<Bullet>
								Một số tính năng chỉ áp dụng cho{" "}
								<Bold>khu vực, độ tuổi hoặc nhóm người dùng cụ thể</Bold>.
							</Bullet>
						</Section>

						<Section title="3. S Points và phần thưởng">
							<Bullet>
								S Points là điểm thưởng nội bộ, không có giá trị quy đổi thành
								tiền mặt.
							</Bullet>
							<Bullet>
								Quà tặng, voucher và phần thưởng chỉ có giá trị trong thời gian
								quy định.
							</Bullet>
							<Bullet>
								Mỗi tài khoản có thể bị giới hạn số lượng phần quà nhận được
								theo ngày/tháng để đảm bảo công bằng.
							</Bullet>
						</Section>

						<Section title="4. Hủy tài khoản">
							<Bullet>
								Bạn có thể yêu cầu <Bold>xóa tài khoản</Bold> bất kỳ lúc nào
								thông qua mục <Bold>“Cài đặt → Xóa tài khoản”</Bold>.
							</Bullet>
							<Bullet>
								Khi xoá tài khoản, tất cả dữ liệu bao gồm điểm thưởng, quà đã
								nhận, lịch sử thử thách… sẽ bị xoá vĩnh viễn và không thể khôi
								phục.
							</Bullet>
						</Section>

						<Section title="5. Trách nhiệm người dùng">
							<Bullet>
								Không sử dụng ứng dụng với mục đích{" "}
								<Bold>gian lận, phá hoại, phát tán mã độc</Bold> hoặc gây ảnh
								hưởng đến người dùng khác.
							</Bullet>
							<Bullet>
								Không đăng tải nội dung{" "}
								<Bold>vi phạm pháp luật, thuần phong mỹ tục</Bold> hoặc mang
								tính <Bold>quảng cáo trái phép</Bold>.
							</Bullet>
						</Section>

						<Section title="6. Giới hạn trách nhiệm">
							<Bullet>
								GO LIVE không chịu trách nhiệm nếu hệ thống bị gián đoạn do{" "}
								<Bold>lỗi kỹ thuật, sự cố đường truyền, hoặc bên thứ ba</Bold>.
							</Bullet>
							<Bullet>
								GO LIVE có quyền tạm ngưng hoặc kết thúc dịch vụ{" "}
								<Bold>không cần báo trước</Bold>, nhưng sẽ cố gắng thông báo
								sớm.
							</Bullet>
						</Section>

						<Section title="7. Thay đổi điều khoản">
							<Bullet>
								GO LIVE có thể cập nhật Điều khoản sử dụng để phù hợp với chính
								sách và quy định pháp luật.
							</Bullet>
							<Bullet>
								Người dùng nên thường xuyên kiểm tra mục “Điều khoản & Chính
								sách” trong ứng dụng để cập nhật mới nhất.
							</Bullet>
						</Section>

						<Section title="8. Liên hệ & Hỗ trợ">
							<Bullet>
								Vui lòng liên hệ:{" "}
								<Text
									style={styles.link}
									onPress={() => Linking.openURL("mailto:info@golive.com.vn")}
								>
									info@golive.com.vn
								</Text>
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
	paragraph: {
		fontSize: 16,
		lineHeight: 22,
		marginBottom: 16,
		color: "white",
	},
	section: {
		marginBottom: 24,
	},
	sectionTitle: {
		color: "white",
		fontSize: 18,
		fontWeight: "600",
		marginBottom: 8,
	},
	bulletList: {
		paddingLeft: 12,
	},
	bullet: {
		fontSize: 16,
		color: "white",
		lineHeight: 22,
		marginBottom: 8,
	},
	bold: {
		fontWeight: "bold",
	},
	link: {
		color: "white",
		textDecorationLine: "underline",
	},
});
