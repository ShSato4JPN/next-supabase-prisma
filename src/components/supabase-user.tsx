import { auth } from "@/auth";

export default async function SupabaseUser() {
  const session = await auth();

  return <div>{JSON.stringify(session)}</div>;
}
