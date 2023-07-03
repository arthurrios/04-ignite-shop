import Image from 'next/image'
import logoImg from '../../assets/logo.svg'
import { HeaderContainer } from './styles'
import { Cart } from '../Cart'
import Link from 'next/link'
import { useRouter } from 'next/router'

export function Header() {
  const { pathname } = useRouter()

  const showCartButton = pathname !== '/success'

  return (
    <HeaderContainer>
      <Link href="/">
        <Image src={logoImg.src} alt="" width={129.74} height={52} />
      </Link>

      {showCartButton && <Cart />}
    </HeaderContainer>
  )
}
