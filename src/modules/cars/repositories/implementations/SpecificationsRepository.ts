
import { Specification } from "../../model/Specification";

import { 
  ISpecificatiosRepository, 
  ICreateSpecificationDTO
} from "../ISpecificatiosRepository";

class SpecificationsRepository implements ISpecificatiosRepository {
  private specifications: Specification[];
  
  constructor() {
    this.specifications = [];
  }
  
  create({ name, description }: ICreateSpecificationDTO): void {
    const specification = new Specification();
    Object.assign(specification, {
      name,
      description,
      create_at: new Date()
    });

    this.specifications.push(specification)
  }

  findByName(name: string): Specification {
     return this.specifications.find((specification) => specification.name === name);
  }
}

export {SpecificationsRepository}