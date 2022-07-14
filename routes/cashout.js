import express from "express";
import axios from "axios";

const cashout = express.Router();

cashout.get("/conversion-rate", (req, res) => {
    axios.get(process.env.KUMU_API_LINK+'/order/conversion-rate', 
        { headers: 
            {
                'x-kumu-token': req.headers['x-kumu-token'],
                'device-id': req.headers['device-id'],
                'device-type': req.headers['device-type'],
                'version-code': req.headers['version-code'],
                'x-kumu-userid': req.headers['x-kumu-userid']
            } 
        }).then(response => {
            console.log(response.data)
            res.send(response.data.data);
        }).catch(error => {
            console.log(error);
            res.send(error);
        })
})

cashout.post("/cashouttype", (req, res) => {
    axios.get(process.env.KUMU_API_LINK+'/order/cashouttype', 
        { headers: 
            {
                'x-kumu-token': req.headers['x-kumu-token'],
                'device-id': req.headers['device-id'],
                'device-type': req.headers['device-type'],
                'version-code': req.headers['version-code'],
                'x-kumu-userid': req.headers['x-kumu-userid']
            } 
        }).then(response => {
            console.log(response.data)
            res.status(200).send(response.data.data);
        }).catch(error => {
            console.log(error.code);
            console.log(error.status);
            res.send(error);
        })
})

export default cashout;