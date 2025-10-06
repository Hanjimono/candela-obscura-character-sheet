import { User } from "@/database/models/user"

/** A generic API response type */
export interface ApiResponse<T> {
  /** Indicates if the request was successful or not */
  success: boolean
  /** The data returned from the API, if any */
  data?: T
  /** An error message, if the request was not successful */
  error?: string
  /** Additional details about the error, if any */
  details?: string
}

/**  A base interface for API handlers that provides the request object. */
export interface BaseApiContext {
  /** The request object */
  req: Request
}

/**  A wrapper interface for API handlers that provides the active user context. */
export interface ApiUserContext extends BaseApiContext {
  /** The active user, if any */
  user: User
}