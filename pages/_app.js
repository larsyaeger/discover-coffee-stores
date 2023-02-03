import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
      <footer>
        <p>2022 Lars Yaeger</p>
      </footer>
    </div>)
}
