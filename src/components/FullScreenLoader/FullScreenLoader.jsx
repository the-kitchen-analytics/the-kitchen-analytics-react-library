import React from 'react'
import { Dimmer, Loader } from 'semantic-ui-react'

const FullScreenLoader = (props) => (
  <div className='loader'>
    <Dimmer active inverted>
      <Loader {...props} size='huge' />
    </Dimmer>
  </div>
)

export default FullScreenLoader
