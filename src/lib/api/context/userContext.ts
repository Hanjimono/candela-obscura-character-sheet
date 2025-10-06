import { ApiUserContext } from "@/constants/types/api"
import { apiHandler } from "../handler"
import { User } from "@/database/models/user"

/**
 * A wrapper for API handlers that provides the user context.
 */
export function withUserContext<T>(
  handler: (ctx: ApiUserContext) => Promise<T>
) {
  return apiHandler(async (req) => {
    const { searchParams } = new URL(req.url)
    const email = searchParams.get("user")
    if (!email) {
      throw new Error("Unauthorized")
    }
    const user = await User.getUserByEmail(email)
    if (!user) {
      throw new Error("Unauthorized")
    }
    return handler({ req, user })
  })
}
