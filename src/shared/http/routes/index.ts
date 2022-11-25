import { Router } from 'express';
import { CreateResponsavelController } from 'src/controllers/CreateCategoryService';

const routes = Router();

routes.post('/Responsavel', new CreateResponsavelController().handle);

routes.get('/', (req, res) => {
  return res.json({ message: 'Hello World' });
});

export default routes;
