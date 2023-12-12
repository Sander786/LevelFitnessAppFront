import PropTypes from "prop-types";
import styled from 'styled-components';
import TopImageSrc from '../images/programsImg/ProgramImg.jpg'

const ProgramsHover = styled.section`
background-color: #000;
color: #fff;
display: flex;
align-items: center; 
padding: 50px 100px 50px; 
flex-wrap: wrap;
justify-content: center
`;

export const Programs = ({data, selectedLang, Languages, OpenModal}) => {
    const Values = Languages.Programs()[selectedLang];
    const ButtonLocalization = Languages.SignUp()[selectedLang];  
    const ButtonText = ButtonLocalization[0].ButtonText

    return (
        <>
            <ProgramsTopSection selectedLang={selectedLang} Languages={Languages}/>
            <ProgramsHover>
                <GroupProgram data={data} someIndex={0} descibing={Values[0].HIP} ButtonText={ButtonText}/>
                <GroupProgram data={data} someIndex={1} descibing={Values[0].Pilates} ButtonText={ButtonText}/>
                <GroupProgram data={data} someIndex={2} descibing={Values[0].Zumba} ButtonText={ButtonText}/>
                <GroupProgram data={data} someIndex={3} descibing={Values[0].Tabata} ButtonText={ButtonText}/>
                <GroupProgram data={data} someIndex={4} descibing={Values[0].Stretching} ButtonText={ButtonText}/>
                <GroupProgram data={data} someIndex={5} descibing={Values[0].Power} ButtonText={ButtonText}/>
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
`;

const GroupProgramSection = styled.section`
display: flex;
flex-direction: column;
margin-top: 20px;
justify-content: space-between;
height: 185px;
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
`

const GroupProgram = ({data, someIndex, descibing, ButtonText}) => {
    const Title = data[someIndex].title;
    const ImgSrc = data[someIndex].image;
    return(
        <GroupProgramHover>
            <img src={ImgSrc} alt={Title}/>
            <GroupProgramSection>
                <h1 style={{fontSize: "29px"}}>{Title}</h1>
                <p style={{fontSize: "16px"}}>{descibing}</p>
                <PopUpButton1>{ButtonText}</PopUpButton1>
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

const PHover = styled.section`
font-size: 18px;
margin: 5px 0px;
`;

const ProgramsTopSection = ({Languages, selectedLang}) => {
    const Values = Languages.ProgramSectionText()[selectedLang];

    return (
        <ProgramsTopSectionHover>  
            <TextSection>
                <h2 style={{fontSize: "36px", marginBottom: "30px"}}>{Values[0].OurPrograms}</h2>
                <PHover>{Values[0].FirstP}</PHover>
                <PHover>{Values[0].SecondP}</PHover>
            </TextSection>
            <img src={TopImageSrc} alt="Top Image" />
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

Programs.propTypes = {
    data: PropTypes.array.isRequired,
    Languages: PropTypes.shape({
        ExampleText: PropTypes.func.isRequired,
    }).isRequired,
    selectedLang: PropTypes.string.isRequired,
};

GroupProgram.propTypes = {
    data: PropTypes.array.isRequired,
    someIndex: PropTypes.number.isRequired,
    descibing: PropTypes.string.isRequired,
    ButtonText: PropTypes.string.isRequired,
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
};