import { Category } from "../modules/cars/model/Category";
import { ICategoriesRepository, ICreateCategoryDTO } from "../modules/cars/repositories/ICategoriesRepository";



class CategoriesRepository implements ICategoriesRepository {
  private categories: Category[];

  constructor() {
    this.categories = [];
  }

  create({description, name}: ICreateCategoryDTO): void {
    let category = new Category();
  
    Object.assign(category), {
      name,
      description,
      created_at: new Date()
    };
  
    this.categories.push(category)
  }

  list():Category[] {
    return this.categories;
  }

  findByName(name:string) {
    let category = this.categories.find((category) => category.name = name);
    return category;
  }
}

export {CategoriesRepository}