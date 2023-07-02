import { AppProps } from 'next/app'
import { globaStyles } from '../styles/global'
import { Container } from '@/styles/pages/app'
import { Header } from '@/components/Header'
import { CartContextProvider } from '@/contexts/CartContext'

globaStyles()

export default function App({ Component, pageProps }: AppProps) {
  globaStyles()

  return (
    <CartContextProvider>
      <Container>
        <Header />
        <Component {...pageProps} />
      </Container>
    </CartContextProvider>
  )
}
