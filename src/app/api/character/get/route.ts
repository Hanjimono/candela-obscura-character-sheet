import { withUserContext } from "@/lib/api/context/userContext"
import { NextResponse } from "next/server"
import { promises as fs } from "fs"
import path from "path"

export const GET = withUserContext(async ({ req, user }) => {
  const filePath = path.join(process.cwd(), "public", "data", "character.json")
  const data = await fs.readFile(filePath, "utf-8")
  const character = JSON.parse(data)
  return character
})
