import { withUserContext } from "@/lib/api/context/userContext"
import { NextResponse } from "next/server"
import { promises as fs } from "fs"
import path from "path"

export const POST = withUserContext(async ({ req, user }) => {
  const body = await req.json()
  const filePath = path.join(process.cwd(), "public", "data", "character.json")
  await fs.writeFile(filePath, JSON.stringify(body, null, 2), "utf-8")
  return true
})
