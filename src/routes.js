import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => res.json({ message: 'ok with eric' }));

export default routes;
