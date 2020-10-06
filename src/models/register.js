function CPFValidation(cpf){
  if(cpf.length !== 11){
    return {
            valid: false,
            text: 'CPF deve ter 11 dígitos',
          };
  }
  return { valid: true, text: '', };
}

function passwordValidation(passwd){
  if(passwd.length < 4 || passwd.length > 72){
    return {
            valid: false,
            text: 'Senha deve ter entre 4 e 72 dígitos',
          };
  }
  return { valid: true, text: '', };
}

export {
  CPFValidation,
  passwordValidation,
}
