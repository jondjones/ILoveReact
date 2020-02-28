import React from 'react';
import ErrorContainer from '../ErrorContainer';
import '@testing-library/jest-dom/extend-expect'
import {render, screen} from '@testing-library/react'

test('ErrorContainer', () => {
  const testMessage = 'Child Component'
  render(<ErrorContainer>{testMessage}</ErrorContainer>)
  expect(screen.getByText(testMessage)).toBeInTheDocument()
})