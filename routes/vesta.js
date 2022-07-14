import express from "express";
import axios from "axios";

const vesta = express.Router();

vesta.post("/getSessionTags", (_req, res) => {
    axios.post(process.env.VESTA_URL+'/GetSessionTags',
        {
            "AccountName" : process.env.VESTA_API_ACCOUNTNAME,
            "Password" : process.env.VESTA_API_PASSWORD,
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