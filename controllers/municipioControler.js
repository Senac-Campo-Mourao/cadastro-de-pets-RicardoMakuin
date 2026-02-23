const municipioService = require('../services/municipioService');

class municipioController {
    static async getById(req, res){
        const id = req.params.id;
        try {
            const municipio = await municipioService.getMunicipioById(id);
            res.json(municipio);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }         
    }

    
    static async getByName(req, res){
        const nome = req.params.nome;
        try {
            const municipio = await municipioService.getMunicipioByNome(nome);
            res.json(municipio);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }         
    }
}

module.exports = municipioController;