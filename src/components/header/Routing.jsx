import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import styled from 'styled-components';

const StyledLi = styled.li`
font-size: 20px;
margin: 0px 5px;
`;

export const Routing = ({ Languages, selectedLang }) => {
    const Values = Languages.Routing()[selectedLang];
    return (
        <>
            <StyledLi><Link to={"/"}>{Values[0].MainPage}</Link></StyledLi>
            <StyledLi><Link to={"/programs"}>{Values[0].Programs}</Link></StyledLi>
            <StyledLi><Link to={"/trainers"}>{Values[0].Trainers}</Link></StyledLi>
            <StyledLi><Link to={"/interior"}>{Values[0].Interior}</Link></StyledLi>
        </>
    );
};

Routing.propTypes = {
    Languages: PropTypes.shape({
        ExampleText: PropTypes.func.isRequired,
    }).isRequired,
    selectedLang: PropTypes.string.isRequired,
};