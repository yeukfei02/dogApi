import * as Koa from 'koa';

import * as cors from '@koa/cors';
import * as helmet from 'koa-helmet';
import * as logger from 'koa-logger';
import * as compress from 'koa-compress';
import * as bodyParser from 'koa-bodyparser';
import * as json from 'koa-json';

import * as env from 'dotenv';
env.config();

import mainRoutes from './routes/main';
import userRoutes from './routes/user';
import dogRoutes from './routes/dog';

import { connectDB } from './db/db';

const app = new Koa();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(helmet());
app.use(logger());
app.use(
  compress({
    filter(content_type) {
      return /text/i.test(content_type);
    },
    threshold: 2048,
    gzip: {
      flush: require('zlib').Z_SYNC_FLUSH,
    },
    deflate: {
      flush: require('zlib').Z_SYNC_FLUSH,
    },
    br: false, // disable brotli
  }),
);
app.use(bodyParser());
app.use(json());

connectDB();

// main route
app.use(mainRoutes.routes());
app.use(mainRoutes.routes()).use(mainRoutes.allowedMethods());

// user route
app.use(userRoutes.routes());
app.use(userRoutes.routes()).use(userRoutes.allowedMethods());

// dog route
app.use(dogRoutes.routes());
app.use(dogRoutes.routes()).use(dogRoutes.allowedMethods());

app.listen(3000, () => {
  console.log(`server is listening on port: ${port}`);
});
