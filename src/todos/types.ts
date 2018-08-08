
export type LambdaHandler = (event: any, context: any, callback: any) => void;

export interface ToDosApi {
  list: LambdaHandler,
  get: LambdaHandler,
  create: LambdaHandler,
  update: LambdaHandler,
  delete: LambdaHandler
}

export interface TodoItem {
  id: string,
  text: string,
  checked: boolean,
  createdAt: number,
  updatedAt: number
}
