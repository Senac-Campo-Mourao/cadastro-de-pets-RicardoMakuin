const ufmodel = require('../models/ufModel');

class municipioModel {

    constructor(id, nome, uf) {
        this.id = id;
        this.nome = nome;
        this.uf = uf;
    }
    static mapTomunicipio(row) {
        return new municipioModel(
            row.id_municipio,
            row.municipio_nome,
            new ufmodel(row.uf_nome, row.uf_sigla))
    }
}

module.exports = municipioModel;