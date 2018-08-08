import AWS from "aws-sdk";
import {TodoItem} from "./types";

const dynamoDb = new AWS.DynamoDB.DocumentClient();

const handler = (event, context, callback) => {
  const params: AWS.DynamoDB.DocumentClient.DeleteItemInput = {
    TableName: process.env.DYNAMODB_TABLE || "",
    Key: {
      id: event.pathParameters.id
    }
  };

  // delete the todo from the database
  dynamoDb.delete(params, (error) => {
    // handle potential errors
    if (error) {
      console.error(error); // tslint:disable-line no-console
      callback(null, {
        statusCode: error.statusCode || 501,
        headers: { "Content-Type": "text/plain" },
        body: "Couldn't remove the todo item."
      });
      return;
    }

    // create a response
    const response = {
      statusCode: 200,
      body: JSON.stringify({})
    };
    callback(null, response);
  });
};

export { handler as deleteHandler };
