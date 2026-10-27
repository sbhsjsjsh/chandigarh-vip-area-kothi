'use client';

import { motion } from 'motion/react';
import { Phone, MapPin, CheckCircle2, ChevronRight, Home, Building2, UserCheck, ShieldCheck, Mail } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const CONTACT_NUMBER = '95015 74040';

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans selection:bg-amber-100 selection:text-amber-900 overflow-x-hidden">
      {/* Top Bar Contract */}
      <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4 sm:gap-8">
          <Link href="/" className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0">
            Chandigarh VIP Kothi
          </Link>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <Link href="#locations" className="hover:text-slate-900 transition-colors whitespace-nowrap">Locations</Link>
            <Link href="#properties" className="hover:text-slate-900 transition-colors whitespace-nowrap">Properties</Link>
            <Link href="#faqs" className="hover:text-slate-900 transition-colors whitespace-nowrap">FAQs</Link>
            <Link href="#contact" className="hover:text-slate-900 transition-colors whitespace-nowrap">Contact</Link>
          </nav>

          <div className="flex items-center gap-4 shrink-0">
            <a 
              href={`tel:${CONTACT_NUMBER.replace(/\s/g, '')}`}
              className="flex items-center gap-2 px-3 sm:px-4 py-2 text-[10px] sm:text-xs font-semibold text-white bg-slate-900 rounded-full hover:bg-slate-800 transition-all whitespace-nowrap"
            >
              <Phone size={14} />
              <span className="hidden sm:inline">Call Now: </span>{CONTACT_NUMBER}
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 text-amber-600 font-semibold text-sm mb-6 uppercase tracking-wider">
                <span className="w-8 h-[1px] bg-amber-600"></span>
                Prime Residential Properties
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-8 text-wrap-balance leading-[1.1]">
                Chandigarh VIP Area Mein Kothi for Sale
              </h1>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-xl">
                Looking for a kothi in a VIP area of Chandigarh? Whether you are searching for a luxury family home, an independent kothi, or a premium residential property in a prime location, we help you find the perfect match.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={`tel:${CONTACT_NUMBER.replace(/\s/g, '')}`}
                  className="flex items-center justify-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-xl font-bold text-lg hover:bg-slate-800 transition-all shadow-xl shadow-slate-200"
                >
                  <Phone size={20} />
                  Enquire Now
                </a>
                <a 
                  href="#properties"
                  className="flex items-center justify-center gap-2 px-8 py-4 bg-white border border-slate-200 text-slate-900 rounded-xl font-bold text-lg hover:border-slate-300 transition-all"
                >
                  View Listings
                  <ChevronRight size={20} />
                </a>
              </div>
              
              <div className="mt-12 pt-8 border-t border-slate-100 flex flex-wrap items-center gap-6">
                <div className="flex flex-col">
                  <span className="text-xl sm:text-2xl font-bold text-slate-900">VIP</span>
                  <span className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold">Locations</span>
                </div>
                <div className="hidden sm:block w-[1px] h-10 bg-slate-200"></div>
                <div className="flex flex-col">
                  <span className="text-xl sm:text-2xl font-bold text-slate-900">Luxury</span>
                  <span className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold">Bungalows</span>
                </div>
                <div className="hidden sm:block w-[1px] h-10 bg-slate-200"></div>
                <div className="flex flex-col">
                  <span className="text-xl sm:text-2xl font-bold text-slate-900">Family</span>
                  <span className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold">Homes</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-[4/3] lg:aspect-auto lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/20 to-transparent z-10" />
              {/* Fallback styling for images that failed generation */}
              <div className="w-full h-full bg-slate-100 flex items-center justify-center relative">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]" />
                <Home size={80} className="text-slate-200 relative z-20" />
                <div className="absolute bottom-8 left-8 z-20 p-6 bg-white/90 backdrop-blur-md rounded-2xl border border-white/50 shadow-lg">
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-600 mb-1 uppercase tracking-tighter">
                    <MapPin size={12} />
                    Sector 10, Chandigarh
                  </div>
                  <div className="text-lg font-bold text-slate-900 leading-tight">Modern Independent Kothi</div>
                  <div className="text-sm text-slate-500 mt-1">Prime VIP Location</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Premium Residential Property in Chandigarh&apos;s Posh Areas</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Chandigarh is known for its planned sectors, organised road network, green spaces, and established residential neighbourhoods. Buyers looking for a luxury kothi in Chandigarh can explore properties based on their preferred sector, property size, and architectural style.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Preferred Sectors', desc: 'Find properties in Chandigarh\'s most elite sectors and neighbourhoods.' },
              { title: 'Independent House', desc: 'Spacious independent kothis and luxury bungalows for your family.' },
              { title: 'Premium Layouts', desc: 'Architecturally superior homes with modern amenities and privacy.' }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-amber-50 rounded-lg flex items-center justify-center text-amber-600 mb-6 font-bold text-xl">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Content Sections */}
      <section id="locations" className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 relative aspect-square rounded-3xl overflow-hidden bg-slate-100">
              <div className="absolute inset-0 flex items-center justify-center">
                <Building2 size={64} className="text-slate-200" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/10" />
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Luxury Kothi in Chandigarh&apos;s Prime Locations</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Finding the right independent house involves more than choosing an attractive property. The neighbourhood, connectivity, surrounding facilities, privacy, and long-term suitability are also important factors.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Preferred residential sector',
                  'Independent house or luxury bungalow',
                  'Plot size and built-up area',
                  'Number of bedrooms and bathrooms',
                  'Parking facilities and outdoor space',
                  'Nearby markets and schools'
                ].map((check, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                    <CheckCircle2 size={18} className="text-amber-500 shrink-0" />
                    <span>{check}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <a href={`tel:${CONTACT_NUMBER.replace(/\s/g, '')}`} className="inline-flex items-center gap-2 text-slate-900 font-bold hover:gap-4 transition-all">
                  Discuss Your Preferences <ChevronRight size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="properties" className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-16">VIP Location Mein Kothi for Sale Chandigarh</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            <div className="group p-8 rounded-3xl bg-slate-800/50 border border-slate-700 hover:bg-slate-800 transition-all">
              <h3 className="text-xl font-bold mb-4">Chandigarh Mein Premium Kothi for Families</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                A premium kothi can offer the space and independence that many families look for. Features may include spacious bedrooms, modular kitchen, and private parking.
              </p>
            </div>
            <div className="group p-8 rounded-3xl bg-slate-800/50 border border-slate-700 hover:bg-slate-800 transition-all">
              <h3 className="text-xl font-bold mb-4">Chandigarh Mein Bungalow for Sale</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                Buyers searching for a bungalow for sale in Chandigarh may also consider independent kothis in established residential neighbourhoods.
              </p>
            </div>
            <div className="group p-8 rounded-3xl bg-slate-800/50 border border-slate-700 hover:bg-slate-800 transition-all md:col-span-2 lg:col-span-1">
              <h3 className="text-xl font-bold mb-4">Independent Kothi: Essential Checks</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                Verify ownership documents, confirm plot boundaries, and review applicable building approvals before finalising a purchase.
              </p>
            </div>
          </div>

          <div className="mt-20 p-12 bg-amber-500 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-left text-slate-900">
              <h3 className="text-2xl font-bold mb-2">Ready to explore VIP kothi options?</h3>
              <p className="font-medium opacity-90">Get expert guidance for your property search in Chandigarh.</p>
            </div>
            <a 
              href={`tel:${CONTACT_NUMBER.replace(/\s/g, '')}`}
              className="px-10 py-4 bg-slate-900 text-white rounded-2xl font-bold text-xl hover:bg-slate-800 transition-all flex items-center gap-3 shrink-0"
            >
              <Phone size={24} />
              {CONTACT_NUMBER}
            </a>
          </div>
        </div>
      </section>

      {/* Buyer Checklist Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Independent Kothi in Chandigarh: What to Check Before Buying</h2>
              <div className="space-y-6">
                {[
                  { title: 'Ownership & Title', desc: 'Verify the ownership and title documents through official channels.' },
                  { title: 'Boundaries & Measurements', desc: 'Confirm the plot boundaries and physical property measurements.' },
                  { title: 'Building Approvals', desc: 'Review applicable building approvals and land-use permissions.' },
                  { title: 'Physical Condition', desc: 'Check the property\'s actual condition and construction quality.' },
                  { title: 'Transaction Costs', desc: 'Understand the asking price, taxes, and other applicable transaction costs.' },
                  { title: 'Legal Consultation', desc: 'Always consult a qualified property lawyer before signing an agreement.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 shrink-0 mt-1">
                      <UserCheck size={14} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{item.title}</h4>
                      <p className="text-slate-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-50 p-8 sm:p-12 rounded-3xl border border-slate-100">
              <ShieldCheck size={48} className="text-amber-500 mb-8" />
              <h3 className="text-2xl font-bold text-slate-900 mb-6 font-display">Property Search Assistance</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                A site visit is useful for checking the property&apos;s actual condition and understanding the neighbourhood. Make sure all important property details are independently verified before proceeding.
              </p>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-xl border border-slate-200 flex items-center gap-4">
                  <div className="w-10 h-10 bg-slate-900 text-white rounded-lg flex items-center justify-center shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-bold uppercase">Location</div>
                    <div className="text-sm font-bold text-slate-900">Chandigarh, India</div>
                  </div>
                </div>
                <div className="p-4 bg-white rounded-xl border border-slate-200 flex items-center gap-4">
                  <div className="w-10 h-10 bg-slate-900 text-white rounded-lg flex items-center justify-center shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-bold uppercase">Inquiries</div>
                    <div className="text-sm font-bold text-slate-900">Luxury Residential Property</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faqs" className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-500">Find answers to common questions about buying a kothi in Chandigarh.</p>
          </div>
          
          <div className="space-y-4">
            {[
              {
                q: "Where can I find a kothi in a VIP area of Chandigarh?",
                a: "You can enquire about luxury kothis and independent houses in Chandigarh&apos;s preferred residential neighbourhoods. The right location depends on your budget, property requirements, and preferred sector."
              },
              {
                q: "What is the price of a luxury kothi in Chandigarh?",
                a: "The price depends on the sector, plot size, built-up area, construction quality, property condition, and local market conditions. Contact us for details about specific available properties."
              },
              {
                q: "What should I look for when buying a premium kothi in Chandigarh?",
                a: "Consider the location, plot size, layout, parking, construction quality, neighbourhood facilities, ownership documents, and total purchase cost before making a decision."
              },
              {
                q: "Is an independent kothi different from a bungalow?",
                a: "The terms are often used interchangeably in property listings. However, the actual layout, plot size, building design, and features vary from one property to another."
              },
              {
                q: "How can I find a kothi in Chandigarh's prime residential areas?",
                a: "Start by identifying your preferred sector, budget, property size, and required features. You can then compare available properties and arrange site visits."
              },
              {
                q: "How can I enquire about a kothi for sale in Chandigarh?",
                a: "For enquiries about luxury kothis, independent houses, and premium residential properties in Chandigarh, call 95015 74040 to discuss your requirements."
              }
            ].map((faq, i) => (
              <details key={i} className="group bg-white rounded-2xl border border-slate-100 overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="font-bold text-slate-900">{faq.q}</span>
                  <ChevronRight size={20} className="text-slate-400 group-open:rotate-90 transition-transform" />
                </summary>
                <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Contact Us for Luxury Kothi in Chandigarh</h2>
            <p className="text-lg text-slate-600 mb-10">
              Searching for a luxury kothi, independent house, or premium residential property in Chandigarh? Share your preferred location, budget, and requirements.
            </p>
            <div className="p-1 bg-slate-100 rounded-3xl inline-flex flex-col sm:flex-row gap-2 mb-8">
              <a 
                href={`tel:${CONTACT_NUMBER.replace(/\s/g, '')}`}
                className="px-8 py-4 bg-white rounded-2xl flex items-center justify-center gap-3 text-slate-900 font-bold shadow-sm hover:shadow-md transition-all"
              >
                <Phone size={20} className="text-amber-500" />
                Call: {CONTACT_NUMBER}
              </a>
              <div className="px-8 py-4 flex items-center justify-center gap-3 text-slate-600 font-medium">
                <MapPin size={20} className="text-slate-400" />
                Chandigarh, India
              </div>
            </div>
            <div className="text-sm text-slate-400">
              Call today to discuss your property requirements and explore available kothi options.
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-900 text-slate-500 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-xl font-bold text-white tracking-tight">Chandigarh VIP Kothi</span>
            <span className="text-xs uppercase tracking-widest">Premium Real Estate Advisor</span>
          </div>
          <div className="flex gap-8 text-sm font-medium">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
          <div className="text-xs">
            © {new Date().getFullYear()} Chandigarh VIP Kothi. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
