import React from 'react';
import StarshipComponent from '../Starship'
import '@testing-library/jest-dom/extend-expect'
import {render, screen} from '@testing-library/react'
import { Starship } from '../../../generated/graphql';

describe('StarShip', () => {
  test('GIVEN no paramters then the component does not error', () => {
    render(<StarshipComponent />)
    expect(screen.getByText('Player: Player')).toBeInTheDocument()
    expect(screen.getByText('Model:')).toBeInTheDocument()
    expect(screen.getByText('HyperdriveRating:')).toBeInTheDocument()
  })

  test('GIVEN a person object correct data is displayed on screen', () => {
    const ship: Starship = {
      model: 'jon',
      hyperdriveRating: 'lots'
    }

    render(<StarshipComponent ship={ship}/>)
    expect(screen.getByText('Model: jon')).toBeInTheDocument()
    expect(screen.getByText('HyperdriveRating: lots')).toBeInTheDocument()
  })

  test('GIVEN a starship object correct data is displayed on screen', () => {
    const player = 9999;
    render(<StarshipComponent player={player}/>)
    expect(screen.getByText('Player: Player 9999')).toBeInTheDocument()
  })
})