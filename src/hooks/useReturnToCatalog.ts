import { useCallback } from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";

type CatalogLocationState = {
    fromCellCatalog?: boolean;
};

export const useReturnToCatalog = (catalogPath: string = "/") => {
    const location = useLocation() as Location & {
        state?: CatalogLocationState;
    };

    const handleReturnClick = useCallback(() => {
        if (location.state?.fromCellCatalog) {
            navigate(-1);
        } else {
            navigate(catalogPath);
        }
    }, [location.state, catalogPath]);

    return handleReturnClick;
};
