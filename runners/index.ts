import { Context } from 'aws-lambda';

import { handler } from '../src/lambda';
import * as zooLazyEvent from './events/GetZooLazyEvent.json';

handler(zooLazyEvent, {} as Context, () => null);
