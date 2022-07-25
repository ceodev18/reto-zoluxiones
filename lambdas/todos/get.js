const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB.DocumentClient();
const ssm = new AWS.SSM();
const axios = require('axios');
const normalizeEvent = require('/opt/nodejs/normalizer');
const response = require('/opt/nodejs/response');

exports.handler = async event => {
    if (process.env.DEBUG) {
        console.log({
            message: 'Received event',
            data: JSON.stringify(event),
        });
    }

    try {
        const { pathParameters } = normalizeEvent(event);
        if(pathParameters && pathParameters['id'] && pathParameters['resource']) {
            //if we recieve resource and id, we will call to swapi
            const resp = await axios.get(`https://swapi.py4e.com/api/${pathParameters['resource']}/${pathParameters['id']}`).catch(()=> {
                return 'Do whatever you want with the error';
            });
            return resp.data;
        }else{
            //otherwise we will get data from dynamodb
            const { Parameter: { Value: table } } = await ssm.getParameter({ Name: process.env.TABLE }).promise();
            const params = {
                TableName: table,
            };
            let data = {};
            if (pathParameters && pathParameters['todoId']) {
                data = await dynamo
                    .get({
                        ...params,
                        Key: {
                            id: parseInt(pathParameters['todoId'], 10),
                        },
                    })
                    .promise();
            } else {
                data = await dynamo.scan(params).promise();
            }
    
            console.log({
                message: 'Records found',
                data: JSON.stringify(data),
            });
    
            return response(200, data);
        }
        
        
    } catch (err) {
        console.error(err);
        return response(500, 'Somenthing went wrong');
    }
};