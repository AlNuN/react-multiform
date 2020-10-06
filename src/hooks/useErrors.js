import { useState } from 'react';


export default function useErrors(validation) {
  const initialState = createInitialState(validation);
  const [errors, setErrors] = useState(initialState);
  function validateFields(event) {
    const {name, value} = event.target;
    const validated = validation[name](value);
    setErrors({ ...errors, [name]: validated });
  }

  function canSend() {
    for (let field in errors) {
      if (!errors[field].valid) return false;
    }
    return true;
  }

  return [errors, validateFields, canSend];
}

function createInitialState(validation) {
  const initialState = {};
  for (let field in validation) {
    initialState[field] = { valid: true, text: '' };
  }
  return initialState;
}
