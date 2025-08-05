import React, { useState, useEffect } from 'react';

const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const projects = [
    {
      id: '01',
      title: 'E-Commerce Platform',
      category: 'Web Development',
      year: '2024',
      description: 'Modern e-commerce solution with seamless user experience, advanced filtering, and secure payment integration.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=800&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      results: {
        conversion: '+45%',
        performance: '98/100',
        users: '25K+'
      }
    },
    {
      id: '02',
      title: 'Healthcare Dashboard',
      category: 'UI/UX Design',
      year: '2024',
      description: 'Intuitive healthcare management system focusing on patient data visualization and workflow optimization.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=800&fit=crop',
      technologies: ['Figma', 'React', 'D3.js', 'PostgreSQL'],
      results: {
        efficiency: '+60%',
        satisfaction: '4.9/5',
        adoption: '89%'
      }
    },
    {
      id: '03',
      title: 'Mobile Banking App',
      category: 'Mobile Development',
      year: '2023',
      description: 'Secure and user-friendly banking application with biometric authentication and real-time notifications.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=800&fit=crop',
      technologies: ['React Native', 'Node.js', 'AWS', 'Biometrics'],
      results: {
        downloads: '100K+',
        rating: '4.8/5',
        retention: '92%'
      }
    },
    {
      id: '04',
      title: 'Brand Identity System',
      category: 'Brand Design',
      year: '2023',
      description: 'Complete brand transformation including logo design, guidelines, and marketing collateral for tech startup.',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=800&fit=crop',
      technologies: ['Illustrator', 'Photoshop', 'InDesign', 'Figma'],
      results: {
        recognition: '+150%',
        engagement: '+75%',
        reach: '500K+'
      }
    }
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className={`mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              A showcase of our most impactful work, where strategic thinking meets exceptional execution.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Project Info */}
          <div className="order-2 lg:order-1">
            <div className="space-y-8">
              {/* Project Navigation */}
              <div className="flex space-x-2 mb-8">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveProject(index)}
                    className={`w-12 h-1 rounded-full transition-all duration-300 ${
                      index === activeProject 
                        ? 'bg-blue-600' 
                        : 'bg-gray-200 hover:bg-gray-300'
                    }`}
                  />
                ))}
              </div>

              {/* Project Details */}
              <div className="transform transition-all duration-500" key={activeProject}>
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {projects[activeProject].category}
                  </span>
                  <span className="text-sm text-gray-500">{projects[activeProject].year}</span>
                </div>

                <h3 className="text-4xl font-bold text-gray-900 mb-4">
                  {projects[activeProject].title}
                </h3>

                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  {projects[activeProject].description}
                </p>

                {/* Technologies */}
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {projects[activeProject].technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-lg hover:bg-gray-200 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Results */}
                <div className="grid grid-cols-3 gap-6 mb-8">
                  {Object.entries(projects[activeProject].results).map(([key, value], index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-gray-900 mb-1">{value}</div>
                      <div className="text-sm text-gray-500 capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <button className="px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors duration-200">
                    View Project
                  </button>
                  <button className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-all duration-200">
                    Case Study
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Project Image */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              {/* Main Image Container */}
              <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100 shadow-2xl">
                <img
                  src={projects[activeProject].image}
                  alt={projects[activeProject].title}
                  className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
                />
                
                {/* Subtle Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Floating Project Number */}
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-gray-900">
                  {projects[activeProject].id}
                </span>
              </div>

              {/* Floating Category Badge */}
              <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white px-4 py-2 rounded-xl shadow-lg">
                <span className="text-sm font-medium">{projects[activeProject].year}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Project Grid Navigation */}
        <div className="mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {projects.map((project, index) => (
              <button
                key={index}
                onClick={() => setActiveProject(index)}
                className={`p-4 rounded-xl text-left transition-all duration-300 ${
                  index === activeProject
                    ? 'bg-blue-50 border-2 border-blue-200'
                    : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent'
                }`}
              >
                <div className="aspect-[4/3] rounded-lg overflow-hidden mb-3">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-semibold text-gray-900 text-sm mb-1">
                  {project.title}
                </h4>
                <p className="text-xs text-gray-500">{project.category}</p>
              </button>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-gray-50 rounded-3xl py-16 px-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Let's Build Something Amazing Together
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Ready to start your next project? We'd love to hear about your vision and discuss how we can bring it to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors duration-200">
              Start a Project
            </button>
            <button className="px-8 py-4 border border-gray-300 text-gray-700 font-medium rounded-lg hover:border-gray-400 hover:bg-white transition-all duration-200">
              View All Work
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;