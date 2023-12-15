import { createGlobalStyle } from 'styled-components';
import { useState } from "react";
import PropTypes from "prop-types";
import { useContext } from 'react';

import { Header } from './components/header/Header';
import { Main } from './components/main/Main';
import { Footer } from './components/footer/Footer';
import { Modal } from './components/modal/Modal';
import { BigForm } from './components/forms/BigForm';

export const App = ({
  GetDataContext,
  LanguageContext,
  Languages,
  LocalizationComponent,
}) => {
  const [showModal, setShowModal] = useState(false);
  const { selectedLang } = useContext(LanguageContext);

  const OpenModal = () => {
    setShowModal(true)
  }
  
  return (
    <>
    <GlobalStyle />
    <Header LocalizationComponent={LocalizationComponent} LanguageContext={LanguageContext} Languages={Languages} OpenModal={OpenModal}/>
    {showModal && <Modal setShowModal={setShowModal} selectedLang={selectedLang} Languages={Languages} Form={BigForm}/>}
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
  font-family: 'Roboto', sans-serif !important;
}

button {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  border-color: black;
  border-style: none;
  cursor: pointer;
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