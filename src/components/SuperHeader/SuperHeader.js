import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import SearchInput from '../SearchInput';
import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';

const SuperHeader = () => {
  return (
    <Wrapper>
      <MarketingMessage>
        Free shipping on domestic orders over $75!
      </MarketingMessage>
      <SearchInput />
      <HelpLink href="/help">Help</HelpLink>
      <UnstyledButton>
        <Icon id="shopping-bag" strokeWidth={1} />
      </UnstyledButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-size: 0.875rem;
  color: ${COLORS.gray[300]};
  background-color: ${COLORS.gray[900]};
  display: flex;
  align-items: center;
  height: 40px;
  padding-left: 32px;
  padding-right: 32px;
  gap: 24px; /* adds space between the elements*/
`;

const MarketingMessage = styled.span`
  color: ${COLORS.white};
  font-size: 14 /14 rem;

  margin-right: auto; /* auto is a greedy value and will eat all of the space*/
`;

const HelpLink = styled.a`
  color: inherit;
  text-decoration: none;
  outline-offset: 2px;

  x &:not(:focus-visible) {
    outline: none;
  }
`;

export default SuperHeader;
