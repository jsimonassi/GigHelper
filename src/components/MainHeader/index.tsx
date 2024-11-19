import React from 'react';
import { StyledTitle } from './styles';

interface MainHeaderProps {
    title: string;
}

export const MainHeader = ({title}: MainHeaderProps) => {
    return (
        <StyledTitle>{title}</StyledTitle>
    );
};
