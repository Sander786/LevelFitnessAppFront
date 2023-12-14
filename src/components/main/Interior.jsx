import PropTypes from "prop-types";
import styled from 'styled-components';
import InteriorImage1 from "../images/interior/01Interior.png";
import InteriorImage2 from "../images/interior/02Interior.png";
import InteriorImage3 from "../images/interior/03Interior.png";
import InteriorImage4 from "../images/interior/04Interior.png";
import InteriorImage5 from "../images/interior/05Interior.png";
import InteriorImage6 from "../images/interior/06Interior.png";

const InteriorHover = styled.section`
  background-color: #fff;
  color: #000;
  display: flex;
  flex-direction: column;
  align-items: flex-start; 
  padding: 50px 100px; 

  @media (max-width: 1200px) {
    padding: 25px 50px;
  }

  @media (max-width: 1000px) {
    padding: 25px;
  }

  @media (max-width: 400px) {
    padding: 5px;
  }
`;

const ImagesSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center; 
  justify-content: space-around;
  margin-top: 15px;
  padding: 50px 100px;
  
  @media (max-width: 1200px) {
    padding: 25px 50px;
  }

  @media (max-width: 1000px) {
    padding: 20px;
  }

  @media (max-width: 400px) {
    padding: 0;
  }
`;

const BasicBigP = styled.p`
  font-weight: bold;
  font-size: 36px;
  margin-bottom: 15px;

  @media (max-width: 1000px) {
    font-size: 30px;
  }

  @media (max-width: 400px) {
    font-size: 20px;
  }
`;


export const Interior = ({selectedLang, Languages}) => {
    const Values = Languages.Interior()[selectedLang];
    return (
        <InteriorHover>
            <BasicBigP>{Values[0].InteriorTitle}</BasicBigP>
            <ImagesSection>
                <ImageComponent interiorImg={InteriorImage1}/>
                <ImageComponent interiorImg={InteriorImage3}/>
                <ImageComponent interiorImg={InteriorImage5}/>
                <ImageComponent interiorImg={InteriorImage2}/>
                <ImageComponent interiorImg={InteriorImage4}/>
                <ImageComponent interiorImg={InteriorImage6}/>
            </ImagesSection>
        </InteriorHover>
    );
    
};

const StyledImg = styled.img`
  margin: 15px 0px;

  @media (max-width: 400px) {
    height: 200px;
    width: auto;
  }
`;


const ImageComponent = ({interiorImg}) => {
    return (
        <StyledImg src={interiorImg} alt="Interior image" />
    );
}

Interior.propTypes = {
    Languages: PropTypes.shape({
        ExampleText: PropTypes.func.isRequired,
    }).isRequired,
    selectedLang: PropTypes.string.isRequired,
};

ImageComponent.propTypes = {
    interiorImg: PropTypes.string.isRequired,
};