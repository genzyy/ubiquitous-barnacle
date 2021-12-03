import { render } from '@testing-library/react'
import App from '../src/App'

test('app should renders', () => {
  const { getByText } = render(<App />)
  const linkElement = getByText(
    /An Electron boilerplate including TypeScript, React, Jest and ESLint./i
  )
  expect(linkElement).toBeInTheDocument()
})
