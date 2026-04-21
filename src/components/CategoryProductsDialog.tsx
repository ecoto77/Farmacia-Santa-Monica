import { motion, AnimatePresence } from "framer-motion";
import { X, Package, Pill, FlaskConical } from "lucide-react";
import { useProducts } from "@/hooks/useProducts";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface CategoryProductsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  categoryId: string;
  categoryName: string;
  categoryImage: string;
}

const CategoryProductsDialog = ({
  open,
  onOpenChange,
  categoryId,
  categoryName,
  categoryImage,
}: CategoryProductsDialogProps) => {
  const { data: products, isLoading } = useProducts({ categoryId });

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-xl max-h-[85vh] p-0 overflow-hidden rounded-2xl border-border bg-card">
        {/* Header with image */}
        <div className="relative h-40 overflow-hidden">
          <img
            src={categoryImage}
            alt={categoryName}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/30 to-transparent" />
          {/* Custom pill close button */}
          <Button
            variant="secondary"
            size="icon"
            onClick={() => onOpenChange(false)}
            className="absolute top-3 right-3 z-10 h-10 w-10 rounded-full bg-white/90 hover:bg-white text-foreground shadow-lg shadow-black/20 border-0 backdrop-blur-sm transition-all duration-200 hover:scale-105"
          >
            <X className="h-5 w-5" strokeWidth={2.5} />
            <span className="sr-only">Cerrar</span>
          </Button>
          <DialogHeader className="absolute bottom-0 left-0 right-0 p-6">
            <DialogTitle className="text-2xl font-display font-bold text-white">
              {categoryName}
            </DialogTitle>
          </DialogHeader>
        </div>

        {/* Product list */}
        <div className="overflow-y-auto max-h-[calc(85vh-10rem)] p-6">
          {isLoading ? (
            <div className="space-y-3">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-16 rounded-xl bg-muted animate-pulse" />
              ))}
            </div>
          ) : products && products.length > 0 ? (
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground mb-4">
                {products.length} producto{products.length !== 1 ? "s" : ""} disponible{products.length !== 1 ? "s" : ""}
              </p>
              <AnimatePresence>
                {products.map((product, i) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.03, duration: 0.3 }}
                    className="flex items-center justify-between gap-4 p-4 rounded-xl border border-border bg-background hover:border-accent/50 hover:shadow-sm transition-all duration-200 group"
                  >
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-foreground text-sm group-hover:text-accent transition-colors">
                        {product.name}
                      </h4>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1">
                        {product.active_ingredient && (
                          <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                            <FlaskConical className="w-3 h-3" />
                            {product.active_ingredient}
                          </span>
                        )}
                        {product.presentation && (
                          <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                            <Package className="w-3 h-3" />
                            {product.presentation}
                          </span>
                        )}
                      </div>
                    </div>
                    {product.price !== null && product.price > 0 && (
                      <span className="text-sm font-bold text-accent whitespace-nowrap">
                        ₡{product.price.toLocaleString("es-CR", { maximumFractionDigits: 0 })}
                      </span>
                    )}
                    {product.price === 0 && (
                      <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded-full whitespace-nowrap">
                        Gratis
                      </span>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          ) : (
            <div className="text-center py-12 text-muted-foreground">
              <Pill className="w-10 h-10 mx-auto mb-3 opacity-40" />
              <p className="text-sm">No hay productos en esta categoría aún.</p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CategoryProductsDialog;
