import { ErrorInterface } from "../interfaces/error.interface";

const lauchError = (status: number, message: string): ErrorInterface => {
  return {status, message};
}

export default lauchError;