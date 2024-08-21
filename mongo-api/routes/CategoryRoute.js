import express from 'express'
import { CategoryCreate, CategoryGetAll, CategoryGetById, CategoryUpdateById } from '../controller/categorycontroller.js';

const CategoryRoute = express.Router();

CategoryRoute.post('/create', CategoryCreate);

CategoryRoute.get('/getall', CategoryGetAll);

CategoryRoute.get('/getbyid/:id', CategoryGetById);

CategoryRoute.put('/updatebyid/:id', CategoryUpdateById);

export default CategoryRoute;