import { Card, CardContent } from "./ui/card";
import { MapPin } from "lucide-react";
import { cases } from "../mock";

const Cases = () => {
  return (
    <section id="cases" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-red-700 font-semibold text-sm uppercase tracking-wide">
            Histórias DE SUCESSO
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Nosso Trabalho
          </h2>
          <p className="text-xl text-gray-600">
            Soluções reais que proporcionam resultados excepcionais para nossos
            clientes
          </p>
        </div>

        <div className="space-y-8">
          {cases.map((caseStudy, index) => (
            <Card
              key={caseStudy.id}
              className={`overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300 ${
                index % 2 === 0 ? "" : ""
              }`}
            >
              <div className="grid md:grid-cols-2 gap-0">
                {index % 2 === 0 ? (
                  <>
                    <div className="relative h-64 md:h-auto overflow-hidden">
                      <img
                        src={caseStudy.image}
                        alt={caseStudy.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    </div>
                    <CardContent className="p-8 flex flex-col justify-center">
                      <div className="flex items-center space-x-2 text-red-700 mb-4">
                        <MapPin size={18} />
                        <span className="text-sm font-semibold">
                          {caseStudy.location}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {caseStudy.title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {caseStudy.description}
                      </p>
                    </CardContent>
                  </>
                ) : (
                  <>
                    <CardContent className="p-8 flex flex-col justify-center order-2 md:order-1">
                      <div className="flex items-center space-x-2 text-red-700 mb-4">
                        <MapPin size={18} />
                        <span className="text-sm font-semibold">
                          {caseStudy.location}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {caseStudy.title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {caseStudy.description}
                      </p>
                    </CardContent>
                    <div className="relative h-64 md:h-auto overflow-hidden order-1 md:order-2">
                      <img
                        src={caseStudy.image}
                        alt={caseStudy.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    </div>
                  </>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;
