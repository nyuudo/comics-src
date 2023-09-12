import type { Database } from "@/types/database";
import { createPagesBrowserClient } from "@supabase/auth-helpers-nextjs";

export const createClient = () => createPagesBrowserClient<Database>();
