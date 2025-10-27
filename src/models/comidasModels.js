import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


export const findall = async () => {
    return await prisma.comidas.findMany({
        orderBy: { nome: 'asc' }
    });
}


export const findOne = async (id) => {
    return await prisma.comidas.findUnique({
        where: { id: Number(id) }
    });
}


export const deletar = async (id) => {
    return await prisma.comidas.delete({
        where: { id: Number(id) }
    });
}


export const atualizar = async (id, dado) => {
    return await prisma.comidas.update({
        where: { id: Number(id) },
        data: {
            ...(dado.nome && { nome: dado.nome }),
        }
    });
}
