import styled from 'styled-components';
import PropTypes from "prop-types";
import {Backdrop} from "./Backdrop";

const ModalDivStyles = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 800px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  z-index: 2;
`;

const CloseBtn = styled.div`
  width: 30px;
  align-self: flex-end;
  cursor: pointer;
`;

const CloseBtnSpan = styled.span`
  cursor: pointer;
  display: block;
  color: #000;
  font-size: 2rem;
  font-weight: bold;
  transition: transform 0.2s;
  text-align: center;

  &:hover {
    transform: scale(1.2);
  }

  @media (max-width: 500px) {
    font-size: 1.5rem;
  }
`;

export const Modal = ({Languages, selectedLang, setShowModal, Form, TrainingName}) => {
    const CloseModal= () => {
        setShowModal(false)
    }

    return (
        <>
            <Backdrop CloseModal={CloseModal}/>
            <ModalDivStyles>
                <CloseBtn onClick={CloseModal}>
                    <CloseBtnSpan>&times;</CloseBtnSpan>
                </CloseBtn>
                <section style={{width: "100%"}}>
                    <Form selectedLang={selectedLang} Languages={Languages} CloseModal={CloseModal} TrainingName={TrainingName} />
                </section>
            </ModalDivStyles>
        </>
    );
};

Modal.propTypes = {
  Languages: PropTypes.shape({
    ExampleText: PropTypes.func.isRequired,
  }).isRequired,
  selectedLang: PropTypes.string.isRequired,
  setShowModal: PropTypes.func.isRequired,
  Form: PropTypes.func.isRequired,
  TrainingName: PropTypes.string,
};