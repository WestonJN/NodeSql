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

    });
  }

  const listVisitors = () => {
  
    const sql='SELECT * FROM visitors';
    
    pool.query(sql, (err,res)=>{
      if (err) throw err;
      console.log("Number of records listed: " + res.rowCount);
    
    });
  }

  const deleteVisitor = (visitorid) => {
  
    const sql='DELETE FROM visitors WHERE visitorid=$1';
    const values= 
      [visitorid];
      
    pool.query(sql, values, (err,res)=>{
      if (err) throw err;
      console.log("Number of records deleted: " + res.rowCount);
    
    });
  }

  const updateVisitor = (visitorid,visitorname,visitorage,dateofvisit,timeofvisit,assistant,comments) => {
  
    const sql='UPDATE visitors SET visitorname=$2,visitorage=$3,dateofvisit=$4,timeofvisit=$5,assistant=$6,comments=$7 WHERE visitorid =$1';
    const values= 
      [visitorid,visitorname,visitorage,dateofvisit,timeofvisit,assistant,comments];
    
      
    pool.query(sql, values, (err,res)=>{
      if (err) throw err;
      console.log("Number of records updates: " + res.rowCount);
    pool.end();
    });
  }
addNewVisitor();
listVisitors();
deleteVisitor();
updateVisitor();