import React, { useState } from 'react';
import { MapPin, Phone, Clock, Send, FileText, Mail, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch("https://formsubmit.co/ajax/ademealaoui68@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            ...formData,
            _subject: "Nouveau message - Site Web",
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="bg-white min-h-screen pt-32 pb-20 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-20">
          
          {/* Left Column: Info */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <h1 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">Contactez-nous</h1>
              <p className="text-lg text-slate-500 leading-relaxed">
                Laurent et Véronique sont à votre écoute à Huningue. Passez nous voir à l'agence aux horaires d'ouverture ou envoyez-nous un message via le formulaire.
              </p>
            </div>

            <address className="space-y-6 not-italic">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">Notre Adresse</h3>
                  <p className="text-slate-600 mt-1">13 Rue Abbatucci<br/>68330 Huningue</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">Téléphone</h3>
                  <a href="tel:0389697020" className="text-xl font-bold text-slate-900 hover:text-blue-600 transition-colors"> 03 89 69 70 20</a>
                </div>
              </div>
            </address>

            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                <Clock size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg">Permanences & Code</h3>
                <div className="mt-2 space-y-2 text-slate-600">
                  <div className="flex justify-between w-48 text-sm">
                    <span>Jeudi</span>
                    <span className="font-medium">18h00 - 20h00</span>
                  </div>
                  <div className="flex justify-between w-48 text-sm">
                    <span>Samedi</span>
                    <span className="font-medium">10h00 - 12h00</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Documents Section */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <FileText size={20} className="text-blue-600" />
                Documents pour l'inscription
              </h3>
              <ul className="space-y-2 text-sm text-slate-600 list-disc list-inside">
                <li>Photocopie Carte d'identité</li>
                <li>Permis de conduire (si formation moto)</li>
                <li>JAPD / Recensement (dès 16 ans)</li>
                <li>ASSR 2 (pour les moins de 25 ans)</li>
                <li>1 photo/signature numérique</li>
                <li>Justificatif de domicile (- de 3 mois)</li>
              </ul>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white shadow-xl p-8 md:p-10 rounded-3xl border border-slate-100 h-full relative">
              <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                 <Mail className="text-blue-600" /> Envoyer un message
              </h2>
              
              {status === 'success' ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-10 animate-in fade-in duration-500">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Message envoyé !</h3>
                  <p className="text-slate-500 mb-8 max-w-md">
                    Merci de nous avoir contactés. Nous traiterons votre demande dans les plus brefs délais.
                  </p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold py-3 px-8 rounded-xl transition-colors"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                      <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2">Nom complet</label>
                      <input 
                        type="text" 
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required 
                        disabled={status === 'submitting'}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all disabled:opacity-50" 
                        placeholder="Votre nom" 
                      />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                          <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2">Email</label>
                          <input 
                            type="email" 
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required 
                            disabled={status === 'submitting'}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all disabled:opacity-50" 
                            placeholder="votre@email.com" 
                          />
                      </div>
                      <div>
                          <label htmlFor="phone" className="block text-sm font-bold text-slate-700 mb-2">Téléphone</label>
                          <input 
                            type="tel" 
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            disabled={status === 'submitting'}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all disabled:opacity-50" 
                            placeholder="06..." 
                          />
                      </div>
                  </div>
                  
                  <div>
                      <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                      <textarea 
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5} 
                        required 
                        disabled={status === 'submitting'}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none disabled:opacity-50" 
                        placeholder="Bonjour, je souhaiterais des informations sur..."
                      ></textarea>
                  </div>

                  {status === 'error' && (
                    <div className="bg-red-50 text-red-600 p-4 rounded-xl flex items-center gap-3 text-sm font-medium">
                      <AlertCircle size={20} />
                      Une erreur est survenue lors de l'envoi. Merci de réessayer ou de nous appeler.
                    </div>
                  )}
                  
                  <button 
                    type="submit" 
                    disabled={status === 'submitting'}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-blue-500/30 flex items-center justify-center gap-2 transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                  >
                      {status === 'submitting' ? (
                        <>
                          <Loader2 size={20} className="animate-spin" /> Envoi en cours...
                        </>
                      ) : (
                        <>
                          <Send size={20} /> Envoyer le message
                        </>
                      )}
                  </button>
                  <p className="text-xs text-center text-slate-400 mt-4">
                    En envoyant ce formulaire, vous acceptez que nous utilisions vos données pour vous recontacter.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Full Width Map Section */}
        <div className="w-full h-[450px] bg-slate-100 rounded-3xl overflow-hidden border border-slate-200 relative">
             <div style={{ width: '100%', height: '100%' }}>
                <iframe 
                    width="100%" 
                    height="100%" 
                    frameBorder="0" 
                    scrolling="no" 
                    marginHeight={0} 
                    marginWidth={0} 
                    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=fr&amp;q=13%20rue%20abbatucci+(Auto%20Ecole%20Laurent)&amp;t=k&amp;z=19&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    title="Carte Contact Auto École Laurent"
                    aria-label="Carte montrant la localisation de l'Auto École Laurent"
                    className="grayscale hover:grayscale-0 transition-all duration-500"
                ></iframe>
             </div>
             <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-lg text-xs font-semibold text-slate-700 hidden md:block">
               13 Rue Abbatucci, Huningue
             </div>
        </div>
      </div>
    </div>
  );
};