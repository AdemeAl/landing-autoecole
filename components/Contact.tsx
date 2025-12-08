import React from 'react';
import { MapPin, Phone, Clock, Send, FileText } from 'lucide-react';

export const Contact = () => {
  return (
    <div className="bg-white min-h-screen pt-32 pb-20 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Left Column: Info */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <h1 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">Contactez-nous</h1>
              <p className="text-lg text-slate-500 leading-relaxed">
                Laurent et Véronique sont à votre écoute. Passez nous voir à l'agence aux horaires d'ouverture ou laissez-nous un message.
              </p>
            </div>

            <div className="space-y-6">
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
                  <a href="tel:0648320601" className="text-xl font-bold text-slate-900 hover:text-blue-600 transition-colors"> 03 89 69 70 20</a>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">Permanences & Code</h3>
                  <div className="mt-2 space-y-2 text-slate-600">
                    <div className="flex justify-between w-48 text-sm">
                      <span>Mardi</span>
                      <span className="font-medium">18h00 - 20h00</span>
                    </div>
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

          {/* Right Column: Form & Map */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-white shadow-xl p-8 md:p-10 rounded-3xl border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-8">Nous localiser</h2>
              <div className="rounded-xl overflow-hidden border border-slate-200 h-[400px]">
                 <div style={{ width: '100%', height: '100%' }}>
                    <iframe 
                        width="100%" 
                        height="100%" 
                        frameBorder="0" 
                        scrolling="no" 
                        marginHeight={0} 
                        marginWidth={0} 
                        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=13%20rue%20abbatucci+(Auto%20Ecole%20Laurent)&amp;t=k&amp;z=19&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                        title="Carte Contact"
                    ></iframe>
                 </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};