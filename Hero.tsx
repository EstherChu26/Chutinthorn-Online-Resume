import { ArrowDown, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 opacity-70"></div>
      <div className="absolute inset-0" style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1730484248642-0169f93ee924?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBncmFkaWVudCUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzcwNzA0NDEwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.05
      }}></div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Name and Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-4">
          Chutinthorn Tosaratana
        </h1>
        <p className="text-xl sm:text-2xl text-blue-600 font-medium mb-6">(Ormme)</p>
        <p className="text-lg sm:text-xl text-slate-700 mb-8 max-w-3xl mx-auto">
          Business Development & Marketing Professional | MSc Innovation & Entrepreneurship
        </p>

        {/* Contact Info */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-10 text-slate-600">
          <a href="mailto:chutinthorne.t@gmail.com" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
            <Mail size={20} />
            <span className="text-sm sm:text-base">chutinthorne.t@gmail.com</span>
          </a>
          <a href="tel:+66617414954" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
            <Phone size={20} />
            <span className="text-sm sm:text-base">+66 617414954</span>
          </a>
          <div className="flex items-center gap-2">
            <MapPin size={20} />
            <span className="text-sm sm:text-base">Bangkok, Thailand</span>
          </div>
        </div>

        {/* LinkedIn Button */}
        <div className="flex justify-center gap-4 mb-12">
          <a
            href="https://linkedin.com/in/chutinthorne"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <Linkedin size={20} />
            <span>View LinkedIn Profile</span>
          </a>
        </div>

        {/* Scroll down indicator */}
        <button
          onClick={scrollToAbout}
          className="inline-flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors animate-bounce"
        >
          <span className="text-sm">Scroll to learn more</span>
          <ArrowDown size={20} />
        </button>
      </div>
    </section>
  );
}
