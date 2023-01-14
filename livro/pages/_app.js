import '@/styles/globals.css'
import { HomeStyled } from './styled-home';
import Layout from './components/layout';
export default function App({ Component, pageProps }) {
  return (
    <>
      <HomeStyled>
        <Layout>

          <Component {...pageProps} />
        </Layout>
      </HomeStyled>
    </>

  )
}
