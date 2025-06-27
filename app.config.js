import withGoogleFit from "./plugins/with-google-fit";

export default {
	expo: {
		name: "golive",
		slug: "golive",
		version: "1.0.0",
		icon: "./assets/images/app-icon.png",
		plugins: [withGoogleFit, "expo-router"],
		android: {
			permissions: ["ACTIVITY_RECOGNITION"],
			package: "com.anonymous.golive",
		},
		extra: {
			eas: {
				projectId: "97ed3284-e0b8-4609-a1bf-2c58ec07e505",
			},
		},
	},
};
