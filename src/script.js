"use strict"

require("dotenv").config();

const Client = require("pg").Client;
const client = new Client({
  user: process.env.DB_USER,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASS,
});

client.connect()
const addNewVisitor = async(visitorname,visitorage,dateofvisit,timeofvisit,assistant,comments) => {
  
    const sql='INSERT INTO visitors(name,age,dateofvisit,timeofvisit,assistant,comments) VALUES ($1, $2, $3, $4, $5, $6)';
    const values= 
      [visitorname,visitorage,dateofvisit,timeofvisit,assistant,comments];
	try {
		let query = await client.query(sql,values)
		console.log(query.rows)
		return query.rows
	} catch(e) {
		console.log(e);
	}
  }

  const listVisitors = async() => {
  
    const sql='SELECT * FROM visitors';
    try {
      query = await client.query(sql)
      console.log(query.rows)
      return query.rows
    } catch(e) {
      console.log(e);
    }
  }

  const deleteVisitor = async(visitorid) => {
  
    const sql='DELETE FROM visitors WHERE visitorid=$1';
    const values= 
      [visitorid];
      
      try {
        query = await client.query(sql,values)
        console.log(query.rows)
        return query.rows
      } catch(e) {
        console.log(e);
      }
  }

  const updateVisitor = async(visitorid,visitorname,visitorage,dateofvisit,timeofvisit,assistant,comments) => {
  
    const sql='UPDATE visitors SET name=$2,age=$3,dateofvisit=$4,timeofvisit=$5,assistant=$6,comments=$7 WHERE visitorid =$1';
    const values= 
      [visitorid,visitorname,visitorage,dateofvisit,timeofvisit,assistant,comments];
    
      
      try {
       let query = await client.query(sql,values)
        console.log(query.rows)
        return query.rows
      } catch(e) {
        console.log(e);
      }
  }

  const viewVisitor = async(visitorid) => {
  
    const sql='SELECT * FROM visitors WHERE visitorid = $1';
    const values= [visitorid]
    try {
      query = await client.query(sql,values)
      console.log(query.rows)
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

addNewVisitor();
// listVisitors();
// deleteVisitor();
// updateVisitor();
// viewVisitor();
// deleteAllVisitor();

module.exports = { 
  addNewVisitor
}