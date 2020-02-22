import React from 'react';
import HistoryPage from '../HistoryPage'
import '@testing-library/jest-dom/extend-expect'
import {render, screen} from '@testing-library/react'
import { BrowserRouter, Route } from 'react-router-dom';
describe('StarShip', () => {
  test('GIVEN no paramters then the component renders OK', () => {
    render(<BrowserRouter>
          <Route path="/history" component={HistoryPage} />
      </BrowserRouter>)
  })
})