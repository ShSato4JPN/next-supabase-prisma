import CredentialsProvider from "next-auth/providers/credentials";

import type { NextAuthConfig } from "next-auth";

import { supabase } from "@/supabaseClient";

export default {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { data, error } = await supabase.auth.signInWithPassword({
          email: credentials.email as string,
          password: credentials.password as string,
        });

        if (error) {
          throw new Error("auth error");
        }

        if (data) {
          return {
            email: "test",
            password: "password",
          };
        } else {
          return null;
        }
      },
    }),
  ],
} satisfies NextAuthConfig;
