import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Star, Bolt } from "lucide-react";
import { motion } from "framer-motion";

export default function ElectricalBusinessWebsite() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* Header */}
      <header className="flex justify-between items-center p-6 border-b border-yellow-500 sticky top-0 bg-black z-50">
        <div className="flex items-center gap-3">
          <img src="/unnamed.jpg" alt="B.E.E. Ben & Em's Electrical logo" className="h-12 w-auto" />
          <span className="text-yellow-400 text-xl font-bold">B.E.E. Ben & Em's Electrical</span>
        </div>
        <a href="https://book.servicem8.com/request_service_booking?strVendorUUID=2c875300-741d-4b34-8f66-23ab30cd442b" target="_blank" rel="noopener noreferrer">
          <Button className="bg-yellow-400 text-black hover:bg-yellow-300">Book a Job</Button>
        </a>
      </header>

      {/* Hero */}
      <section className="bg-yellow-400 text-black text-center py-3 font-semibold">Fast, Reliable Electrician – Call 0405 130 192</section>

      <section className="text-center py-20 px-6">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl font-bold mb-4">
          Trusted Electricians for Adelaide's Northern Suburbs
        </motion.h1>
        <div className="flex justify-center items-center gap-2 mb-4 text-yellow-400">
          ★★★★★ <span className="text-white text-sm">5.0 Google Rating</span>
        </div>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
          Residential, commercial, and emergency electrical work across the Adelaide Northern Suburbs. Fully licensed, insured, and committed to quality workmanship.
        </p>
        <div className="flex justify-center flex-wrap gap-3 mb-6">
          <span className="border border-yellow-400 text-yellow-400 px-4 py-1 rounded-full text-sm">Licensed</span>
          <span className="border border-yellow-400 text-yellow-400 px-4 py-1 rounded-full text-sm">Insured</span>
          <span className="border border-yellow-400 text-yellow-400 px-4 py-1 rounded-full text-sm">Local</span>
          <span className="border border-yellow-400 text-yellow-400 px-4 py-1 rounded-full text-sm">Family Friendly</span>
        </div>
        <div className="flex justify-center gap-4">
          <Button className="bg-yellow-400 text-black">Request a Quote</Button>
          <Button variant="outline" className="border-yellow-400 text-yellow-400">Call Now</Button>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-6 bg-zinc-900">
        <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {["Domestic Electrical", "Commercial Fit‑outs", "Emergency Call‑outs", "Lighting & Rewires", "EV Chargers", "Safety Inspections"].map(service => (
            <Card key={service} className="bg-black border border-yellow-500 rounded-2xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-yellow-400 mb-2">{service}</h3>
                <p className="text-gray-400">Professional, compliant and high‑quality workmanship on every job.</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Google Reviews</h2>
        <div className="max-w-4xl mx-auto bg-zinc-900 p-6 rounded-2xl border border-zinc-800 text-center">
          <p className="text-gray-300 mb-4">Rated 5★ by customers across Adelaide</p>
          <iframe
            title="Google Reviews"
            src="https://www.google.com/maps?q=B.E.E.%20Ben%20%26%20Em's%20Electrical&output=embed"
            className="w-full h-64 rounded-xl border-0"
            loading="lazy"
          />
        </div>
      </section>

      {/* Booking / Quote */}
      <section className="py-16 px-6 bg-zinc-900">
        <h2 className="text-3xl font-bold text-center mb-10">Book a Job or Request a Quote</h2>
        <form className="max-w-3xl mx-auto grid gap-4" action="https://api.servicem8.com/book" method="POST">
          <input className="p-3 rounded bg-black border border-zinc-700" placeholder="Name" name="name" required />
          <input className="p-3 rounded bg-black border border-zinc-700" placeholder="Phone or Email" name="contact" required />
          <textarea className="p-3 rounded bg-black border border-zinc-700" placeholder="Describe the work needed" name="description" rows={4} required />
          <Button className="bg-yellow-400 text-black">Submit Enquiry</Button>
        </form>
      </section>

      {/* Footer */}
      <section className="py-16 px-6 bg-black">
        <h2 className="text-3xl font-bold text-center mb-10">Before & After</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[1,2,3].map(i => (
            <div key={i} className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800">
              <img src={`/gallery/before-after-${i}.jpg`} alt="Electrical work before and after" className="w-full h-60 object-cover" />
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 bg-black">
        <h2 className="text-3xl font-bold text-center mb-10">Service Areas</h2>
        <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden border border-zinc-800">
          <iframe
            title="Service Areas Map"
            src="https://www.google.com/maps?q=Adelaide%20Northern%20Suburbs&output=embed"
            className="w-full h-96 border-0"
            loading="lazy"
          />
        </div>
      </section>

      <footer className="py-10 px-6 border-t border-zinc-800">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 text-gray-400">
          <div>
            <h4 className="text-yellow-400 font-semibold mb-2">B.E.E. Ben & Em's Electrical</h4>
            <p>Licensed & Insured Electricians</p>
          </div>
          <div>
            <p className="flex items-center gap-2"><Phone size={16} /> 0405 130 192</p>
            <p className="flex items-center gap-2"><Mail size={16} /> accounts@beelectricalservices.com</p>
          </div>
          <div>
            <p>© {new Date().getFullYear()} B.E.E. Ben & Em's Electrical. ABN 694 051 397. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
