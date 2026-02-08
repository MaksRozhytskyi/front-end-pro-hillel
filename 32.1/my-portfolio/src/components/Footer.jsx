import { Box, Container, Link, Stack, Typography } from '@mui/material'

export default function Footer() {
  return (
    <Box component="footer" className="footer" id="contacts">
      <Container maxWidth={false} className="footer-inner">
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
  )
}
