import SuggestBlock from "@/components/SuggestBlock/SuggestBlock";
import SuggestBlockText from "@/components/SuggestBlock/SuggestBlockText/SuggestBlockText";
import CitiesBlock from "@/components/CitiesBlock/CitiesBlock";
import CitiesBlockText from "@/components/CitiesBlock/CitiesBlockText/CitiesBlockText";
import HelpBlock from "@/components/HelpBlock/HelpBlock";
import MainContainer from "@/components/MainContainer";
import ReviewsBlock from "@/components/ReviewsBlock/ReviewsBlock";
import ServicesBlock from "@/components/ServicesBlock/ServicesBlock";
import ContactsBlock from "@/components/ContactsBlock/ContactsBlock";
import ExportBlock from "@/components/ExportBlock/ExportBlock";

export default function Home() {
  return (
    <>
        <MainContainer keywords={"main"} title={"Головна"}>
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
