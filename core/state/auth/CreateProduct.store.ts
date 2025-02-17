import { makeAutoObservable } from "mobx";
import React from "react";
import { ProductCondition } from "../../@types/GlobalTypes";

/**
 * A store to handle anything related to creating a product.
 */
export default class CreateProductStore {
    constructor() {
        makeAutoObservable(this);
    }

    currentStep: number = 0;

    setCurrentStep(newStep: number) {
        this.currentStep = newStep;
    }

    productId: string = "";

    setProductId(newId: string) {
        this.productId = newId;
    }

    productName: string = "";

    setProductName(newName: string) {
        this.productName = newName;
    }

    askingPrice: number = 0;

    setAskingPrice(newPrice: number) {
        this.askingPrice = newPrice;
    }

    blurb: string = "";

    setBlurb(newBlurb: string) {
        this.blurb = newBlurb;
    }

    condition: ProductCondition = null;

    setCondition(newCondition: ProductCondition) {
        this.condition = newCondition;
    }

    productImageURL: string = "";

    setProductImageURL(newURL: string) {
        this.productImageURL = newURL;
    }

    additionalInfo: string = null;

    setAdditionalInfo(newInfo: string) {
        this.additionalInfo = newInfo;
    }

    cancel() {
        this.currentStep = 0;
        this.productName = "";
        this.askingPrice = 0;
        this.blurb = "";
        this.condition = null;
        this.productImageURL = "";
        this.additionalInfo = null;
    }
}

const StoreContext = React.createContext<CreateProductStore>(
    new CreateProductStore()
);

/**
 * Hook to use store.
 *
 * @see Reference:
 *      https://dev.to/codingislove/how-to-setup-mobx-with-react-context-49jh
 */
export const useCreateProductStore = (): CreateProductStore =>
    React.useContext(StoreContext);
