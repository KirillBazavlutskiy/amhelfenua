import React from 'react';
import MainContainer from "@/components/MainContainer";
import OfertaBlock from "@/components/Copyright/OfertaBlock";

const Oferta = () => {
    return (
        <MainContainer keywords="oferta" title="ДОГОВІР - ОФЕРТА" transparentHeader={false}>
            <OfertaBlock />
        </MainContainer>
    );
};

export default Oferta;