import protectRoute from "~/server/protectedRoute";
import { serverSupabaseUser } from "#supabase/server";

export default async (e: any) => {
  await protectRoute(e);
  const authUser = await serverSupabaseUser(e);
  if (!authUser) throw new Error("Missing auth");

  return { ...authUser };
};
