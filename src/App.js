import React from 'react';
import './styles.css';
import { useForm } from 'react-hook-form';


function App() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  } 
  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label>Email</label>
          <input type="text" name="email" ref={register} /> 
        </div>
        <div className="form-control">
          <label>Password</label>
          <input type="password" name="password" ref={register}/>
        </div>
        <div className="form-control">
          <label></label>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}

export default App;
