// import jwt from "jsonwebtoken";
// import Email from "next-auth/providers/email";

// import type { NextAuthConfig } from "next-auth";

// export default {
//   providers: [],
//   callbacks: {
//     async session({ session, user }) {
//       const signingSecret = process.env.SUPABASE_JWT_SECRET;
//       if (signingSecret) {
//         const payload = {
//           aud: "authenticated",
//           exp: Math.floor(new Date(session.expires).getTime() / 1000),
//           sub: user.id,
//           email: user.email,
//           role: "authenticated",
//         };
//         session.supabaseAccessToken = jwt.sign(payload, signingSecret);
//       }
//       return session;
//     },
//   },
// } satisfies NextAuthConfig;
