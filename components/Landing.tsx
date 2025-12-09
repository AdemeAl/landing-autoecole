import React from 'react';
import { ChevronRight, Car, MapPin, CheckCircle, Smartphone, Bike, History, Users, ExternalLink } from 'lucide-react';
import { ViewState } from '../types';

export const Landing = ({ onNavigate }) => {
  return (
    <main className="bg-white font-sans text-slate-900">
      
      {/* --- HERO SECTION --- */}
      <header className="relative overflow-hidden bg-slate-900 text-white pt-32 pb-20 lg:pt-48 lg:pb-32">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 text-blue-400 font-bold uppercase tracking-wider text-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              13 Rue Abbatucci • Huningue (68330)
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 tracking-tight leading-tight">
              Bienvenue à <br/>
              <span className="text-blue-500">l'Auto École Laurent</span>
            </h1>
            
            <p className="text-lg text-slate-400 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Votre réussite en toute sécurité à Huningue. Formations Permis B, Conduite Accompagnée (AAC), Permis Moto, AM et Code en ligne.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => onNavigate(ViewState.PRICING)}
                className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-4 px-8 rounded-xl text-lg transition-all flex items-center justify-center gap-2"
                aria-label="Voir nos tarifs et formations"
              >
                Nos Formations
                <ChevronRight size={20} />
              </button>
              <button 
                onClick={() => onNavigate(ViewState.CONTACT)}
                className="bg-slate-800 hover:bg-slate-700 text-white font-semibold py-4 px-8 rounded-xl text-lg transition-all"
                aria-label="Contacter l'auto-école"
              >
                Nous contacter
              </button>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute -inset-4 bg-blue-600/20 rounded-2xl blur-xl"></div>
            <img 
              src="https://www.permis2-2.fr/wp-content/uploads/2023/09/auto-ecole.jpeg" 
              alt="Moniteur d'auto école à Huningue en leçon de conduite" 
              className="relative rounded-2xl shadow-2xl border border-slate-700 w-full object-cover h-[450px]"
              width="740"
              height="450"
            />
          </div>
        </div>
      </header>

      {/* --- HISTOIRE & EQUIPE --- */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-blue-600 font-bold uppercase tracking-wider text-sm">
              <History size={18} /> Depuis 2003
            </div>
            <h2 className="text-3xl font-bold text-slate-900">L'expérience au service de votre permis à Huningue</h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                C'est début 2003 que Laurent Sittler a repris l'auto-école après déjà trois années d'expérience en tant que moniteur auto et moto à Colmar, Mulhouse et Saint-Louis.
              </p>
              <p>
                Depuis son installation au 13 rue Abbatucci en 2004, l'équipe propose des formations sérieuses et diversifiées. Laurent et Véronique vous accompagnent avec pédagogie pour votre réussite au permis de conduire.
              </p>
            </div>
            <div className="flex items-center gap-4 mt-4">
              <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-lg border border-slate-100">
                <Users className="text-blue-600" size={20} />
                <span className="font-semibold text-slate-700">Laurent & Véronique</span>
              </div>
            </div>
          </div>
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
             <h3 className="text-xl font-bold mb-6 text-slate-900">Nos Spécialités</h3>
             <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-lg text-blue-600"><Car size={20} /></div>
                  <span className="text-slate-700 font-medium">Permis B, AAC & Supervisée</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-lg text-blue-600"><Bike size={20} /></div>
                  <span className="text-slate-700 font-medium">Moto A1, A2, A & Formation 125</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-lg text-blue-600"><Smartphone size={20} /></div>
                  <span className="text-slate-700 font-medium">Code en ligne (Prépacode)</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-lg text-blue-600"><CheckCircle size={20} /></div>
                  <span className="text-slate-700 font-medium">Formation AM (Scooter/Cyclo)</span>
                </li>
             </ul>
          </div>
        </div>
      </section>

      {/* --- PREPACODE SECTION --- */}
      <section className="bg-blue-600 py-16 text-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Le Code de la route chez vous</h2>
            <p className="text-blue-100 text-lg mb-6">
              N'hésitez pas à vous entraîner de chez vous ! Avec notre partenaire Prépacode, profitez de cours et de tests en illimité pendant 6 mois (disponible uniquement via l'abonnement en agence).
            </p>
            <ul className="space-y-2 mb-8 text-blue-100">
              <li className="flex items-center gap-2"><CheckCircle size={18} /> Cours de code en vidéo</li>
              <li className="flex items-center gap-2"><CheckCircle size={18} /> Tests thématiques & examens blancs</li>
              <li className="flex items-center gap-2"><CheckCircle size={18} /> Suivi de progression par l'auto-école</li>
            </ul>
            <a 
              href="https://www.prepacode-enpc.fr/" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-white text-blue-600 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-blue-50 transition-colors"
            >
              Accès Prépacode
              <ExternalLink size={18} />
            </a>
          </div>
          <div className="relative">
             <img 
               src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop" 
               alt="Révision du code de la route sur tablette" 
               className="rounded-2xl shadow-2xl border-4 border-blue-500 opacity-90"
               loading="lazy"
             />
          </div>
        </div>
      </section>

      {/* --- INFO / LOCATION --- */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block p-2 bg-blue-100 text-blue-700 rounded-lg mb-4">
              <MapPin size={24} />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Notre Agence à Huningue</h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Retrouvez-nous au 13 Rue Abbatucci à Huningue pour vos séances de code ou vos renseignements administratifs.
            </p>
            
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
               <h3 className="font-bold text-slate-900 mb-4">Horaires de bureau & Séances de code</h3>
               <ul className="space-y-3 text-slate-600">
                 <li className="flex justify-between border-b border-slate-100 pb-2">
                   <span>Jeudi</span>
                   <span className="font-bold text-slate-900">18h00 - 20h00</span>
                 </li>
                 <li className="flex justify-between">
                   <span>Samedi</span>
                   <span className="font-bold text-slate-900">10h00 - 12h00</span>
                 </li>
               </ul>
            </div>
            <div className="mt-6 text-slate-600 italic text-sm">
                Pour toute réservation de leçon de conduite, merci de passer à l'agence ou de nous contacter par téléphone.
            </div>
          </div>
          
          <div className="h-[500px] bg-slate-200 rounded-2xl overflow-hidden shadow-lg relative border-4 border-white">
             {/* Google Maps Iframe */}
             <div style={{ width: '100%', height: '100%' }}>
                <iframe 
                    width="100%" 
                    height="100%" 
                    frameBorder="0" 
                    scrolling="no" 
                    marginHeight={0} 
                    marginWidth={0} 
                    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=fr&amp;q=13%20rue%20abbatucci+(Auto%20Ecole%20Laurent%20Huningue)&amp;t=k&amp;z=19&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    title="Carte Auto Ecole Laurent Huningue"
                    aria-label="Localisation Auto École Laurent sur Google Maps"
                ></iframe>
             </div>
          </div>
        </div>
      </section>
    </main>
  );
};