import React, { useState } from 'react';
import { Anchor } from './Link';
import DropdownToggle from './DropdownToggle';

import NavbarBrand from './NavbarBrand';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

import {
    Collapse,
    NavbarToggler,
    Nav,
    UncontrolledDropdown,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';

import NavContainer from './NavContainer';
import Span from './Span';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <NavContainer light expand="md">
                <NavbarBrand href="/">
                    <Span>Picasso</Span>
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                                <Span>
                                    <FontAwesomeIcon icon={faUser} />
                                </Span>
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem href="/signup">
                                    Sign Up
                                </DropdownItem>
                                <DropdownItem href="/signin">
                                    Sign In
                                </DropdownItem>
                                {/* <DropdownItem divider />
                                <DropdownItem>
                                    Reset
                                </DropdownItem> */}
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <Anchor href="https://github.com/PrithviAnilK/picasso">Github</Anchor>
                    </Nav>
                </Collapse>
            </NavContainer>
        </div>
    );
}

export default Navbar;