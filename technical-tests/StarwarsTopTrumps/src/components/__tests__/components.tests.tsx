import React from 'react';
import { LoadingComponent, ErrorComponent } from '../Components'
import '@testing-library/jest-dom/extend-expect'
import {render, screen} from '@testing-library/react'

test('Test Error Component', () => {
  render(<ErrorComponent />)
  expect(screen.getByText('ERROR')).toBeInTheDocument()
})

test('Test Loading Component', () => {
    render(<LoadingComponent />)
    expect(screen.getByText('LOADING')).toBeInTheDocument()
  })