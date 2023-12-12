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
flex-wrap: wrap;
align-items: center; 
padding: 50px 100px 50px; 
`;

const Text1Section = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start
padding: 15px; 
margin-top: 15px;
`;

const MainpageTopComponent = ({selectedLang, Languages}) => {
    const Values = Languages.MainPage()[selectedLang];
    return (
        <MainpageTopComponentHover>
            <img src={ImageSrc1} alt="firstimage" style={{width:"672px", height:"478px"}}/>
            <Text1Section>
                <p style={{color: "#E7490F", fontSize: "48px"}}>{Values[0].FirstH1}</p>
                <p style={{fontSize: "18px", margin: "5px 0"}}>{Values[0].FirstP1}</p>
                <p style={{fontSize: "18px", margin: "5px 0"}}>{Values[0].FirstP2}</p>
            </Text1Section>
        </MainpageTopComponentHover>
    )
};

const MainpageAboutUsComponentHover = styled.section`
background-color: #000;
color: #fff;
display: flex;
flex-wrap: wrap;
align-items: center; 
padding: 50px 15px 50px; 
justify-content: space-around;
`;

const Text2Section = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
padding: 15px; 
margin: 15px 100px 15px;
`;

const MainpageAboutUsComponent = ({selectedLang, Languages}) => {
    const Values = Languages.MainPage()[selectedLang];
    return (
        <MainpageAboutUsComponentHover>
            <Text2Section>
                <p style={{color: "#E7490F", fontSize: "14px"}}>{Values[0].AboutUs}</p>
                <p style={{fontSize: "36px"}}>{Values[0].AboutUsH3}</p>
                <section style={{display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
                    <p style={{margin: "5px", fontSize: "18px"}}>{Values[0].AboutUsP1}</p>
                    <p style={{margin: "5px", fontSize: "18px"}}>{Values[0].AboutUsP2}</p>
                </section>
            </Text2Section>
            <img src={ImageSrc2} alt="firstimage" style={{marginRight: "100px"}}/>
        </MainpageAboutUsComponentHover>
    )
};

const MainpageAdvantageComponentHover = styled.section`
background-color: #fff;
color: #000;
padding: 100px; 
`;

const UlStyles = styled.ul`
margin-top: 100px;
display: flex;
justify-content: space-around;
flex-wrap: wrap;
`;

const LiStyles = styled.li`
display: block;
width: 350px;
`;

const MainpageAdvantagesComponent = ({selectedLang, Languages}) => {
    const Values = Languages.MainPage()[selectedLang];
    return (
        <MainpageAdvantageComponentHover>
            <p style={{fontSize: "36px"}}>{Values[0].OurAdvantages}</p>
            <UlStyles>
                <LiStyles>
                    <img src={AdvantageImage1} alt="AdvantageImage1" />
                    <h2>{Values[0].FirstAdvantageH3}</h2>
                    <p>{Values[0].FirstAdvantageP}</p>
                </LiStyles>
                <LiStyles>
                    <img src={AdvantageImage2} alt="AdvantageImage2" />
                    <h2>{Values[0].SecondAdvantageH3}</h2>
                    <p>{Values[0].SecondAdvantageP}</p>
                </LiStyles>
                <LiStyles>
                    <img src={AdvantageImage3} alt="AdvantageImage3" />
                    <h2>{Values[0].ThirdAdvantageH3}</h2>
                    <p>{Values[0].ThirdAdvantageP}</p>
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
`;

const PopUpButton2 = styled.button`
background-color: #E7490F;
color: #fff;
padding: 9px 33px;
font-size: 20px;
margin-top: 15px;
`

const FirstLesson = ({Languages, selectedLang, OpenModal}) => {
    const Values = Languages.FirstLesson()[selectedLang];

    return (
    <>
        <FirstLessonHover>
            <h1 style={{textAlign: "center", fontSize: "36px"}}>{Values[0].Come}</h1>
            <p style={{textAlign: "center", fontSize: "18px", margin: "5px 0px"}}>{Values[0].FirstLessonP1}</p>
            <p style={{textAlign: "center", fontSize: "18px", margin: "5px 0px"}}>{Values[0].FirstLessonP2}</p>
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