import { Schema, model } from "mongoose";

const taskSchemea = new Schema(
  {
    title: {
      type: String,
      required: true,
      //esta propiedad limpia el string de los espacios en blanco al inicio y al final
      trim: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    done: {
      type: Boolean,
      default: false,
    },
  },
  {
    versionKey: false,
  }
);

export default model("Task", taskSchemea);
