import { Request, Response } from "express";
import { TypeCoffeeService } from "../services/TypeCoffeeService";

class TypeCoffeeController{
    async handleCreate(request: Request, response: Response){
        const {title, price} = request.body;
        const service = new TypeCoffeeService();
        try{
            const result = await service.create(title, price);
            return response.json(result);
        }
        catch{
            return response.status(400).json({error: "Create Type Coffee Fail"})
        }
    }
    async handleGetAll(request: Request, response: Response){
        const service = new TypeCoffeeService();
        try{
            const result = await service.getAll();
            return response.json(result);
        }
        catch{
            return response.status(400).json({error: "Get All Type Coffee Fail"})
        }
    }
    async handleGet(request: Request, response: Response){
        const {id} = request.params;
        const service = new TypeCoffeeService();
        try{
            const result = await service.get(Number(id));
            return response.json(result);
        }
        catch{
            return response.status(400).json({error: "Get Type Coffee Fail"})
        }
    }
    async handleUpdate(request: Request, response: Response){
        const { id } = request.params;
        const {title, price} = request.body;
        const service = new TypeCoffeeService();
        try{
            const result = await service.update(Number(id), title, price);
            return response.json(result);
        }
        catch{
            return response.status(400).json({error: "Update Type Coffee Fail"})
        }
    }
    async handleDelete(request: Request, response: Response){
        const {id} = request.params
        const service = new TypeCoffeeService();
        try{
            const result = await service.delete(Number(id));
            return response.json(result);
        }
        catch{
            return response.status(400).json({error: "Delete Type Coffee Fail"})
        }
    }
}

export { TypeCoffeeController }