import React, {FC} from "react";
import Head from "next/head";
import Header from "@/components/Header/Header";

interface MainContainerProps {
    children: React.ReactNode | null;
    keywords: string;
    title: string;
}
const MainContainer: FC<MainContainerProps> = ({ children, keywords , title}) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="keywords" content={"amhelfenua " + keywords} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <div>
                {children}
            </div>
        </>
    );
};

export default MainContainer;