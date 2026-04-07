import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export function usePromotions() {
  return useQuery({
    queryKey: ["promotions"],
    queryFn: async () => {
      console.log("[usePromotions] Fetching promotions...");
      const { data, error } = await supabase
        .from("promotions")
        .select("*")
        .eq("is_active", true)
        .order("display_order", { ascending: true });
      if (error) {
        console.error("[usePromotions] Error:", error);
        throw error;
      }
      console.log("[usePromotions] Got", data?.length, "promotions");
      return data;
    },
  });
}

export function useSiteSettings() {
  return useQuery({
    queryKey: ["site_settings"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("site_settings")
        .select("*");
      if (error) throw error;
      return data;
    },
  });
}
