// https://www.typescriptlang.org/docs/handbook/2/narrowing.html#discriminated-unions

// Discriminated Unions are a pattern that allows you to narrow down the possible values of an object based on the value of a specific property.

// Bad example
// This way both data and errorMessage are optional, and it make the code we write to handle the response more complex.
type UserApiResponse = {
  status: "Error" | "Success";
  data?: {
    id: string, 
    name: string 
  }
  errorMessage?: string;
  };


  type SuccessResponse = {
    status: "Success";
    data: {
      id: string, 
      name: string 
    }
  }

  type ErrorResponse = {
    status: "Error";
    errorMessage: string;
  }

  // Good example
  // This way we can use the status property to narrow down the possible values of the object. The code we write to handle the response is more simple and cleaner.
  type UserApiResponse2 = SuccessResponse | ErrorResponse;

  function handleResponse(res: UserApiResponse2) {
    if (res.status === 'Success') {
      console.log(res.data.name);
    } else {
      console.log(res.errorMessage.length);
    }
  }

  export {}