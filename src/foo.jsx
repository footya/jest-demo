import React from 'react';
import PropTypes from 'prop-types';

const defaultProps = {};

export default class Foo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	isChecked: false,
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange() {
  	this.setState({
  		isChecked: !this.state.isChecked
  	});
  }
  render() {
    return (
      <div className="foo" >
      	<h2>title{this.props.name}</h2>
      	<label>
	        <input
	          type="checkbox"
	          checked={this.state.isChecked}
	          onChange={this.onChange}
	        />
	        {this.state.isChecked ? 'on' : 'off'}
	    </label>
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