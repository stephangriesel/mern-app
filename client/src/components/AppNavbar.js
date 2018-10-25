/* Reactstrap documentation: https://reactstrap.github.io/components/navbar/*/

import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';

class AppNavBar extends Component {
    state = {
            isOpen: false
        }
        toggle = () => {
            this.setSate({
                isOpen: !this.state.isOpen
            });
        }

        render() {
            return(
                <div>
                <Navbar color="dark" dark expand="sm" className="mb5">
                <Container>
                    <NavbarBrand href="/">
                    ShoppingList
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="https://www.stephangriesel.com">
                        Personal Page
                        </NavLink>
                    </NavItem>
                    </Nav>
                    </Collapse>
                </Container>
                </Navbar>
            </div>
            );
            
        }
    }

export default AppNavBar;