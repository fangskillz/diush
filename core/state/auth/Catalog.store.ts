import { makeAutoObservable } from "mobx";
import React from "react";
import { CatalogStatus, IProduct } from "../../@types/GlobalTypes";

/**
 * A store to handle anything catalog-related.
 */
export default class CatalogStore {
    constructor() {
        makeAutoObservable(this);
    }

    status: CatalogStatus = CatalogStatus.ACTIVE_DASH;

    setStatus(newStatus: CatalogStatus) {
        this.status = newStatus;
    }

    activeProduct: IProduct = null;

    setActiveProduct(newProduct: IProduct) {
        this.activeProduct = newProduct;
    }

    setActiveProductImage(url: string) {
        this.activeProduct.imageURL = url;
    }

    setActiveProductTitle(text: string) {
        this.activeProduct.title = text;
    }
}

const StoreContext = React.createContext<CatalogStore>(new CatalogStore());

/**
 * Hook to use store.
 *
 * @see Reference:
 *      https://dev.to/codingislove/how-to-setup-mobx-with-react-context-49jh
 */
export const useCatalogStore = (): CatalogStore =>
    React.useContext(StoreContext);
