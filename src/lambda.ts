import { Callback, Context, Handler } from 'aws-lambda';

import { bootstrap } from './main';

let server: Handler;

process.on('unhandledRejection', (reason) => {
  console.error(reason);
});

process.on('uncaughtException', (reason) => {
  console.error(reason);
});

export const handler: Handler = async (
  event: any, // TODO: properly define this, any on tutorial
  context: Context,
  callback: Callback,
) => {
  server = server ?? (await bootstrap());

  // console.log('handler event', event);
  // console.log('handler context', context);

  return server(event, context, callback);
};
