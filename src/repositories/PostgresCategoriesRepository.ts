import { Category } from "../model/category";
import { ICategoriesRepository, ICreateCategoryDTO} from "./ICategoriesRepository";

class PostgresCategoriesRepository implements ICategoriesRepository {
  findByName(name: string): Category {
   return null
  }
  list(): Category[] {
    return null
  }
  create({ name, description }: ICreateCategoryDTO): void {
    return null
  }
}

export {PostgresCategoriesRepository}