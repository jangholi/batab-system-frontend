import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem } from 'reactstrap';
import PropTypes from 'prop-types';
import { AppNavbarBrand, AppSidebarToggler, AppHeaderDropdown } from '@coreui/react';

import logo from '../../assets/img/brand/logo.png'
import sygnet from '../../assets/img/brand/logo.png'

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
      render() {
        return (
          <React.Fragment>
            <AppSidebarToggler className="d-lg-none" display="md" mobile />
            <AppNavbarBrand
              full={{ src: logo, width: 89, alt: 'batab Logo' }}
              minimized={{ src: sygnet, width: 50, alt: 'batab Logo' }}
            />
            <AppSidebarToggler className="d-md-down-none" display="lg" />

            <Nav className="ml-auto"></Nav>
          <Nav navbar>
              <AppHeaderDropdown direction="down">
                  <DropdownToggle nav>
                      <i className='fa fa-user'></i>
                  </DropdownToggle>
                  <DropdownMenu>
                      <Link to='/login' class='logout'>
                        <DropdownItem ><i className="fa fa-lock"></i>&nbsp;خروج&nbsp;</DropdownItem>
                      </Link>
                  </DropdownMenu>
              </AppHeaderDropdown>
          </Nav>
          </React.Fragment>
        );
      }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
