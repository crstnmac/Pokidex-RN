import { Dimensions } from 'react-native'

/* Getting the width and height of the device. */
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

/* Exporting the width and height of the device. */
export default {
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
}
