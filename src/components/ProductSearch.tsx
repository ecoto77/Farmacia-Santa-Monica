import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface ProductSearchProps {
  onSearch: (query: string) => void;
}

const ProductSearch = ({ onSearch }: ProductSearchProps) => {
  const [query, setQuery] = useState("");

  const handleQueryChange = (value: string) => {
    setQuery(value);
    onSearch(value);
  };

  return (
    <div className="max-w-2xl mx-auto mb-14">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Buscar productos por nombre, ingrediente activo o presentación..."
          value={query}
          onChange={(e) => handleQueryChange(e.target.value)}
          className="pl-12 pr-4 h-14 text-base rounded-2xl border-border bg-card shadow-md focus-visible:ring-accent"
        />
      </div>
    </div>
  );
};

export default ProductSearch;
