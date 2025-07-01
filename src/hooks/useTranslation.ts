
import { useState, useCallback } from 'react';

interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

const translations: Translations = {
  en: {
    nav_home: 'Home',
    nav_features: 'Features',
    nav_technology: 'Technology',
    nav_roadmap: 'Roadmap',
    nav_community: 'Community',
    hero_title: 'XAXACURRENCY',
    hero_subtitle: 'The Future of Anonymous Cryptocurrency',
    hero_description: 'Experience the next generation of fully encrypted, anonymous digital currency. Built for privacy, security, and complete financial freedom.',
    hero_cta: 'Join the Revolution',
    hero_learn_more: 'Learn More',
    features_title: 'Revolutionary Features',
    features_subtitle: 'Built for the future of finance',
    feature_anonymous_title: 'Complete Anonymity',
    feature_anonymous_desc: 'Zero-knowledge proofs ensure your transactions remain completely private and untraceable.',
    feature_encrypted_title: 'Full Encryption',
    feature_encrypted_desc: 'Military-grade encryption protects every aspect of your digital assets and transactions.',
    feature_decentralized_title: 'Truly Decentralized',
    feature_decentralized_desc: 'No central authority. Complete financial sovereignty in your hands.',
    tech_title: 'Advanced Technology',
    tech_subtitle: 'Powered by cutting-edge blockchain innovation',
    roadmap_title: 'Roadmap',
    roadmap_subtitle: 'Our journey to revolutionize cryptocurrency',
    community_title: 'Join Our Community',
    community_subtitle: 'Be part of the financial revolution',
    footer_description: 'XAXACURRENCY - The future of anonymous, encrypted cryptocurrency. Built for those who value privacy and financial freedom.',
    copyright: '© 2024 XAXACURRENCY. All rights reserved.'
  },
  pl: {
    nav_home: 'Główna',
    nav_features: 'Funkcje',
    nav_technology: 'Technologia',
    nav_roadmap: 'Mapa Drogowa',
    nav_community: 'Społeczność',
    hero_title: 'XAXACURRENCY',
    hero_subtitle: 'Przyszłość Anonimowej Kryptowaluty',
    hero_description: 'Doświadcz następnej generacji w pełni zaszyfrowanej, anonimowej waluty cyfrowej. Stworzona dla prywatności, bezpieczeństwa i pełnej wolności finansowej.',
    hero_cta: 'Dołącz do Rewolucji',
    hero_learn_more: 'Dowiedz się więcej',
    features_title: 'Rewolucyjne Funkcje',
    features_subtitle: 'Stworzona dla przyszłości finansów',
    feature_anonymous_title: 'Pełna Anonimowość',
    feature_anonymous_desc: 'Dowody zero-knowledge zapewniają, że Twoje transakcje pozostają całkowicie prywatne i nie do prześledzenia.',
    feature_encrypted_title: 'Pełne Szyfrowanie',
    feature_encrypted_desc: 'Szyfrowanie klasy militarnej chroni każdy aspekt Twoich aktywów cyfrowych i transakcji.',
    feature_decentralized_title: 'Prawdziwie Zdecentralizowana',
    feature_decentralized_desc: 'Brak centralnego autorytetu. Pełna suwerenność finansowa w Twoich rękach.',
    tech_title: 'Zaawansowana Technologia',
    tech_subtitle: 'Zasilana najnowocześniejszymi innowacjami blockchain',
    roadmap_title: 'Mapa Drogowa',
    roadmap_subtitle: 'Nasza podróż do zrewolucjonizowania kryptowalut',
    community_title: 'Dołącz do Naszej Społeczności',
    community_subtitle: 'Bądź częścią rewolucji finansowej',
    footer_description: 'XAXACURRENCY - Przyszłość anonimowej, zaszyfrowanej kryptowaluty. Stworzona dla tych, którzy cenią prywatność i wolność finansową.',
    copyright: '© 2024 XAXACURRENCY. Wszelkie prawa zastrzeżone.'
  },
  de: {
    nav_home: 'Startseite',
    nav_features: 'Funktionen',
    nav_technology: 'Technologie',
    nav_roadmap: 'Roadmap',
    nav_community: 'Community',
    hero_title: 'XAXACURRENCY',
    hero_subtitle: 'Die Zukunft der anonymen Kryptowährung',
    hero_description: 'Erleben Sie die nächste Generation vollständig verschlüsselter, anonymer digitaler Währung. Gebaut für Privatsphäre, Sicherheit und komplette finanzielle Freiheit.',
    hero_cta: 'Treten Sie der Revolution bei',
    hero_learn_more: 'Mehr erfahren',
    features_title: 'Revolutionäre Funktionen',
    features_subtitle: 'Gebaut für die Zukunft der Finanzen',
    feature_anonymous_title: 'Vollständige Anonymität',
    feature_anonymous_desc: 'Zero-Knowledge-Beweise stellen sicher, dass Ihre Transaktionen vollständig privat und nicht nachverfolgbar bleiben.',
    feature_encrypted_title: 'Vollständige Verschlüsselung',
    feature_encrypted_desc: 'Militärische Verschlüsselung schützt jeden Aspekt Ihrer digitalen Assets und Transaktionen.',
    feature_decentralized_title: 'Wahrhaft Dezentralisiert',
    feature_decentralized_desc: 'Keine zentrale Autorität. Vollständige finanzielle Souveränität in Ihren Händen.',
    tech_title: 'Fortschrittliche Technologie',
    tech_subtitle: 'Angetrieben von modernster Blockchain-Innovation',
    roadmap_title: 'Roadmap',
    roadmap_subtitle: 'Unsere Reise zur Revolution der Kryptowährung',
    community_title: 'Treten Sie unserer Community bei',
    community_subtitle: 'Seien Sie Teil der finanziellen Revolution',
    footer_description: 'XAXACURRENCY - Die Zukunft der anonymen, verschlüsselten Kryptowährung. Gebaut für diejenigen, die Privatsphäre und finanzielle Freiheit schätzen.',
    copyright: '© 2024 XAXACURRENCY. Alle Rechte vorbehalten.'
  },
  es: {
    nav_home: 'Inicio',
    nav_features: 'Características',
    nav_technology: 'Tecnología',
    nav_roadmap: 'Hoja de Ruta',
    nav_community: 'Comunidad',
    hero_title: 'XAXACURRENCY',
    hero_subtitle: 'El Futuro de la Criptomoneda Anónima',
    hero_description: 'Experimenta la próxima generación de moneda digital completamente encriptada y anónima. Construida para privacidad, seguridad y libertad financiera completa.',
    hero_cta: 'Únete a la Revolución',
    hero_learn_more: 'Aprender Más',
    features_title: 'Características Revolucionarias',
    features_subtitle: 'Construida para el futuro de las finanzas',
    feature_anonymous_title: 'Anonimato Completo',
    feature_anonymous_desc: 'Las pruebas de conocimiento cero aseguran que tus transacciones permanezcan completamente privadas e imposibles de rastrear.',
    feature_encrypted_title: 'Encriptación Completa',
    feature_encrypted_desc: 'Encriptación de grado militar protege cada aspecto de tus activos digitales y transacciones.',
    feature_decentralized_title: 'Verdaderamente Descentralizada',
    feature_decentralized_desc: 'Sin autoridad central. Soberanía financiera completa en tus manos.',
    tech_title: 'Tecnología Avanzada',
    tech_subtitle: 'Impulsada por innovación blockchain de vanguardia',
    roadmap_title: 'Hoja de Ruta',
    roadmap_subtitle: 'Nuestro viaje para revolucionar las criptomonedas',
    community_title: 'Únete a Nuestra Comunidad',
    community_subtitle: 'Sé parte de la revolución financiera',
    footer_description: 'XAXACURRENCY - El futuro de la criptomoneda anónima y encriptada. Construida para quienes valoran la privacidad y la libertad financiera.',
    copyright: '© 2024 XAXACURRENCY. Todos los derechos reservados.'
  },
  fr: {
    nav_home: 'Accueil',
    nav_features: 'Fonctionnalités',
    nav_technology: 'Technologie',
    nav_roadmap: 'Feuille de Route',
    nav_community: 'Communauté',
    hero_title: 'XAXACURRENCY',
    hero_subtitle: "L'Avenir de la Cryptomonnaie Anonyme",
    hero_description: 'Découvrez la prochaine génération de monnaie numérique entièrement cryptée et anonyme. Construite pour la confidentialité, la sécurité et la liberté financière complète.',
    hero_cta: 'Rejoignez la Révolution',
    hero_learn_more: 'En savoir plus',
    features_title: 'Fonctionnalités Révolutionnaires',
    features_subtitle: "Construite pour l'avenir de la finance",
    feature_anonymous_title: 'Anonymat Complet',
    feature_anonymous_desc: 'Les preuves à divulgation nulle de connaissance garantissent que vos transactions restent complètement privées et intraçables.',
    feature_encrypted_title: 'Cryptage Complet',
    feature_encrypted_desc: 'Le cryptage de niveau militaire protège chaque aspect de vos actifs numériques et transactions.',
    feature_decentralized_title: 'Vraiment Décentralisée',
    feature_decentralized_desc: 'Aucune autorité centrale. Souveraineté financière complète entre vos mains.',
    tech_title: 'Technologie Avancée',
    tech_subtitle: "Alimentée par l'innovation blockchain de pointe",
    roadmap_title: 'Feuille de Route',
    roadmap_subtitle: 'Notre voyage pour révolutionner les cryptomonnaies',
    community_title: 'Rejoignez Notre Communauté',
    community_subtitle: 'Faites partie de la révolution financière',
    footer_description: 'XAXACURRENCY - L\'avenir de la cryptomonnaie anonyme et cryptée. Construite pour ceux qui valorisent la confidentialité et la liberté financière.',
    copyright: '© 2024 XAXACURRENCY. Tous droits réservés.'
  }
};

export const useTranslation = () => {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  const t = useCallback((key: string): string => {
    return translations[currentLanguage]?.[key] || translations.en[key] || key;
  }, [currentLanguage]);

  const changeLanguage = useCallback((language: string) => {
    if (translations[language]) {
      setCurrentLanguage(language);
    }
  }, []);

  return { t, currentLanguage, changeLanguage };
};
