import PropTypes from "prop-types";
import {Routes, Route, Navigate} from "react-router-dom";
import {MainPage} from "./MainPage"
import {Interior} from "./Interior"
import {Trainers} from "./Trainers"
import {Programs} from "./Programs"

import { useContext } from "react";



export const Main = ({ Languages, LanguageContext, GetDataContext, OpenModal }) => {
    const { selectedLang } = useContext(LanguageContext);
    const {data} = useContext(GetDataContext);
    return (
        <Routes>
            <Route path="/" element={<MainPage selectedLang={selectedLang} Languages={Languages} OpenModal={OpenModal}/>}/>
            <Route path="/programs" element={<Programs data={data} selectedLang={selectedLang} Languages={Languages} OpenModal={OpenModal}/>}/>
            <Route path="/trainers" element={<Trainers selectedLang={selectedLang} Languages={Languages} OpenModal={OpenModal}/>}/>
            <Route path="/interior" element={<Interior selectedLang={selectedLang} Languages={Languages}/>}/>
            <Route path="*" element={<Navigate to="/" />}/>
        </Routes>
    );
};

Main.propTypes = {
    GetDataContext: PropTypes.object.isRequired,
    LanguageContext: PropTypes.object.isRequired,
    Languages: PropTypes.object.isRequired,
    OpenModal: PropTypes.func.isRequired,
};
