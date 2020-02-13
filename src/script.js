
require("dotenv").config();

const Client = require("pg").Client;
const client = new Client({
  user: process.env.DB_USER,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASS,
});

client.connect()
const addNewVisitor = async(name,age,date,time,assistant,comments) => {
  
    const sql='INSERT INTO visitors(visitor_name,visitor_age,date_of_visit,time_of_visit,assistant,comments) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';
    const values= 
      [name,age,date,time,assistant,comments];
	try {
		let query = await client.query(sql,values)
		// console.log(query)
		return query.rows
	} catch(e) {
		console.log(e);
	}
  }

  const listVisitors = async() => {
  
    const sql='SELECT visitor_id, visitor_name FROM visitors';
    try {
      query = await client.query(sql)
      // console.log(query.rows)
      return query.rows
    } catch(e) {
      console.log(e);
    }
  }

  const deleteVisitor = async(visitor_id) => {
  
    const sql='DELETE FROM visitors WHERE visitor_id=$1';
    const values= 
      [visitor_id];
      
      try {
        query = await client.query(sql,values)
        // console.log(query)
        return query
      } catch(e) {
        console.log(e);
      }
  }

  const updateVisitor = async(id,name,age,date,time,assistant,comments) => {
  
    const sql='UPDATE visitors SET visitor_name=$2,visitor_age=$3,date_of_visit=$4,time_of_visit=$5,assistant=$6,comments=$7 WHERE visitor_id =$1';
    const values= 
      [id,name,age,date,time,assistant,comments];
    
      
      try {
       let query = await client.query(sql,values)
        // console.log(query.rows)
        return query
      } catch(e) {
        console.log(e);
      }
  }

  const viewVisitor = async(visitor_id) => {
  
    const sql='SELECT * FROM visitors WHERE visitor_id = $1';
    const values= [visitor_id]
    try {
      query = await client.query(sql,values)
      // console.log(query.rows)
      return query.rows
    } catch(e) {
      console.log(e);
    }
  }
  const deleteAllVisitor = async() => {
  
    const sql='DELETE FROM visitors';
      
    try {
      query = await client.query(sql)
      console.log(query.rows)
      await client.end()
      return query.rows
    } catch(e) {
      console.log(e);
      await client.end()
    }
  }
  
module.exports = { 
  addNewVisitor,
  listVisitors,
  deleteVisitor,
  updateVisitor,
  viewVisitor
  // deleteAllVisitor
}