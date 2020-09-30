import React from 'react';
import './App.css';
import Form from './components/Form';
import 'fontsource-roboto';
import { Container, Typography, } from '@material-ui/core';

export default function App() {
  return (
    <Container
      component="article"
      maxWidth="sm"
    >
      <Typography
        variant="h3"
        component="h1"
        align="center"
      >
        Formulário de Cadastro
      </Typography>
      <Form 
        onSubmitForm={onSubmitForm} 
        validation={CPFValidation}
      />
    </Container>
  );
}

function onSubmitForm(data) {
  console.log(data);
}

function CPFValidation(cpf){
  if(cpf.length !== 11){
    return {
            valid: false,
            text: 'CPF deve ter 11 dígitos',
          };
  }
  return { valid: true, text: '', };
}
