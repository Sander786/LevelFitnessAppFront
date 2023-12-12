import styled from 'styled-components';
import PropTypes from "prop-types";
import { useContext } from "react";
import { BigForm } from '../forms/BigForm';


const ModalDivStyles = styled.div`
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: 80%;
max-width: 600px;
height: 60%;
max-height: 450x;
background-color: #fff;
display: flex;
flex-direction: column;
box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
z-index: 2;
`;

const CloseBtn = styled.div`
position: absolute;
top: 10px;
right 10px;
cursor: pointer;
margin-left: auto;
z-index: 3;
`;

const CloseBtnSpan = styled.span`
display: block;
font-size: 2rem;
font-weight: bold;
transition: transform 0.2s ease;

&:hover {
    transform: scale(1.2);
}
`;

export const Modal = ({Languages, LanguageContext, setShowModal}) => {
    const { selectedLang } = useContext(LanguageContext);
    const CloseModal= () => {
        setShowModal(false)
    }

    return (
        <div>
            <Backdrop CloseModal={CloseModal}/>
            <ModalDivStyles>
                <CloseBtn onClick={CloseModal}>
                    <CloseBtnSpan>&times;</CloseBtnSpan>
                </CloseBtn>
                <BigForm selectedLang={selectedLang} Languages={Languages} CloseModal={CloseModal}/>
            </ModalDivStyles>
        </div>
    );
};

const BackdropStyles = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.5);
z-index: 1;
`;

const Backdrop = ({CloseModal}) => {
    
    return (
        <BackdropStyles onClick={CloseModal} />
    );
};

Modal.propTypes = {
    LanguageContext: PropTypes.object.isRequired,
    Languages: PropTypes.object.isRequired,
};