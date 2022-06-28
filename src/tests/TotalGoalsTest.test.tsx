import React from 'react';
import { render, screen } from '@testing-library/react';
import TotalGoals from '../components/TotalGoals'

it('Check Total Goals: 8', () => {
    render(<TotalGoals totalGoals={8} />);
    const element = screen.getByText(/Total Goals: 8/i);
    expect(element).toBeInTheDocument();
});