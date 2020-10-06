import { Button, TextField } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import FormValidations from '../../context/FormValidations';
import useErrors from '../../hooks/useErrors';

export default function UserData({onSubmitForm}){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validation = useContext(FormValidations);
  const [errors, validateFields, canSend] = useErrors(validation);

  return(
    <form onSubmit={(e) => {
      e.preventDefault();
      if(canSend()){
        onSubmitForm({email, password});
      }
    }}>
      <TextField
        id="email"
        name="email"
        label="Email"
        type="email"
        variant="outlined"
        fullWidth
        margin="normal"
        required
        value={email}
        onChange={(e) => {
          setEmail(e.target.value)
        }}
      />
      <TextField
        id="password"
        name="password"
        label="Password"
        type="password"
        variant="outlined"
        fullWidth
        margin="normal"
        required
        value={password}
        onChange={(e) => {
          setPassword(e.target.value)
        }}
        onBlur={validateFields}
        error={!errors.password.valid}
        helperText={errors.password.text}
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