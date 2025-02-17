import React from "react";
import { useAuthStore } from "../../../state/auth/Auth.store";
import { observer } from "mobx-react";
import { useSignupStore } from "../../../state/auth/Signup.store";
import SignupWelcome from "../../../components/auth/signup/SignupWelcome";
import EmailSignup from "../../../components/auth/signup/email/EmailSignup";
import PasswordSignup from "../../../components/auth/signup/email/PasswordSignup";
import PermissionsSignup from "../../../components/auth/signup/email/PermissionsSignup";
import DisplayNameSignup from "../../../components/auth/signup/email/DisplayNameSignup";
import FinalWelcomeSignup from "../../../components/auth/signup/email/FinalWelcomeSignup";
import { useCreateProductStore } from "../../../state/auth/CreateProduct.store";
import ProductName from "../../../components/catalog/create/ProductName";
import CustomText from "../../../components/lib/CustomText";
import AskingPrice from "../../../components/catalog/create/AskingPrice";
import ProductBlurb from "../../../components/catalog/create/ProductBlurb";
import ProductCondition from "../../../components/catalog/create/ProductCondition";
import ProductImage from "../../../components/catalog/create/ProductImage";
import ProductAdditionalInfo from "../../../components/catalog/create/ProductAdditionalInfo";
import ProductReview from "../../../components/catalog/create/ProductReview";

const CreateProductFlow = () => {
    const createProductStore = useCreateProductStore();

    const populateFlowContent = () => {
        switch (createProductStore.currentStep) {
            case 0:
                return <ProductName />;
            case 1:
                return <AskingPrice />;
            case 2:
                return <ProductBlurb />;
            case 3:
                return <ProductCondition />;
            case 4:
                return <ProductImage />;
            case 5:
                return <ProductAdditionalInfo />;
            case 6:
                return <ProductReview />;
        }
    };

    return <>{populateFlowContent()}</>;
};

export default observer(CreateProductFlow);
