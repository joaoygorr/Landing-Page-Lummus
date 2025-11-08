import { Award, Globe, Users, Wrench } from "lucide-react";
import { companyInfo } from "../mock";

const About = () => {
  const stats = [
    {
      icon: <Globe className="w-8 h-8" />,
      value: "60+",
      label: "Countries Served",
    },
    {
      icon: <Users className="w-8 h-8" />,
      value: "500+",
      label: "Expert Team",
    },
    {
      icon: <Award className="w-8 h-8" />,
      value: "1000+",
      label: "Installations",
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      value: "24/7",
      label: "Support",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-red-700 font-semibold text-sm uppercase tracking-wide">
            SOBRE NÓS
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Liderando a inovação no processamento do algodão
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            {companyInfo.description}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-gradient-to-br from-red-50 to-white border border-red-100 hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 text-red-700 rounded-full mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Core Values */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 rounded-xl bg-gradient-to-br from-red-50 to-white border border-red-100">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Inovação</h3>
            <p className="text-gray-600">
              Desenvolvendo continuamente tecnologia de ponta para atender às
              necessidades em constante evolução da indústria do algodão.
            </p>
          </div>
          <div className="p-8 rounded-xl bg-gradient-to-br from-red-50 to-white border border-red-100">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Qualidade</h3>
            <p className="text-gray-600">
              Comprometida em fornecer máquinas da mais alta qualidade e manter
              padrões superiores de qualidade de fibra.
            </p>
          </div>
          <div className="p-8 rounded-xl bg-gradient-to-br from-red-50 to-white border border-red-100">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Parceria</h3>
            <p className="text-gray-600">
              Construindo relacionamentos duradouros com clientes em todo o
              mundo por meio de serviços e suporte excepcionais.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
