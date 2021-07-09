import { ISpecificatiosRepository } from "../repositories/ISpecificatiosRepository";
interface IRequest {
    name: string,
    description: string
}


class CreateSpecificationService {
    constructor(private specificationRepository: ISpecificatiosRepository) {}  

    execute({name, description}: IRequest): void {
       let specificationAlreadyExists = this.specificationRepository.findByName(name);

       if(specificationAlreadyExists) {
            throw new Error("specification already exist!");
       }

        this.specificationRepository.create({
            name,
            description
        })
    }
}


export {CreateSpecificationService}