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
          <input type="text" name="email" ref={
          register({required : 'Email is required', 
          pattern: {
            value: /^[^@]+@[^@]+\.[^@.]{2,}$/, 
          message: 'Email is not valid'
          }
          })} />
          {errors.email &&
            <p className="errorMsg">{errors.email.message}</p>
          }
        </div>
        <div className="form-control">
          <label>Password</label>
          <input type="password" name="password" ref={
            register({required: 'Password is required.', minLength: {
              value: 6,
              message: 'Password should be at-least 6 characters.'
            } 
            })}/>
          {errors.password && (
            <p className="errorMsg">{errors.password.message}</p>
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
