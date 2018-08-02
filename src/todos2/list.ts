import AWS from "aws-sdk"; // eslint-disable-line import/no-extraneous-dependencies
import {DynamoDbParams, LambdaHandler} from "./types";

const dynamoDb = new AWS.DynamoDB.DocumentClient();
const params: DynamoDbParams = {
  TableName: process.env.DYNAMODB_TABLE || ""
};

const listHandler: LambdaHandler = (event, context, callback) => {
  // fetch all todos from the database
  dynamoDb.scan(params, (error, result) => {
    // handle potential errors
    if (error) {
      // console.error(error);
      callback(null, {
        statusCode: error.statusCode || 501,
        headers: { "Content-Type": "text/plain" },
        body: "Couldn't fetch the todos."
      });
      return;
    }

    // create a response
    const response = {
      statusCode: 200,
      body: JSON.stringify(result.Items)
    };
    callback(null, response);
  });
};

export { listHandler as list };
