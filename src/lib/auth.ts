import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import SequelizeAdapter from "@next-auth/sequelize-adapter"
import { sequelize } from "./sequelize"

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut
} = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    })
  ],
  adapter: SequelizeAdapter(sequelize),
  secret: process.env.NEXTAUTH_SECRET
})
