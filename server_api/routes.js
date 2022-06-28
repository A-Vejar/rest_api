const express = require('express');
const routes = express.Router();

// GET
routes.get('/', (req, res) => {
    req.getConnection((err, conn) => {
        return err
        ? res.send(err)
        : conn.query('SELECT * FROM vehicle', (err, rows) => {
            return err ? res.send(err) : res.json(rows);
        });
    });
});

// POST
routes.post('/', (req, res) => {
    req.getConnection((err, conn) => {
        return err
        ? res.send(err)
        // : console.log(req.body);
        : conn.query('INSERT INTO vehicle set ?', [req.body], (err, rows) => {
            return err ? res.send(err) : res.send('Vehicle Added.');
        });
    });
});

// PUT
routes.put('/:id', (req, res) => {
    req.getConnection((err, conn) => {
        return err
        ? res.send(err)
        : conn.query('UPDATE vehicle set ? WHERE id = ?', [req.body, req.params.id], (err, rows) => {
            return err ? res.send(err) : res.send('Vehicle Updated.');
        });
    });
});

// DELETE
routes.delete('/:id', (req, res) => {
    req.getConnection((err, conn) => {
        return err
        ? res.send(err)
        : conn.query('DELETE FROM vehicle WHERE id = ?', [req.params.id], (err, rows) => {
            return err ? res.send(err) : res.send('Vehicle Deleted.');
        });
    });
});

module.exports = routes;