"use server";

import { signIn, signOut } from "@/auth";

export const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  await signIn("credentials", { email, password });
};

export const logout = async () => {
  await signOut();
};
