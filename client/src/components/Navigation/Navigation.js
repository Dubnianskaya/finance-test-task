import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import { Link } from './Navigation.styled'

export function Navigation () {

    return (
    <nav>
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup variant="text" aria-label="text button group" color="inherit">
        <Button><Link to="/login">Sign in</Link></Button>
        <Button><Link to="/register">Sign up</Link></Button>
      </ButtonGroup>
    </Box>
    </nav>
    )
}