import { Request, Response } from "express";
import { ProductSalesService } from "../services/ProductSaleService";
import { SalesService } from "../services/SaleService";

interface Products{
    typeCoffeeId: number,
    sizeCoffeeId: number,
    quantity: number
}

class SalesController{
    async handleCreate(request: Request, response: Response){
        const {products} = request.body;
        const service = new SalesService();
        const ProductService = new ProductSalesService();
        try{
            const sale = await service.create();
            products.map(async(item: Products) => {
                await ProductService.create(sale.id, item);
            });
            const result = await service.get(sale.id);
            return response.json(result);
        }
        catch{
            return response.status(400).json({error: "Create Sale Fail"})
        }
    }
    async handleGetAll(request: Request, response: Response){
        const service = new SalesService();
        try{
            const result = await service.getAll();
            return response.json(result);
        }
        catch{
            return response.status(400).json({error: "Get All Sales Fail"})
        }
    }
    async handleGet(request: Request, response: Response){
        const {id} = request.params;
        const service = new SalesService();
        try{
            const result = await service.get(Number(id));
            return response.json(result);
        }
        catch{
            return response.status(400).json({error: "Get Sale Fail"})
        }
    }
    async handleDelete(request: Request, response: Response){
        const {id} = request.params
        const service = new SalesService();
        try{
            const result = await service.delete(Number(id));
            return response.json(result);
        }
        catch{
            return response.status(400).json({error: "Delete Sale Fail"})
        }
    }
}

export { SalesController }