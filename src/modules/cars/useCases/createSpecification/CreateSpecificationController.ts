import { Request, Response } from "express";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";


class CreateSpecificationController {
  constructor(private createSpecificationUseCase: CreateSpecificationUseCase) {}

    handle(request:Request, response: Response) {
      let {name, description} = request.body();
      this.createSpecificationUseCase.execute({name , description});
      
      return response.status(201).send();
    }
}

export {CreateSpecificationController}