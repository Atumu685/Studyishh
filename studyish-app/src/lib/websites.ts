import { createClient } from "~/lib/supabase/client";

export interface MathSite {
  id: string;
  name: string;
  url: string;
  description: string;
  categories: string[];
  levels: string[];
  emoji: string;
  featured?: boolean;
}

export async function fetchWebsites(): Promise<MathSite[]> {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("websites")
    .select("*")
    .order("name", { ascending: true });

  if (error) throw new Error(error.message);

  return data ?? [];
}
