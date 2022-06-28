import React from 'react';
import { render, screen } from '@testing-library/react';
import Match from '../components/Match'

it('Check Match with Score 3:0', () => {
    render(<Match homeTeam={"Germany"} awayTeam={"Poland"}  homeScore={2} awayScore={2} />);
    const element = screen.getByText(/Germany vs Poland/i);
    const element2 = screen.getByText(/2:2/i);
    expect(element).toBeInTheDocument();
    expect(element2).toBeInTheDocument();
});