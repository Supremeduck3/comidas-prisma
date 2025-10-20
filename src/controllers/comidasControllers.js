import * as comidasModels from './../models/comidasModels.js';

export const listAll = async (req,res) => {
    try {
        const comidas = await comidasModels.findall()

        if(!comidas || comidas.length === 0){
            res.status(404).json({
                total:0,
                messagem:'Não uma comida valida',
                comidas
            })
        }

        res.status(200).json({
            total: comidas.length,
            message: 'lista de comidas',
            comidas
        })
    } catch (error){
        res.status(500).json({
            erro: 'Erro interno do servidor',
            detalhes: error.message,
            status: 500
        })
    }
}

export const listOne = async (req,res) => {
    try {
        const id = parseInt(req.params.id);
        const comidas = await comidasModels.findOne(id);

        if(!comidas){
            return res.status(404).json({
                erro:'comida não encontrada',
                message: 'Verifique o id da comida',
                id: id
            })
        }
        res.status(200).json({
            message: "comida Encontrada",
            comidas
        })
    }  catch (error) {
        res.status(500).json({
            erro:'Erro interno de servidor',
            detalhes: error.message,
            status: 500
        })
    }
}