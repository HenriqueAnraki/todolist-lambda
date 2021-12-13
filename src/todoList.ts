import { Handler } from "aws-lambda";
import "reflect-metadata";
import { createConnection, getRepository } from "typeorm";

import { Task } from "./entity/Task";
import { envConnection } from "./environment";

createConnection({ ...envConnection, entities: [Task] });

console.log(process.env.SECRET_MESSAGE);

// createConnection({
//   type: "mysql",
//   host: "localhost",
//   port: 3306,
//   username: "test",
//   password: "test",
//   database: "test",
// });

// type Handler<TEvent = any, TResult = any> = (
//   event: TEvent,
//   context: Context,
//   callback: Callback<TResult>
// ) => void | Promise<TResult>;

export const createTaskHandler: Handler = async (event: any) => {
  const task = JSON.parse(event.body);

  const fullTask = `${task.title} + ${task.desc}`;

  try {
    const repo = getRepository(Task);
    const res = await repo.save(task);

    // const response = {
    return {
      statusCode: 201,
      body: JSON.stringify(res, null, 2),
    };
  } catch (error) {
    console.error(error);
    return error;
  }

  // return new Promise((resolve) => {
  //   resolve(response)
  // })
};

export const getTodoListHandler: Handler = async (event: any) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "You got the full todo list",
        input: event,
      },
      null,
      2
    ),
  };
};

export const updateTaskHandler: Handler = async (event: any) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `You Updated the task ${event.pathParameters.taskId}`,
        input: event,
      },
      null,
      2
    ),
  };
};

export const deleteTaskHandler: Handler = async (event: any) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `You deleted the task ${event.pathParameters.taskId}`,
        input: event,
      },
      null,
      2
    ),
  };
};

export const completeTaskHandler: Handler = async (event: any) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `You complete the task ${event.pathParameters.taskId}!!`,
        input: event,
      },
      null,
      2
    ),
  };
};

// module.exports = {
//   createTaskHandler,
//   getTodoListHandler,
//   updateTaskHandler,
//   deleteTaskHandler,
//   completeTaskHandler,
// };
