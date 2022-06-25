import styled from 'styled-components';

interface ButtonProps{
    color: string
}

export const Container = styled.button`
    background-color:  ${({ color }) => color};

    padding: 0.5rem;

    border-radius: 5px;
`;

export const Title = styled.h1`
    font-family:  ${({ theme }) => theme.fonts.secondary};
    font-size: 0.825rem;
    color:  ${({ theme }) => theme.colors.basic.white}
`;
