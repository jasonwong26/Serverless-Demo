import expect from "expect";
import * as todos from "./index";

describe("ToDos", () => {
  it("has list method", () => {
    const handler = todos.list;
    expect(handler).toBeTruthy();
  });
  it("has get method", () => {
    const handler = todos.get;
    expect(handler).toBeTruthy();
  });
  it("has create method", () => {
    const handler = todos.create;
    expect(handler).toBeTruthy();
  });
});
