import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';

const Header = () => {
  // Our site features two visual headers, but they should be
  // grouped semantically as a single header.
  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Side />
      </MainHeader>
    </header>
  );
};

const MainHeader = styled.div`
  padding: 18px 32px;
  border-bottom: 1px solid ${COLORS.gray[300]};
  display: flex;
  align-items: baseline;
  height: 72px;
`;

const Nav = styled.nav`
  display: flex;
  gap: 48px;
  margin: 48px;
`;

/**
 * This Side component is used to center the nav bar.
 * It is tricky to center this nav bar due to the asymmetry on the page.
 * The logo exists on the left while there is blank space on the right.
 * The Side components will grow evenly on both sides due to flex: 1, which causes
 * both sides to grow at the same rate, forcing the nav bar to sit in the middle.
 */
const Side = styled.div`
  flex: 1;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;
