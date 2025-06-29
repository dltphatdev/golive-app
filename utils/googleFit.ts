import { Alert } from "react-native";
import GoogleFit, { BucketUnit, Scopes } from "react-native-google-fit";
type ActivitySampleWithActivity = {
	start: string;
	end: string;
	activity: string;
	steps?: number;
	distance?: number;
};

const getStepCount = async (startDate: string, endDate: string) => {
	try {
		const res = await GoogleFit.getDailyStepCountSamples({
			startDate,
			endDate,
		});
		if (!res || !Array.isArray(res)) {
			console.warn("No step count data found.");
			return 0;
		}
		const source = res.find((r) =>
			r.source?.toLowerCase().includes("com.google.android.gms")
		);
		if (!source || !Array.isArray(source.steps)) {
			console.warn("No Google step source found.");
			return 0;
		}
		const total =
			source?.steps?.reduce((sum, s) => sum + (s.value ?? 0), 0) ?? 0;
		return total;
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
	} catch (error: any) {
		Alert.alert("Error getting step count by google fitness");
	}
};

const getDistance = async (startDate: string, endDate: string) => {
	const res = await GoogleFit.getDailyDistanceSamples({ startDate, endDate });
	return res?.[0]?.distance ?? 0;
};

const getCalories = async (startDate: string, endDate: string) => {
	const res = await GoogleFit.getDailyCalorieSamples({ startDate, endDate });
	return res?.reduce((sum, item) => sum + (item.calorie || 0), 0);
};

const getSleep = async ({
	startDate,
	endDate,
	inLocalTimeZone = true,
}: {
	startDate: string;
	endDate: string;
	inLocalTimeZone?: boolean;
}) => {
	const res = await GoogleFit.getSleepSamples(
		{ startDate, endDate },
		inLocalTimeZone
	);
	return res?.length > 0 ? res : null;
};

const getHeartRate = async (startDate: string, endDate: string) => {
	const res = await GoogleFit.getHeartRateSamples({ startDate, endDate });
	return res?.length > 0 ? res : null;
};

const getWeight = async (startDate: string, endDate: string) => {
	const res = await GoogleFit.getWeightSamples({ startDate, endDate });
	return res?.[0]?.value ?? null;
};

const getStartEndTime = async (startDate: string, endDate: string) => {
	const samples = (await GoogleFit.getActivitySamples({
		startDate,
		endDate,
		bucketUnit: BucketUnit.MINUTE, // có thể không bắt buộc
		bucketInterval: 1,
	})) as unknown as ActivitySampleWithActivity[];

	// Lọc session đi bộ, chạy bộ
	const walkingSessions = samples.filter((s) =>
		["walking", "on_foot", "running"].includes(s.activity)
	);

	if (walkingSessions.length === 0) return { startTime: null, endTime: null };

	const startTime = new Date(walkingSessions[0].start);
	const endTime = new Date(walkingSessions[walkingSessions.length - 1].end);

	return {
		startTime: startTime.toISOString(),
		endTime: endTime.toISOString(),
	};
};

export const getGoogleFitDataAndroid = async () => {
	try {
		await GoogleFit.authorize({
			scopes: [
				Scopes.FITNESS_ACTIVITY_READ,
				Scopes.FITNESS_LOCATION_READ,
				Scopes.FITNESS_BODY_READ,
				Scopes.FITNESS_NUTRITION_READ,
				Scopes.FITNESS_SLEEP_READ,
				Scopes.FITNESS_HEART_RATE_READ,
			],
		});

		await GoogleFit.checkIsAuthorized();

		if (!GoogleFit.isAuthorized) {
			Alert.alert("Google Fit not authorized.");
			return null;
		}

		const startDate = new Date(new Date().setHours(0, 0, 0, 0)).toISOString();
		const endDate = new Date().toISOString();

		const [
			steps,
			distance,
			calories,
			sleep,
			heartRate,
			weight,
			{ startTime, endTime },
		] = await Promise.all([
			getStepCount(startDate, endDate),
			getDistance(startDate, endDate),
			getCalories(startDate, endDate),
			getSleep({ startDate, endDate }),
			getHeartRate(startDate, endDate),
			getWeight(startDate, endDate),
			getStartEndTime(startDate, endDate),
		]);

		return {
			steps,
			distance,
			calories,
			sleep,
			heartRate,
			weight,
			startTime,
			endTime,
		};
	} catch (err: any) {
		Alert.alert("Google Fit Error", err || "Unknown error");
		return null;
	}
};
