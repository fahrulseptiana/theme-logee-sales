import base from '@legion-ui/theme-base'
import {makeTheme} from '@theme-ui/css/utils'

import { merge, button } from '.'
import { Theme } from '@theme-ui/css/dist/declarations/src/types'

import {buttonsSolidBackgroundColor} from './legion-tokens/output/js/logee-sales'

const obj: Theme = {...merge(base, {
  buttons: {
    solid: {
      ...button,
      backgroundColor: buttonsSolidBackgroundColor,
    }
  }
})}

export const theme = makeTheme(obj)

export default theme