import React from 'react';
import { 
  Button, TextField, Switch, FormControlLabel
} from '@material-ui/core';

export default function Form() {
  return(
  <form>
    <TextField 
      id="nome" 
      label="Nome" 
      variant="outlined"
      fullWidth
      margin="normal"
    />

    <TextField 
      id="sobrenome"
      label="Sobrenome"
      variant="outlined"
      fullWidth
      margin="normal"
    />

    <TextField 
      id="cpf"
      label="CPF"
      variant="outlined"
      fullWidth
      margin="normal"
    />

    <FormControlLabel
      label="Promoções"
      control={
        <Switch
          name="promoções"
          color="primary"
          defaultChecked
        />
      }
    />

    <FormControlLabel
      label="Novidades"
      control={
        <Switch
          name="novidades"
          color="primary"
          defaultChecked
        />
      }
    />

    <Button 
      type="submit"
      variant="contained"
      color="primary"
    >
      Cadastrar
    </Button>
  </form>
  );
}