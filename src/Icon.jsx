/**
 * Icon Component for uxcore
 * @author eternalsky
 *
 * Copyright 2015-2016, Uxcore Team, Alinw.
 * All rights reserved.
 */
const React = require('react');
const classnames = require('classnames');

class Icon extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { name, className } = this.props;
    return (
      <icon
        className={classnames(`uxcore-icon uxicon-${name}`, {
          [className]: !!className,
        })}
      />
    );
  }
}

Icon.defaultProps = {
  name: 'shezhi',
};


// http://facebook.github.io/react/docs/reusable-components.html
Icon.propTypes = {
  name: React.PropTypes.string,
  className: React.PropTypes.string,
};

Icon.displayName = 'Icon';

module.exports = Icon;
