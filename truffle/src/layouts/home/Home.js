import React, { Component } from 'react'
import '../../css/layouts/marketing.css';
import { Link } from 'react-router'
import LoginButtonContainer from '../../user/ui/loginbutton/LoginButtonContainer'
import LogoutButtonContainer from '../../user/ui/logoutbutton/LogoutButtonContainer'
import { HiddenOnlyAuth, VisibleOnlyAuth } from '../../util/wrappers.js'

// Styles
import '../../css/oswald.css'
import '../../css/open-sans.css'
import '../../css/pure-min.css'
import '../../App.css'
import '../../css/font-awesome.css'
import '../../css/grids-responsive-min.css'

class Home extends Component {
  render() {
  const OnlyAuthLinks = VisibleOnlyAuth(() =>
      <span>
        <li className="pure-menu-item">
          <Link to="/dashboard" className="pure-menu-link">Dashboard</Link>
        </li>
        <li className="pure-menu-item">
          <Link to="/profile" className="pure-menu-link">Profile</Link>
        </li>
        <LogoutButtonContainer />
      </span>
    )

    const OnlyGuestLinks = HiddenOnlyAuth(() =>
      <span>
        <LoginButtonContainer />
      </span>
    )
    
    return(
    <div>
<div className="Home">
        <nav className="navbar pure-menu pure-menu-horizontal">
          <Link to="/" className="pure-menu-heading pure-menu-link">Truffle Box</Link>
          <ul className="pure-menu-list navbar-right">
            <OnlyGuestLinks />
            <OnlyAuthLinks />
          </ul>
        </nav>

        {this.props.children}
      </div>
<div className="splash-container">
    <div className="splash">
        <h1 className="splash-head"><a  target="_blank" href="file:///home/disha/XDC01-docker-Nnodes/truffle/src/layouts/home/symptom.html"> Check Symptoms</a></h1>
        <p className="splash-subhead">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
        <p>
            <div className="navbar pure-menu pure-menu-horizontal">
          <Link to="/" className="pure-menu-heading pure-menu-link">Truffle Box</Link>
          <ul className="pure-menu-list navbar-right">
            <OnlyGuestLinks />
            <OnlyAuthLinks />
          </ul>
        </div>
        </p>
    </div>
</div>

<div className="content-wrapper">
    <div className="content">
        <h2 className="content-head is-center">Excepteur sint occaecat cupidatat.</h2>

        <div className="pure-g">
            <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">

                <h3 className="content-subhead">
                    <i className="fa fa-rocket"></i>
                    Get Started Quickly
                </h3>
                <p>
                    Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.
                </p>
            </div>
            <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                <h3 className="content-subhead">
                    <i className="fa fa-mobile"></i>
                    Responsive Layouts
                </h3>
                <p>
                    Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.
                </p>
            </div>
            <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                <h3 className="content-subhead">
                    <i className="fa fa-th-large"></i>
                    Modular
                </h3>
                <p>
                    Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.
                </p>
            </div>
            <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                <h3 className="content-subhead">
                    <i className="fa fa-check-square-o"></i>
                    Plays Nice
                </h3>
                <p>
                    Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.
                </p>
            </div>
        </div>
    </div>

    <div className="ribbon l-box-lrg pure-g">
    
        <div className="l-box-lrg is-center pure-u-1 pure-u-md-1-2 pure-u-lg-2-5">
            <img width="300" alt="File Icons" className="pure-img-responsive" src="img/common/file-icons.png"></img>
        </div>
        <div className="pure-u-1 pure-u-md-1-2 pure-u-lg-3-5">

            <h2 className="content-head content-head-ribbon">Laboris nisi ut aliquip.</h2>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor.
            </p>
        </div>
        
    </div>

    <div className="content">
        <h2 className="content-head is-center">Dolore magna aliqua. Uis aute irure.</h2>

        <div className="pure-g">
            <div className="l-box-lrg pure-u-1 pure-u-md-2-5">
                <form className="pure-form pure-form-stacked">
                    <fieldset>

                        <label for="name">Your Name</label>
                        <input id="name" type="text" placeholder="Your Name"></input>


                        <label for="email">Your Email</label>
                        <input id="email" type="email" placeholder="Your Email"></input>

                        <label for="password">Your Password</label>
                        <input id="password" type="password" placeholder="Your Password"></input>

                        <button type="submit" className="pure-button">Sign Up</button>
                    </fieldset>
                </form>
            </div>

            <div className="l-box-lrg pure-u-1 pure-u-md-3-5">
                <h4>Contact Us</h4>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat.
                </p>

                <h4>More Information</h4>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>
        </div>

    </div>

    <div className="footer l-box is-center">
        View the source of this layout to learn more. Made with love by the YUI Team.
    </div>

</div>
</div>
    )
  }
}

export default Home
/*<main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h1>Good to Go!</h1>
            <p>Your Truffle Box is installed and ready.</p>
            <h2>UPort Authentication</h2>
            <p>This particular box comes with UPort authentication built-in.</p>
            <p>NOTE: To interact with your smart contracts through UPort's web3 instance, make sure they're deployed to the Ropsten testnet.</p>
            <p>In the upper-right corner, you'll see a login button. Click it to login with UPort. There is an authenticated route, "/dashboard", that displays the UPort user's name once authenticated.</p>
            <h3>Redirect Path</h3>
            <p>This example redirects home ("/") when trying to access an authenticated route without first authenticating. You can change this path in the failureRedirectUrl property of the UserIsAuthenticated wrapper on <strong>line 9</strong> of util/wrappers.js.</p>
            <h3>Accessing User Data</h3>
            <p>Once authenticated, any component can access the user's data by assigning the authData object to a component's props.</p>
            <pre><code>
              {"// In component's constructor."}<br/>
              {"constructor(props, { authData }) {"}<br/>
              {"  super(props)"}<br/>
              {"  authData = this.props"}<br/>
              {"}"}<br/><br/>
              {"// Use in component."}<br/>
              {"Hello { this.props.authData.name }!"}
            </code></pre>
            <h3>Further Reading</h3>
            <p>The React/Redux portions of the authentication fuctionality are provided by <a href="https://github.com/mjrussell/redux-auth-wrapper" target="_blank">mjrussell/redux-auth-wrapper</a>.</p>
          </div>
        </div>
      </main>*/
