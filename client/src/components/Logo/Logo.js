import { Link } from 'react-router-dom';
import { LogoStyled } from './Logo.styled'

export function Logo () {
    return (
        <>
        <Link to="/">
          <LogoStyled>FinInvest</LogoStyled>
        </Link>
        </>
    )
}