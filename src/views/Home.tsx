/**
 * Default welcome page view
 */
import { FC } from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const location = () => {
  return window.location.href.replace('https://', '').replace('http://', '').replace('/', '');
};

const Home: FC = () => {
  const loc = location();
  return (
    <Container maxWidth="lg" sx={{ textAlign: 'center', pt: 10, pb: 10 }}>
      <Typography variant="h1" component="span" gutterBottom color="lightgreen" sx={{ wordWrap: 'anywhere' }}>
        {loc}
      </Typography>
      <Typography variant="h2" component="span" gutterBottom color="lightblue" sx={{ wordWrap: 'anywhere' }}>
        &nbsp;is for sale!
      </Typography>
      <Container maxWidth="sm">
        <Button
          variant="contained"
          color="primary"
          fullWidth
          href={`https://pugsllc.com/contact?domain=${loc}`}
          target="_blank"
          rel="external nofollow noopener"
        >
          Learn more
        </Button>
      </Container>
    </Container>
  );
};

export default Home;
