import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

import App from './App'
/*import './index.css'*/

const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: "#202126",
      },
    }),
  },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
		<ChakraProvider theme={theme}>
			<App />
		</ChakraProvider>
  </React.StrictMode>,
)
