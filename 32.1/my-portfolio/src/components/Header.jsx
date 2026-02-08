import { AppBar, Button, Stack, Toolbar, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar className="toolbar">
        <div className="toolbar-inner">
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            My Resume
          </Typography>
          <Stack direction="row" spacing={1} className="nav">
            <Button color="inherit" component={RouterLink} to="/">
              Resume
            </Button>
            <Button color="inherit" component={RouterLink} to="/todo">
              Todo-app
            </Button>
            <Button color="inherit" component={RouterLink} to="/swapi">
              SWAPI
            </Button>
          </Stack>
        </div>
      </Toolbar>
    </AppBar>
  )
}
