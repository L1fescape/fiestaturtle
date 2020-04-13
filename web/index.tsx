import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

import { App } from 'src'
import './index.scss'

library.add(fas)

ReactDOM.render(<App />, document.getElementById('root'))
