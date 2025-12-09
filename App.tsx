import React, { useState } from 'react';
import { Landing } from './components/Landing';
import { Pricing } from './components/Pricing';
import { Contact } from './components/Contact';
import { FAQ } from './components/FAQ';
import { ViewState } from './types';
import { Menu, X, Home, Euro, Phone, HelpCircle, User } from 'lucide-react';

interface PublicLayoutProps {
  children: React.ReactNode;
  currentView: string;
  onNavigate: (view: string) => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const PublicLayout = ({ children, currentView, onNavigate, isMenuOpen, setIsMenuOpen }: PublicLayoutProps) => (
  <div className="min-h-screen bg-slate-50 font-sans flex flex-col">
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-all">
      <div className="max-w-7xl mx-auto px-6 h-24 flex justify-between items-center">
        {/* Logo Section */}
        <div 
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => onNavigate(ViewState.HOME)}
        >
          <img 
            src="https://www.autocollant-tuning.com/2176-thickbox/autocollant-a-jeune-conducteur.jpg" 
            alt="Logo A Rouge" 
            className="h-14 w-auto drop-shadow-md hover:scale-105 transition-transform"
          />
          <div className="flex flex-col">
            <span className="font-bold text-xl text-slate-900 leading-none">Auto École</span>
            <span className="font-bold text-xl text-blue-600 leading-none">Laurent</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => onNavigate(ViewState.HOME)} className={`font-medium transition-colors ${currentView === ViewState.HOME ? 'text-blue-600' : 'text-slate-600 hover:text-slate-900'}`}>Accueil</button>
          <button onClick={() => onNavigate(ViewState.PRICING)} className={`font-medium transition-colors ${currentView === ViewState.PRICING ? 'text-blue-600' : 'text-slate-600 hover:text-slate-900'}`}>Forfaits</button>
          <button onClick={() => onNavigate(ViewState.FAQ)} className={`font-medium transition-colors ${currentView === ViewState.FAQ ? 'text-blue-600' : 'text-slate-600 hover:text-slate-900'}`}>FAQ</button>
          <button onClick={() => onNavigate(ViewState.CONTACT)} className={`font-medium transition-colors ${currentView === ViewState.CONTACT ? 'text-blue-600' : 'text-slate-600 hover:text-slate-900'}`}>Contact</button>
          
          <a 
            href="https://client.drivup.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-900 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-bold transition-all shadow-lg hover:shadow-blue-500/30 flex items-center gap-2 transform hover:-translate-y-0.5"
          >
            Espace Élève
            <User size={18} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-slate-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-lg h-screen">
          <div className="flex flex-col p-6 space-y-6 text-lg">
            <button onClick={() => {onNavigate(ViewState.HOME); setIsMenuOpen(false);}} className="flex items-center gap-4 text-slate-700 font-medium">
              <Home size={24} className="text-blue-600" /> Accueil
            </button>
            <button onClick={() => {onNavigate(ViewState.PRICING); setIsMenuOpen(false);}} className="flex items-center gap-4 text-slate-700 font-medium">
              <Euro size={24} className="text-blue-600" /> Forfaits
            </button>
            <button onClick={() => {onNavigate(ViewState.FAQ); setIsMenuOpen(false);}} className="flex items-center gap-4 text-slate-700 font-medium">
              <HelpCircle size={24} className="text-blue-600" /> Questions Fréquentes
            </button>
            <button onClick={() => {onNavigate(ViewState.CONTACT); setIsMenuOpen(false);}} className="flex items-center gap-4 text-slate-700 font-medium">
              <Phone size={24} className="text-blue-600" /> Contact
            </button>
            <hr className="border-slate-100" />
            <a 
              href="https://client.drivup.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 p-4 text-white font-bold bg-blue-600 rounded-xl shadow-md w-full"
            >
              Espace Élève <User size={20} />
            </a>
          </div>
        </div>
      )}
    </nav>

    {/* Main Content */}
    <div className="flex-grow">
      {children}
    </div>
    
    {/* Footer */}
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-sm">
        <div>
          <div className="flex items-center gap-2 mb-6">
             <img src="https://www.autocollant-tuning.com/2176-thickbox/autocollant-a-jeune-conducteur.jpg" alt="A" className="h-8 w-auto grayscale opacity-50" />
             <span className="text-white font-bold text-lg">Auto École Laurent</span>
          </div>
          <p className="leading-relaxed mb-4">
            Formation de conduite de qualité à Huningue depuis 2004. <br/>
            Permis B, AAC, Moto et AM.
          </p>
          <p>Agrément préfectoral officiel.</p>
        </div>
        <div>
          <h3 className="text-white font-bold text-lg mb-6">Liens rapides</h3>
          <ul className="space-y-3">
            <li onClick={() => onNavigate(ViewState.PRICING)} className="cursor-pointer hover:text-white transition-colors">Nos Tarifs</li>
            <li onClick={() => onNavigate(ViewState.FAQ)} className="cursor-pointer hover:text-white transition-colors">Questions Fréquentes</li>
            <li onClick={() => onNavigate(ViewState.CONTACT)} className="cursor-pointer hover:text-white transition-colors">Nous trouver</li>
            <li>
              <a 
                href="https://client.drivup.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                Espace Élève
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-bold text-lg mb-6">Contact</h3>
          <p className="mb-2">13 Rue Abbatucci, 68330 Huningue</p>
          <p className="mb-2 font-bold text-white"> 03 89 69 70 20</p>
        </div>
      </div>
      <div className="text-center mt-12 pt-8 border-t border-slate-800 text-slate-600">
        &copy; {new Date().getFullYear()} Auto École Laurent. Tous droits réservés.
      </div>
    </footer>
  </div>
);

const App = () => {
  const [currentView, setCurrentView] = useState(ViewState.HOME);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigateTo = (view: string) => {
    setCurrentView(view);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <PublicLayout
      currentView={currentView}
      onNavigate={navigateTo}
      isMenuOpen={isMenuOpen}
      setIsMenuOpen={setIsMenuOpen}
    >
      {currentView === ViewState.HOME && <Landing onNavigate={navigateTo} />}
      {currentView === ViewState.PRICING && <Pricing onNavigate={navigateTo} />}
      {currentView === ViewState.FAQ && <FAQ />}
      {currentView === ViewState.CONTACT && <Contact />}
    </PublicLayout>
  );
};

export default App;