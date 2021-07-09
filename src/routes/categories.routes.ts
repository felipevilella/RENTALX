import {request, response, Router} from 'express';
import { CategoriesRepository } from '../modules/cars/repositories/CategoriesRepository';
import { CreateCategoriesService } from '../modules/cars/services/CreateCategoriesService';

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
  let {name, description} = request.body;
  let createCategoryService = new CreateCategoriesService(categoriesRepository);

  createCategoryService.execute({name, description});
  
  return response.status(201).send();
});

categoriesRoutes.get('/', (request, response) => {
  let categories = categoriesRepository.list();

  return response.json(categories);
});

export {categoriesRoutes};