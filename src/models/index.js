// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Action, Goal } = initSchema(schema);

export {
  Action,
  Goal
};