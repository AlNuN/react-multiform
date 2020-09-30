import React, { useState } from 'react';
import { 
  Button, TextField, Switch, FormControlLabel
} from '@material-ui/core';

export default function Form({onSubmitForm, validation}) {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [cpf, setCpf] = useState('');
  const [sales, setSales] = useState(true);
  const [news, setNews] = useState(true);
  const [errors, setErrors] = useState({
    cpf: {
      valid: true,
      text: '',
    },
  });

  return(
  <form
    onSubmit={(e) =>{
      e.preventDefault();
      onSubmitForm({name, surname, cpf, sales, news});
    }}
  >
    <TextField 
      id="nome" 
      label="Nome" 
      variant="outlined"
      fullWidth
      margin="normal"
      value={name}
      onChange={(e) => {
        setName(e.target.value);
      }}
    />

    <TextField 
      id="sobrenome"
      label="Sobrenome"
      variant="outlined"
      fullWidth
      margin="normal"
      value={surname}
      onChange={(e) => {
        setSurname(e.target.value);
      }}
    />

    <TextField 
      id="cpf"
      label="CPF"
      variant="outlined"
      fullWidth
      margin="normal"
      error={!errors.cpf.valid}
      helperText={errors.cpf.text}
      onBlur={(e) => {
        setErrors({...errors, cpf: validation(e.target.value) });
      }}
      value={cpf}
      onChange={(e) => {
        setCpf(e.target.value);
      }}
    />

    <FormControlLabel
      label="Promoções"
      control={
        <Switch
          name="promoções"
          color="primary"
          checked={sales}
          onChange={(e) => {
            setSales(e.target.checked);
          }}
        />
      }
    />

    <FormControlLabel
      label="Novidades"
      control={
        <Switch
          name="novidades"
          color="primary"
          checked={news}
          onChange={(e) => {
            setNews(e.target.checked);
          }}
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