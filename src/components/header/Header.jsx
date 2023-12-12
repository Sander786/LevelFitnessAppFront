import logoSrc from "../images/logo.png"
import styled from 'styled-components';
import PropTypes from "prop-types";
import { useContext } from "react";

import { RightHeaderComponents } from "./RightHeaderComponent";

const StyledHeader = styled.div`
  background-color: #000;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const Header = ({LocalizationComponent, LanguageContext, Languages, OpenModal}) => {
    const { selectedLang, handleLangChange } = useContext(LanguageContext);

    return (
        <StyledHeader>
            <img src={logoSrc} />
            <LocalizationComponent handleLangChange={handleLangChange}/>
            <RightHeaderComponents selectedLang={selectedLang} Languages={Languages} OpenModal={OpenModal}/>
        </StyledHeader>
    );
};

Header.propTypes = {
    LanguageContext: PropTypes.object.isRequired,
    LocalizationComponent: PropTypes.elementType.isRequired,
    Languages: PropTypes.object.isRequired,
};