import PropTypes from "prop-types";
import styled from 'styled-components';
import { useState } from "react";

import TopImageSrc from '../images/programsImg/ProgramImg.jpg';
import { SmallerForm } from "../forms/SmalerForm";
import { Modal } from "../modal/Modal";

const ProgramsHover = styled.section`
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
`;

export const Programs = ({data, selectedLang, Languages, OpenModal}) => {
    const Values = Languages.Programs()[selectedLang];
    const ButtonLocalization = Languages.SignUp()[selectedLang];  
    const ButtonText = ButtonLocalization[0].ButtonText;

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


    const OpenPrograms1Modal = () => {
        setShowModal1(true)
    }

    const OpenPrograms2Modal = () => {
        setShowModal2(true)
    }
    const OpenPrograms3Modal = () => {
        setShowModal3(true)
    }
    const OpenPrograms4Modal = () => {
        setShowModal4(true)
    }
    const OpenPrograms5Modal = () => {
        setShowModal5(true)
    }
    const OpenPrograms6Modal = () => {
        setShowModal6(true)
    }

    return (
        <>
            {showModal1 && <Modal setShowModal={setShowModal1} selectedLang={selectedLang} Languages={Languages} Form={SmallerForm} TrainingName="HIP-training"/>}
            {showModal2 && <Modal setShowModal={setShowModal2} selectedLang={selectedLang} Languages={Languages} Form={SmallerForm} TrainingName="Pilates"/>}
            {showModal3 && <Modal setShowModal={setShowModal3} selectedLang={selectedLang} Languages={Languages} Form={SmallerForm} TrainingName="Zumba"/>}
            {showModal4 && <Modal setShowModal={setShowModal4} selectedLang={selectedLang} Languages={Languages} Form={SmallerForm} TrainingName="Tabata"/>}
            {showModal5 && <Modal setShowModal={setShowModal5} selectedLang={selectedLang} Languages={Languages} Form={SmallerForm} TrainingName="Stretching"/>}
            {showModal6 && <Modal setShowModal={setShowModal6} selectedLang={selectedLang} Languages={Languages} Form={SmallerForm} TrainingName="Power-body"/>}
            <ProgramsTopSection selectedLang={selectedLang} Languages={Languages}/>
            <ProgramsHover>
                <GroupProgram data={data} someIndex={0} descibing={Values[0].HIP} ButtonText={ButtonText} OpenModal={OpenPrograms1Modal}/>
                <GroupProgram data={data} someIndex={1} descibing={Values[0].Pilates} ButtonText={ButtonText} OpenModal={OpenPrograms2Modal}/>
                <GroupProgram data={data} someIndex={2} descibing={Values[0].Zumba} ButtonText={ButtonText} OpenModal={OpenPrograms3Modal}/>
                <GroupProgram data={data} someIndex={3} descibing={Values[0].Tabata} ButtonText={ButtonText} OpenModal={OpenPrograms4Modal}/>
                <GroupProgram data={data} someIndex={4} descibing={Values[0].Stretching} ButtonText={ButtonText} OpenModal={OpenPrograms5Modal}/>
                <GroupProgram data={data} someIndex={5} descibing={Values[0].Power} ButtonText={ButtonText} OpenModal={OpenPrograms6Modal}/>
            </ProgramsHover>
            <FirstLesson selectedLang={selectedLang} Languages={Languages} OpenModal={OpenModal}/>
        </>
    )
};

const GroupProgramHover = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center; 
  width: 310px;
  height: 385px;
  padding: 30px 20px;

  @media (max-width: 1000px) {
    height: 360px;
  }

  @media (max-width: 400px) {
    width: 240px;
    height: 320px;
    padding: 15px 5px;
  }
`;

const GroupProgramSection = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  justify-content: space-between;
  height: 185px;

  @media (max-width: 1000px) {
    height: 160px;
  }

  @media (max-width: 400px) {
    height: 120px;
  }
`;

const ProgramBigP = styled.p`
  font-weight: bold;
  font-size: 28px;

  @media (max-width: 1000px) {
    font-size: 20px;
  }

  @media (max-width: 400px) {
    font-size: 16px;
  }
`;

const ProgramP = styled.p`
  color: #7F7F7F;
  font-size: 16px;

  @media (max-width: 400px) {
    font-size: 12px;
  }
`;

const PopUpButton1 = styled.button`
  background-color: #000;
  border: 1px solid #E7490F;
  color: #E7490F;
  width: 310px;
  height: 44px;
  font-size: 20px;
  transition: 0.5s;

  &:hover {
    background-color: #E7490F;
    color: #fff;;
  }

  @media (max-width: 400px) {
    width: 240px;
    font-size: 15px;
  }
`

const StyledImg = styled.img`
  @media (max-width: 400px) {
    width: 240px;
    height: auto;
  }
`;

const GroupProgram = ({data, someIndex, descibing, ButtonText, OpenModal}) => {
    const Title = data[someIndex].title;
    const ImgSrc = data[someIndex].image;
    return(
        <GroupProgramHover>
            <StyledImg src={ImgSrc} alt={Title}/>
            <GroupProgramSection>
                <ProgramBigP>{Title}</ProgramBigP>
                <ProgramP>{descibing}</ProgramP>
                <PopUpButton1 onClick={OpenModal}>{ButtonText}</PopUpButton1>
            </GroupProgramSection>
        </GroupProgramHover>
    )
};

const ProgramsTopSectionHover = styled.section`
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

const ProgramsTopSection = ({Languages, selectedLang}) => {
    const Values = Languages.ProgramSectionText()[selectedLang];

    return (
        <ProgramsTopSectionHover>  
            <TextSection>
                <BasicBigP>{Values[0].OurPrograms}</BasicBigP>
                <StyledP>{Values[0].FirstP}</StyledP>
                <StyledP>{Values[0].SecondP}</StyledP>
            </TextSection>
            <StyledTopImg src={TopImageSrc} alt="Top Image" />
        </ProgramsTopSectionHover>
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

Programs.propTypes = {
    data: PropTypes.array.isRequired,
    Languages: PropTypes.shape({
        ExampleText: PropTypes.func.isRequired,
    }).isRequired,
    selectedLang: PropTypes.string.isRequired,
    OpenModal: PropTypes.func.isRequired,
};

GroupProgram.propTypes = {
    data: PropTypes.array.isRequired,
    someIndex: PropTypes.number.isRequired,
    descibing: PropTypes.string.isRequired,
    ButtonText: PropTypes.string.isRequired,
    OpenModal: PropTypes.func.isRequired,
};

ProgramsTopSection.propTypes = {
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