import Provider from '../components/Provider'
import { GlobalProvider } from '../context/globalContext'

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalProvider>
        <Provider>
          <Component {...pageProps} />
        </Provider>
      </GlobalProvider>
    </>
  )
}
