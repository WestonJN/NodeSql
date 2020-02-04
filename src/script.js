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
      // [visitorname,visitorage,dateofvisit,timeofvisit,assistant,comments];
      // ['Weston','23','01/01/2020','12:05','George','Its ayt']
      ['Bob','24','01/02/2020','13:10','Sam','Basic']
    
    pool.query(sql, values, (err,res)=>{
      if (err) throw err;
      console.log("Number of records inserted: " + res.rowCount);
    pool.end();
    });
  }


// helloWorld();


// const addNewVisitor = () => {
//   pool.query(
//     "SELECT $1::text as message",
//     ["Hello world!"],
//     (error, results) => {
//       if (error) {
//         throw error;
//       }

//       console.log(results.rows);
//     }
//   );
// };

// helloWorld();

  // con.connect(function(err){
  //   if (err) throw err;
  //   const sql="INSERT INTO visitors(visitorname,visitorage,dateofvisit,timeofvisit,assistant,comments VALUES ?)";
  //   const values= [
  //     ['Weston','23','01/01/2020','12:05','George','Its ayt'],
  //     ['Bob','24','01/02/2020','13:10','Sam','Basic']
  //   ];
  //   con.query(sql, [values],function (err,result){
  //     if (err) throw err;
  //     console.log("Number of records inserted: " + result.affectedRows);
  //   });
  // });


addNewVisitor();