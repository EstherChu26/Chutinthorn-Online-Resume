import { Briefcase, Award, Users } from 'lucide-react';

export function About() {
  const highlights = [
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "5+ Years",
      description: "Professional Experience"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "1.8M THB",
      description: "Deals Secured"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "50,000+",
      description: "Event Audience Managed"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8 text-center">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {highlights.map((item, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
              <div className="text-blue-600 mb-3 flex justify-center">{item.icon}</div>
              <div className="text-2xl font-bold text-slate-900 mb-1">{item.title}</div>
              <div className="text-slate-600">{item.description}</div>
            </div>
          ))}
        </div>

        <div className="bg-slate-50 rounded-2xl p-8 sm:p-10">
          <h3 className="text-2xl font-semibold text-slate-900 mb-4">Professional Summary</h3>
          <p className="text-slate-700 leading-relaxed text-lg">
            Business Development and Marketing professional with over 5 years of experience in client acquisition, 
            project coordination, and large-scale event management. Proven track record in securing 1.8M THB deals 
            and managing complex operations for audiences up to 50,000. Recently completed an MBA in Innovation & 
            Entrepreneurship at the University of Warwick (Class of 2024/25), specializing in design thinking and 
            business model frameworks. Expert in leveraging AI and SaaS tools (Asana, Trello, Slack) to optimise 
            cross-functional collaboration and stakeholder engagement.
          </p>
        </div>
      </div>
    </section>
  );
}
