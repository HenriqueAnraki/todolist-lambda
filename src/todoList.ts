import { Handler } from "aws-lambda";

import { createConnection } from "typeorm";

// type Handler<TEvent = any, TResult = any> = (
//   event: TEvent,
//   context: Context,
//   callback: Callback<TResult>
// ) => void | Promise<TResult>;

createConnection();

const createTaskHandler: Handler = async (event: any) => {
  const { title, desc } = JSON.parse(event.body);

  const fullTask = `${title} + ${desc}`;

  // const response = {
  return {
    statusCode: 201,
    body: JSON.stringify(
      {
        message: fullTask,
        input: event,
      },
      null,
      2
    ),
  };

  // return new Promise((resolve) => {
  //   resolve(response)
  // })
};

const getTodoListHandler: Handler = async (event: any) => {
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

const updateTaskHandler: Handler = async (event: any) => {
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

const deleteTaskHandler: Handler = async (event: any) => {
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

const completeTaskHandler: Handler = async (event: any) => {
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

module.exports = {
  createTaskHandler,
  getTodoListHandler,
  updateTaskHandler,
  deleteTaskHandler,
  completeTaskHandler,
};
