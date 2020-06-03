const pool = require('./dbConfig.js')
const helpers = {
    getAll: (req,res) => {
        pool.query('SELECT * FROM products', (err,result) => {
            if(err) res.send(err).status(400)
            else res.send(result.rows).status(200)
        })
    },
    getOne: (req,res) => {
        pool.query(`SELECT * FROM products WHERE productid = ${req.params.id}`, (err,result) => {
            if(err) res.send(err).status(400)
            else res.send(result.rows).status(200)
        })
    },
    edit: (req,res) => {
        pool.query(`UPDATE products SET description = '${req.body.description}', vendor = '${req.body.vendor}', brand = '${req.body.brand}' WHERE productid = '${req.params.id}';`, (err,result) => {
            if(err) console.log(err,req.body,req.params)
            else res.send(result).status(200)
        })
    }
}

module.exports = helpers