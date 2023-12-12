import PropTypes from "prop-types";
import styled from 'styled-components';
import TopImageSrc from '../images/trainersImgs/TrainerImg.jpg';
import TrainerImg1 from "../images/trainersImgs/imgTrener1.png";
import TrainerImg2 from "../images/trainersImgs/imgTrener2.png";
import TrainerImg3 from "../images/trainersImgs/imgTrener3.png";
import TrainerImg4 from "../images/trainersImgs/imgTrener4.png";
import TrainerImg5 from "../images/trainersImgs/imgTrener5.png";
import TrainerImg6 from "../images/trainersImgs/imgTrener6.png";



const TrainersHover = styled.section`
background-color: #000;
color: #fff;
display: flex;
align-items: center; 
padding: 50px 100px 50px; 
flex-wrap: wrap;
justify-content: center
`;

export const Trainers = ({selectedLang, Languages, OpenModal}) => {
    const Values = Languages.Trainers()[selectedLang];  

    return (
        <>
            <TrainersTopSection selectedLang={selectedLang} Languages={Languages}/>
            <TrainersHover>
                <TrainerCard name={Values[0].Name1} descibing={Values[0].Describing1} trainerImage={TrainerImg1}/>
                <TrainerCard name={Values[0].Name2} descibing={Values[0].Describing2} trainerImage={TrainerImg2}/>
                <TrainerCard name={Values[0].Name3} descibing={Values[0].Describing3} trainerImage={TrainerImg3}/>
                <TrainerCard name={Values[0].Name4} descibing={Values[0].Describing4} trainerImage={TrainerImg4}/>
                <TrainerCard name={Values[0].Name5} descibing={Values[0].Describing5} trainerImage={TrainerImg5}/>
                <TrainerCard name={Values[0].Name6} descibing={Values[0].Describing6} trainerImage={TrainerImg6}/>
            </TrainersHover>
            <FirstLesson selectedLang={selectedLang} Languages={Languages} OpenModal={OpenModal}/>
        </>
    );
};

const TrainerCardHover = styled.section`
display: flex;
flex-direction: column;
align-items: center; 
width: 310px;
height: 292px;
padding: 30px 20px;
margin: 15px;
transition: 0.7s;

&:hover {
    border: 1px solid #E7490F;
}
`;

const TrainerCardSection = styled.section`
display: flex;
flex-direction: column;
margin-top: 20px;
justify-content: space-between;
width: 310px;
height: 92px;
`;

const TrainerCard= ({name, descibing, trainerImage}) => {
    return(
        <TrainerCardHover>
            <img src={trainerImage} alt={name}/>
            <TrainerCardSection>
                <h1 style={{fontSize: "29px"}}>{name}</h1>
                <p style={{fontSize: "16px", color: "#7F7F7F"}}>{descibing}</p>
            </TrainerCardSection>
        </TrainerCardHover>
    )
};

const TrainersTopSectionHover = styled.section`
background-color: #000;
color: #fff;
display: flex;
align-items: center; 
padding: 25px; 
flex-wrap: wrap;
justify-content: space-around;
`;

const TextSection = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start
padding: 15px; 
margin-bottom: 25px;
width: 445px;
`;

const PHover = styled.section`
font-size: 18px;
margin: 5px 0px;
`;

const TrainersTopSection = ({Languages, selectedLang}) => {
    const Values = Languages.TrainerSectionText()[selectedLang];

    return (
        <TrainersTopSectionHover>  
            <TextSection>
                <h2 style={{fontSize: "36px", marginBottom: "30px"}}>{Values[0].OurTrainers}</h2>
                <PHover>{Values[0].TrainersP}</PHover>
            </TextSection>
            <img src={TopImageSrc} alt="Top Image" />
        </TrainersTopSectionHover>
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
        <FirstLessonHover>
            <h1 style={{textAlign: "center", fontSize: "36px"}}>{Values[0].Come}</h1>
            <p style={{textAlign: "center", fontSize: "18px", margin: "5px 0px"}}>{Values[0].FirstLessonP1}</p>
            <p style={{textAlign: "center", fontSize: "18px", margin: "5px 0px"}}>{Values[0].FirstLessonP2}</p>
            <PopUpButton2 onClick={OpenModal}>{Values[0].Register}</PopUpButton2>
        </FirstLessonHover>
    );
};

Trainers.propTypes = {
    Languages: PropTypes.shape({
        ExampleText: PropTypes.func.isRequired,
    }).isRequired,
    selectedLang: PropTypes.string.isRequired,
};


TrainerCard.propTypes = {
    name: PropTypes.string.isRequired,
    descibing: PropTypes.string.isRequired,
    trainerImage: PropTypes.string.isRequired,
};

TrainersTopSection.propTypes = {
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