import React, { useState, useContext } from 'react';
import { 
  Button, TextField, Switch, FormControlLabel
} from '@material-ui/core';
import FormValidations from '../../context/FormValidations';
import useErrors from '../../hooks/useErrors';

export default function PersonalData({onSubmitForm}) {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [cpf, setCpf] = useState('');
  const [sales, setSales] = useState(true);
  const [news, setNews] = useState(true);

  const validation = useContext(FormValidations);
  const [errors, validateFields, canSend] = useErrors(validation);

  return(
  <form
    onSubmit={(e) =>{
      e.preventDefault();
      if(canSend()){
        onSubmitForm({name, surname, cpf, sales, news});
      }
    }}
  >
    <TextField 
      id="nome" 
      name="name"
      label="Nome" 
      variant="outlined"
      fullWidth
      margin="normal"
      value={name}
      onChange={(e) => {
        setName(e.target.value);
      }}
      onBlur={validateFields}
      error={!errors.name.valid}
      helperText={errors.name.text}
    />

    <TextField 
      id="sobrenome"
      name="sobrenome"
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
      name="cpf"
      label="CPF"
      variant="outlined"
      fullWidth
      margin="normal"
      value={cpf}
      onChange={(e) => {
        setCpf(e.target.value);
      }}
      onBlur={validateFields}
      error={!errors.cpf.valid}
      helperText={errors.cpf.text}
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
      Próximo
    </Button>
  </form>
  );
}