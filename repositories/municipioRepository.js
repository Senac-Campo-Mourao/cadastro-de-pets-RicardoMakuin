const db = require('../db');
const municipioModel = require('../models/municipioModel');

class municipioRepository {

    static async insert(nome, ufid) {
        const queryInsert = 'INSERT INTO municipio (nome, id_uf) values (?,?)';
        const [result] = await db.query(queryInsert, [nome, ufid]);
        return result;


    }

    static async findByid(idMunicipio) {
        const query = `
         SELECT m.id_municipio, m.nome as municipio_nome, u.nome as uf_nome, u.sigla as uf_sigla 
         FROM municipio m
         inner join uf u on m.id_uf = u.id_uf
         WHERE m.id_municipio = ?`;

        const [rows] = await db.query(query, [idMunicipio]);


        const municipioData = rows.length > 0 ? rows[0] : null;

        return municipioModel.mapTomunicipio(municipioData);



    }

}

module.exports = municipioRepository;