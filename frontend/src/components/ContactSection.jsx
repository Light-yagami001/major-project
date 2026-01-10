import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { clinicInfo } from '../data/mock';
import { toast } from 'sonner';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Thank you! We will contact you shortly.');
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: [clinicInfo.phone, '8527969545'],
      action: `tel:${clinicInfo.phone}`
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      details: [clinicInfo.whatsapp],
      action: `https://wa.me/91${clinicInfo.whatsapp}`
    },
    {
      icon: MapPin,
      title: 'Address',
      details: [clinicInfo.address],
      action: 'https://maps.google.com'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: [clinicInfo.workingHours, clinicInfo.workingDays],
      action: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 to-teal-50/30">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">Contact Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
            Get In Touch
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Have questions? We're here to help. Reach out to us through any of the channels below.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100"
                >
                  <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mb-4">
                    <info.icon className="w-6 h-6 text-teal-600" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">{info.title}</h3>
                  {info.details.map((detail, idx) => (
                    info.action ? (
                      <a
                        key={idx}
                        href={info.action}
                        target={info.action.startsWith('http') ? '_blank' : undefined}
                        rel={info.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="block text-gray-600 hover:text-teal-600 transition-colors text-sm"
                      >
                        {detail}
                      </a>
                    ) : (
                      <p key={idx} className="text-gray-600 text-sm">{detail}</p>
                    )
                  ))}
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.0089567671297!2d77.19252687549771!3d28.56876657570566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce26bd0000001%3A0x4f2e7c9c7c9c9c9c!2sSafdarjung%20Enclave%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1625000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Clinic Location"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Send us a Message</h3>
            <p className="text-gray-600 mb-8">Fill out the form and we'll get back to you within 24 hours.</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <Input
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Enter your name"
                  required
                  className="rounded-xl py-6"
                />
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <Input
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="Your phone number"
                    required
                    className="rounded-xl py-6"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="Your email"
                    className="rounded-xl py-6"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="How can we help you?"
                  rows={4}
                  required
                  className="rounded-xl"
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-teal-600 hover:bg-teal-700 text-white py-6 rounded-xl text-lg"
              >
                Send Message <Send className="w-5 h-5 ml-2" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
