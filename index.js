const express = require('express');
const app = express();

app.use(express.json());

const municipioRoute = require('./routes/municipioRoute');

app.use('/municipio', municipioRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`App rodando na porta ${PORT}`);
});
/*app.get('/tutor', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM tutor t');
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao buscar dados' });
    }
});

app.get('/pet', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM pet p');
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao buscar dados' });
    }
});

app.get('/pet/:id', async (req, res) => {
    const id = req.params.id;

    try {
        const [rows] = await db.query('SELECT * FROM pet p WHERE p.id_pet=?', [id]);

        if (rows.length === 0) {
            return res.status(404).json({ message: 'Pet não encontrado' });
        }

        res.json(rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao buscar dados' });
    }
});

app.post('/municipio', async (req, res) => {
    const { nome, uf } = req.body;

    if (!nome || !uf) {
        return res.status(400).json({ error: 'Nome do municipio e UF são obrigatórios' });
    }
    try {
        const [ufRows] = await db.query('SELECT id_uf FROM uf u WHERE u.sigla=?', [uf.toUpperCase()]);

        if (ufRows.length === 0) {
            return res.status(404).json({ message: 'Uf não encontrada' });
        }

        const idUf = ufRows[0].id_uf;

        const queryInsert = 'INSERT INTO municipio (nome, id_uf) values (?,?)';
        const [result] = await db.query(queryInsert, [nome, idUf]);

        res.status(201).json({
            id: result.insertId,
            nome,
            uf,
            message: 'Município cadastrado com sucesso!!'
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao inserir dados' });
    }
})

*/