import React from 'react';
import './styles.css';

function App() {
  return (
    <div className="App">
      <form>
        <div className="form-control">
          <label>Email</label>
          <input type="text" name="email" /> 
        </div>
        <div className="form-control">
          <label>Password</label>
          <input type="password" name="password" />
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
