import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children, initialLanguage }) => {
    const [selectedLang, setSelectedLang] = useState(initialLanguage);

    const handleLangChange = (lang) => {
        setSelectedLang(lang);
    };

    return (
        <LanguageContext.Provider value={{ selectedLang, handleLangChange }}>
            {children}
        </LanguageContext.Provider>
    );
};

LanguageProvider.propTypes = {
    children: PropTypes.node.isRequired,
    initialLanguage: PropTypes.string,
};

LanguageProvider.defaultProps = {
    initialLanguage: "cz",
};