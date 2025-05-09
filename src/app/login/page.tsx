import { Suspense } from "react";

import SupabaseUser from "@/components/supabase-user";

export default function Page() {
  return (
    <Suspense fallback={<h1>loading...</h1>}>
      <SupabaseUser />
    </Suspense>
  );
}
