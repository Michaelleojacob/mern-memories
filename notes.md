express routing

make a route ->

```js
// route.js
import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send(`this works!`);
});

export default router;
```

use a route

```js
// index.js
import postRoutes from './routes/posts';

app.use('/posts', postRoutes);
```
