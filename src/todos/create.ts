import uuid from "uuid";
import AWS from "aws-sdk";
import {TodoItem} from "./types";

const dynamoDb = new AWS.DynamoDB.DocumentClient();

const handler = (event, context, callback) => {
  const data = JSON.parse(event.body);
  if (typeof data.text !== "string") {
    console.error("Validation Failed"); // tslint:disable-line no-console
    callback(null, {
      statusCode: 400,
      headers: { "Content-Type": "text/plain" },
      body: "Couldn't create the todo item."
    });
    return;
  }

  const timestamp = new Date().getTime();
  const item: TodoItem = {
    id: uuid.v1(),
    text: data.text,
    checked: false,
    createdAt: timestamp,
    updatedAt: timestamp
  };

  const params: AWS.DynamoDB.DocumentClient.PutItemInput = {
    TableName: process.env.DYNAMODB_TABLE || "",
    Item: item
  };

  // write the todo to the database
  dynamoDb.put(params, (error) => {
    // handle potential errors
    if (error) {
      console.error(error); // tslint:disable-line no-console
      callback(null, {
        statusCode: error.statusCode || 501,
        headers: { "Content-Type": "text/plain" },
        body: "Couldn't create the todo item."
      });
      return;
    }

    // create a response
    const response = {
      statusCode: 200,
      body: JSON.stringify(params.Item)
    };
    callback(null, response);
  });
};

export { handler as create };
