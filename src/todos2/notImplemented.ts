import {LambdaHandler} from "./types";

const handler: LambdaHandler = (event, context, callback) => {
  // create a response
  const response = {
    statusCode: 500,
    headers: { "Content-Type": "text/plain" },
    body: "Not implemented yet!"
  };
  callback(null, response);

  return;
};

export { handler as notImpl };
