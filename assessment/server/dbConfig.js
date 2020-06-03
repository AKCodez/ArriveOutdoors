const { Pool, Client } = require("pg");
const LoremIpsum = require("lorem-ipsum").LoremIpsum;

const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4,
    },
    wordsPerSentence: {
      max: 10,
      min: 4,
    },
  });
  
  function randomNum(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  const connectionString =
    "postgres://ariakesh:shawdy123@ariastest.cdf1aaf5cery.us-east-1.rds.amazonaws.com:5432/ariakesh";
  
  const pool = new Pool({
    connectionString: connectionString,
  });
  
  // for(var i = 0; i < 100; i++){
  //      pool.query(`INSERT INTO products (pimages,description,parts,vendor,brand) VALUES('{https://i.picsum.photos/id/${randomNum(1,500)}/350/350.jpg,https://i.picsum.photos/id/${randomNum(1,500)}/350/350.jpg,https://i.picsum.photos/id/${randomNum(1,500)}/350/350.jpg,https://i.picsum.photos/id/${randomNum(1,500)}/350/350.jpg}','${lorem.generateSentences(1)}','{${lorem.generateWords(1)},${lorem.generateWords(1)},${lorem.generateWords(1)}}','${lorem.generateWords(1)}', '${lorem.generateWords(1)}');`, (err, res) => {
  //         if(err) console.log(err, 'error')
  //         else console.log(res, 'result shown')
  //     })
  // }
  
  // pool.query('CREATE TABLE products (productID SERIAL PRIMARY KEY, pimages varchar[], description text, parts varchar[], vendor text, brand text);', (err, res) => {
  //     if(err) console.log(err, 'error')
  //     else console.log(res, 'result shown')
  //       pool.end()
  //     })
  
  // pool.query('DROP TABLE products;', (err, res) => {
  //     if(err) console.log(err, 'error')
  //     else console.log(res, 'result shown')
  //       pool.end()
  //     })
  
  // pool.query(`Select * from products`, (err, res) => {
  //   if (err) console.log(err, "error");
  //   else console.log(res.rows, "result shown");
  //   pool.end();
  // });

  module.exports = pool