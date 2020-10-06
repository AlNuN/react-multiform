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
      <Form />
    </Container>
  );
}
