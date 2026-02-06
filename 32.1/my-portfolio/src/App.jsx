import { useEffect } from 'react'
import {
  AppBar,
  Box,
  Button,
  Container,
  CssBaseline,
  Divider,
  Link,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material'
import { Link as RouterLink, Route, Routes, useLocation } from 'react-router-dom'
import TodoPage from './pages/TodoPage.jsx'
import SwapiPage from './pages/SwapiPage.jsx'
import './App.css'

const ResumePage = () => (
  <Container className="main" maxWidth="md">
    <Stack spacing={2}>
      <Box className="resume-card">
        <Typography variant="h4" gutterBottom>
          Maksym Rozhytskyi
        </Typography>
        <Typography variant="h6" color="text.secondary" gutterBottom>
          QA Manual Engineer — 4 years of experience
        </Typography>
        <Stack spacing={1}>
          <Typography variant="body1" color="text.secondary">
            <Typography component="span" sx={{ fontWeight: 600, color: 'text.primary' }}>
              4 years
            </Typography>{' '}
            in manual QA.
          </Typography>
          <Typography variant="body1" color="text.secondary">
            <Typography component="span" sx={{ fontWeight: 600, color: 'text.primary' }}>
              Fintech project:
            </Typography>{' '}
            tested a mobile app and a web-based admin panel.
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Used front-end code to reproduce and understand complex bugs.
          </Typography>
        </Stack>
      </Box>

      <Box className="resume-card">
        <Typography variant="h5" gutterBottom>
          Tech stack & tools
        </Typography>
        <Stack spacing={1}>
          <Typography variant="body1" color="text.secondary">
            <Typography component="span" sx={{ fontWeight: 600, color: 'text.primary' }}>
              Design:
            </Typography>{' '}
            Figma, Photoshop
          </Typography>
          <Typography variant="body1" color="text.secondary">
            <Typography component="span" sx={{ fontWeight: 600, color: 'text.primary' }}>
              API & traffic:
            </Typography>{' '}
            Postman, Charles Proxy
          </Typography>
          <Typography variant="body1" color="text.secondary">
            <Typography component="span" sx={{ fontWeight: 600, color: 'text.primary' }}>
              Observability:
            </Typography>{' '}
            Sumo Logic
          </Typography>
          <Typography variant="body1" color="text.secondary">
            <Typography component="span" sx={{ fontWeight: 600, color: 'text.primary' }}>
              Infrastructure:
            </Typography>{' '}
            OpenLens
          </Typography>
          <Typography variant="body1" color="text.secondary">
            <Typography component="span" sx={{ fontWeight: 600, color: 'text.primary' }}>
              Data:
            </Typography>{' '}
            DataGrip
          </Typography>
        </Stack>
      </Box>

      <Box className="resume-card">
        <Typography variant="h5" gutterBottom>
          Hillel Courses
        </Typography>
        <Stack spacing={1}>
          <Typography variant="body1" color="text.secondary">
            <Typography component="span" sx={{ fontWeight: 600, color: 'text.primary' }}>
              Front-end Basic:
            </Typography>{' '}
            HTML, CSS, SCSS, Git
          </Typography>
          <Typography variant="body1" color="text.secondary">
            <Typography component="span" sx={{ fontWeight: 600, color: 'text.primary' }}>
              Front-end Advanced:
            </Typography>{' '}
            JavaScript, React
          </Typography>
        </Stack>
      </Box>
    </Stack>
  </Container>
)

function App() {
  const location = useLocation()

  useEffect(() => {
    document.body.classList.remove('page-resume', 'page-todo', 'page-swapi')

    if (location.pathname.startsWith('/todo')) {
      document.body.classList.add('page-todo')
      return
    }

    if (location.pathname.startsWith('/swapi')) {
      document.body.classList.add('page-swapi')
      return
    }

    document.body.classList.add('page-resume')
  }, [location.pathname])

  return (
    <>
      <CssBaseline />
      <Box className="page">
        <AppBar position="static">
          <Toolbar className="toolbar">
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
          </Toolbar>
        </AppBar>

        <Box className="content">
          <Routes>
            <Route path="/" element={<ResumePage />} />
            <Route path="/todo" element={<TodoPage />} />
            <Route path="/swapi" element={<SwapiPage />} />
          </Routes>
        </Box>

        <Box component="footer" className="footer" id="contacts">
          <Container maxWidth="md">
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
              Contacts
            </Typography>
            <Stack spacing={0.5} className="footer-contacts">
              <Typography variant="body2" color="text.secondary">
                Email: <Link href="mailto:maximrozhik@gmail.com">maximrozhik@gmail.com</Link>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Phone: <Link href="tel:+380975010835">+38 097 501 08 35</Link>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Telegram:{' '}
                <Link href="https://t.me/max_rozhik" target="_blank" rel="noreferrer">
                  @max_rozhik
                </Link>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Open to collaboration and new projects.
              </Typography>
            </Stack>
          </Container>
        </Box>
      </Box>
    </>
  )
}

export default App
