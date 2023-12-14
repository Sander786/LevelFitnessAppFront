import { useState } from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';

import { Languages } from "./Languages/Languages";

const Values = Languages.LocalizationButtons();

const StyledButton = styled.button`
  font-size: 18px;
  margin: 5px;
  padding: 7px;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #E7490F;
  }

  @media (max-width: 400px) {
    font-size: 14px;
  }
`;

export const LocalizationComponent = ({ handleLangChange }) => {
    const [activeId, setActiveId] = useState(1);

    const handleClick = (id, textId) => {
        handleLangChange(textId);
        setActiveId(id);
    };

    return (
        <section className="Localization" style={{}}>
            {Values.map(({ id, text, textId }) => (
                <StyledButton
                    key={textId}
                    onClick={() => handleClick(id, textId)}
                    style={{
                        backgroundColor: activeId === id ? "#E7490F" : "#fff",
                        color: activeId === id ? "#fff" : "#000",
                    }}
                    className={
                        activeId === id ? "activeLanguage" : "inactiveLanguage"
                    }>
                    {text}
                </StyledButton>
            ))}
        </section>
    );
};
LocalizationComponent.propTypes = {
    handleLangChange: PropTypes.func.isRequired,
};