import userApi from "@/apis/user.api";
import Input from "@/components/Input";
import httpStatusCode from "@/constants/httpStatusCode";
import { resetPasswordSchema } from "@/utils/validation";
import { Ionicons } from "@expo/vector-icons";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { Controller, Resolver, useForm } from "react-hook-form";
import {
	ActivityIndicator,
	Alert,
	Keyboard,
	KeyboardAvoidingView,
	Platform,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	TouchableWithoutFeedback,
	View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import * as yup from "yup";

const formData = resetPasswordSchema;
type FormData = yup.InferType<typeof formData>;

export default function ResetPasswordScreen() {
	const router = useRouter();
	const insets = useSafeAreaInsets();
	const {
		control,
		handleSubmit,
		setError,
		formState: { errors },
	} = useForm<FormData>({
		defaultValues: {
			forgot_password_code: "",
			password: "",
			confirm_password: "",
		},
		resolver: yupResolver(formData) as Resolver<FormData>,
	});

	const resetPasswordMutation = useMutation({
		mutationFn: userApi.resetPassword,
	});

	const handleSubmitForm = handleSubmit(
		async (data: Pick<FormData, "forgot_password_code" | "password">) => {
			try {
				const res = await resetPasswordMutation.mutateAsync(data);
				Alert.alert(
					"Thông báo làm mới mật khẩu",
					res.data.message,
					[
						{
							text: "OK",
							onPress: () => router.push("/(auth)/login"),
						},
					],
					{ cancelable: false }
				);
			} catch (error: any) {
				if (error.status === httpStatusCode.UnprocessableEntity) {
					const formError = error.response?.data?.errors;
					if (formError) {
						Object.keys(formError).forEach((key) => {
							setError(key as keyof FormData, {
								message: formError[key as keyof FormData]["msg"],
								type: "Server",
							});
						});
					}
				}
			}
		}
	);

	return (
		<KeyboardAvoidingView
			style={{ flex: 1 }}
			behavior={Platform.OS === "ios" ? "padding" : undefined}
		>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
				<ScrollView
					contentContainerStyle={{
						flexGrow: 1,
					}}
					keyboardShouldPersistTaps="handled"
				>
					<View
						style={[styles.container, { paddingBottom: insets.bottom + 24 }]}
					>
						<View style={{ backgroundColor: "#246BFD" }}>
							<TouchableOpacity
								onPress={() => router.push("/login")}
								style={styles.backButton}
							>
								<Ionicons name="arrow-back" size={24} color="white" />
							</TouchableOpacity>
							<Image
								source={require("@/assets/images/bg-auth.png")}
								style={{ height: 240, objectFit: "contain" }}
							/>
						</View>

						{/* Nội dung chính */}
						<View style={styles.formContainer}>
							<Text style={styles.title}>Làm mới mật khẩu Golive 👋</Text>
							<Text style={styles.subtitle}>
								Hãy cùng nâng cao sức khoẻ với Go Live App
							</Text>

							{/* Code */}
							<Controller
								control={control}
								name="forgot_password_code"
								render={({ field: { onChange, value } }) => (
									<Input
										labelText="Mã xác nhận làm mới mật khẩu"
										icon="code"
										placeholder="Nhập mã xác nhận làm mới mật khẩu"
										onChangeText={onChange}
										value={value}
										keyboardType="numeric"
										autoCapitalize="none"
										errorMessage={errors?.forgot_password_code?.message}
									/>
								)}
							/>

							{/* Mật khẩu */}
							<Controller
								control={control}
								name="password"
								render={({ field: { onChange, value } }) => (
									<Input
										labelText="Mật khẩu"
										icon="lock-closed"
										placeholder="Nhập mật khẩu"
										onChangeText={onChange}
										value={value}
										autoCapitalize="none"
										isPassword
										errorMessage={errors?.password?.message}
									/>
								)}
							/>

							<Controller
								control={control}
								name="confirm_password"
								render={({ field: { onChange, value } }) => (
									<Input
										labelText="Xác nhận mật khẩu"
										icon="lock-closed"
										placeholder="Xác nhận mật khẩu"
										onChangeText={onChange}
										value={value}
										autoCapitalize="none"
										isPassword
										errorMessage={errors?.confirm_password?.message}
									/>
								)}
							/>

							<View>
								<TouchableOpacity
									style={[
										styles.loginButton,
										resetPasswordMutation.isPending && { opacity: 0.7 },
									]}
									onPress={handleSubmitForm}
									disabled={resetPasswordMutation.isPending}
								>
									{resetPasswordMutation.isPending ? (
										<ActivityIndicator color="#fff" />
									) : (
										<Text style={styles.loginButtonText}>Lưu</Text>
									)}
								</TouchableOpacity>
							</View>
						</View>
					</View>
				</ScrollView>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	backButton: {
		position: "absolute",
		top: 28,
		left: 14,
		zIndex: 10,
		padding: 8,
		borderRadius: 100,
	},
	banner: {
		height: 200,
		backgroundColor: "#246BFD",
		borderBottomLeftRadius: 20,
		borderBottomRightRadius: 20,
	},
	formContainer: {
		flex: 1,
		paddingHorizontal: 24,
		marginTop: -80,
		backgroundColor: "#fff",
		paddingTop: 40,
	},
	title: {
		fontSize: 26,
		fontWeight: "600",
		marginBottom: 6,
	},
	subtitle: {
		color: "#888",
		marginBottom: 20,
	},
	row: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: 20,
	},
	forgotText: {
		color: "#246BFD",
		fontWeight: "500",
	},
	signupRow: {
		flexDirection: "row",
	},
	normalText: {
		color: "#444",
	},
	signupText: {
		color: "#246BFD",
		fontWeight: "500",
	},
	loginButton: {
		backgroundColor: "#246BFD",
		borderRadius: 12,
		paddingVertical: 20,
		alignItems: "center",
	},
	loginButtonText: {
		color: "#fff",
		fontWeight: "600",
		fontSize: 16,
	},
});
