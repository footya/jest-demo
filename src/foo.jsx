import React from 'react';
import PropTypes from 'prop-types';

const defaultProps = {};

export default class Foo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="foo" >
      	<h2>title{this.props.name}</h2>
      </div>
    );
  }
}

Foo.propTypes = {
	name: PropTypes.string,
};
Foo.defaultProps = {
	name: 'footya',
};