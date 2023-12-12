import { useState } from "react";
import PropTypes from "prop-types";

import { Languages } from "./Languages/Languages";

const Values = Languages.LocalizationButtons();

export const LocalizationComponent = ({ handleLangChange }) => {
    const [activeId, setActiveId] = useState(1);

    const handleClick = (id, textId) => {
        handleLangChange(textId);
        setActiveId(id);
    };

    return (
        <section className="Localization" style={{}}>
            {Values.map(({ id, text, textId }) => (
                <button
                    key={textId}
                    onClick={() => handleClick(id, textId)}
                    style={{
                        margin: "5px",
                        padding: "10px",
                        fontSize: "20px",
                        backgroundColor: activeId === id ? "#E7490F" : "#fff",
                        color: activeId === id ? "#fff" : "#000",
                        borderRadius: "5px"
                    }}
                    className={
                        activeId === id ? "activeLanguage" : "inactiveLanguage"
                    }>
                    {text}
                </button>
            ))}
        </section>
    );
};
LocalizationComponent.propTypes = {
    handleLangChange: PropTypes.func.isRequired,
};