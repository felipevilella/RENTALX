import {request, response, Router} from 'express';

const categoriesRoutes = Router();
const categories = [];

categoriesRoutes.post("/categories", (request, response) => {
  let {name, description} = request.body;

  categories.push({
    name,
    description
  })

  return response.status(201).send();
});

export {categoriesRoutes};