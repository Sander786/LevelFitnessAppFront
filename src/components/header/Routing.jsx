import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #000;
  color: #fff;
  font-size: 16px;
  margin: 0px 5px;
  cursor: pointer;
  padding: 10px 5px;
  transition: 0.7s;

  &:hover {
    background-color: #E7490F;
  }

  @media (max-width: 400px) {
    font-size: 12px;
  }
`;

export const Routing = ({ Languages, selectedLang }) => {
    const Values = Languages.Routing()[selectedLang];
    return (
        <>
            <Link to={"/"}><StyledButton>{Values[0].MainPage}</StyledButton></Link>
            <Link to={"/programs"}><StyledButton>{Values[0].Programs}</StyledButton></Link>
            <Link to={"/trainers"}><StyledButton>{Values[0].Trainers}</StyledButton></Link>
            <Link to={"/interior"}><StyledButton>{Values[0].Interior}</StyledButton></Link>
        </>
    );
};

Routing.propTypes = {
    Languages: PropTypes.shape({
        ExampleText: PropTypes.func.isRequired,
    }).isRequired,
    selectedLang: PropTypes.string.isRequired,
};