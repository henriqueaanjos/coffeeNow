import prismaClient from "../prisma"

class SalesService{
    async create(){
        const sale = await prismaClient.sale.create({
            data:{
                
            }
        });
        return sale;
    }
    async getAll(){
        const sale = await prismaClient.sale.findMany({
            include:{
                saleProducts: true
            }
        });
        return sale;
    }
    async get(id: number){
        const sale = await prismaClient.sale.findUnique({
            where:{
                id
            },
            include:{
                saleProducts: true
            }
        });
        return sale;
    }
    async delete(id: number){
        const deletedSale = await prismaClient.sale.delete({
            where:{
                id
            },
            include:{
                saleProducts: true
            }
        });
        return deletedSale;
    }
}

export { SalesService }