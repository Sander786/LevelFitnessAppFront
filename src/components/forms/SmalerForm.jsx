import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import styled from 'styled-components';

const FormP = styled.p`
margin: 10px 0;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 15px;
  padding: 25px;
  border: 2px solid #E7490F;
  margin-top: 0;
  border-radius: 5px;

  @media (max-width: 400px) {
    margin: 5px;
    padding: 10px;
  }
`;

const StyledSpan = styled.span`
  margin-right: 10px;

  @media (max-width: 400px) {
    margin-right: 5px;
  }
`

const BasicStyledInput = styled.input`
  height: 30px;
  border: 1px solid #000;
  border-radius: 5px;
  padding-left: 5px;
`

const StyledSubmitInput = styled.input`
  margin-top: 20px;
  padding: 9px 0;
  background-color: #E7490F;
  color: #fff;
  border: none;
  border-radius: 5px;
`

const RedP = styled.p`
  color: red;
`

export const SmallerForm = ({selectedLang, Languages, CloseModal, TrainingName}) => {
  const Values = Languages.Form()[selectedLang];
  const [countryCode, setCountryCode] = useState("+420"); 
  const { register, handleSubmit, formState: { errors } } = useForm();
  const form = useRef();

  const onSubmit = (data) => {
    // console.log(data);
    sendEmail(data);
  };

  const handleCountryCodeChange = (e) => {
    setCountryCode(e.target.value);
  };

  const sendEmail = (data) => {
    emailjs.sendForm('service_yzbyfox', 'template_8f6nnwq', form.current, 'jewTsrbLPSXlxEfGa')
      .then((result) => {
        // console.log(result.text);
        if (result.status === 200) {

          CloseModal();
        }
      }, (error) => {
        // console.log(error.text);
      });
  };

  return (
    <StyledForm
      ref={(el) => {
        form.current = el;
      }}
      onSubmit={handleSubmit(onSubmit)} 
    >
      <FormP>{Values[0].Name}</FormP>
      <BasicStyledInput {...register("firstName", { required: true, maxLength: 20, pattern: /^[A-Za-zА-Яа-яČčĎďĚěŇňŘřŠšŤťŮůŽžĚěÝýÁáÍíÉé ]+$/i })} />
      {errors.firstName && errors.firstName.type === "required" && (
        <RedP>{Values[0].NameIsRequired}</RedP>
      )}
      {errors.firstName && errors.firstName.type === "maxLength" && (
        <RedP>{Values[0].NameIn20Symbols}</RedP>
      )}
      {errors.firstName && errors.firstName.type === "pattern" && (
        <RedP>{Values[0].NameIsOnlyLetters}</RedP>
      )}

      <FormP>{Values[0].ChosenTraining}</FormP>
      <input {...register("training", 
        { required: true, maxLength: 20, pattern: /^[A-Za-zА-Яа-яČčĎďĚěŇňŘřŠšŤťŮůŽžĚěÝýÁáÍíÉé ]+$/i })} 
        style={{
          height: "30px",
          border: "1px solid #000",
          borderRadius: "5px",
          paddingLeft: "5px"
        }}
        value={TrainingName}
      />

      <FormP>{Values[0].CountryCode}</FormP>
      <select {...register("countryCode")} 
        value={countryCode} 
        onChange={handleCountryCodeChange} 
        style={{ 
          width: "100px", 
          height: "30px", 
          border: "1px solid #000", 
          borderRadius: "5px",
        }}
      >
          <option value="+380">UA</option>
          <option value="+420">CZ</option>
          <option value="+7">RU</option>
          <option value="+93">AF</option>
          <option value="+355">AL</option>
          <option value="+49">DE</option>
          <option value="+376">AD</option>
          <option value="+375">BY</option>
          <option value="+32">BE</option>
          <option value="+387">BA</option>
          <option value="+359">BG</option>
          <option value="+30">GR</option>
          <option value="+45">DK</option>
          <option value="+421">SK</option>
          <option value="+386">SI</option>
          <option value="+34">ES</option>
          <option value="+372">EE</option>
          <option value="+358">FI</option>
          <option value="+33">FR</option>
          <option value="+385">HR</option>
          <option value="+353">IE</option>
          <option value="+354">IS</option>
          <option value="+39">IT</option>
          <option value="+371">LV</option>
          <option value="+370">LT</option>
          <option value="+423">LI</option>
          <option value="+352">LU</option>
          <option value="+356">MT</option>
          <option value="+373">MD</option>
          <option value="+377">MC</option>
          <option value="+382">ME</option>
          <option value="+47">NO</option>
          <option value="+31">NL</option>
          <option value="+48">PL</option>
          <option value="+351">PT</option>
          <option value="+44">GB</option>
          <option value="+40">RO</option>
          <option value="+7">RU</option>
          <option value="+378">SM</option>
          <option value="+381">RS</option>
          <option value="+421">SK</option>
          <option value="+386">SI</option>
          <option value="+46">SE</option>
          <option value="+41">CH</option>
          <option value="+90">TR</option>
      </select>

      <FormP>{Values[0].PhoneNumber}</FormP>
      <div style={{ display: "flex", alignItems: "center" }}>
        <StyledSpan>{countryCode}</StyledSpan>
        <BasicStyledInput {...register("phoneNumber", { required: true, pattern: /^[0-9+]+$/ })} />
      </div>
      {errors.phoneNumber && errors.phoneNumber.type === "required" && (
        <RedP>{Values[0].PhoneIsRequired}</RedP>
      )}
      {errors.phoneNumber && errors.phoneNumber.type === "pattern" && (
        <RedP>{Values[0].NameIsOnlyNumbers}</RedP>
      )}

      <StyledSubmitInput type="submit" value={Values[0].Send} />
    </StyledForm>
  );
};