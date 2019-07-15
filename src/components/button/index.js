import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './index.less';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: this.props.loading
    };

    this.handleClick = this.handleClick.bind(this);
  }
  
  size2Classname(size) {
    switch (size) {
      case 'large':
        return 'lg';
      case 'small':
        return 'sm';
      default:
        return '';
    }
  }

  handleClick(e) {
    const { loading } = this.state;
    const { onClick } = this.props;
    if (!!loading) {
      return;
    }
    if (onClick) {
      onClick(e);
    }
  };

  render() {
    let { type, icon, disabled, loading, size, shape, onClick, className, children }= this.props;

    let sizeCls = this.size2Classname(size);

    const classes = classNames(className, {
      btn: true,
      [`btn-${type}`]: type,
      loading: loading,
      [`btn-${sizeCls}`]: sizeCls,
      [`btn-${shape}`]: shape,
    });

    return (
      <button
        className={classes}
        disabled={disabled}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
};

Button.propTypes = {
  type: PropTypes.oneOf(['primary', 'success', 'warning', 'danger']),
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  size: PropTypes.oneOf(['large', 'default', 'small']),
  shape: PropTypes.oneOf(['ghost', 'circle', 'block']),
  onClick: PropTypes.func,
};

export default Button;
