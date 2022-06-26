import prismaClient from "../prisma"

class TypeCoffeeService{
    async create(title:string, price: number){
        const typeCoffee = await prismaClient.typeCoffee.create({
            data:{
                title,
                price
            }
        });
        return typeCoffee;
    }
    async getAll(){
        const typesCoffee = await prismaClient.typeCoffee.findMany();
        return typesCoffee;
    }
    async get(id: number){
        const typeCoffee = await prismaClient.typeCoffee.findUnique({
            where:{
                id
            }
        });
        return typeCoffee;
    }
    async update(id: number, title:string, price: number){
        const newTypeCoffee = await prismaClient.typeCoffee.update({
            data: {
                title,
                price
            },
            where: {
                id
            }
        });
        return newTypeCoffee;
    }
    async delete(id: number){
        const deletedTypeCoffee = await prismaClient.typeCoffee.delete({
            where:{
                id
            }
        });
        return deletedTypeCoffee;
    }
}

export { TypeCoffeeService }