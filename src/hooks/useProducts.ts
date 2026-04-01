import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import type { Tables } from "@/integrations/supabase/types";

export type Product = Tables<"products">;
export type Category = Tables<"categories">;

export type SearchFilter = "name" | "active_ingredient" | "presentation";

interface UseProductsOptions {
  searchQuery?: string;
  searchFilter?: SearchFilter;
  categoryId?: string;
}

export function useProducts({ searchQuery, searchFilter, categoryId }: UseProductsOptions = {}) {
  return useQuery({
    queryKey: ["products", searchQuery, searchFilter, categoryId],
    queryFn: async () => {
      let query = supabase
        .from("products")
        .select("*, categories(name, slug)")
        .order("name", { ascending: true });

      if (categoryId) {
        query = query.eq("category_id", categoryId);
      }

      if (searchQuery && searchQuery.trim().length > 0) {
        const term = `%${searchQuery.trim()}%`;
        if (searchFilter === "active_ingredient") {
          query = query.ilike("active_ingredient", term);
        } else if (searchFilter === "presentation") {
          query = query.ilike("presentation", term);
        } else {
          query = query.ilike("name", term);
        }
      }

      const { data, error } = await query;
      if (error) throw error;
      return data;
    },
  });
}

export function useCategories() {
  return useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("categories")
        .select("*")
        .order("display_order", { ascending: true });
      if (error) throw error;
      return data;
    },
  });
}
