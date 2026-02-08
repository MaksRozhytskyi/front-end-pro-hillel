import { Box, Container, Stack, Typography } from '@mui/material'
import '../App.css'

export default function HomePage() {
  return (
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
}
