import express from "express";
import axios from "axios";

const vesta = express.Router();

vesta.post("/getSessionTags", (_req, res) => {
    axios.post('https://vsafesandbox.apac.vesta.io/v4/GetSessionTags', 
        {
            "AccountName" : "EUZyIxJ7T6b8n7Ihbf1oxQ==",
            "Password" : "hI2GD91DHbT6zByclRezaJUfxIU9afXFwwShC9av5YX6cXKKBqLH83Zi3L9ncbP4",
            "TransactionID" : "SCQD-CGZT-BRVS-6KE2-VANB-Q9ZB-D5GJ"
        },
        { headers: 
            {
                'Content-Type': 'application/json',
                'Accept': '*/*',
                "Access-Control-Allow-Headers": "content-type",
                "Access-Control-Allow-Origin": "*",
            } 
        }).then(response => {
            console.log(response.data)
            res.status(200).send(response.data);
        }).catch(error => {
            console.log(error.code);
            console.log(error.status);
            res.send(error);
        })
})

export default vesta;