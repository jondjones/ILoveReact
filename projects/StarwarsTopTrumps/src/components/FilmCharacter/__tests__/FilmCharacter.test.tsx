import React from 'react';
import { FilmCharacter } from '../FilmCharacter'
import '@testing-library/jest-dom/extend-expect'
import {render, screen} from '@testing-library/react'
import { Person } from '../../../generated/graphql';

describe('FilmCharacter', () => {
  test('GIVEN no paramters then the component does not error', () => {
    render(<FilmCharacter />)
    expect(screen.getByText('Player: Player')).toBeInTheDocument()
    expect(screen.getByText('Name:')).toBeInTheDocument()
    expect(screen.getByText('Height:')).toBeInTheDocument()
  })

  test('GIVEN a perosn object correct data is displayed on screen', () => {
    const person: Person = {
      name: 'jon',
      height: 'tall'
    }

    render(<FilmCharacter person={person}/>)
    expect(screen.getByText('Name: jon')).toBeInTheDocument()
    expect(screen.getByText('Height: tall')).toBeInTheDocument()
  })

  test('GIVEN a perosn object correct data is displayed on screen', () => {
    const player = 9999;
    render(<FilmCharacter player={player}/>)
    expect(screen.getByText('Player: Player 9999')).toBeInTheDocument()
  })
})