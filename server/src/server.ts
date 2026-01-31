// import compression from 'compression';
import express from 'express';
import path from 'path';
import { AuthAPI } from './authApi';
// import morgan from 'morgan';

// Short-circuit the type-checking of the built output.
// const AUTH_API_PATH = './build/server/index.js';
const DEVELOPMENT = process.env.NODE_ENV === 'development';
const PORT = Number.parseInt(process.env.PORT || '3000');

/**
 * TODO:
 * 1) have the static server paths come from env
 * 2) figure out dev story so server restarts happen for backend changes
 * 3) cleanup npm commands + docs
 */

const app = express();

// app.use(compression());
app.disable('x-powered-by');

if (DEVELOPMENT) {
  console.log('Starting development server');
} else {
  console.log('Starting production server');

  app.use(
    '/assets',
    express.static(path.join(__dirname, '../../client/build/client/assets'), {
      immutable: true,
      maxAge: '1y',
    })
  );

  app.use(
    '/api/resources',
    express.static(
      path.join(__dirname, '../../client/build/client/resources'),
      { maxAge: '1y' }
    )
  );

  app.use('/api/auth/*splat', AuthAPI);

  // app.use(morgan('tiny'));
  app.use(
    '*splat',
    express.static(path.join(__dirname, '../../client/build/client'), {
      maxAge: '1h',
    })
  );
}

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(__dirname);
});
