import React from 'react';
import { Award, Globe, Users, Wrench } from 'lucide-react';
import { companyInfo } from '../mock';

const About = () => {
  const stats = [
    {
      icon: <Globe className="w-8 h-8" />,
      value: "60+",
      label: "Countries Served"
    },
    {
      icon: <Users className="w-8 h-8" />,
      value: "500+",
      label: "Expert Team"
    },
    {
      icon: <Award className="w-8 h-8" />,
      value: "1000+",
      label: "Installations"
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      value: "24/7",
      label: "Support"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-emerald-700 font-semibold text-sm uppercase tracking-wide">
            About Us
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Leading Innovation in Cotton Processing
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
              className="text-center p-6 rounded-xl bg-gradient-to-br from-emerald-50 to-white border border-emerald-100 hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Core Values */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 rounded-xl bg-gradient-to-br from-emerald-50 to-white border border-emerald-100">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation</h3>
            <p className="text-gray-600">
              Continuously developing cutting-edge technology to meet the evolving needs of the cotton industry.
            </p>
          </div>
          <div className="p-8 rounded-xl bg-gradient-to-br from-emerald-50 to-white border border-emerald-100">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Quality</h3>
            <p className="text-gray-600">
              Committed to delivering the highest quality machinery and maintaining superior fiber quality standards.
            </p>
          </div>
          <div className="p-8 rounded-xl bg-gradient-to-br from-emerald-50 to-white border border-emerald-100">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Partnership</h3>
            <p className="text-gray-600">
              Building lasting relationships with customers worldwide through exceptional service and support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
