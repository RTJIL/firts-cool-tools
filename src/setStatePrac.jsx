import { useState } from 'react';

export default function SyncedInputs() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const fullName = [name, surname].filter(Boolean).join(' ');

  function handleInputChange(setter) {
  return (e) => setter(e.target.value);
}

  return (
    <>
      <Input label="Name" text={name} onType={handleInputChange(setName)} placeholder="Enter name"/>
      <Input label="Surname" text={surname} onType={handleInputChange(setSurname)} placeholder="Enter name"/>
      <h1>FullName: {fullName}</h1>
    </>
  );
}

function Input({ label, text, onType, placeholder }) {
  return (
    <label>
      {label} <input value={text} onChange={onType} placeholder={placeholder} />
    </label>
  );
}
