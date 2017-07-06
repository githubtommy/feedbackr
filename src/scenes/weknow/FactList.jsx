const Row = React.createClass({
  render() {
    return (
      <li
        className="list-group-item"
        onClick={() => {}}>
        {this.props.children}
      </li>
    );
  }
});


import React from 'react'

const FactList = () => (
  <ListGroup componentClass="ul">
    <Row>Custom Child 1 </Row>
    <Row>Custom Child 2 </Row>
    <Row>Custom Child 3</Row>
  </ListGroup>
)

export default FactList
