import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { products } from "../mock";

const Products = () => {
  return (
    <section
      id="products"
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-red-700 font-semibold text-sm uppercase tracking-wide">
            NOSSAS SOLUÇÕES
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Linha de Produtos
          </h2>
          <p className="text-xl text-gray-600">
            Soluções abrangentes de máquinas para todas as etapas do
            processamento de fibras
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white">
                    {product.title}
                  </h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {product.description}
                </p>
                <Button
                  variant="ghost"
                  className="text-red-700 hover:text-red-800 hover:bg-red-50 p-0 h-auto transition-colors duration-200"
                >
                  Saiba mais
                  <ArrowRight className="ml-2" size={16} />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
