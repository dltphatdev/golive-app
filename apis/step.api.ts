import { SuccessResponseApi } from "@/types/common";
import { GetStepLog, GetStepRes, UpdateStepReqBody } from "@/types/step";
import http from "@/utils/http";

const stepApi = {
	updateStep(body: UpdateStepReqBody) {
		return http.instance.put<SuccessResponseApi<{ totalSpoint: number }>>(
			"/step/update",
			body
		);
	},
	getStep() {
		return http.instance.get<SuccessResponseApi<GetStepRes>>("/step");
	},
	getStepLog() {
		return http.instance.get<SuccessResponseApi<GetStepLog>>("/step/history");
	},
};

export default stepApi;
