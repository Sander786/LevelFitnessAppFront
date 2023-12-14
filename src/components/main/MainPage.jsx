import ImageSrc1 from "../images/mainpageImgs/mainpage1img.jpg";
import ImageSrc2 from "../images/mainpageImgs/AboutUsImg.jpg";

import AdvantageImage1 from "../images/mainpageImgs/1.png";
import AdvantageImage2 from "../images/mainpageImgs/2.png";
import AdvantageImage3 from "../images/mainpageImgs/3.png";

import PropTypes from "prop-types";
import styled from 'styled-components';


export const MainPage = ({selectedLang, Languages, OpenModal }) => {
    return (
        <>
            <MainpageTopComponent selectedLang={selectedLang} Languages={Languages}/>
            <MainpageAboutUsComponent selectedLang={selectedLang} Languages={Languages}/>
            <MainpageAdvantagesComponent selectedLang={selectedLang} Languages={Languages}/>
            <FirstLesson selectedLang={selectedLang} Languages={Languages} OpenModal={OpenModal}/>
        </>
    )
};

const MainpageTopComponentHover = styled.section`
  background-color: #000;
  color: #fff;
  display: flex;
  align-items: center;
  padding: 50px 100px 50px;

  @media (max-width: 1200px) {
    padding-left: 0;
  }

  @media (max-width: 1000px) {
    padding-left: 0;
  }

  @media (max-width: 800px) {
    flex-direction: column-reverse;
    align-items: flex-start;
    padding: 30px;
  }

  @media (max-width: 800px) {
    padding: 10px;
  }
`;

const Text1Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 15px;
  margin-top: 15px;
`;

const StyledImg1 = styled.img`
  width: 672px;
  height: 478px;
  object-fit: cover;

  @media (max-width: 1200px) {
    width: 450px;
    height: 320px;
  }

  @media (max-width: 1000px) {
    width: 450px;
    height: 320px;
  }

  @media (max-width: 800px) {
    width: 100%;
    height: auto;
  }
`;

const TopBigP = styled.p`
  font-weight: bold;
  color: #E7490F;
  font-size: 48px;

  @media (max-width: 1000px) {
    font-size: 36px;
  }

  @media (max-width: 800px) {
    margin-bottom: 15px;
  }

  @media (max-width: 400px) {
    font-size: 24px;
  }
`;

const StyledP = styled.p`
  margin: 5px 0;
  font-size: 18px;

  @media (max-width: 400px) {
    font-size: 12px;
  }
`;

const MainpageTopComponent = ({selectedLang, Languages}) => {
    const Values = Languages.MainPage()[selectedLang];
    return (
        <MainpageTopComponentHover>
            <StyledImg1 src={ImageSrc1} alt="firstimage"/>
            <Text1Section>
                <TopBigP>{Values[0].FirstH1}</TopBigP>
                <StyledP>{Values[0].FirstP1}</StyledP>
                <StyledP>{Values[0].FirstP2}</StyledP>
            </Text1Section>
        </MainpageTopComponentHover>
    )
};

const MainpageAboutUsComponentHover = styled.section`
  background-color: #000;
  color: #fff;
  display: flex;
  align-items: center; 
  padding: 50px 15px; 
  justify-content: space-around;

  @media (max-width: 1000px) {
    flex-direction: column;
  }

  @media (max-width: 600px) {
    padding: 15px; 
  }
`;

const Text2Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 15px; 
  margin: 15px 100px;

  @media (max-width: 1200px) {
    margin: 15px 50px;
  }

  @media (max-width: 800px) {
    padding: 10px;
  }

  @media (max-width: 600px) {
    margin: 0;
  }
`;

const StyledImg2 = styled.img`
  margin-left: 100px;

  @media (max-width: 1000px) {
    margin-left: 10px;
    margin: 10px;
  }

  @media (max-width: 800px) {
    width: 100%;
    height: auto;
  }
`;

const SmallStyledP = styled.p`
  color: #E7490F;
  font-size: 14px;

  @media (max-width: 400px) {
    font-size: 9px;
  }
`;

const BasicBigP = styled.p`
  font-weight: bold;
  font-size: 36px;

  @media (max-width: 1000px) {
    font-size: 30px;
  }

  @media (max-width: 400px) {
    font-size: 20px;
  }
`;


const MainpageAboutUsComponent = ({selectedLang, Languages}) => {
    const Values = Languages.MainPage()[selectedLang];
    return (
        <MainpageAboutUsComponentHover>
            <Text2Section>
                <SmallStyledP>{Values[0].AboutUs}</SmallStyledP>
                <BasicBigP>{Values[0].AboutUsH3}</BasicBigP>
                <section style={{display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
                    <StyledP>{Values[0].AboutUsP1}</StyledP>
                    <StyledP>{Values[0].AboutUsP2}</StyledP>
                </section>
            </Text2Section>
            <StyledImg2 src={ImageSrc2} alt="firstimage"/>
        </MainpageAboutUsComponentHover>
    )
};

const MainpageAdvantageComponentHover = styled.section`
  background-color: #fff;
  color: #000;
  padding: 100px; 

  @media (max-width: 1000px) {
    padding: 25px; 
  }
`;

const UlStyles = styled.ul`
  margin-top: 100px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  @media (max-width: 1000px) {
    margin-top: 25px; 
  }
`;

const LiStyles = styled.li`
  display: block;
  width: 350px;
  margin: 5px;

  @media (max-width: 400px) {
    width: 250px;
    height: auto;
  }
`;

const StyledAdvantageImg = styled.img`
  @media (max-width: 400px) {
    width: 100%;
    height: auto;
  }
`;

const AdvantageBigP = styled.p`
  font-weight: bold;
  font-size: 28px;

  @media (max-width: 1000px) {
    font-size: 20px;
  }

  @media (max-width: 400px) {
    font-size: 16px;
  }
`;

const AdvantageP = styled.p`
  font-size: 16px;

  @media (max-width: 400px) {
    font-size: 12px;
  }
`;

const MainpageAdvantagesComponent = ({selectedLang, Languages}) => {
    const Values = Languages.MainPage()[selectedLang];
    return (
        <MainpageAdvantageComponentHover>
            <BasicBigP>{Values[0].OurAdvantages}</BasicBigP>
            <UlStyles>
                <LiStyles>
                    <StyledAdvantageImg src={AdvantageImage1} alt="AdvantageImage1" />
                    <AdvantageBigP>{Values[0].FirstAdvantageH3}</AdvantageBigP>
                    <AdvantageP>{Values[0].FirstAdvantageP}</AdvantageP>
                </LiStyles>
                <LiStyles>
                    <StyledAdvantageImg src={AdvantageImage2} alt="AdvantageImage2" />
                    <AdvantageBigP>{Values[0].SecondAdvantageH3}</AdvantageBigP>
                    <AdvantageP>{Values[0].SecondAdvantageP}</AdvantageP>
                </LiStyles>
                <LiStyles>
                    <StyledAdvantageImg src={AdvantageImage3} alt="AdvantageImage3" />
                    <AdvantageBigP>{Values[0].ThirdAdvantageH3}</AdvantageBigP>
                    <AdvantageP>{Values[0].ThirdAdvantageP}</AdvantageP>
                </LiStyles>
            </UlStyles>
        </MainpageAdvantageComponentHover>
    )
};

const FirstLessonHover = styled.section`
  background-color: #fff;
  color: #000;
  padding: 50px; 
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 400px) {
    padding: 15px; 
  }
`;

const PopUpButton2 = styled.button`
  background-color: #E7490F;
  color: #fff;
  padding: 9px 33px;
  font-size: 20px;
  margin-top: 15px;

  @media (max-width: 400px) {
    font-size: 15px;
  }
`

const FirstLesson = ({Languages, selectedLang, OpenModal}) => {
    const Values = Languages.FirstLesson()[selectedLang];

    return (
    <>
        <FirstLessonHover>
            <BasicBigP style={{textAlign: "center"}}>{Values[0].Come}</BasicBigP>
            <StyledP style={{textAlign: "center"}}>{Values[0].FirstLessonP1}</StyledP>
            <StyledP style={{textAlign: "center"}}>{Values[0].FirstLessonP2}</StyledP>
            <PopUpButton2 onClick={OpenModal}>{Values[0].Register}</PopUpButton2>
        </FirstLessonHover>
    </>
    );
};

MainPage.propTypes = {
    Languages: PropTypes.shape({
        ExampleText: PropTypes.func.isRequired,
    }).isRequired,
    selectedLang: PropTypes.string.isRequired,
};

MainpageTopComponent.propTypes = {
    Languages: PropTypes.shape({
        ExampleText: PropTypes.func.isRequired,
    }).isRequired,
    selectedLang: PropTypes.string.isRequired,
};

FirstLesson.propTypes = {
    Languages: PropTypes.shape({
        ExampleText: PropTypes.func.isRequired,
    }).isRequired,
    selectedLang: PropTypes.string.isRequired,
};