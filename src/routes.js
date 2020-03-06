import { Router } from 'express';

import multer from 'multer';

import multerConfig from './config/multer';

import RecipientController from './app/controllers/RecipientController';

import SessionController from './app/controllers/SessionControllers';

import DeliverymanController from './app/controllers/DeliverymanController';

import AvatarController from './app/controllers/AvatarController';

import DeliveryController from './app/controllers/DeliveryController';

import StartDeliveryController from './app/controllers/StartDeliveryController';

import EndDeliveryController from './app/controllers/EndDeliveryController';

import OpenDeliveriesController from './app/controllers/OpenDeliveryController';

import DeliveredController from './app/controllers/DeliveredController';

import ProblemsController from './app/controllers/ProblemsController';

import DeliveryProblemsController from './app/controllers/DeliveryProblemsController';

import authMiddleware from './app/middleware/auth';

const routes = new Router();

const upload = multer(multerConfig);

routes.post('/sessions', SessionController.store);

routes.get('/deliveryman/:id/opendeliveries', OpenDeliveriesController.index);
routes.get('/deliveryman/:id/delivered', DeliveredController.index);

routes.use(authMiddleware);
routes.post('/recipients', RecipientController.store);
routes.put('/recipients', RecipientController.uptade);

routes.post('/avatars', upload.single('avatar'), AvatarController.store);

routes.post('/deliverymans', DeliverymanController.store);
routes.put('/deliverymans', DeliverymanController.update);
routes.get('/deliverymans', DeliverymanController.index);
routes.delete('/deliverymans', DeliverymanController.delete);

routes.post('/deliveries', DeliveryController.store);
routes.get('/deliveries', DeliveryController.index);
routes.put('/deliveries', DeliveryController.update);
routes.delete('/deliveries', DeliveryController.delete);

routes.put('/startdelivery', StartDeliveryController.update);

routes.put(
  '/enddelivery/:id',
  upload.single('file'),
  EndDeliveryController.update
);

routes.post('/delivery/:delivery_id/problems', ProblemsController.store);
routes.get('/delivery/problems', ProblemsController.index);

routes.put('/problem/:id/cancel-delivery', ProblemsController.update);

routes.get('/delivery/:delivery_id/problems', DeliveryProblemsController.index);

export default routes;
