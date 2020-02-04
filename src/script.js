const Pool = require("pg").Pool;
const pool = new Pool({
  user: "user",
  host: "localhost",
  database: "db",
  password: "pass",
  port: 5432
});

const addNewVisitor = (visitorname,visitorage,dateofvisit,timeofvisit,assistant,comments) => {
  
    const sql='INSERT INTO visitors(visitorname,visitorage,dateofvisit,timeofvisit,assistant,comments) VALUES ($1, $2, $3, $4, $5, $6)';
    const values= 
      [visitorname,visitorage,dateofvisit,timeofvisit,assistant,comments];
      
    pool.query(sql, values, (err,res)=>{
      if (err) throw err;
      console.log("Number of records inserted: " + res.rowCount);
    pool.end();
    });
  }

addNewVisitor();