import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
  name: string,
  description: string;
}

class CreateService {
  
  constructor(
    private categoriesRepository: ICategoriesRepository
  ) {}

  execute({name, description}: IRequest) : void {
    let categoryAlreadyExists = this.categoriesRepository.findByName(name);

    if(categoryAlreadyExists) {
      throw new Error("Category already exist!");
    }

    this.categoriesRepository.create({name , description});
  }
}


export {CreateService}