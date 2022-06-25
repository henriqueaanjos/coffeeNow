import React from 'react';
import { ButtonHTMLAttributes } from 'react';

import {
    Container,
    Title
} from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    title: string,
    color: string
}

export const Button = ({title, color, ...rest}: ButtonProps) => {
    return(
        <Container {...rest} color={color}>
            <Title>{title}</Title>
        </Container>
    );
}