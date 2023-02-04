import React from 'react';
import MainContainer from "@/components/MainContainer";
import PrivacyPolicyBlock from "@/components/Copyright/PrivacyPolicyBlock";

const PrivacyPolicy = () => {
    return (
        <MainContainer keywords={"privacy-policy"} title={"Політика конфіденційності"} transparentHeader={false}>
            <PrivacyPolicyBlock />
        </MainContainer>
    );
};

export default PrivacyPolicy;