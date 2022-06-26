import { Request, Response } from "express";
import { SizeCoffeeService } from "../services/SizeCoffeeService";

class SizeCoffeeController{
    async handleCreate(request: Request, response: Response){
        const {title, price, size} = request.body;
        const service = new SizeCoffeeService();
        try{
            const result = await service.create(title, price, size);
            return response.json(result);
        }
        catch{
            return response.status(400).json({error: "Create Size Coffee Fail"})
        }
    }
    async handleGetAll(request: Request, response: Response){
        const service = new SizeCoffeeService();
        try{
            const result = await service.getAll();
            return response.json(result);
        }
        catch{
            return response.status(400).json({error: "Get All Size Coffee Fail"})
        }
    }
    async handleGet(request: Request, response: Response){
        const {id} = request.params;
        const service = new SizeCoffeeService();
        try{
            const result = await service.get(Number(id));
            return response.json(result);
        }
        catch{
            return response.status(400).json({error: "Get Size Coffee Fail"})
        }
    }
    async handleUpdate(request: Request, response: Response){
        const { id } = request.params;
        const {title, price, size} = request.body;
        const service = new SizeCoffeeService();
        try{
            const result = await service.update(Number(id), title, price, size);
            return response.json(result);
        }
        catch{
            return response.status(400).json({error: "Update Size Coffee Fail"})
        }
    }
    async handleDelete(request: Request, response: Response){
        const {id} = request.params
        const service = new SizeCoffeeService();
        try{
            const result = await service.delete(Number(id));
            return response.json(result);
        }
        catch{
            return response.status(400).json({error: "Delete Size Coffee Fail"})
        }
    }
}

export { SizeCoffeeController }