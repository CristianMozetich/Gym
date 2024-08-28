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
        const response = await fetch('https://one80-server.onrender.com/auth/socialLogin', {
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
        if (data.success) {
          user.id = data.userId; // Usamos el _id de MongoDB
          return true;
        } else {
          return false;
        }
      } catch (error) {
        console.error("Error al registrar el usuario en el backend:", error);
        return false;
      }
    },
    async jwt({ token, user }) {

      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }: any) {
      if(session.user){
        session.user.id = token.id;
        return session;
      }

    },
  },

});



export { handler as GET, handler as POST };
