import { useEffect } from "react";

const useDisableWheel = () => {
    useEffect(() => {
        document.addEventListener("wheel", function (event) {
            if (
                document.activeElement &&
                (document.activeElement as HTMLInputElement).type === "number"
            ) {
                (document.activeElement as HTMLInputElement).blur();
            }
        });
    }, []);
};

export default useDisableWheel;
