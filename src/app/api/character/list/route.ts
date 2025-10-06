import { withUserContext } from "@/lib/api/context/userContext"

export const GET = withUserContext(async ({req, user}) => {
  return { message: `Hello, ${user.name}` }
})
