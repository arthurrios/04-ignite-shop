import { Handbag } from '@phosphor-icons/react'
import { CartButtonContainer } from './styles'
import { ComponentProps } from 'react'

type CartButtonProps = ComponentProps<typeof CartButtonContainer>

export function CartButton({ ...rest }: CartButtonProps) {
  return (
    <CartButtonContainer {...rest}>
      <Handbag weight="bold" />
    </CartButtonContainer>
  )
}
