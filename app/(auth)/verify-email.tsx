import userApi from "@/apis/user.api";
import Input from "@/components/Input";
import httpStatusCode from "@/constants/httpStatusCode";
import { verifyEmailSchema } from "@/utils/validation";
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

const formData = verifyEmailSchema;
type FormData = yup.InferType<typeof formData>;

export default function VerifyEmailScreen() {
	const router = useRouter();
	const insets = useSafeAreaInsets();
	const {
		control,
		handleSubmit,
		setError,
		formState: { errors },
	} = useForm<FormData>({
		defaultValues: {
			verify_code: "",
		},
		resolver: yupResolver(formData) as Resolver<FormData>,
	});

	const verifyMutation = useMutation({
		mutationFn: userApi.verifyEmailUser,
	});

	const handleSubmitForm = handleSubmit(async (data) => {
		try {
			const res = await verifyMutation.mutateAsync(data);
			Alert.alert(
				"Thông báo xác thực",
				res.data.message,
				[
					{
						text: "OK",
						onPress: () => router.push("/login"),
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
	});
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
								onPress={() => router.push("/onboarding")}
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
							<Text style={styles.title}>Xác thực tài khoản Golive 👋</Text>
							<Text style={styles.subtitle}>
								Hãy cùng nâng cao sức khoẻ với Go Live App
							</Text>

							{/* Code */}
							<Controller
								control={control}
								name="verify_code"
								render={({ field: { onChange, value } }) => (
									<Input
										labelText="Mã xác thực"
										icon="code"
										placeholder="Nhập mã xác thực"
										onChangeText={onChange}
										value={value}
										keyboardType="numeric"
										autoCapitalize="none"
										errorMessage={errors?.verify_code?.message}
									/>
								)}
							/>

							<View style={styles.signupContainer}>
								<TouchableOpacity
									style={[
										styles.loginButton,
										verifyMutation.isPending && { opacity: 0.7 },
									]}
									onPress={handleSubmitForm}
									disabled={verifyMutation.isPending}
								>
									{verifyMutation.isPending ? (
										<ActivityIndicator color="#fff" />
									) : (
										<Text style={styles.loginButtonText}>Xác thực</Text>
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
	signupContainer: {
		justifyContent: "center",
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
