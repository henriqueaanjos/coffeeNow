import prismaClient from "../prisma"

class SizeCoffeeService{
    async create(title:string, price: number, size: string){
        const sizeCoffee = await prismaClient.sizeCoffee.create({
            data:{
                title,
                price,
                size
            }
        });
        return sizeCoffee;
    }
    async getAll(){
        const sizeCoffees = await prismaClient.sizeCoffee.findMany();
        return sizeCoffees;
    }
    async get(id: number){
        const sizeCoffee = await prismaClient.sizeCoffee.findUnique({
            where:{
                id
            }
        });
        return sizeCoffee;
    }
    async update(id: number, title:string, price: number, size: string){
        const newSizeCoffee = await prismaClient.sizeCoffee.update({
            data: {
                title,
                price,
                size
            },
            where: {
                id
            }
        });
        return newSizeCoffee;
    }
    async delete(id: number){
        const deletedSizeCoffee = await prismaClient.sizeCoffee.delete({
            where:{
                id
            }
        });
        return deletedSizeCoffee;
    }
}

export { SizeCoffeeService }