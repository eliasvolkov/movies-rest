import React from 'react';
import { INavLink } from 'types/links';
import { StyledLink, Wrapper } from './Navigation.styles';

interface INavigationProps {
    links: INavLink[];
}

export const Navigation: React.FC<INavigationProps> = ({ links }: INavigationProps) => {
    return (
        <Wrapper>
            {links.map(link => (
                <StyledLink to={link.url} exact={link.isExact || false} key={link.url}>
                    {link.label}
                </StyledLink>
            ))}
        </Wrapper>
    );
};
