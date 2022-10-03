import { ErrorInterface } from "../interfaces/error.interface";

const NewError = (status: number, message: string): ErrorInterface => {
  return {status, message};
}

export default NewError;