import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "Comment réserver une heure de conduite ?",
    answer: "Les réservations d'heures de conduite se font exclusivement en nous contactant par téléphone au 03 89 69 70 20 ou en passant directement à l'agence lors des horaires de permanence."
  },
  {
    question: "Puis-je payer ou m'inscrire en ligne ?",
    answer: "Non, les inscriptions et les règlements se font uniquement à l'agence (13 Rue Abbatucci à Huningue). Cela nous permet de vérifier ensemble votre dossier et de vous conseiller la meilleure formule."
  },
  {
    question: "Comment fonctionne le code en ligne ?",
    answer: "Nous utilisons la plateforme officielle Prépacode. Une fois inscrit à l'auto-école, nous vous fournissons des identifiants personnels qui vous permettent de vous entraîner en illimité pendant 6 mois (cours vidéos et tests) depuis chez vous."
  },
  {
    question: "Quels sont les documents à fournir pour l'inscription ?",
    answer: "Vous devez apporter : une photocopie de votre carte d'identité, votre permis (si moto), JAPD/Recensement (dès 16 ans), ASSR 2 (-25 ans), une photo/signature numérique et un justificatif de domicile de moins de 3 mois."
  },
  {
    question: "Où se trouve le point de rendez-vous pour les leçons ?",
    answer: "Le point de départ est généralement à l'auto-école (13 Rue Abbatucci), mais nous pouvons aussi nous arranger pour des départs depuis le lycée Jean Mermoz ou la Place Abbatucci selon le planning."
  },
  {
    question: "Faites-vous la conduite accompagnée (AAC) ?",
    answer: "Oui, tout à fait ! La conduite accompagnée est possible dès 15 ans. C'est une excellente formation qui augmente vos chances de réussite au permis et réduit la période probatoire."
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white min-h-screen pt-32 pb-20 font-sans">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block p-3 rounded-full bg-blue-50 text-blue-600 mb-6">
            <HelpCircle size={32} />
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-6">Questions Fréquentes</h1>
          <p className="text-lg text-slate-500">
            Retrouvez ici les réponses aux questions les plus courantes. Pour toute autre demande, n'hésitez pas à nous appeler.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border rounded-2xl transition-all duration-300 ${openIndex === index ? 'border-blue-200 bg-blue-50/30' : 'border-slate-200 bg-white hover:border-slate-300'}`}
            >
              <button
                className="w-full flex justify-between items-center p-6 text-left"
                onClick={() => toggleFAQ(index)}
              >
                <span className={`font-bold text-lg ${openIndex === index ? 'text-blue-700' : 'text-slate-800'}`}>
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="text-blue-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="text-slate-400 flex-shrink-0" />
                )}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-6 pt-0 text-slate-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-slate-50 p-8 rounded-2xl border border-slate-100">
            <h3 className="font-bold text-slate-900 text-xl mb-2">Vous avez d'autres questions ?</h3>
            <p className="text-slate-500 mb-6">Nous sommes disponible pour vous répondre.</p>
            <a href="tel:0389697020" className="inline-block bg-slate-900 text-white font-bold py-3 px-8 rounded-full hover:bg-slate-800 transition-colors">
                Appeler le  03 89 69 70 20
            </a>
        </div>
      </div>
    </div>
  );
};