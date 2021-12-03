import { render } from '@testing-library/react'
import App from '../src/App'

test('app should render', () => {
  const { getByText } = render(<App />)

  // use regular expression to check whether the given text exists in the rendered app.
  const linkElement = getByText(
    /An Electron boilerplate including TypeScript, React, Jest and ESLint./i
  )

  // check if the link element exists in the document.
  expect(linkElement).toBeInTheDocument()
})
