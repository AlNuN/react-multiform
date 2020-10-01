import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';

export default function UserData({onSubmitForm}){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return(
    <form onSubmit={(e) => {
      e.preventDefault();
      onSubmitForm({email, password});
    }}>
      <TextField
        id="email"
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