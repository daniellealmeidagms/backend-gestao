import DeleteCargoController from 'express';
import { Request, Response } from 'express';

export default class DeleteCargoController {
  const { id } = req.params;
const idInt = parseInt(id);
const controller = new DeleteCargoController();
const result = await controller.execute(({ idInt }));
if (result instanceof Error) {
  return res.status(400).json(result.message);
}
return result.json(result);
}