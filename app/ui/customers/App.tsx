"use client"

import React, { useState } from 'react';

const App = () => {
  const [greeting, setGreeting] = useState<string>(
    'Hello Function Component!'
  );

  const handleChange = (event: { target: { value: React.SetStateAction<string>; }; })=>
   setGreeting(event.target.value);

  return (
    <div>
      <Headline headline={greeting}  />
    <Input value={greeting} onChangeInput={handleChange}>
    Set Greeting:
  </Input>
    </div>
  );
};

interface HeadlineProps {
    headline:string;
}

const Headline:React.FC<HeadlineProps> = ({ headline }) => (
  <div>
    <h1>{headline}</h1>
  </div>
);

interface InputProps {
  value:string;
  onChangeInput: (e:any)=>any;
  children: React.ReactNode;
}

const Input:React.FC<InputProps> = ({ value, onChangeInput, children }) => (
  <label>
    {children}
    <input type="text" value={value} onChange={onChangeInput} />
  </label>
);


export default App;