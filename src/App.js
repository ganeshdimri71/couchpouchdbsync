import React, { useEffect } from "react";
import "./App.css";
import pouchdb from "pouchdb";

function App() {
	var db = new pouchdb("sanjaydimri");
	var doc = {
		_id: "1",
		name: "Ganesh Dimri",
		age: 27,
		email: "ganeshdimri71@gmil.com",
	};
	var doc1 = {
		_id: "777",
		name: "Ganesh Dimri",
		age: 27,
		email: "ganeshdimri71@gmil.com",
	};

	db.put(doc, function (err, res) {
		if (err) {
			console.log("The error is : ", err);
		} else {
			console.log("The data inserted is : ", doc);
		}
	});
	db.put(doc1, function (err, res) {
		if (err) {
			console.log("The error is : ", err);
		} else {
			console.log("The data inserted is : ", doc);
		}
	});

	var remoteDB = new pouchdb("http://localhost:5984/sanjaydimri");
	/* db.sync(remoteDB);  */
	db.sync(remoteDB, {
		live: true,
		retry: true,
	})
	

	/* useEffect( () => {
			let remoteDB = new pouchdb("http://localhost:5984/sanjayDimri");
	//--------------replicate localDB(pouchDB) to remoteDB(couchDB)-------------
	db.replicate.from(remoteDB);
	db.replicate.to(remoteDB, {
		live: true,
		retry: true,
	});
	},[]) */

	/* Replicate(); */

	/* function Replicate() {
		
	} */

	/*  useEffect( ()=> {
    
    Replicate();
  },[]) */

	return (
		<div className="App">
			<h1>Hello World...!</h1>
		</div>
	);
}

export default App;
