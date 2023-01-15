import '@/styles/globals.css'

import Layout from './components/layout';
import ContextProvider from './components/context/context';
export default function App({ Component, pageProps }) {
  return (
    <>
    <body>
      
        <Layout>
        <ContextProvider>

          <Component {...pageProps} />
        </ContextProvider>
        </Layout>
        <style jsx>{`
      :global(body) {
       font-family: Arial, Helvetica, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 1.2rem;
      }
    `}</style>

      </body>
    </>

  )
}
