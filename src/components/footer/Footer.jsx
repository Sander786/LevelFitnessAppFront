import { useContext } from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';

import HoursOfWorksImgSrc from "../images/footerImgs/WorkingHours.png";
import LocationImgSrc from "../images/footerImgs/Location.png";
import PhoneImgSrc from "../images/footerImgs/Phone.png";
import InstaImgSrc from "../images/footerImgs/insta.png";


const FooterHover = styled.section`
background-color: #000;
color: #fff;
display: flex;
flex-direction: column;
align-items: center; 
justify-content: center;
padding: 50px 50px 10px 50px; 
`;

const FooterUl = styled.ul`
display: flex;
flex-wrap: wrap;
align-items: center; 
justify-content: space-around;
border: 1px solid #E7490F;
margin-bottom: 25px;
`;

const FooterUlLi = styled.li`
margin: 10px;
`;

const FooterUlLiSection = styled.section`
display: flex;
align-items: flex-start; 
justify-content: flex-start;
margin: 5px;
`;

export const Footer = ({ Languages, LanguageContext }) => {
    const { selectedLang } = useContext(LanguageContext);
    const Values = Languages.Footer()[selectedLang];

    return (
        <FooterHover>
            <FooterUl>
                <FooterUlLi>
                    <FooterUlLiSection>
                        <img src={HoursOfWorksImgSrc} alt="Working hours Image" style={{ marginRight: "5px" }}/>
                        <section style={{marginLeft: "5px"}}>
                            <p style={{fontSize: "18px"}}>{Values[0].WorkingHoursP1}</p>
                            <p style={{fontSize: "18px"}}>{Values[0].WorkingHoursP2}</p>
                        </section>
                    </FooterUlLiSection>
                    <FooterUlLiSection>
                        <img src={LocationImgSrc} alt="Location Image" style={{ marginRight: "5px" }}/>
                        <a href="https://www.google.com/maps/place/Fitness+Victory+Nusle/@50.0649571,14.4338882,20.5z/data=!4m15!1m8!3m7!1s0x470b947cc65e2fa5:0xaddd924224d25426!2sK%C5%99esomyslova+384%2F17,,+140+00+Praha+4-Nusle!3b1!8m2!3d50.0649969!4d14.4343472!16s%2Fg%2F11c1_sk3ws!3m5!1s0x470b947cc65e2fa5:0xd6c68d2ff4988bc6!8m2!3d50.0648968!4d14.4337357!16s%2Fg%2F1pyql1rz5?entry=ttu" style={{fontSize: "18px", marginLeft: "5px"}}>
                            {Values[0].Location}
                        </a>
                    </FooterUlLiSection>
                </FooterUlLi>
                <FooterUlLi>
                    <FooterUlLiSection>
                        <img src={PhoneImgSrc} alt="Phone Image"  style={{ marginRight: "5px" }}/>
                        <p style={{fontSize: "18px", marginLeft: "5px"}}>+420 606 076 187</p>
                    </FooterUlLiSection>
                    <FooterUlLiSection>
                        <img src={InstaImgSrc} alt="Instagram Image" style={{color: "#E7490F", marginRight: "5px"}}/>
                        <a href="https://instagram.com/loskot.a?igshid=MTNiYzNiMzkwZA==" style={{fontSize: "18px", marginLeft: "5px"}}>Instagram</a>
                    </FooterUlLiSection>
                </FooterUlLi>
                <FooterUlLi>
                    <p style={{textAlign: "center", color: "#858585"}}>{Values[0].Info1}</p>
                    <p style={{textAlign: "center", color: "#858585"}}>{Values[0].Info2}</p>
                </FooterUlLi>
            </FooterUl>
            <p style={{textAlign: "center"}}>Copyright © 2023. Level Fitness by <a href="https://github.com/Sander786">Sander786</a></p>
        </FooterHover>
    );
};

Footer.propTypes = {
    LanguageContext: PropTypes.object.isRequired,
    Languages: PropTypes.shape({
        ExampleText: PropTypes.func.isRequired,
    }).isRequired,
};