import { Mail, Phone, MapPin, Linkedin, Send } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Get In Touch</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
            <p className="text-blue-100 mb-8 text-lg">
              I'm always open to discussing new opportunities, collaborations, or just having a conversation 
              about business development, marketing, and innovation.
            </p>

            <div className="space-y-4">
              <a 
                href="mailto:chutinthorne.t@gmail.com"
                className="flex items-center gap-4 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors group"
              >
                <div className="bg-blue-500 p-3 rounded-lg group-hover:bg-blue-600 transition-colors">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-blue-200">Email</div>
                  <div className="font-medium">chutinthorne.t@gmail.com</div>
                </div>
              </a>

              <a 
                href="tel:+66617414954"
                className="flex items-center gap-4 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors group"
              >
                <div className="bg-blue-500 p-3 rounded-lg group-hover:bg-blue-600 transition-colors">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-blue-200">Phone</div>
                  <div className="font-medium">+66 617414954</div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-white/10 rounded-lg">
                <div className="bg-blue-500 p-3 rounded-lg">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-blue-200">Location</div>
                  <div className="font-medium">Bangkok, Thailand</div>
                </div>
              </div>

              <a 
                href="https://linkedin.com/in/chutinthorne"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors group"
              >
                <div className="bg-blue-500 p-3 rounded-lg group-hover:bg-blue-600 transition-colors">
                  <Linkedin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-blue-200">LinkedIn</div>
                  <div className="font-medium">linkedin.com/in/chutinthorne</div>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-blue-200"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-blue-200"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-blue-200 resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-white/20 text-center text-blue-200">
          <p>© 2025 Chutinthorn Tosaratana (Ormme). All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}
