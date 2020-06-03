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
    },
    delete: (req,res) => {
        pool.query(`DELETE FROM products WHERE productid =${req.params.id};`, (err,result) => {
            if (err) res.send(err).status(400)
            else res.send(result).status(200)
        })
    },
    relation: (req,res) => {   
        pool.query(`SELECT productRef FROM sets WHERE setid = ${req.params.id}`, (err,result) => {
            if(err) res.send(err).status(400)
            else {
                let productOne = result.rows[0].productref[0]
                let productTwo = result.rows[0].productref[1]
                let productThree = result.rows[0].productref[2]
                pool.query(`select description from products where productid in (${productOne}, ${productTwo}, ${productThree})`, (err,result) => {
                    if (err) res.send(err).status(400)
                    else res.send(result.rows).status(200)
                })
            }
        })
    }
}

module.exports = helpers