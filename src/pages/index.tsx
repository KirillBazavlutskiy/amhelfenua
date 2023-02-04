import SuggestBlock from "@/components/SuggestBlock/SuggestBlock";
import SuggestBlockText from "@/components/SuggestBlock/SuggestBlockText/SuggestBlockText";
import CitiesBlock from "@/components/CitiesBlock/CitiesBlock";
import CitiesBlockText from "@/components/CitiesBlock/CitiesBlockText/CitiesBlockText";
import HelpBlock from "@/components/MainPage/HelpBlock/HelpBlock";
import MainContainer from "@/components/MainContainer";
import ReviewsBlock from "@/components/MainPage/ReviewsBlock/ReviewsBlock";
import ServicesBlock from "@/components/MainPage/ServicesBlock/ServicesBlock";
import ContactsBlock from "@/components/MainPage/ContactsBlock/ContactsBlock";
import ExportBlock from "@/components/MainPage/ExportBlock/ExportBlock";

export default function Home() {
  return (
    <>
        <MainContainer keywords={"main"} title={"Головна"} transparentHeader={true}>
            <SuggestBlock>
                <SuggestBlockText />
            </SuggestBlock>
            <CitiesBlock>
                <CitiesBlockText />
            </CitiesBlock>
            <HelpBlock />
            <ServicesBlock />
            <ReviewsBlock />
            <ExportBlock />
            <ContactsBlock />
        </MainContainer>
    </>
  )
}
