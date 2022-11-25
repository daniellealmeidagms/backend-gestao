import CreateCargoController from '@controllers/cargo/CreateCargoController';
import DeleteCargoController from '@controllers/cargo/DeleteCargoController';
import ReadAllCargosController from '@controllers/cargo/ReadAllCargosController';
import { CreateAcaoController } from '@controllers/CreateAcaoController';
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

// ---- AÇÃO ----
routes.post('/acoes', new CreateAcaoController().handle);

export default routes;
