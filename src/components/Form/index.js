import { Step, StepLabel, Stepper, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import PersonalData from './PersonalData';
import ShippingData from './ShippingData';
import UserData from './UserData';

export default function Form() {
  const [currentPhase, setCurrentPhase] = useState(0);
  const [data, setCollectedData] = useState({});
  useEffect(() => {
    if(currentPhase === forms.length -1 ){
      console.log(data);
    }
  })

  const forms = [
    <UserData
      onSubmitForm={collectData}
    />,
    <PersonalData 
      onSubmitForm={collectData} 
    />,
    <ShippingData 
      onSubmitForm={collectData}
    />,
    <Typography variant="h5">Obrigado pelo Cadastro!</Typography>
  ];

  function collectData(newData){
    setCollectedData({...data, ...newData});
    next();
  }

  function next() {
    setCurrentPhase(currentPhase + 1);
  }

  return (
    <>
      <Stepper activeStep={currentPhase}>
        <Step><StepLabel>Login</StepLabel></Step>
        <Step><StepLabel>Pessoal</StepLabel></Step>
        <Step><StepLabel>Entrega</StepLabel></Step>
        <Step><StepLabel>Finalização</StepLabel></Step>
      </Stepper>
      {forms[currentPhase]} 
    </>
  );
}
