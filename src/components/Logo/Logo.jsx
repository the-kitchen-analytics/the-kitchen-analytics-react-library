import React, { useMemo } from 'react'
import { Image } from 'semantic-ui-react'
import { useUserSettings } from '../../hooks'

import defaultLogo from '../../assets/images/logo.svg'
import black from '../../assets/images/logo-black.svg'
import blue from '../../assets/images/logo-blue.svg'
import brown from '../../assets/images/logo-brown.svg'
import green from '../../assets/images/logo-green.svg'
import grey from '../../assets/images/logo-grey.svg'
import olive from '../../assets/images/logo-olive.svg'
import orange from '../../assets/images/logo-orange.svg'
import pink from '../../assets/images/logo-pink.svg'
import purple from '../../assets/images/logo-purple.svg'
import red from '../../assets/images/logo-red.svg'
import teal from '../../assets/images/logo-teal.svg'
import violet from '../../assets/images/logo-violet.svg'
import yellow from '../../assets/images/logo-yellow.svg'

const Logo = (props) => {
  const {
    settings: { accentColor }
  } = useUserSettings()

  const logo = useMemo(() => {
    switch (accentColor) {
      case 'black':
        return black
      case 'blue':
        return blue
      case 'brown':
        return brown
      case 'green':
        return green
      case 'grey':
        return grey
      case 'olive':
        return olive
      case 'orange':
        return orange
      case 'pink':
        return pink
      case 'purple':
        return purple
      case 'red':
        return red
      case 'teal':
        return teal
      case 'violet':
        return violet
      case 'yellow':
        return yellow
      default:
        return defaultLogo
    }
  }, [accentColor])

  const imageProps = {
    ...props,
    src: logo
  }

  return <Image {...imageProps} />
}

export default Logo
