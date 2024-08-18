import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import facebookProvider from "next-auth/providers/facebook";
import "dotenv/config";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    facebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID as string,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string,
    }),
  ],
});



export { handler as GET, handler as POST };
