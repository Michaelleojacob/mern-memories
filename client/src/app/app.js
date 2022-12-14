import { Container, AppBar, Typography, Grow, Grid } from '@mui/material';
import Posts from '../components/posts/posts';
import Form from '../components/forms/forms';
import memories from '../images/memories.png';

const App = () => {
  return (
    <Container>
      <AppBar position='static' color='inherit'>
        <Typography variant='h2' align='center'>
          Memories
          <img src={memories} alt='memories' height='60' />
        </Typography>
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify='space-between'
            alignItems='stretch'
            spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
