import styled from 'styled-components';
import PropTypes from "prop-types";
import {Backdrop} from "./Backdrop";

const TrainerModalDivStyles = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  max-width: 600px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  z-index: 2;
  border-radius: 10px;
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

const StyledDescriptionSection = styled.section`
  width: 100%;
  align-self: flex-end;
  cursor: pointer;
`;

const StyledDescriptionSection2 = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0px 20px 20px 20px;
  padding: 20px;
  border: 2px solid #E7490F;
  border-radius: 5px;

  @media (max-width: 500px) {
    margin: 0px 10px 10px 10px;
    padding: 10px;
  }
`;

const StyledImage = styled.img`
  width: 310px; 
  height: 180px; 
  margin-bottom: 15px;
  align-self: center;

  @media (max-width: 500px) {
    width: 95%;
    height: auto;
  }
`;

const BasicStyledP = styled.p`
  margin: 5px 0px;

  @media (max-width: 500px) {
    font-size: 15px;
  }
`;

const StyledP = styled(BasicStyledP)`
  margin-left: 5px;
`;


export const TrainersModal = ({Values, setShowModal, trainerImage}) => {  

    const CloseTrainerModal= () => {
        setShowModal(false)
    }

    return (
        <>
            <Backdrop CloseModal={CloseTrainerModal}/>
            <TrainerModalDivStyles>
                <CloseBtn onClick={CloseTrainerModal}>
                    <CloseBtnSpan>&times;</CloseBtnSpan>
                </CloseBtn>
                <StyledDescriptionSection>
                    <StyledDescriptionSection2>
                        <StyledImage src={trainerImage} alt="Trainer image" />
                        <BasicStyledP>{Values[0].Name}</BasicStyledP>
                        <BasicStyledP>{Values[0].Age}</BasicStyledP>
                        <BasicStyledP>{Values[0].Exp}</BasicStyledP>
                        <BasicStyledP>{Values[0].Spec}</BasicStyledP>
                        <BasicStyledP>{Values[0].About}</BasicStyledP>
                        <BasicStyledP>{Values[0].Goals}</BasicStyledP>
                        <BasicStyledP>{Values[0].Contacts}</BasicStyledP>
                        <StyledP>{Values[0].Phone}</StyledP>
                        <StyledP>{Values[0].Mail}</StyledP>
                        <BasicStyledP>{Values[0].SocMed}</BasicStyledP>
                        <StyledP>{Values[0].SocMedItg} <a style={{color: "#000"}} href="#">{Values[0].SocMedItgID}</a></StyledP>
                        <StyledP>{Values[0].SocMedFb} <a style={{color: "#000"}} href="#">{Values[0].SocMedFbID}</a></StyledP>
                    </StyledDescriptionSection2>
                </StyledDescriptionSection>
            </TrainerModalDivStyles>
        </>
    );
};

TrainersModal.propTypes = {
  trainerImage: PropTypes.string.isRequired,
  Values: PropTypes.array.isRequired,
  setShowModal: PropTypes.func.isRequired
};