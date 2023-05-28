/* eslint linebreak-style: ["error", "windows"] */
import * as handler from './handlers.js';

const routes = [
  {
    path: '/',
    method: 'GET',
    handler: handler.home,
  },
  {
    path: '/employee',
    method: 'GET',
    handler: handler.getEmployee,
  },
  {
    path: '/reporting',
    method: 'GET',
    handler: handler.getReporting,
  },
  {
    path: '/c/emp',
    method: 'POST',
    handler: handler.createEmployee,
  },
  {
    path: '/c/rep',
    method: 'POST',
    handler: handler.createReporting,
  },
  {
    path: '/c/rsn',
    method: 'POST',
    handler: handler.createReason,
  },
  {
    path: '/u/emp',
    method: 'PUT',
    handler: handler.updateEmployee,
  },
  {
    path: '/u/rep',
    method: 'PUT',
    handler: handler.updateReporting,
  },
  {
    path: '/d/emp',
    method: 'DELETE',
    handler: handler.deleteEmployee,
  },
  {
    path: '/d/rep',
    method: 'DELETE',
    handler: handler.deleteReporting,
  },
  {
    path: '/u/rep/vote',
    method: 'PUT',
    handler: handler.vote,
  },
];

export default routes;
