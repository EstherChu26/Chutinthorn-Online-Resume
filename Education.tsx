import { GraduationCap, Award, Users, Lightbulb } from 'lucide-react';

export function Education() {
  const education = [
    {
      institution: "University of Warwick, UK",
      degree: "MSc Innovation & Entrepreneurship",
      period: "2024-2025",
      award: "WMG Excellence Awards Scholarship",
      achievements: [
        "Led cross-disciplinary groups of 5–6 members (engineering, design, finance, and business backgrounds) across multiple modules, managing timelines, delegating tasks, and resolving conflicts to deliver projects successfully",
        "Applied design thinking and product design methodology in the Product Design Module to create a Minimum Viable Product (MVP) from business model design, testing to feasibility, manufacturing plan, and crowdfunding launch strategy",
        "Developed strong skills in cross-functional communication, conflict resolution, and structured problem-solving",
        "Develop end to end new business venture and NPD employing business model frameworks and business creation methods"
      ]
    },
    {
      institution: "Assumption University, Thailand",
      degree: "BA Business Japanese (Minor: Marketing)",
      period: "2010-2014",
      award: "GPA 3.27",
      achievements: []
    }
  ];

  const extracurricular = {
    title: "Lead the Warwick Startup Café: Hult Prize workshop",
    description: "A workshop for those who have social innovation idea to change the world. As an event leader, I have organised a two-day workshop providing Warwick students with a practical framework to compete in the Hult Prize, emphasising sustainable enterprises aligned with SDG goals and innovative solutions to societal challenges.",
    responsibilities: [
      "Led project planning, delegated tasks, and oversaw overall workshop management",
      "Coordinated outreach to guest speakers",
      "Designed interactive workshop activities in collaboration with team members"
    ],
    achievements: [
      "Secured 35 registrations, with 30 participants attending the workshops",
      "Facilitated the advancement of 5 teams to the semi-finals, including 1 team reaching the global final",
      "Achieved high participant satisfaction ratings"
    ]
  };

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">Education</h2>
        
        <div className="space-y-8 mb-16">
          {education.map((edu, index) => (
            <div key={index} className="bg-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <GraduationCap className="w-8 h-8 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900">{edu.degree}</h3>
                  <p className="text-lg text-blue-600 font-semibold">{edu.institution}</p>
                  <div className="flex flex-wrap gap-3 mt-2">
                    <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-lg text-sm font-medium">
                      {edu.period}
                    </span>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-lg text-sm font-medium flex items-center gap-1">
                      <Award className="w-4 h-4" />
                      {edu.award}
                    </span>
                  </div>
                </div>
              </div>

              {edu.achievements.length > 0 && (
                <div className="mt-6 space-y-3">
                  <h4 className="font-semibold text-slate-900 mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {edu.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-slate-700">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Extracurricular */}
        <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 sm:p-8 shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <Lightbulb className="w-8 h-8 text-purple-600" />
            <h3 className="text-2xl font-bold text-slate-900">Extracurricular</h3>
          </div>
          
          <h4 className="text-xl font-semibold text-purple-700 mb-3">{extracurricular.title}</h4>
          <p className="text-slate-700 mb-6">{extracurricular.description}</p>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-slate-900 mb-3">Responsibilities:</h5>
              <ul className="space-y-2">
                {extracurricular.responsibilities.map((resp, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Users className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-slate-900 mb-3">Achievements:</h5>
              <ul className="space-y-2">
                {extracurricular.achievements.map((ach, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Award className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{ach}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
