import React, { useState } from 'react';
import { X, Calendar, User, Phone, Clock, Home, MapPin, Check, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Label } from './ui/label';
import { toast } from 'sonner';
import { clinicInfo, healthPackages, popularTests } from '../data/mock';

const BookingModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [bookingType, setBookingType] = useState('home');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    address: '',
    selectedTests: [],
    notes: ''
  });

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM'
  ];

  // WhatsApp number for receiving bookings (clinic's WhatsApp)
  const clinicWhatsApp = clinicInfo.whatsapp; // 9873898040

  const handleSubmit = () => {
    // Format the booking details for WhatsApp
    const bookingDetails = `
🏥 *NEW BOOKING REQUEST*
━━━━━━━━━━━━━━━━━━

📋 *Booking Type:* ${bookingType === 'home' ? 'Home Collection 🏠' : 'Clinic Visit 🏥'}

👤 *Patient Details:*
• Name: ${formData.name}
• Phone: ${formData.phone}
• Email: ${formData.email || 'Not provided'}

📅 *Appointment:*
• Date: ${formData.date}
• Time: ${formData.time}

${bookingType === 'home' ? `📍 *Address:*\n${formData.address}\n` : ''}
🔬 *Tests/Packages Required:*
${formData.notes || 'Not specified'}

━━━━━━━━━━━━━━━━━━
📞 Please call the patient to confirm.
    `.trim();

    // Encode the message for WhatsApp URL
    const encodedMessage = encodeURIComponent(bookingDetails);
    const whatsappUrl = `https://wa.me/91${clinicWhatsApp}?text=${encodedMessage}`;

    // Open WhatsApp with pre-filled message
    window.open(whatsappUrl, '_blank');

    // Show success message
    toast.success('Redirecting to WhatsApp to complete your booking!');
    
    // Close modal and reset form
    onClose();
    setStep(1);
    setFormData({
      name: '', phone: '', email: '', date: '', time: '', address: '', selectedTests: [], notes: ''
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900">
            Book Appointment
          </DialogTitle>
        </DialogHeader>

        {/* Progress Steps */}
        <div className="flex items-center gap-2 mb-6">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                step >= s ? 'bg-teal-600 text-white' : 'bg-gray-200 text-gray-500'
              }`}>
                {step > s ? <Check className="w-4 h-4" /> : s}
              </div>
              {s < 3 && <div className={`w-12 h-1 ${step > s ? 'bg-teal-600' : 'bg-gray-200'}`} />}
            </div>
          ))}
        </div>

        {/* Step 1: Collection Type */}
        {step === 1 && (
          <div className="space-y-6">
            <p className="text-gray-600">How would you like to get your tests done?</p>
            
            <RadioGroup value={bookingType} onValueChange={setBookingType} className="grid grid-cols-2 gap-4">
              <div>
                <RadioGroupItem value="home" id="home" className="peer sr-only" />
                <Label
                  htmlFor="home"
                  className="flex flex-col items-center gap-3 p-6 rounded-xl border-2 cursor-pointer peer-data-[state=checked]:border-teal-600 peer-data-[state=checked]:bg-teal-50 hover:bg-gray-50 transition-all"
                >
                  <Home className="w-8 h-8 text-teal-600" />
                  <span className="font-medium">Home Collection</span>
                  <span className="text-xs text-gray-500 text-center">We'll collect samples at your doorstep</span>
                </Label>
              </div>
              <div>
                <RadioGroupItem value="visit" id="visit" className="peer sr-only" />
                <Label
                  htmlFor="visit"
                  className="flex flex-col items-center gap-3 p-6 rounded-xl border-2 cursor-pointer peer-data-[state=checked]:border-teal-600 peer-data-[state=checked]:bg-teal-50 hover:bg-gray-50 transition-all"
                >
                  <MapPin className="w-8 h-8 text-teal-600" />
                  <span className="font-medium">Visit Clinic</span>
                  <span className="text-xs text-gray-500 text-center">Visit our clinic for tests</span>
                </Label>
              </div>
            </RadioGroup>

            <Button onClick={() => setStep(2)} className="w-full bg-teal-600 hover:bg-teal-700 py-6 rounded-xl">
              Continue
            </Button>
          </div>
        )}

        {/* Step 2: Contact Details */}
        {step === 2 && (
          <div className="space-y-4">
            <div>
              <Label className="text-sm font-medium text-gray-700">Full Name *</Label>
              <Input
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                placeholder="Enter your full name"
                className="mt-1 rounded-xl py-6"
              />
            </div>
            
            <div>
              <Label className="text-sm font-medium text-gray-700">Phone Number *</Label>
              <Input
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                placeholder="Enter your phone number"
                className="mt-1 rounded-xl py-6"
              />
            </div>

            <div>
              <Label className="text-sm font-medium text-gray-700">Email</Label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                placeholder="Enter your email"
                className="mt-1 rounded-xl py-6"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label className="text-sm font-medium text-gray-700">Preferred Date *</Label>
                <Input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                  className="mt-1 rounded-xl py-6"
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
              <div>
                <Label className="text-sm font-medium text-gray-700">Preferred Time *</Label>
                <select
                  value={formData.time}
                  onChange={(e) => setFormData({...formData, time: e.target.value})}
                  className="mt-1 w-full rounded-xl py-3 px-4 border border-gray-200 bg-white"
                >
                  <option value="">Select time</option>
                  {timeSlots.map(slot => (
                    <option key={slot} value={slot}>{slot}</option>
                  ))}
                </select>
              </div>
            </div>

            {bookingType === 'home' && (
              <div>
                <Label className="text-sm font-medium text-gray-700">Address for Collection *</Label>
                <Textarea
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                  placeholder="Enter your complete address"
                  className="mt-1 rounded-xl"
                  rows={3}
                />
              </div>
            )}

            <div className="flex gap-3 pt-4">
              <Button variant="outline" onClick={() => setStep(1)} className="flex-1 rounded-xl py-6">
                Back
              </Button>
              <Button 
                onClick={() => setStep(3)} 
                className="flex-1 bg-teal-600 hover:bg-teal-700 rounded-xl py-6"
                disabled={!formData.name || !formData.phone || !formData.date || !formData.time}
              >
                Continue
              </Button>
            </div>
          </div>
        )}

        {/* Step 3: Additional Notes & Submit */}
        {step === 3 && (
          <div className="space-y-6">
            <div className="bg-teal-50 p-4 rounded-xl">
              <h4 className="font-semibold text-gray-800 mb-2">Booking Summary</h4>
              <div className="space-y-1 text-sm text-gray-600">
                <p><strong>Type:</strong> {bookingType === 'home' ? 'Home Collection' : 'Clinic Visit'}</p>
                <p><strong>Name:</strong> {formData.name}</p>
                <p><strong>Phone:</strong> {formData.phone}</p>
                <p><strong>Date:</strong> {formData.date}</p>
                <p><strong>Time:</strong> {formData.time}</p>
                {bookingType === 'home' && <p><strong>Address:</strong> {formData.address}</p>}
              </div>
            </div>

            <div>
              <Label className="text-sm font-medium text-gray-700">Tests/Packages Required</Label>
              <Textarea
                value={formData.notes}
                onChange={(e) => setFormData({...formData, notes: e.target.value})}
                placeholder="Please mention the tests or health packages you want to book"
                className="mt-1 rounded-xl"
                rows={3}
              />
            </div>

            <div className="bg-green-50 p-4 rounded-xl text-sm text-green-800 flex items-start gap-3">
              <MessageCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <p>Clicking submit will open WhatsApp to send your booking request. Our team will call you to confirm.</p>
            </div>

            <div className="flex gap-3">
              <Button variant="outline" onClick={() => setStep(2)} className="flex-1 rounded-xl py-6">
                Back
              </Button>
              <Button 
                onClick={handleSubmit} 
                className="flex-1 bg-green-600 hover:bg-green-700 rounded-xl py-6 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Book via WhatsApp
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;
