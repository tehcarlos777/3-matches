import React from 'react';
import { render, screen } from '@testing-library/react';
import Container from "../components/Container";

it('Check Germany vs Poland text', () => {
    render(<Container/>);
    const element = screen.getByText(/Germany vs Poland/i);
    expect(element).toBeInTheDocument();
});

it('Check Brazil vs Mexico text', () => {
    render(<Container/>);
    const element = screen.getByText(/Brazil vs Mexico/i);
    expect(element).toBeInTheDocument();
});

it('Check Argentina vs Uruguay text', () => {
    render(<Container/>);
    const element = screen.getByText(/Argentina vs Uruguay/i);
    expect(element).toBeInTheDocument();
});