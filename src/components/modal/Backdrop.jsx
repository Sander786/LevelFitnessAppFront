import styled from 'styled-components';
import PropTypes from "prop-types";

const BackdropStyles = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.5);
z-index: 1;
`;

export const Backdrop = ({CloseModal}) => {
    return (
        <BackdropStyles onClick={CloseModal} />
    );
};

Backdrop.propTypes = {
    CloseModal: PropTypes.func.isRequired,
};