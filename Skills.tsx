import { Users, TrendingUp, Calendar, Globe, Lightbulb, Target, Code, Wrench } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      title: "Core Competencies",
      icon: <Target className="w-6 h-6" />,
      skills: [
        "Project Coordination & Management",
        "Business Development",
        "Stakeholder Engagement",
        "Client Relationship Management",
        "Cross-Cultural Collaboration",
        "Campaign Management",
        "Leadership and Collaboration",
        "Resilience and Adaptability",
        "Event Ideation & Execution",
        "Logistics",
        "Sales & Sponsorship"
      ]
    },
    {
      title: "Languages",
      icon: <Globe className="w-6 h-6" />,
      skills: [
        "Thai: Native",
        "English: Fluent"
      ]
    },
    {
      title: "Software & AI Capability",
      icon: <Code className="w-6 h-6" />,
      skills: [
        "Claude",
        "Perplexity",
        "Gemini",
        "GPT",
        "Notebook LM",
        "Google Sheet, Slide, Doc",
        "Canva",
        "Gamma",
        "Miro"
      ]
    },
    {
      title: "SaaS Tools Capability",
      icon: <Wrench className="w-6 h-6" />,
      skills: [
        "Asana",
        "Microsoft Teams",
        "Trello",
        "Slack"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">Skills & Competencies</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="text-blue-600">{category.icon}</div>
                <h3 className="text-xl font-semibold text-slate-900">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-100 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
