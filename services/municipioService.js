const municipioRepository = require('../repositories/municipioRepository');
const ufrepository = require('../repositories/ufRepository');
const municipioModel = require('../models/municipioModel');
const ufModel = require('../models/ufModel');

class municipioService {

    static async getMunicipioById(id) {
        const municipioData = await municipioRepository.findByid(id);
        if (!municipioData) {
            throw new Error('Municipio não encontrado');


        }

        return municipioData;

    }
}

module.exports = municipioService;