import Ofa2 from 'ofa2';
import config from 'ofa2-config';
import log from 'ofa2-logger';
import controller from 'ofa2-controller';
import koa from 'ofa2-koa';
import koaPolicy from 'ofa2-koa-policy';
import koaRoute from 'ofa2-koa-route';
import koaServer from 'ofa2-koa-server';
import als from 'ofa2-als';
import model from 'ofa2-model';
import shutdown from 'ofa2-shutdown';

const app = new Ofa2(__dirname)
  .use(als)
  .use(config)
  .use(log)
  .use(model)
  .use(controller)
  .use(koa)
  .use(koaPolicy)
  .use(koaRoute)
  .use(koaServer)
  .use(shutdown)
  .on('lifted', () => {
    logger.info('lifted');
    logger.info('config: ', app.config);
  })
  .on('error', (e) => {
    // eslint-disable-next-line no-console
    console.warn(e);
    process.exit(1);
  })
  .lift();

export default app;
