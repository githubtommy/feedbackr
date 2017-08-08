import React from 'react'
import { Nav, NavItem } from 'react-bootstrap';


function handleSelect(selectedKey) {
  alert('selected ' + selectedKey);
}

const NavExample = () => (
  <Nav bsStyle="pills" activeKey={1} onSelect={handleSelect}>
    <NavItem eventKey={1} href="/home">NavItem 1</NavItem>
    <NavItem eventKey={2} title="Item">NavItem 2</NavItem>
    <NavItem eventKey={3} disabled>NavItem 3 (disabled)</NavItem>
  </Nav>
)

export default NavExample
