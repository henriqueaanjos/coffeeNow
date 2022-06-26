import prismaClient from "../prisma"

interface Products{
    typeCoffeeId: number,
    sizeCoffeeId: number,
    quantity: number
}

class ProductSalesService{
    async create(saleId: number, product: Products){
        const productSale = await prismaClient.saleProduct.create({
            data: {
                ...product,
                saleId
            }
        });
        return productSale;
    }
    async getAll(){
        const productSales = await prismaClient.saleProduct.findMany();
        return productSales;
    }
    async getAllBySale(saleId: number){
        const productSales = await prismaClient.saleProduct.findMany({
            where:{
                saleId
            }
        });
        return productSales;
    }

    async get(id: number){
        const productSale = await prismaClient.saleProduct.findUnique({
            where:{
                id
            }
        });
        return productSale;
    }
    async update(id: number, product: Products){
        const productSale = await prismaClient.saleProduct.update({
            data: product,
            where: {
                id
            }
        });
        return productSale;
    }
    async delete(id: number){
        const deletedProductSale = await prismaClient.saleProduct.delete({
            where:{
                id
            }
        });
        return deletedProductSale;
    }
}

export { ProductSalesService }