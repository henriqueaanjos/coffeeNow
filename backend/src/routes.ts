import { Router } from "express";
import { TypeCoffeeController } from './controllers/TypeCoffeeController';
import { SalesController } from './controllers/SalesController'
import { SizeCoffeeController } from './controllers/SizeCoffeeController'

const router = Router();

router.get('/types', new TypeCoffeeController().handleGetAll);
router.get('/types/:id', new TypeCoffeeController().handleGet);
router.post('/types', new TypeCoffeeController().handleCreate);
router.put('/types/:id', new TypeCoffeeController().handleUpdate);
router.delete('/types/:id', new TypeCoffeeController().handleDelete);

router.get('/sizes', new SizeCoffeeController().handleGetAll);
router.get('/sizes/:id', new SizeCoffeeController().handleGet);
router.post('/sizes', new SizeCoffeeController().handleCreate);
router.put('/sizes/:id', new SizeCoffeeController().handleUpdate);
router.delete('/sizes/:id', new SizeCoffeeController().handleDelete);

router.get('/sale', new SalesController().handleGetAll);
router.get('/sale/:id', new SalesController().handleGet);
router.post('/sale', new SalesController().handleCreate);
router.delete('/sale/:id', new SalesController().handleDelete);

export {router}