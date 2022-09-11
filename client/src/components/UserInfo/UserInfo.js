import { useSelector, useDispatch } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import { authOperations } from '../../redux/auth';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { UserInfoContainer, UserMail } from './UserInfo.styled';
import { useWindowDimensions } from '../../hooks';
import { breakPoints } from '../../libs/constants';

export function UserInfo () {
    const dispatch = useDispatch();
    const mailUser = useSelector(authSelectors.getUserMail);
    const windowDimensions = useWindowDimensions();

    const logOut = () => {
        dispatch(authOperations.logOut());
      };

    return (
        <UserInfoContainer>
            {windowDimensions.width >=
                breakPoints.TABLET && (
                    <>
                 <UserMail>{mailUser}</UserMail>
                 <Button type="button" color="inherit" onClick={logOut}>LOG OUT</Button>
                 </>
                )}
              {windowDimensions.width <
                breakPoints.TABLET && (
                    <>
                 <Avatar>{mailUser[0].toUpperCase()}</Avatar>
                 <Button type="button" size="small" color="inherit" onClick={logOut}>LOG OUT</Button>
                 </>
                )}
       
        </UserInfoContainer>
    )
}