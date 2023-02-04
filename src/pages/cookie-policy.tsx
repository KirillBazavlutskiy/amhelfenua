import React from 'react';
import MainContainer from "@/components/MainContainer";
import CookiePolicyBlock from "@/components/Copyright/CookiePolicyBlock";

const CookiePolicy = () => {
    return (
        <MainContainer keywords="cookie policy" title="Політика cookie" transparentHeader={false}>
            <CookiePolicyBlock />
        </MainContainer>
    );
};

export default CookiePolicy;