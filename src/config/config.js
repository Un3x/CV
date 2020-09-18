import mattersLogo from '../components/Work/matters-logo.png'
import marteLogo from '../components/Work/marte-logo.png'
import ensiieLogo from '../components/School/ensiie-logo.png'
import stanLogo from '../components/School/stan-logo.png'

const config = {
  experience: {
    matters: {
      logo: mattersLogo,
      url: "https://matters.tech/fr",
      alt: "Matters",
      duration: "Fev 2015 - Juil 2020",
      description: "Depuis plus de 10 ans, Matters accompagne l’idéation, la conception, la réalisation et la croissance des startups et des démarches d’innovation. Matters croit aux approches centrées utilisateurs, à la création de produits et de business plutôt que de projet, à l'expérimentation rapide et à la validation par la mesure.",
    },
    marte: {
      logo: marteLogo,
      url: "http://www.marte.fr/",
      alt: "marte conseil",
      duration: "Sept 2012 - Sept 2014",
      description: "Marte est un cabinet conseil spécialisé en Architecture d’Entreprise et dans la gestion du cycle vie des applications. Alliant expertises fonctionnelles et techniques, nos interventions vont de l’audit de l’existant à la mise en œuvre et au paramétrage des principales solutions du marché.",
    },
    ensiie: {
      logo: ensiieLogo,
      duration: "Sept 2015 - Sept 2020",
      alt: "ENSIIE",
      url: "https://www.ensiie.fr/",
      description: "En parallèle de mon activité au sein de Matters, j'ai souhaité retourné dans mon école afin de faire des cours. Passionné par l'éducation j'ai pu prendre en charge plusieurs partie de leur formation web.",
    },
  },
  education: {
    ensiie: {
      logo: ensiieLogo,
      duration: "2012 - 2009",
      alt: "ENSIIE",
      url: "https://www.ensiie.fr/",
      description: "Ecole nationale supérieure pour l'industrie et l'entreprise"
    },
    stanislas: {
      logo: stanLogo,
      duration: "2009 - 2006",
      alt: "Stanislas Paris",
      url: "https://www.stanislas.fr/presentation-des-classes-preparatoires",
      description: "Stanislas Paris - Prépa PCSI-PSI"
    }
  },
  hobby: {
    snowboard: {
      title: "snowboard",
      description: "J'aime dans ce sport les sensations, mais aussi la douceur nécessaire à la bonne réalisation des gestes."
    },
    jeuxVideo: {
      title: "Jeux vidéo",
      description: "Les jeux vidéo ont toujours été pour moi source d'amusement mais aussi une ressource culturelle (et de compétition). Je suis ébahi par les transformations qu'a pu recevoir ce medium au cours des 20 dernières années."
    },
    musique: {
      title: "Musique",
      description: "Depuis tout petit j'ai beaucoup joué d'instrument. Malheureusement depuis quelques années je n"
    }
  }
}

export default config;
