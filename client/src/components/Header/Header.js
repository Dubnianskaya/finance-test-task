import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import { Container }  from '../Container';
import { Logo } from '../Logo';
import { Navigation} from '../Navigation';
import { UserInfo } from '../UserInfo';
import { HeaderStyled, HeaderContainer } from './Header.styled';

export function Header () {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    
    return (
        <HeaderStyled>
            <Container>
                <HeaderContainer>
                <Logo />
                {isLoggedIn
                ? <UserInfo />
                : <Navigation />}
                </HeaderContainer>
            </Container>
        </HeaderStyled>
    )
}