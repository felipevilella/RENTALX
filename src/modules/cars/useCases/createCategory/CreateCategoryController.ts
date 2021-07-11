import {Response, Request} from "express";
import { CreateCategoriesUseCase } from "./CreateCategoriesUseCase";

class CreateCategoryController {
  constructor(private createCategoryUseCase: CreateCategoriesUseCase) {}
  
  handle(request: Request, response: Response) {
    let {name, description} = request.body;
  
    this.createCategoryUseCase.execute({name, description});
    
    return response.status(201).send();
  }
}

export {CreateCategoryController}