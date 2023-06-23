import { AppProps } from "next/app"
import { globaStyles } from "../styles/global";
import logoImg from '../assets/logo.svg'
import { Container, Header } from "@/styles/pages/app";
import Image from "next/image";

globaStyles();


export default function App({ Component, pageProps }: AppProps) {
  globaStyles();

  return (
    <Container>
      <Header>
        <Image src={logoImg.src} alt="" width={129.74} height={52}/>
      </Header>
      <Component {...pageProps}/>
   </Container>
  )
}
