import {ToDosApi, LambdaHandler} from "./types";
import {list} from "./list";
import {get} from "./get";
import {notImpl} from "./notImplemented";

// const api: ToDosApi = {
//   list,
//   get: notImpl,
//   create: notImpl,
//   update: notImpl,
//   delete: notImpl
// };

// export api;
export {
  list,
  notImpl as get,
  notImpl as create,
  notImpl as update,
  notImpl as delete
};
