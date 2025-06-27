import Constants from "expo-constants";

export const isRunningInBuild = Constants.appOwnership !== "expo";

const CONFIG = {
	SERVER_URL: "https://api-app.golive.com.vn/",
	API_ENPOINT: "https://api-app.golive.com.vn/api/",
	ENPOINT_TIMEOUT: 18000,
} as const;

export default CONFIG;
