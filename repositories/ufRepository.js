const db = require('../db');
const { UfModel} = require('../models/ufModel');

class UfRepository {

    static async findBySigla(sigla) {
        const [ufRows] = await db.query('SELECT id_uf FROM uf u WHERE u.sigla=?', [sigla.toUpperCase()]);

        if (ufRows.length === 0) {
            return null;
        }

        return new UfModel(ufRows[0].nome, ufRows[0].sigla);
    }
}

module.exports = UfRepository;