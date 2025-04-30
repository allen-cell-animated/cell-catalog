import { useEffect, useState } from "react";
import { useLocation } from "@reach/router";
import { PRODUCTION_HOST } from "../constants";

const useEnv = () => {
    const [env, setEnv] = useState<"dev" | "staging" | "production">("dev");
    const hostname = useLocation().hostname;
    console.log("hostname", hostname);
    useEffect(() => {
        if (hostname === PRODUCTION_HOST) {
            setEnv("production");
        } else if (hostname === "localhost") {
            setEnv("dev");
        } else {
            // our PR previews and main will both be set
            // to the staging environment
            setEnv("staging");
        }
    }, []);
    return env;
};

export default useEnv;
