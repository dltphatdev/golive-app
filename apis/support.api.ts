import { CreateSupportReqBody } from "@/types/support";
import http from "@/utils/http";

const supportApi = {
	create(body: CreateSupportReqBody) {
		return http.instance.post<{ message: string }>("/support", body);
	},
};

export default supportApi;
