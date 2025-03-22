import Layout from '../components/layout'
 
export default function MyApp({ pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}