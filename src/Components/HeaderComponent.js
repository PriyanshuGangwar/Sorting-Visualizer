import React , {Component} from 'react';
import { Navbar, NavbarBrand,Button} from 'reactstrap';

class Header extends Component {
    

  render() {
    return (
      <div >
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Sorting Visualiser</NavbarBrand>
            
          </div>
        </Navbar>
        
      </div>
    );
  }
}

export default Header;