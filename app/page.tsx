import React from "react";
import FeatureSlider from "./FeatureSlider";

export const metadata = {
  title: "NAVIA - For Every Heart Trying to Understand Love",
  description: "Discover the depth of your emotions and connections through our innovative platform designed for modern relationships.",
  openGraph: {
    title: "NAVIA - For Every Heart Trying to Understand Love",
    description: "Discover the depth of your emotions and connections through our innovative platform designed for modern relationships.",
    url: "https://www.naviahub.com/",
    siteName: "NAVIA",
    images: [
      {
        url: "/1200_680.png",
        width: 1200,
        height: 680,
        alt: "NAVIA Hero Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NAVIA - For Every Heart Trying to Understand Love",
    description: "Discover the depth of your emotions and connections through our innovative platform designed for modern relationships.",
    images: ["/1200_680.png"],
    site: "@naviahub",
  },
  alternates: {
    canonical: "https://naviahub.dev/",
  },
};

const features = [
  {
    title: "Feel Your True Self",
    desc: "Uncover the hidden layers of your emotional landscape. Our tests don't just analyze—they reveal the authentic you that's been waiting to be understood. When was the last time someone truly saw you for who you are?",
    img: "/feature_1.png",
    quote: "\"For the first time, I felt like someone understood the complexity of my feelings. It wasn't just a test—it was a mirror to my soul.\" — Mia, 28",
    stat: "76% of users report profound self-discovery moments within their first week"
  },
  {
    title: "Visualize Your Heart",
    desc: "Transform your deepest feelings into stunning visuals that speak when words fail. Watch as your emotions take beautiful form, ready to be shared with those who matter. How do you express what feels impossible to say?",
    img: "/feature_2.png",
    quote: "\"I've always struggled to tell my partner how I feel. These visuals helped me express years of unspoken emotions in seconds.\" — James, 34",
    stat: "83% of couples report improved emotional communication after sharing visualizations"
  },
  {
    title: "Connect Through Stories",
    desc: "In a world where we often feel alone, find others who share your emotional journey. Your story becomes part of something bigger—a tapestry of human connection. Have you ever wondered how many others feel exactly what you're feeling right now?",
    img: "/feature_3.png",
    quote: "\"Reading others' stories made me realize I wasn't alone. My pain, my joy—they're universal. That changed everything.\" — Sophia, 26",
    stat: "Over 10,000 emotional connections made daily through shared experiences"
  },
];

const testimonials = [
  {
    text: "NAVIA helped me understand emotions I've carried for years but could never name. It's like finally finding the missing piece of yourself you didn't know was lost.",
    name: "David K.",
    role: "Found clarity after heartbreak"
  },
  {
    text: "I was skeptical at first—another app promising to understand me. But this is different. It doesn't just analyze; it witnesses your emotional truth without judgment.",
    name: "Leila M.",
    role: "Navigating complex relationships"
  },
  {
    text: "The moment I saw my emotions visualized, I broke down crying. Not from sadness, but from finally being seen. That's a gift I can't put a price on.",
    name: "Marcus T.",
    role: "Reconnected with authentic self"
  }
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md py-4 px-8 md:px-16">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src="/favicon-32x32-pinkarrow.png" alt="NAVIA Logo" className="h-8 w-auto" />
            <a href="/" className="text-3xl font-medium tracking-widest text-pink-300">NAVIA</a>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Stories</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="w-full flex flex-col items-center justify-center min-h-screen px-8 md:px-16 relative overflow-hidden pt-32">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-[#111] z-0"></div>
        <div className="relative z-10 max-w-4xl mx-auto w-full">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-12 leading-tight mt-16">
              For Every Heart <br className="hidden md:block" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-purple-300">Trying to Understand Love</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
              Discover the depth of your emotions and connections through our innovative platform designed for modern relationships.
            </p>
            
            <div className="mb-20 text-center">
              <p className="text-2xl italic text-pink-200 mb-8">"What if the answers you've been seeking were hidden in the emotions you've been feeling?"</p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
                <span className="px-3 py-1 border border-gray-800 rounded-full">94% report deeper self-understanding</span>
                <span className="px-3 py-1 border border-gray-800 rounded-full">Trusted by 50,000+ emotional journeyers</span>
                <span className="px-3 py-1 border border-gray-800 rounded-full">Featured in Psychology Today</span>
              </div>
            </div>
            
            <div className="relative w-full max-w-2xl mx-auto">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-3xl blur-md"></div>
              <img 
                src="/hero_section.png" 
                alt="Hero" 
                className="rounded-3xl shadow-2xl w-full object-cover relative z-10"
                style={{ maxHeight: "500px" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-30 rounded-3xl z-20"></div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center">
            <span className="text-xs uppercase tracking-widest text-gray-500 mb-2 font-light">Explore</span>
            <div className="w-6 h-10 border border-gray-700 rounded-full flex justify-center pt-2">
              <div className="w-1 h-2 bg-pink-300 rounded-full animate-bounce"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Emotional Question Banner */}
      <section className="w-full py-16 bg-gradient-to-r from-pink-900/20 to-purple-900/20">
        <div className="max-w-4xl mx-auto text-center px-8">
          <h2 className="text-2xl md:text-4xl font-light italic mb-6">
            When was the last time you felt truly understood—not just heard, but <span className="text-pink-300">deeply seen</span>?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            In a world of superficial connections, we've forgotten how to truly feel. NAVIA is changing that, one emotional journey at a time.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="w-full py-32 px-8 md:px-16 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-20">
            <div className="md:w-1/2">
              <span className="text-xs font-light uppercase tracking-widest text-pink-300 mb-4 block">About</span>
              <h2 className="text-3xl md:text-5xl font-medium mb-8 leading-tight">What is NAVIA?</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light">
                NAVIA delivers emotion-driven digital experiences for everyone navigating the complex landscape of modern relationships. We combine psychology, technology, and design to create tools that help you understand yourself and others better.
              </p>
              <p className="text-xl text-pink-200 font-light italic mb-8">
                "Discover, express, and connect through the power of empathy."
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="text-pink-300 mr-3">✦</div>
                  <p className="text-gray-300 font-light">Born from the founder's own journey through emotional isolation</p>
                </div>
                <div className="flex items-start">
                  <div className="text-pink-300 mr-3">✦</div>
                  <p className="text-gray-300 font-light">Developed with leading psychologists specializing in emotional intelligence</p>
                </div>
                <div className="flex items-start">
                  <div className="text-pink-300 mr-3">✦</div>
                  <p className="text-gray-300 font-light">Used by thousands to transform how they connect with themselves and others</p>
                </div>
              </div>
              
              <p className="text-gray-400 italic">
                "What if understanding your emotions could change everything about how you love and connect?"
              </p>
            </div>
            <div className="md:w-1/2 relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-pink-500/20 to-purple-500/20 rounded-3xl blur-xl"></div>
              <img 
                src="/about.png" 
                alt="About NAVIA" 
                className="rounded-3xl shadow-2xl w-full relative z-10" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="w-full py-32 px-8 md:px-16 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-xs font-light uppercase tracking-widest text-pink-300 mb-4 block">Journey</span>
            <h2 className="text-3xl md:text-5xl font-medium mb-6 leading-tight">Emotions That<br />Transform Your Story</h2>
            <p className="text-gray-400 max-w-2xl mx-auto font-light mb-6">
              Every feeling has a purpose. Every connection tells a story. Discover how your emotional journey shapes who you are and who you'll become.
            </p>
            <p className="text-xl text-pink-200 italic font-light">
              What would change if you could truly understand the language of your heart?
            </p>
          </div>
          <FeatureSlider features={features} />
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="w-full py-32 px-8 md:px-16 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-light uppercase tracking-widest text-pink-300 mb-4 block">Voices</span>
            <h2 className="text-3xl md:text-5xl font-medium mb-6 leading-tight">Real Stories.<br />Real Transformation.</h2>
            <p className="text-gray-400 max-w-2xl mx-auto font-light">
              From emotional confusion to clarity. From disconnection to deep bonds. These are the journeys of those who dared to understand their hearts.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-gradient-to-br from-[#111] to-[#0a0a0a] p-8 rounded-3xl relative">
                <div className="absolute top-0 right-0 w-20 h-20 bg-pink-500/5 blur-xl rounded-full"></div>
                <svg className="w-10 h-10 text-pink-500/20 mb-4" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="text-gray-300 mb-6 font-light leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-pink-500/10 flex items-center justify-center text-pink-300 mr-3">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="w-full py-24 bg-gradient-to-b from-black to-[#0a0a0a]">
        <div className="max-w-4xl mx-auto text-center px-8">
          <h2 className="text-3xl md:text-5xl font-medium mb-8 leading-tight">
            Your Heart Has Been <span className="text-pink-300">Waiting</span> Long Enough
          </h2>
          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto font-light">
            What would your relationships look like if you could truly understand the language of your emotions? The answer begins with a simple question: Are you ready to listen to what your heart has been trying to tell you?
          </p>
          <div className="inline-block">
            
          </div>
        </div>
      </section>

      {/* Contact / Footer */}
      <footer id="contact" className="w-full py-24 px-8 md:px-16 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-16">
            <div className="mb-12 md:mb-0">
              <div className="text-2xl font-medium tracking-widest text-pink-300 mb-6">NAVIA</div>
              <p className="text-gray-500 max-w-xs font-light">
                Empowering emotional intelligence through technology and design.
              </p>
            </div>
            <div className="flex flex-col items-center md:items-end">
              <span className="text-xs font-light uppercase tracking-widest text-pink-300 mb-4 block">Contact</span>
              <p className="text-gray-500">Email: <span className="text-gray-500">admin@naviahub.dev</span></p>
            </div>
          </div>
          
          <div className="border-t border-gray-900 pt-12 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm mb-6 md:mb-0 font-light">
              © {new Date().getFullYear()} NAVIA. All rights reserved.
            </p>
            <div className="flex gap-8">
              <a href="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">Terms of Use</a>
              <a href="/business" className="text-sm text-gray-400 hover:text-white transition-colors">Business Info</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
