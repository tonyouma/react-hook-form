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
          <input type="text" name="email" ref={register({required : true, pattern: /^[^@]+@[^@]+\.[^@.]{2,}$/})} />
          {errors.email && errors.email.type === "required" && (
            <p className="errorMsg">Email is required</p>
          )}
          {errors.email  && errors.email.type === "pattern" && (
            <p className="errorMsg">Email is not valid</p>
          )}
        </div>
        <div className="form-control">
          <label>Password</label>
          <input type="password" name="password" ref={register({required: true, minLength: 6})}/>
          {errors.password && errors.password.type === "minLength" && (
            <p className="errorMsg">Password should be at-least 6 characters</p>
          ) }
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
