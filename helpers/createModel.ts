import { Model, model, Schema } from "mongoose";

// Generic function
export default function createModel<T, TModel = Model<T>>(
  modelName: string,
  schema: Schema<T>
): TModel {
  let createdModel: TModel;
  if (process.env.NODE_ENV === "development") {
    // In development mode
    // is preserved across module reloads caused by HMR (Hot Module Replacement).
    // @ts-ignore
    if (!global[modelName]) {
      createdModel = model<T, TModel>(modelName, schema);
      // @ts-ignore
      global[modelName] = createdModel;
    }
    // @ts-ignore
    createdModel = global[modelName];
  } else {
    // In production mode
    createdModel = model<T, TModel>(modelName, schema);
  }
  return createdModel;
}
