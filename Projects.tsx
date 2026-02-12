import { Folder, Star } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: "Miss Universe Competition (2018)",
      role: "Assistant & translator for international host",
      category: "Event Management"
    },
    {
      title: "Google Conference Bangkok",
      role: "Coordinator for 150+ international instructors",
      category: "Conference Coordination"
    },
    {
      title: "Wonderfruit Festival (2017–2018)",
      role: "Artist coordinator & media liaison for 15,000 daily attendees",
      description: "First 2 years establishment",
      category: "Festival Management"
    },
    {
      title: "Take That Live in Bangkok",
      role: "Assistant to project director & artist liaison",
      category: "Concert Production"
    },
    {
      title: "Under Armour Test of Will",
      role: "Event coordinator",
      category: "Sports Event"
    },
    {
      title: "UNEP Food Waste Project",
      role: "Project collaborator",
      category: "Sustainability Initiative"
    },
    {
      title: "Central World White Party LGBT Event",
      role: "Event organizer",
      category: "Community Event"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">
          Selected Projects / Freelance Works
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-blue-100"
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <Folder className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-slate-900 mb-1">{project.title}</h3>
                  {project.description && (
                    <p className="text-sm text-slate-600 italic mb-2">{project.description}</p>
                  )}
                </div>
              </div>
              
              <p className="text-slate-700 mb-3">{project.role}</p>
              
              <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                {project.category}
              </span>
            </div>
          ))}
        </div>

        {/* Notable Achievement Highlight */}
        <div className="mt-12 bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-orange-500 rounded-lg p-6">
          <div className="flex items-start gap-3">
            <Star className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-slate-900 mb-2">Notable Achievements Across Projects</h3>
              <p className="text-slate-700">
                Successfully managed and coordinated high-profile international events, festivals, and concerts 
                with audiences ranging from hundreds to 50,000+ attendees. Demonstrated expertise in artist 
                liaison, cross-cultural communication, logistics management, and stakeholder engagement across 
                diverse industries including entertainment, sports, sustainability, and community events.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
