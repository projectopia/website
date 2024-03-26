/**
 * Represents a server action response
 *
 * @class ServerActionResponse
 */
export class ServerActionResponse {
  // The type of the response, either 'success' or 'error'
  type: 'success' | 'error';

  // The message associated with the response
  message: string;

  /**
   * Creates an instance of ServerActionResponse.
   * @param {({ type: 'success' | 'error'; message: string })} { type, message }
   * @memberof ServerActionResponse
   */
  constructor({ type, message }: { type: 'success' | 'error'; message: string }) {
    this.type = type;
    this.message = message;

    /**
     * Note: The return statement here is necessary because Next.js server actions do not support
     * passing down the class to the client. By returning a plain object from the constructor,
     * we ensure that the response is serialized correctly when sent to the client.
     */
    return {
      type,
      message,
    };
  }
}

/**
 * Represents a server action success response.
 *
 * @extends ServerActionResponse
 */
export class ServerActionSuccessResponse extends ServerActionResponse {
  /**
   * Creates an instance of ServerActionSuccessResponse.
   * @param {string} message - The success message associated with the response.
   * @memberof ServerActionSuccessResponse
   */
  constructor(message: string) {
    super({ type: 'success', message });
  }
}

/**
 * Represents a server action error response.
 *
 * @extends ServerActionResponse
 */
export class ServerActionErrorResponse extends ServerActionResponse {
  /**
   * Creates an instance of ServerActionErrorResponse.
   * @param {string} message - The error message associated with the response.
   * @memberof ServerActionErrorResponse
   */
  constructor(message: string) {
    super({ type: 'error', message });
  }
}
