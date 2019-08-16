import React, { Component } from 'react';
import { Nav } from 'reactstrap';
import PropTypes from 'prop-types';
import { AppNavbarBrand, AppSidebarToggler } from '@coreui/react';

import logo from '../../assets/img/brand/logo.png'
import sygnet from '../../assets/img/brand/logo.png'

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppNavbarBrand
          full={{ src: logo, width: 89, alt: 'batab Logo' }}
          minimized={{ src: sygnet, width: 50, alt: 'batab Logo' }}
        />
        {/*<AppSidebarToggler className="d-md-down-none" display="lg" />*/}

        <Nav className="ml-auto"></Nav>
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
