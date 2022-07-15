import express from "express";
import axios from "axios";

const vesta = express.Router();

vesta.post("/getSessionTags", (req, res) => {
    axios.post(process.env.VESTA_URL+'/GetSessionTags',
        {
            "AccountName" : process.env.VESTA_API_ACCOUNTNAME,
            "Password" : process.env.VESTA_API_PASSWORD,
            "TransactionID" : req.body.transactionID
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
});

vesta.post("/chargePaymentRequest", (req, res) => {
    axios.post(process.env.VESTA_URL+'/ChargePaymentRequest',
        {
            "AccountHolderAddressLine1" : "9666 Ignacio Prairie",
            "AccountHolderCity" : "Gerardobury",
            "AccountHolderCountryCode" : "US",
            "AccountHolderFirstName" : "John",
            "AccountHolderLastName" : "Doe",
            "AccountHolderPostalCode" : "55742",
            "AccountHolderRegion" : "Vermont",
            "RiskInformation" : req.body.riskInformationXml,
            "AccountHolderAddressLine2" : "Suite 628",
            "AccountName" : process.env.VESTA_API_ACCOUNTNAME,
            "AccountNumber" : "340001234527890",
            "AccountNumberIndicator" : "1",
            "Amount" : "34.85",
            "AutoDisposition" : "0",
            "CVV" : "105",
            "CipherText" : "F22846F60482457F4F1...",
            "CreatedByUser" : "John-Doe",
            "ExpirationMMYY" : "1230",
            "MerchantRoutingID" : "10",
            "NumberOfPayments" : "2",
            "PartnerCustomerKey" : "0GK2-CIQ5-ZA85-ZB14-2URR-GB1V-SIMJ",
            "Password" : process.env.VESTA_API_PASSWORD,
            "PaymentDescriptor" : "ChargePaymentRequest",
            "PaymentSource" : "WEB",
            "PlanType" : "1",
            "RecurringArrangementID" : "123XNQCKULS",
            "ReportingInformation" : "<?xml version='1.0' encoding='UTF-8'?><PartnerReportingAttributes xmlns='http://www.vesta.io/ReportingAttributes' xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance' xsi:schemaLocation='http://www.vesta.io/ReportingAttributes ReportingAttributes.xsd'><Parameter01>ReportingInformation</Parameter01></PartnerReportingAttributes>",
            "StoreCard" : "0",
            "TransactionID" : req.body.transactionID,
            "WebSessionID" : req.body.webSessionID
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
        }).catch(err => {
            console.log(err.code);
            console.log(err.status);
            res.send(err);
        })
});

export default vesta;