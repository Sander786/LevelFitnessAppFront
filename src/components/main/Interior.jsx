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
padding: 50px 100px 50px; 
`;

const ImagesSection = styled.section`
display: flex;
flex-wrap: wrap;
align-items: center; 
justify-content: space-around;
margin-top: 15px;
// padding: 50px 100px 50px; 
`;


export const Interior = ({selectedLang, Languages}) => {
    const Values = Languages.Interior()[selectedLang];
    return (
        <InteriorHover>
            <h1 style={{fontSize: "36px", marginBottom:"15px"}}>{Values[0].InteriorTitle}</h1>
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

const ImageComponent = ({interiorImg}) => {
    return (
        <img style={{margin: "15px 0px"}} src={interiorImg} alt="Interior image" />
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