enum STATUS {
  OK = 200,
  CREATED,
  ACCEPT,
  BADREQUEST = 400,
  UNAUTHORIZED,
  FORBIDEN = 403,
  NOTFOUND,
  INTERNALERROR = 500,
  BADGATWAY = 502,
}

export default STATUS;
