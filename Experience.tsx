import { Briefcase, TrendingUp, CheckCircle } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      company: "Skintific",
      location: "Bangkok, Thailand",
      position: "Business Development Manager (KOL Specialist)",
      period: "2023 – 2024",
      achievement: "Drove KOL partnerships to boost product visibility and engagement for Skintific and Glad2Glow brands for up to 50 KOLs per month which deliver more than 100 contents a month",
      responsibilities: [
        "Coordinated with marketing teams and influencers to execute campaigns",
        "Responsible for 10 products line for both Skintific and Glad2glow a month",
        "Managing ranges KOL tiers from 1000 to more than a million followers and content launching within monthly timeline"
      ]
    },
    {
      company: "Komodo Media Limited",
      location: "Bangkok, Thailand",
      position: "Business Development Manager (KOL Specialist)",
      period: "2021 – 2023",
      achievement: "Secured 1.8 million THB biannual deals and onboarded an average of 2 new brand partners monthly",
      responsibilities: [
        "Campaign Leadership: Directed end-to-end influencer and advertising campaigns across SEA, consistently delivering on performance KPIs for diverse brand portfolios",
        "Designed and pitched strategic proposals that aligned campaign objectives with client goals, securing repeat contracts",
        "Oversaw multi-market campaign execution, ensuring consistent delivery across online and offline channels",
        "Built and maintained strong client partnerships through stakeholder engagement and project management"
      ]
    },
    {
      company: "Involve Asia (Thailand) Co., Ltd.",
      location: "Bangkok, Thailand",
      position: "Business Development Executive",
      period: "2020 – 2021",
      achievement: "Achieved consistent monthly media sales, peaking at 100,000 THB, Secured up to 3 business on commission program monthly",
      responsibilities: [
        "Onboarded major e-commerce brands into affiliate programs, expanding network partnerships",
        "Delivered affiliate program training covering campaign creation, execution, and optimisation",
        "Developed tailored strategies to align client programs with performance KPIs",
        "Account Scale: Medium to large (E.g., Decathlon Thailand, Zipmex, SB furniture, Sketcher, Tune Insurance)"
      ]
    },
    {
      company: "Kool Monday Digital Marketing Agency",
      location: "Bangkok, Thailand",
      position: "Business Development & Marketing Executive",
      period: "2018 – 2020",
      achievement: "",
      responsibilities: [
        "Conducted marketing analysis and created tailored project proposals for clients",
        "Managed client accounts and coordinated project timelines with creative teams",
        "Oversaw event planning and media strategies, ensuring campaign success",
        "Account Scale: B2B Medium to large enterprises (E.g., Mahanakorn University, PTT GC)"
      ]
    },
    {
      company: "LOL International Event & Artist Agency",
      location: "Bangkok, Thailand",
      position: "Marketing Executive – Event & Concert Organizer, Artist Liaison",
      period: "2014 – 2018",
      achievement: "",
      responsibilities: [
        "Coordinated medium to large-scale concerts and brand launches for audiences up to 50,000, ensuring seamless execution from ideation to post-event evaluation",
        "Managed international artist liaison, overseeing logistics, translation, and media relations for high-profile talent",
        "Coordinated interviews with major Thai and international press (E.g., Nylon, Prestige, Official, AsiaLive365)",
        "Drove sponsorship revenue by pitching tailored packages and securing key event partnerships with Telco, Finance, FMCG, Venue"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">Professional Experience</h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-0 md:pl-20">
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-6 top-6 w-5 h-5 bg-blue-600 rounded-full border-4 border-white shadow"></div>

                <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{exp.position}</h3>
                      <p className="text-blue-600 font-semibold">{exp.company}</p>
                      <p className="text-slate-600">{exp.location}</p>
                    </div>
                    <span className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap self-start">
                      {exp.period}
                    </span>
                  </div>

                  {exp.achievement && (
                    <div className="mb-4 p-4 bg-green-50 border-l-4 border-green-500 rounded">
                      <div className="flex items-start gap-2">
                        <TrendingUp className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <p className="text-slate-700">
                          <strong className="text-green-700">Key Achievement:</strong> {exp.achievement}
                        </p>
                      </div>
                    </div>
                  )}

                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
