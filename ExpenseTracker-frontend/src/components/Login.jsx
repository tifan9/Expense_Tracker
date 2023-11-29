import React from 'react'

function Login() {
  return (
    <div>
      <div className="page-wrapper">
        <div className="page-content--bge5">
            <div className="container">
                <div className="login-wrap">
                    <div className="login-content">
                        <div className="login-logo">
                            <a href="#">
                                <img src="images/icon/logo.png" alt="CoolAdmin"/>
                            </a>
                        </div>
                        <div className="login-form">
                            <form action="" method="post">
                                <div className="form-group">
                                    <label>Email Address</label>
                                    <input className="au-input au-input--full" type="email" name="email" placeholder="Email"/>
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input className="au-input au-input--full" type="password" name="password" placeholder="Password"/>
                                </div>
                                <div className="login-checkbox">
                                    <label>
                                        <a href="#">Forgotten Password?</a>
                                    </label>
                                </div>
                                <button className="au-btn au-btn--block au-btn--green m-b-20" type="submit">sign in</button>
                            </form>
                            <div className="register-link">
                                <p>
                                    Don't you have account?
                                    <a href="#">Sign Up Here</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    </div>
  )
}

export default Login
