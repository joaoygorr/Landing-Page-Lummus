import { Button } from "./ui/button";
import { Play, FileText } from "lucide-react";
import { heroContent, centurionFeatures } from "../mock";
import { useState } from "react";
import VideoModal from "./VideoModal";

const Hero = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <>
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoUrl="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        title="Centurion Cotton Ginning System"
      />

      <section
        id="home"
        className="pt-32 pb-20 bg-gradient-to-b from-red-50 to-white"
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in">
              <div className="inline-block">
                <span className="bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-semibold">
                  Soluções líderes do setor
                </span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {heroContent.title}
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                {heroContent.subtitle}
              </p>

              {/* Centurion Features */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">
                  Recursos do Centurion:
                </h3>
                <div className="space-y-3">
                  {centurionFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {feature.title}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  onClick={() => setIsVideoModalOpen(true)}
                  className="bg-red-700 hover:bg-red-800 text-white px-8 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <Play className="mr-2" size={20} fill="white" />
                  Assistir Vídeo
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-red-700 text-red-700 hover:bg-red-50 px-8 transition-all duration-200"
                  onClick={() =>
                    window.open("/assets/centurion-brochure.pdf", "_blank")
                  }
                >
                  <FileText className="mr-2" size={20} />
                  Saiba mais
                </Button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=600&fit=crop"
                  alt="Cotton Ginning Machinery"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Floating Stats */}
              <div className="absolute -bottom-8 left-4 lg:left-0 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-4xl font-bold text-red-700">50+</div>
                <div className="text-sm text-gray-600">Anos de Excelência</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
