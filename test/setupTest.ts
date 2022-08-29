import { cleanup } from '@testing-library/react-native'

afterEach(cleanup)

process.on('unhandledRejection', (err) => {
  fail(err)
})
