import '@/styles/globals.css'
import { HomeStyled } from './styled-home';
import Layout from './components/layout';
import ContextProvider from './components/context/context';
export default function App({ Component, pageProps }) {
  return (
    <>
      <HomeStyled>
        <Layout>
        <ContextProvider>

          <Component {...pageProps} />
        </ContextProvider>
        </Layout>
      </HomeStyled>
    </>

  )
}
