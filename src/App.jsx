import styled, { createGlobalStyle, keyframes } from 'styled-components';
import { Post } from "./components/api/Post";
import { Header } from './components/header/Header';
import { Main } from './components/main/Main';
import { Footer } from './components/footer/Footer';
import PropTypes from "prop-types";
import { useState } from "react";
import { Modal } from './components/modal/Modal';

export const App = ({
  GetDataContext,
  LanguageContext,
  Languages,
  LocalizationComponent,
}) => {
  const [showModal, setShowModal] = useState(false);

  Post();

  const OpenModal = () => {
    setShowModal(true)
  }
  
  return (
    <>
    <GlobalStyle />
    <Header LocalizationComponent={LocalizationComponent} LanguageContext={LanguageContext} Languages={Languages} OpenModal={OpenModal}/>
    {showModal && <Modal setShowModal={setShowModal} LanguageContext={LanguageContext} Languages={Languages}/>}
    <Main Languages={Languages} LanguageContext={LanguageContext} GetDataContext={GetDataContext} OpenModal={OpenModal}/>
    <Footer Languages={Languages} LanguageContext={LanguageContext}/>
    </>
  );
};

App.propTypes = {
  GetDataContext: PropTypes.object.isRequired,
  LanguageContext: PropTypes.object.isRequired,
  Languages: PropTypes.object.isRequired,
  LocalizationComponent: PropTypes.elementType.isRequired,
};

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  font-family: Roboto;
}

ul {
  padding: 0;
}

li{
  list-style: none;
}

a {
  text-decoration: none;
  color: #fff;
}

body {
  min-height: 100vh;
  background: #fff;
  display: block;
}
`