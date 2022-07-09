import { View, Text } from "react-native";
import React from "react";
import CustomText from "../../../lib/CustomText";
import { BottomSheetView } from "@gorhom/bottom-sheet";
import { GLOBAL_STYLES } from "../../../../@types/GlobalStyles";
import PopupHeader from "../../../lib/PopupHeader";
import { useSignupStore } from "../../../../state/auth/Signup.store";
import { observer } from "mobx-react";
import FlowTemplate from "../../../lib/FlowTemplate";
import CustomTextInput from "../../../lib/CustomTextInput";
import LargeButton from "../../../lib/LargeButton";

const PasswordSignup = () => {
    const signupStore = useSignupStore();
    return (
        <BottomSheetView style={GLOBAL_STYLES.bottomSheetViewStyle}>
            <PopupHeader
                backArrow
                backArrowOnPress={() =>
                    signupStore.setCurrentStep(signupStore.currentStep - 1)
                }
                title="password"
                subtitle="signup"
                progressIndicator
                currentStep={3}
                totalSteps={6}
            />
            <FlowTemplate
                circleEmoji="🔐"
                title="password"
                desc="make sure it's difficult for others to guess."
                // marginBottom={keyboardShow ? "200px" : null}
            >
                <CustomTextInput
                    placeholder="my email"
                    onChangeText={text => signupStore.setPassword(text)}
                    marginBottom={32}
                    defaultValue={signupStore.password}
                    keyboardType="email-address"
                    // isValid={allClear}
                    // isErr={!allClear && !firstTime}
                    // errMsg={errMsg}
                    returnKeyType="done"
                />
                <LargeButton
                    title="continue"
                    onPress={() => {
                        // setFirstTime(false);
                        // if (allClear) {
                        //     signupStore.setCurrentStep(2);
                        // }
                        null;
                    }}
                    footer
                    // disabled={!allClear && !firstTime}
                    footerButtonTitle="cancel"
                    footerButtonOnPress={() => signupStore.cancel()}
                />
            </FlowTemplate>
        </BottomSheetView>
    );
};

export default observer(PasswordSignup);
