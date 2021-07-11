import { Specification } from "../model/Specification";


interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificatiosRepository {
   create({name, description} : ICreateSpecificationDTO): void;
   findByName(name: string) : Specification;
}

export {ISpecificatiosRepository, ICreateSpecificationDTO}