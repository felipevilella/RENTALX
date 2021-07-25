import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { CreateCategoriesUseCase } from "./CreateCategoriesUseCase";
import { CreateCategoryController } from "./CreateCategoryController";
''
const categoriesRepository = CategoriesRepository.getInstance();
const createCategoryUseCase = new CreateCategoriesUseCase(categoriesRepository);
const createCategoryController = new CreateCategoryController(createCategoryUseCase);


export {createCategoryController, createCategoryUseCase}