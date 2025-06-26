import { AppContext } from "@/context/app.context";
import { eventEmitter } from "@/utils/eventEmitter";
import { useContext, useEffect } from "react";

export default function AuthListener() {
	const { reset } = useContext(AppContext);

	useEffect(() => {
		eventEmitter.on("clearLS", reset);
		return () => eventEmitter.off("clearLS", reset);
	}, [reset]);

	return null;
}
