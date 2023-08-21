const content = document.querySelector('.content');

const createFormField = (labelText, inputType, inputId, inputName) => {
  const fieldContainer = document.createElement('div');
  
  const label = document.createElement('label');
  label.setAttribute('for', inputId);
  label.textContent = labelText;
  fieldContainer.appendChild(label);
  
  const input = document.createElement('input');
  input.setAttribute('type', inputType);
  input.setAttribute('id', inputId);
  input.setAttribute('name', inputName);
  fieldContainer.appendChild(input);
  
  return fieldContainer;
};

const createForm = () => {
  const form = document.createElement('form');
  form.setAttribute('id', 'form');
  
  const formFieldData = [
      ['First Name ', 'text', 'firstName', 'firstName'],
      ['Last Name ', 'text', 'lastName', 'lastName'],
      ['Email ', 'email', 'userEmail', 'userEmail'],
      ['Country ', 'text', 'country', 'country'],
      ['ZIP Code ', 'text', 'zipCode', 'zipCode'],
      ['Password ', 'password', 'password', 'password'],
      ['Password Confirm ', 'password', 'passwordConfirm', 'passwordConfirm']
  ];
  
  for (let i = 0; i < formFieldData.length; i++) {
    const formField = createFormField(...formFieldData[i]);
    form.appendChild(formField);
  }

  content.appendChild(form);
};

createForm();