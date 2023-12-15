import PropTypes from "prop-types";
import styled from 'styled-components';
import { useState } from "react";

import TopImageSrc from '../images/trainersImgs/TrainerImg.jpg';
import TrainerImg1 from "../images/trainersImgs/imgTrener1.png";
import TrainerImg2 from "../images/trainersImgs/imgTrener2.png";
import TrainerImg3 from "../images/trainersImgs/imgTrener3.png";
import TrainerImg4 from "../images/trainersImgs/imgTrener4.png";
import TrainerImg5 from "../images/trainersImgs/imgTrener5.png";
import TrainerImg6 from "../images/trainersImgs/imgTrener6.png";
import { TrainersModal } from "../modal/TrainersModal";



const TrainersHover = styled.section`
  background-color: #000;
  color: #fff;
  display: flex;
  align-items: center; 
  padding: 50px 100px; 
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 1000px) {
    padding: 25px; 
  }

  @media (max-width: 400px) {
    padding: 15px; 
  }
`;

export const Trainers = ({selectedLang, Languages, OpenModal}) => {
    const [showModal1, setShowModal1] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const [showModal3, setShowModal3] = useState(false);
    const [showModal4, setShowModal4] = useState(false);
    const [showModal5, setShowModal5] = useState(false);
    const [showModal6, setShowModal6] = useState(false);

    const Values1 = Languages.Trainer1Description()[selectedLang];  
    const Values2 = Languages.Trainer2Description()[selectedLang];  
    const Values3 = Languages.Trainer3Description()[selectedLang];  
    const Values4 = Languages.Trainer4Description()[selectedLang];  
    const Values5 = Languages.Trainer5Description()[selectedLang];  
    const Values6 = Languages.Trainer6Description()[selectedLang];  


    const OpenTrainers1Modal = () => {
        setShowModal1(true)
    }
    const OpenTrainers2Modal = () => {
        setShowModal2(true)
    }
    const OpenTrainers3Modal = () => {
        setShowModal3(true)
    }
    const OpenTrainers4Modal = () => {
        setShowModal4(true)
    }
    const OpenTrainers5Modal = () => {
        setShowModal5(true)
    }
    const OpenTrainers6Modal = () => {
        setShowModal6(true)
    }

    const Values = Languages.Trainers()[selectedLang];  

    return (
        <>
            {showModal1 && <TrainersModal setShowModal={setShowModal1} trainerImage={TrainerImg1}  Values={Values1}/>}
            {showModal2 && <TrainersModal setShowModal={setShowModal2} trainerImage={TrainerImg2}  Values={Values2}/>}
            {showModal3 && <TrainersModal setShowModal={setShowModal3} trainerImage={TrainerImg3}  Values={Values3}/>}
            {showModal4 && <TrainersModal setShowModal={setShowModal4} trainerImage={TrainerImg4}  Values={Values4}/>}
            {showModal5 && <TrainersModal setShowModal={setShowModal5} trainerImage={TrainerImg5}  Values={Values5}/>}
            {showModal6 && <TrainersModal setShowModal={setShowModal6} trainerImage={TrainerImg6}  Values={Values6}/>}
            <TrainersTopSection selectedLang={selectedLang} Languages={Languages}/>
            <TrainersHover>
                <TrainerCard name={Values[0].Name1} descibing={Values[0].Describing1} trainerImage={TrainerImg1} OpenTrainersModal={OpenTrainers1Modal}/>
                <TrainerCard name={Values[0].Name2} descibing={Values[0].Describing2} trainerImage={TrainerImg2} OpenTrainersModal={OpenTrainers2Modal}/>
                <TrainerCard name={Values[0].Name3} descibing={Values[0].Describing3} trainerImage={TrainerImg3} OpenTrainersModal={OpenTrainers3Modal}/>
                <TrainerCard name={Values[0].Name4} descibing={Values[0].Describing4} trainerImage={TrainerImg4} OpenTrainersModal={OpenTrainers4Modal}/>
                <TrainerCard name={Values[0].Name5} descibing={Values[0].Describing5} trainerImage={TrainerImg5} OpenTrainersModal={OpenTrainers5Modal}/>
                <TrainerCard name={Values[0].Name6} descibing={Values[0].Describing6} trainerImage={TrainerImg6} OpenTrainersModal={OpenTrainers6Modal}/>
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
  cursor: pointer;

  &:hover {
    border: 1px solid #E7490F;
  }

  @media (max-width: 400px) {
    padding: 10px 5px; 
    margin: 0;
    height: 232px;
  }
`;

const TrainerCardSection = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  justify-content: space-between;
  width: 310px;
  height: 92px;

  @media (max-width: 400px) {
    width: 250px; 
    height: 32px;
  }
`;

const StyledImg = styled.img`
  @media (max-width: 400px) {
    width: 240px;
    height: auto;
    margin-top: 10px;
  }
`;

const TrainerBigP = styled.p`
  font-weight: bold;
  font-size: 28px;

  @media (max-width: 1000px) {
    font-size: 20px;
  }

  @media (max-width: 400px) {
    font-size: 16px;
  }
`;

const TrainerP = styled.p`
  color: #7F7F7F;
  font-size: 16px;

  @media (max-width: 400px) {
    font-size: 12px;
  }
`;

const TrainerCard= ({name, descibing, trainerImage, OpenTrainersModal}) => {
    return(
        <TrainerCardHover onClick={OpenTrainersModal}>
            <StyledImg src={trainerImage} alt={name}/>
            <TrainerCardSection>
                <TrainerBigP>{name}</TrainerBigP>
                <TrainerP>{descibing}</TrainerP>
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

const BasicBigP = styled.p`
  font-weight: bold;
  font-size: 36px;
  margin-bottom: 30px;

  @media (max-width: 1000px) {
    font-size: 30px;
  }

  @media (max-width: 400px) {
    font-size: 20px;
  }
`;

const StyledP = styled.p`
  margin: 5px 0;
  font-size: 18px;

  @media (max-width: 400px) {
    font-size: 12px;
  }
`;

const StyledTopImg = styled.img`
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

const TrainersTopSection = ({Languages, selectedLang}) => {
    const Values = Languages.TrainerSectionText()[selectedLang];

    return (
        <TrainersTopSectionHover>  
            <TextSection>
                <BasicBigP>{Values[0].OurTrainers}</BasicBigP>
                <StyledP>{Values[0].TrainersP}</StyledP>
            </TextSection>
            <StyledTopImg src={TopImageSrc} alt="Top Image" />
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

Trainers.propTypes = {
    Languages: PropTypes.shape({
        ExampleText: PropTypes.func.isRequired,
    }).isRequired,
    selectedLang: PropTypes.string.isRequired,
    OpenModal: PropTypes.func.isRequired,
};


TrainerCard.propTypes = {
    name: PropTypes.string.isRequired,
    descibing: PropTypes.string.isRequired,
    trainerImage: PropTypes.string.isRequired,
    OpenTrainersModal: PropTypes.func.isRequired,
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
    OpenModal: PropTypes.func.isRequired,
};