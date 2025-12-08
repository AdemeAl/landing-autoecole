import React from 'react';
import { Check, Bike, Car, Key, Phone, MapPin } from 'lucide-react';
import { ViewState } from '../types';

export const Pricing = ({ onNavigate }) => {
  const handleContact = () => {
      if (onNavigate) onNavigate(ViewState.CONTACT);
  };

  return (
    <div className="bg-slate-50 min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">Nos Formations</h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Des formations complètes pour la route de demain. <br/>
            <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full mt-2 inline-block">
                Inscriptions et paiements uniquement à l'agence
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          
          {/* Permis B / AAC */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden flex flex-col h-full">
            <div className="absolute top-0 left-0 w-full h-2 bg-blue-600"></div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-100 p-2 rounded-lg text-blue-600"><Car size={24} /></div>
              <h3 className="text-xl font-bold text-slate-900">Permis B & AAC</h3>
            </div>
            <p className="text-slate-500 text-sm mb-6">Formation traditionnelle, conduite accompagnée ou supervisée.</p>
            
            <ul className="space-y-4 text-sm text-slate-600 mb-8 flex-grow">
              <li className="flex items-start gap-3">
                <Check className="text-blue-600 shrink-0" size={18} />
                <span>AAC dès 15 ans</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-blue-600 shrink-0" size={18} />
                <span>Permis B dès 17 ans</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-blue-600 shrink-0" size={18} />
                <span>Code en ligne (Prépacode) inclus</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-blue-600 shrink-0" size={18} />
                <span>Perfectionnement post-permis</span>
              </li>
            </ul>
            <button onClick={handleContact} className="w-full py-3 px-4 rounded-xl border-2 border-slate-900 text-slate-900 font-bold hover:bg-slate-900 hover:text-white transition-colors flex items-center justify-center gap-2">
              <MapPin size={18} />
              Nous contacter
            </button>
          </div>

          {/* Permis Moto */}
          <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-2xl relative transform md:-translate-y-4 flex flex-col h-full">
            <div className="flex items-center gap-3 mb-4">
               <div className="bg-slate-800 p-2 rounded-lg text-white"><Bike size={24} /></div>
               <h3 className="text-xl font-bold text-white">Permis Moto</h3>
            </div>
            <p className="text-slate-400 text-sm mb-6">Pour les passionnés de deux-roues.</p>
            
            <ul className="space-y-4 text-sm text-slate-300 mb-8 flex-grow">
               <li className="flex items-start gap-3">
                <Check className="text-blue-400 shrink-0" size={18} />
                <span>Permis A1, A2 et Passerelle A</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-blue-400 shrink-0" size={18} />
                <span>Plateau (8h min) & Circulation (12h min)</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-blue-400 shrink-0" size={18} />
                <span>Formation 125cm³</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-blue-400 shrink-0" size={18} />
                <span>Prépacode Moto Spécifique</span>
              </li>
            </ul>
            <button onClick={handleContact} className="w-full py-4 px-4 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-500 transition-colors shadow-lg shadow-blue-900/50 flex items-center justify-center gap-2">
              <Phone size={18} />
              Se renseigner
            </button>
          </div>

          {/* Formation AM */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden flex flex-col h-full">
             <div className="absolute top-0 left-0 w-full h-2 bg-emerald-500"></div>
             <div className="flex items-center gap-3 mb-4">
              <div className="bg-emerald-100 p-2 rounded-lg text-emerald-600"><Key size={24} /></div>
              <h3 className="text-xl font-bold text-slate-900">Formation AM</h3>
            </div>
            <p className="text-slate-500 text-sm mb-6">Anciennement BSR. Pour conduire un cyclo dès 14 ans.</p>
            
            <ul className="space-y-4 text-sm text-slate-600 mb-8 flex-grow">
              <li className="flex items-start gap-3">
                <Check className="text-emerald-600 shrink-0" size={18} />
                <span>Dès 14 ans</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-emerald-600 shrink-0" size={18} />
                <span>Formation de 8 heures obligatoires</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-emerald-600 shrink-0" size={18} />
                <span>Véhicule fourni par l'auto-école</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-emerald-600 shrink-0" size={18} />
                <span>ASSR 1 ou 2 obligatoire</span>
              </li>
            </ul>
            <button onClick={handleContact} className="w-full py-3 px-4 rounded-xl border-2 border-slate-900 text-slate-900 font-bold hover:bg-slate-900 hover:text-white transition-colors flex items-center justify-center gap-2">
              <MapPin size={18} />
              Nous contacter
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};