import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import AppActions from '../../actions';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const user = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const login = () => {
    if (user.current?.value !== ''
    && password.current?.value !== '') {
      // "LOGIN REQUEST"

      dispatch(AppActions.user.setUser({
        name: user.current!.value,
        token: 'asdf'
      }));

      navigate('/employees');
    }
  }

    return (
      <div className="login">
        <div className=""><span>React Challange</span></div>
        <br />

        <h2 className="">Login</h2>

        <div className="">
          <label id="user" htmlFor="user">
            User:
            <input
              ref={user}
              type="text"
              name="user"
              onCopy={(e) => e.preventDefault()}
              onPaste={(e) => e.preventDefault()}
            />
          </label>
          <br />

          <label id="password" htmlFor="password">
            Password:
            <input
              ref={user}
              type="text"
              name="user"
              onCopy={(e) => e.preventDefault()}
              onPaste={(e) => e.preventDefault()}
            />
          </label>
          <br />

          <button type="button" className="" onClick={login}> Login </button>
          <br />
        </div>
      </div>
    );
}

export default Login;