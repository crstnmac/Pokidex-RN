import React from 'react'

import { render } from '@testing-library/react-native'
import App from './App'
jest.mock('./src/hooks/useCachedResources', () => jest.fn(() => true))

describe('<App />', () => {
  it('renders default app', () => {
    render(<App />)
  })
})
