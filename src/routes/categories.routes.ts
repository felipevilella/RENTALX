import {request, response, Router} from 'express';
import {CategoriesRepository } from '../repositories/categoriesRepository';

const categoriesRoutes = Router();

categoriesRoutes.post("/", (request, response) => {
  let {name, description} = request.body;
  const categoriesRepository = new CategoriesRepository();
  let categoryAlreadyExists = categoriesRepository.findByName(name);

  if(categoryAlreadyExists) {
    return response.status(400).send("Category already exist");
  }

  categoriesRepository.create({name , description});
  
  return response.status(201).send();
});

categoriesRoutes.get('/', (request, response) => {
  const categoriesRepository = new CategoriesRepository();

  let categories = categoriesRepository.list();

  return response.json(categories);
});

export {categoriesRoutes};