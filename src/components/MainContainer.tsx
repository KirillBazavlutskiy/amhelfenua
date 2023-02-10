import React, {FC} from "react";
import Head from "next/head";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

interface MainContainerProps {
    children: React.ReactNode;
    keywords: string | null;
    title: string;
    transparentHeader: boolean;
}
const MainContainer: FC<MainContainerProps> = ({ children, keywords , title, transparentHeader}) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="keywords" content={"amhelfenua " + keywords} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header transparent={transparentHeader} />
            <div>
                {children}
            </div>
            <Footer />
        </>
    );
};

export default MainContainer;