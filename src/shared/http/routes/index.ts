import CreateCargoController from '@controllers/CreateCargoController';
import DeleteCargoController from '@controllers/DeleteCargoController';
import ReadAllCargosController from '@controllers/ReadAllCargosController';
import { Router } from 'express';

const routes = Router();

// ---- PRINCIPAL : HOME ----
routes.get('/', (req, res) => {
  return res.json({ message: 'Home Page' });
});

// ---- CARGOS ----
routes.post('/cargos', new CreateCargoController().handle);
routes.get('/cargos', new ReadAllCargosController().handle);
routes.put('/cargos/:id', new DeleteCargoController().handle);

export default routes;
