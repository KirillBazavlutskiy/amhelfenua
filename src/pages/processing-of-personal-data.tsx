import React from 'react';
import MainContainer from "@/components/MainContainer";
import ProcessingOfPersonalDataBlock from "@/components/Copyright/ProcessingOfPersonalDataBlock";

const ProcessingOfPersonalData = () => {
    return (
        <MainContainer keywords="processing of personal data" title="Обробка персональних даних" transparentHeader={false}>
            <ProcessingOfPersonalDataBlock />
        </MainContainer>
    );
};

export default ProcessingOfPersonalData;