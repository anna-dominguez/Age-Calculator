import '@/styles/globals.css'
import Head from 'next/head'

const App = ({ Component, pageProps }) => (
  <div className="grid w-full h-screen justify-center items-center bg-lightGrey">
    <Head>
      <title>Age Calculator App</title>
    </Head>
    <Component {...pageProps} />{' '}
  </div>
)

export default App
