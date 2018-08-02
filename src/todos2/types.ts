export interface DynamoDbParams {
  TableName: string
}

export interface LambdaHandler {
  (event: any, context: any, callback: any): void;
}

export interface ToDosApi {
  list: LambdaHandler,
  get: LambdaHandler,
  create: LambdaHandler,
  update: LambdaHandler,
  delete: LambdaHandler
}
