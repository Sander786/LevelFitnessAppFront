import PhoneImg from "../images/phone.png"
import styled from 'styled-components';
import PropTypes from "prop-types";
import { Routing } from "./Routing";

const PhoneNumber = styled.section`
display: flex;
align-items: center; 
justify-content: space-around;
padding: 15px; 
`;

const PopUpButton = styled.button`
background-color: #E7490F;
color: #fff;
padding: 9px 33px;
font-size: 20px;
`

const TopSection = styled.section`
display: flex;
align-items: center; 
flex-wrap: wrap;
justify-content: center;
`;

const LowerSection = styled.ul`
display: flex;
align-items: center; 
padding: 15px; 
flex-wrap: wrap;
justify-content: center;
`;

const HowerStyles = styled.ul`
display: flex;
flex-direction: column;
align-items: center; 
padding: 15px; 
`;

export const RightHeaderComponents = ({ Languages, selectedLang, OpenModal }) => {
    const Values = Languages.HeaderText()[selectedLang];
    return (
        <HowerStyles>  
            <TopSection>
                <PhoneNumber>
                    <img src={PhoneImg} style={{border: "1px solid #fff", padding: "5px", borderRadius: "5px", marginRight: "5px"}}/>
                    <p style={{fontSize: "20px", marginLeft: "5px"}}>+420 606 076 187</p>
                </PhoneNumber>
                <PopUpButton onClick={OpenModal}>{Values[0].ButtonText}</PopUpButton>
            </TopSection>
            <LowerSection>
                <Routing Languages={Languages} selectedLang={selectedLang}/>
            </LowerSection>
        </HowerStyles>
    );
};

RightHeaderComponents.propTypes = {
    Languages: PropTypes.shape({
        ExampleText: PropTypes.func.isRequired,
    }).isRequired,
    selectedLang: PropTypes.string.isRequired,
};