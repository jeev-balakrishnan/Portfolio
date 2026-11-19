import { useEffect, useState } from "react";
import { supabase, supabaseConfigured } from "@/lib/supabase";
import type { Profile } from "@/types";

// Fallback shown only until the owner fills in the profile from the admin dashboard.
const fallback: Profile = {
  name: "Jeevanantham B.", tagline: "Designer, editor and web developer",
  intro: "I build identities, films and interfaces that feel considered down to the last frame.",
  headline_words: ["Design", "Motion", "Code"], photo_url: null, resume_url: null,
};

export function useProfile() {
  const [profile, setProfile] = useState<Profile>(fallback);
  const [loading, setLoading] = useState(supabaseConfigured);
  useEffect(() => {
    if (!supabaseConfigured) return;
    supabase.from("profile").select("*").limit(1).maybeSingle().then(({ data }) => {
      if (data) setProfile({ ...fallback, ...data });
      setLoading(false);
    });
  }, []);
  return { profile, loading };
}
