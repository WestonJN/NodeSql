// npm install --save pg
// find out more here: https://node-postgres.com/

const Pool = require("pg").Pool;
const pool = new Pool({
  user: "user",
  host: "localhost",
  database: "db",
  password: "pass",
  port: 5432
});

const addNewVisitor = () => {
  pool.query(
    "INSERT INTO visitors(visitorname,visitorage,dateofvisit,timeofvisit,assistant,comments VALUES ?)");
    [
      ['Weston','23','01/01/2020','12:05','George','Its ayt'],
      ['Bob','24','01/02/2020','13:10','Sam','Basic']
    ];
    (error, results) => {
      if (error) {
        throw error;
      }

      console.log(results.rows);
    }
  ;
};

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

//   con.connect(function(err){
//     if (err) throw err;
//     var sql="INSERT INTO visitors(visitorname,visitorage,dateofvisit,timeofvisit,assistant,comments VALUES ?)";
//     var values= [
//       ['Weston','23','01/01/2020','12:05','George','Its ayt'],
//       ['Bob','24','01/02/2020','13:10','Sam','Basic']
//     ];
//     con.query(sql, [values],function (err,result){
//       if (err) throw err;
//       console.log("Number of records inserted: " + result.affectedRows);
//     });
//   });


addNewVisitor();