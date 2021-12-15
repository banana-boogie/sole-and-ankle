import React from 'react';
import styled from 'styled-components/macro';

import SHOES from '../../data';
import ShoeCard from '../ShoeCard';

const ShoeGrid = () => {
  return (
    <Wrapper>
      {SHOES.map((shoe) => (
        <ShoeWrapper key={shoe.slug}>
          <ShoeCard {...shoe} />
        </ShoeWrapper>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: 36px;
  flex-wrap: wrap;
`;

/**
 * This wrapper is used to store the flex related styles
 * for each Shoe from ShoeCard.
 * This way is preferred because it enables the ShoeCard component to be
 * re-used in a different context (i.e. other than flexbox)
 */
const ShoeWrapper = styled.div`
  max-width: 340px;
  flex: 1 0 340px;
`;

export default ShoeGrid;
