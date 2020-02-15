import { action } from '@storybook/addon-actions';
import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';

export default {
    title: 'Button',
    component: Button,
};

export const Default = () => <Button handleClick={action('clicked')} />;

export const Emoji = () => (
    <StyledButton onClick={action('clicked')}>
        <span role="img" aria-label="so cool">
            😀 😎
        </span>
    </StyledButton>
);

const StyledButton = styled.button`
    color: red;
`;
