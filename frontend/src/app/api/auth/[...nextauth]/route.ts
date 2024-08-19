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
  callbacks: {
    async signIn({ user, account }): Promise<boolean> {
      try {
        const response = await fetch('http://localhost:1000/auth/socialLogin', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: user.email,
            name: user.name,
            provider: account?.provider,
          }),
        });

        const data = await response.json();
        return data.success;
      } catch (error) {
        console.error("Error al registrar el usuario en el backend:", error);
        return false;
      }
    },
    async jwt({ token, user }): Promise<any> {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session }): Promise<any> {

      return session;
    },
  },

});



export { handler as GET, handler as POST };
