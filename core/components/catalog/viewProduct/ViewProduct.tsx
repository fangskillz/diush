import React from "react";
import { BottomSheetView } from "@gorhom/bottom-sheet";
import { GLOBAL_STYLES } from "../../../@types/GlobalStyles";
import FlowTemplate from "../../lib/FlowTemplate";
import PopupHeader from "../../lib/PopupHeader";
import { observer } from "mobx-react";
import { useSignupStore } from "../../../state/auth/Signup.store";
import { CatalogStatus, SignupMethod } from "../../../@types/GlobalTypes";
import SignupOptionButton from "../../auth/SignupOptionbutton/SignupOptionButton";
import { View } from "react-native";
import { useCreateProductStore } from "../../../state/auth/CreateProduct.store";
import CustomTextInput from "../../lib/CustomTextInput";
import LargeButton from "../../lib/LargeButton";
import { useUtilStore } from "../../../state/Util.store";
import { useCatalogStore } from "../../../state/auth/Catalog.store";
import ScrollWrapper from "../../auth/ScrollWrapper/ScrollWrapper";
import CustomText from "../../lib/CustomText";
import { Image } from "react-native";
import ImageOverlay from "./ImageOverlay";

const ViewProduct = () => {
    const catalogStore = useCatalogStore();
    const createProductStore = useCreateProductStore();
    const utilStore = useUtilStore();
    const [firstTime, setFirstTime] = React.useState<boolean>(true);
    const [allClear, setAllClear] = React.useState(false);
    const [errMsg, setErrMsg] = React.useState<string>("");

    React.useEffect(() => {
        //TODO: Come back later (two-letter domain extensions do not work, neither does .ed.cr,)
        // setIsReady(validateEmail(signupStore.email));

        if (createProductStore.productName === "") {
            setAllClear(false);
            setErrMsg("oop! your product needs a name.");
        } else {
            setAllClear(true);
        }

        console.log("the name: " + createProductStore.productName);
        console.log(allClear);
    });

    return (
        <BottomSheetView style={GLOBAL_STYLES.viewProductSheetViewStyle}>
            <Image
                style={{
                    height: 471,
                    width: "100%",
                    resizeMode: "cover",
                }}
                source={{
                    uri: catalogStore.activeProduct.imageURL,
                }}
            />
            <ImageOverlay style={{ position: "absolute", top: 0 }} />
            <CustomText accent>{catalogStore.activeProduct.title}</CustomText>
        </BottomSheetView>
    );
};

export default observer(ViewProduct);
