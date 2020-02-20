import React from 'react';
import { addDecorator } from '@storybook/react';
import { GlobalStyle } from '../src/globalStyles';

addDecorator(story => (
  <>
    <GlobalStyle />
    {story()}
  </>
));