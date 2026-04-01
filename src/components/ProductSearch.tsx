import { useState } from "react";
import { Search, Pill, FlaskConical, Package } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import type { SearchFilter } from "@/hooks/useProducts";

interface ProductSearchProps {
  onSearch: (query: string, filter: SearchFilter) => void;
}

const filters: { value: SearchFilter; label: string; icon: React.ReactNode }[] = [
  { value: "name", label: "Nombre", icon: <Pill className="w-4 h-4" /> },
  { value: "active_ingredient", label: "Ingrediente Activo", icon: <FlaskConical className="w-4 h-4" /> },
  { value: "presentation", label: "Presentación", icon: <Package className="w-4 h-4" /> },
];

const ProductSearch = ({ onSearch }: ProductSearchProps) => {
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<SearchFilter>("name");

  const handleQueryChange = (value: string) => {
    setQuery(value);
    onSearch(value, activeFilter);
  };

  const handleFilterChange = (filter: SearchFilter) => {
    setActiveFilter(filter);
    onSearch(query, filter);
  };

  return (
    <div className="max-w-2xl mx-auto mb-14">
      {/* Search input */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <Input
          type="text"
          placeholder={`Buscar por ${filters.find(f => f.value === activeFilter)?.label.toLowerCase()}...`}
          value={query}
          onChange={(e) => handleQueryChange(e.target.value)}
          className="pl-12 pr-4 h-14 text-base rounded-2xl border-border bg-card shadow-md focus-visible:ring-accent"
        />
      </div>

      {/* Filter chips */}
      <div className="flex items-center justify-center gap-3 mt-4">
        <span className="text-sm text-muted-foreground font-medium">Filtrar por:</span>
        {filters.map((filter) => (
          <button
            key={filter.value}
            onClick={() => handleFilterChange(filter.value)}
            className={cn(
              "inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
              activeFilter === filter.value
                ? "bg-accent text-accent-foreground shadow-sm"
                : "bg-card border border-border text-muted-foreground hover:border-accent hover:text-accent"
            )}
          >
            {filter.icon}
            {filter.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductSearch;
