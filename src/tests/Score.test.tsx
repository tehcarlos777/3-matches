import React from 'react';
import { render, screen } from '@testing-library/react';
import Score from '../components/Score'

it('Check Score 3:0', () => {
    render(<Score homeScore={3} awayScore={0} />);
    const element = screen.getByText(/3:0/i);
    expect(element).toBeInTheDocument();
});