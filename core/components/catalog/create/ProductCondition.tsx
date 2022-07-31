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
import { MAX_WIDTH } from "../../../utils/constants";
import CustomText from "../../lib/CustomText";

const ProductCondition = () => {
    const catalogStore = useCatalogStore();
    const createProductStore = useCreateProductStore();
    const utilStore = useUtilStore();

    return (
        <BottomSheetView style={GLOBAL_STYLES.bottomSheetViewStyle}>
            <PopupHeader
                title="create listing"
                backArrow
                backArrowOnPress={() =>
                    createProductStore.setCurrentStep(
                        createProductStore.currentStep - 1
                    )
                }
                subtitle="my catalog"
                progressIndicator
                currentStep={4}
                totalSteps={7}
            />
            <ScrollWrapper>
                <FlowTemplate
                    circleEmoji="🎧"
                    title="item condition."
                    desc={
                        "whether it’s brand-new or\n used, we don’t discriminate."
                    }
                    marginBottom={utilStore.isKeyboardOpen ? "200px" : null}
                >
                    <View
                        style={{
                            display: "flex",
                            alignItems: "center",
                            flexDirection: "row",
                            backgroundColor: "rgba(255,255,255,0.05)",
                            height: 45,
                            width: "100%",
                            maxWidth: MAX_WIDTH,
                            // marginBottom: props.isErr
                            //     ? 7
                            //     : props.marginBottom || 0,
                            borderRadius: 12,
                            paddingHorizontal: 20,
                            marginBottom: 32,
                        }}
                    >
                        <CustomText secondary>status</CustomText>
                    </View>
                    <LargeButton
                        title="continue"
                        onPress={() => {
                            // setFirstTime(false);
                            // if (allClear) {
                            //     createProductStore.setCurrentStep(1);
                            // }
                            null;
                        }}
                        footer
                        // disabled={!allClear && !firstTime}
                        footerButtonTitle="cancel"
                        footerButtonOnPress={() =>
                            catalogStore.setStatus(CatalogStatus.ACTIVE_DASH)
                        }
                    />
                </FlowTemplate>
            </ScrollWrapper>
        </BottomSheetView>
    );
};

export default observer(ProductCondition);
