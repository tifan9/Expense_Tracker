import React from 'react'

function Home() {
  return (
    <div>
      <header className="header-desktop">
                <div className="section__content section__content--p30">
                    <div className="container-fluid">
                        <div className="header-wrap">
                            <form className="form-header" action="" method="POST">
                                <input className="au-input au-input--xl" type="text" name="search" placeholder="Search for datas &amp; reports..." />
                                <button className="au-btn--submit" type="submit">
                                    <i className="zmdi zmdi-search"></i>
                                </button>
                            </form>
                            <div className="header-button">
                                <div className="account-wrap">
                                    <div className="account-item clearfix js-item-menu">
                                        <div className="image">
                                            <img src="images/icon/avatar-01.jpg" alt="John Doe" />
                                        </div>
                                        <div className="content">
                                            <a className="js-acc-btn" href="#">john doe</a>
                                        </div>
                                        <div className="account-dropdown js-dropdown">
                                            <div className="info clearfix">
                                                <div className="image">
                                                    <a href="#">
                                                        <img src="images/icon/avatar-01.jpg" alt="John Doe" />
                                                    </a>
                                                </div>
                                                <div className="content">
                                                    <h5 className="name">
                                                        <a href="#">john doe</a>
                                                    </h5>
                                                    <span className="email">johndoe@example.com</span>
                                                </div>
                                            </div>
                                            <div className="account-dropdown__body">
                                                <div className="account-dropdown__item">
                                                    <a href="#">
                                                        <i className="zmdi zmdi-account"></i>Account</a>
                                                </div>
                                                <div className="account-dropdown__item">
                                                    <a href="#">
                                                        <i className="zmdi zmdi-settings"></i>Setting</a>
                                                </div>
                                                <div className="account-dropdown__item">
                                                    <a href="#">
                                                        <i className="zmdi zmdi-money-box"></i>Billing</a>
                                                </div>
                                            </div>
                                            <div className="account-dropdown__footer">
                                                <a href="#">
                                                    <i className="zmdi zmdi-power"></i>Logout</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
    </div>
  )
}

export default Home
