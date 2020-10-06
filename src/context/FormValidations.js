import React from 'react';
import { CPFValidation, passwordValidation, } from '../models/register';

const FormValidations = React.createContext(
  {
    cpf: CPFValidation,
    password: passwordValidation,
    name: passwordValidation,
  }
);

export default FormValidations;
