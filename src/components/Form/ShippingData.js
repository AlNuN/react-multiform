import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';

export default function ShippingData({onSubmitForm}) {
  const [cep, setCep] = useState('');
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSubmitForm({cep, address, number, state, city});
    }}>
      <TextField
        id="cep"
        label="CEP"
        type="number"
        variant="outlined"
        margin="normal"
        value={cep}
        onChange={(e) => {
          setCep(e.target.value)
        }}
      />
      <TextField
        id="address"
        label="Address"
        type="text"
        variant="outlined"
        fullWidth
        margin="normal"
        value={address}
        onChange={(e) => {
          setAddress(e.target.value)
        }}
      />
      <TextField
        id="number"
        label="Number"
        type="number"
        variant="outlined"
        margin="normal"
        value={number}
        onChange={(e) => {
          setNumber(e.target.value)
        }}
      />
      <TextField
        id="state"
        label="State"
        type="text"
        variant="outlined"
        margin="normal"
        value={state}
        onChange={(e) => {
          setState(e.target.value)
        }}
      />
      <TextField
        id="city"
        label="City"
        type="text"
        variant="outlined"
        margin="normal"
        value={city}
        onChange={(e) => {
          setCity(e.target.value)
        }}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
      >
        Finalizar Cadastro
      </Button>

    </form>
  );
}