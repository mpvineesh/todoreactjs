import React from 'react';

class Header extends React.Component{

  render(){
    return(
      <nav className="navbar navbar-default header">
            <div className="header-content">
              <div className="navbar-header">
                <a className="navbar-brand" href="#">Todo</a>
              </div>
            </div>
          </nav>
    );
  }
}

export default Header;
