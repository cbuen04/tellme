// file to set up the requests to the database

import axios from "axios";

export default axios.create({

	// DO NOT CHANGE THIS! IT WORKS FOR EVERYONE NOW!
	baseURL: "http://54.67.87.30",
	headers: {
		"Content-type": "application/json"
	}
});