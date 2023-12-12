import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

import { Link } from 'react-router-dom';

import'./login.css'

const Login = () => {
        const [validated, setValidated] = useState(false);
      
        const handleSubmit = (event) => {
          const form = event.currentTarget;
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
      
          setValidated(true);
        };
  return (
    <div className="login-root">
    <div
      className="box-root flex-flex flex-direction--column"
      style={{ minHeight: "100vh", flexGrow: 1 }}
    >
      <div className="loginbackground box-background--white padding-top--64">
        <div className="loginbackground-gridContainer">
          <div
            className="box-root flex-flex"
            style={{ gridArea: "top / start / 8 / end" }}
          >
            <div
              className="box-root"
              style={{
                backgroundImage:
                  "linear-gradient(white 0%, rgb(247, 250, 252) 33%)",
                flexGrow: 1
              }}
            ></div>
          </div>
          <div
            className="box-root flex-flex"
            style={{ gridArea: "4 / 2 / auto / 5" }}
          >
            <div
              className="box-root box-divider--light-all-2 animationLeftRight tans3s"
              style={{ flexGrow: 1 }}
            />
          </div>
          <div
            className="box-root flex-flex"
            style={{ gridArea: "6 / start / auto / 2" }}
          >
            <div
              className="box-root box-background--blue800"
              style={{ flexGrow: 1 }}
            />
          </div>
          <div
            className="box-root flex-flex"
            style={{ gridArea: "7 / start / auto / 4" }}
          >
            <div
              className="box-root box-background--blue animationLeftRight"
              style={{ flexGrow: 1 }}
            />
          </div>
          <div
            className="box-root flex-flex"
            style={{ gridArea: "8 / 4 / auto / 6" }}
          >
            <div
              className="box-root box-background--gray100 animationLeftRight tans3s"
              style={{ flexGrow: 1 }}
            />
          </div>
          <div
            className="box-root flex-flex"
            style={{ gridArea: "2 / 15 / auto / end" }}
          >
            <div
              className="box-root box-background--cyan200 animationRightLeft tans4s"
              style={{ flexGrow: 1 }}
            />
          </div>
          <div
            className="box-root flex-flex"
            style={{ gridArea: "3 / 14 / auto / end" }}
          >
            <div
              className="box-root box-background--blue animationRightLeft"
              style={{ flexGrow: 1 }}
            />
          </div>
          <div
            className="box-root flex-flex"
            style={{ gridArea: "4 / 17 / auto / 20" }}
          >
            <div
              className="box-root box-background--gray100 animationRightLeft tans4s"
              style={{ flexGrow: 1 }}
            />
          </div>
          <div
            className="box-root flex-flex"
            style={{ gridArea: "5 / 14 / auto / 17" }}
          >
            <div
              className="box-root box-divider--light-all-2 animationRightLeft tans3s"
              style={{ flexGrow: 1 }}
            />
          </div>
        </div>
      </div>
      <div
        className="box-root padding-top--24 flex-flex flex-direction--column"
        style={{ flexGrow: 1, zIndex: 9 }}
      >
        <div className="box-root padding-top--48 padding-bottom--24 flex-flex flex-justifyContent--center">
        </div>
        <div className="formbg-outer">
          <div className="formbg">
            <div className="formbg-inner padding-horizontal--48">
              <span className="padding-bottom--15">SIGN IN TO YOUR ACCOUNT :</span>
              <form id="stripe-login">
                <div className="field padding-bottom--24">
                  <label htmlFor="email">EMAIL :</label>
                  <input type="email" name="email" />
                </div>
                <div className="field padding-bottom--24">
                  <div className="grid--50-50">
                    <label htmlFor="password">PASSWORD :</label>
                    <div className="reset-pass">
                    </div>
                  </div>
                  <input type="password" name="password" />
                </div>
                <div className="field field-checkbox padding-bottom--24 flex-flex align-center">
                  <label htmlFor="checkbox">
                    <input type="checkbox" name="checkbox" /> STAY SIGNED IN FOR A WEEK
                  </label>
                </div>
                <div className="bouton">
                  <Button type="submit">  
      <Link className='link' to={'/list'}>
  SUBMIT
</Link>
      </Button>
                </div>
                
              </form>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default Login

