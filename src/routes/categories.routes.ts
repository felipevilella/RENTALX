import {request, response, Router} from 'express';
import { PostgresCategoriesRepository } from '../repositories/PostgresCategoriesRepository';
import { CreateService } from '../services/category/CreateService';

const categoriesRoutes = Router();
const categoriesRepository = new PostgresCategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
  let {name, description} = request.body;
  let createCategoryService = new CreateService(categoriesRepository);

  createCategoryService.execute({name, description});
  
  return response.status(201).send();
});

categoriesRoutes.get('/', (request, response) => {
  let categories = categoriesRepository.list();

  return response.json(categories);
});

export {categoriesRoutes};