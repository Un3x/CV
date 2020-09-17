import mattersLogo from '../components/Work/matters-logo.png'
import marteLogo from '../components/Work/marte-logo.png'
import traqfoodLogo from '../components/Work/traqfood-logo.png'
import ubeeqoLogo from '../components/Work/ubeeqo-logo.png'
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
      detailed: {
        description:
          "Chez Matters, nous étions organisé en feature team. Les équipes avaient donc la responsabilités de concevoir la réponse, mais aussi de mettre en oeuvre et de faire le suivi des demandes clients. Cette organisation m'a permis de sortir plus facilement de ma zone de confort et de prendre en main des sujets plus large que la réalisation de tickets à la chaine.",
        mission: [
          {
            title: 'Ubeeqo',
            logo: ubeeqoLogo,
            url: 'https://www.ubeeqo.com/fr-fr',
            alt: 'Ubeeqo',
            description: [
              'Ubeeqo est une startup gérant des parcs automobile en autopartage. Initialement orienté b2b, le but était de simplifier les parcs automobiles des entreprises en mutualisant les véhicules de fonctions.',
              'Au sein d\'une équipe allant de 10 à 25 personnes, nous avons du gérer la maintenance évolutive de l\'application, l\'ouverture au b2c, plusieurs migration technique dont le passage en microservice, l\'internationalisation, la scalabilité et la performance.',
              'La squad \'Content\' était responsable du bon fonctionnement du coeur de métier de l\'application. Parcours de réservation, mise à disposition des véhicules, gestion des plannings des voitures, systéme d\'ouverture et de controle des réservations',
            ],
            skills: [
              'Postgres',
              'Migration PHP5 -> PHP7',
              'Migration ZF1 -> ZF2',
              'Migration Capistrano -> Kubernetes',
              'Dockerisation du projet',
              'Test unitaires, fonctionnel, d\'api ainsi que de performance',
              'Déploiement en un click',
              'Migration AngularsJs -> react/react-native',
              'Gestion de projet, Scrum master',
            ]
          },
          {
            title: 'traqfood',
            logo: traqfoodLogo,
            url: 'https://www.traqfood.com/',
            alt: 'traqfood',
            description: [
              'Traqfood est une application permettant de gérer le coté sanitaire auquel doit faire face tout restaurateur.',
              'Simple sur le papier, les conditions d\'utilisations des restaurateurs rendent la tache complexe.',
              'Les difficultés à avoir un réseau fonctionnel dans toutes les parties d\'un même restaurants nous ont obligés à réaliser une application 100% compatible offline.',
              'D\'abord seul sur le projet puis avec une équipe de 5 personnes, j\'étais le premier contact du client et avait la responsabilité de m\'occuper de l\'ensemble des phases depuis l\'expression de besoin jusqu\'au suivi en production.'
            ],
            skills: [
              'Postgres',
              'Php7',
              'Migration Zf2 -> Symfony',
              'Migration architecture cloud kubernetes',
              'Migration AngularJs -> React',
              'Application Android/Ios Offline/Online',
              'Ergonomie'
            ]
          }
        ]
      }
    },
    marte: {
      logo: marteLogo,
      url: "http://www.marte.fr/",
      alt: "marte conseil",
      duration: "Sept 2012 - Sept 2014",
      description: "Marte est un cabinet conseil spécialisé en Architecture d’Entreprise et dans la gestion du cycle vie des applications. Alliant expertises fonctionnelles et techniques, nos interventions vont de l’audit de l’existant à la mise en œuvre et au paramétrage des principales solutions du marché.",
      detailed: {
        mission: [
          {
            title: 'interne',
            description: [
              'Réalisation d\'un framework en JAVA J2EE et Sencha ExtJs. L\'objectif était de mettre en place les briques de bases permettant de gérer la configuration de déploiement de grand parc applicatif.',
              'Au sein d\'une équipe de 4 personnes, nous avons construit et configuré ce framework pour de grand groupe, notamment Harmonie mutuelle ainsi que Cetelem',
              'Le projet avait une grande complexité (notament au niveau SQL) étant donnée qu\'il fallait aussi être en mesure de versionner les differentes configurations afin d\'etre en mesure de gérer les différents cycle de déploiement (ainsi que le rollback)'
            ],
            skills: [
              'JAVA J2EE',
              'Sencha EXTJS',
              'Postgres',
            ]
          }
        ]
      }
    },
    ensiie: {
      logo: ensiieLogo,
      duration: "Sept 2015 - Sept 2020",
      alt: "ENSIIE",
      url: "https://www.ensiie.fr/",
      description: "En parallèle de mon activité au sein de Matters, j'ai souhaité retourné dans mon école afin de faire des cours. Passionné par l'éducation j'ai pu prendre en charge plusieurs partie de leur formation web.",
      detailed: {
        description: "J'ai souhaité mettre au coeur de cet enseingement les bonnes pratiques et les nouveaux modes opératoires apparu courant 2010. L'idée n'était pas seulement de faire un cours bien mais aussi de susciter l'envie chez les élèves de poursuivre dans cette voie en leur montrant que le web, c'est du sérieu et c'est aussi cool.",
        mission: [
          {
            title: 'FIZE - Formation principale',
            description: [
              'Responsable de l\'encadrement des projets web pour les premières années (120 élèves, 3 intervenants), nous avons décider de proposer aux élèves des projets au format "startup".',
              'Au delà de pratiquer, le but était de susciter des vocations en les encourageants à sortir de la simple réalisation scolaire. Que ce soit pour des associations de l\'école, leur vie perso ou tout simplement pour le fun, nous souhaitions pousser les élèves à réaliser un site qui sera utile'
            ]
          },
          {
            title: 'FIZA - Alternant et reconversion',
            description: [
              'Responsable de la formation des alternants et de l\'encadrement de leur projet web, le cours de 28h était une initiation au web en général.',
              'HTML/Css, Php7, introduction au MVC et son utilité. Nous avons construit avec les élèves un miniframework qui reprend les grands principes utilisés partout (router, service manager, injection de dépendance, etc) afin de leur permettre d\'être rapidement opérationel en entreprise.'
            ]
          }
        ]
      }
    },
  },
  education: {
    ensiie: {
      logo: ensiieLogo,
      duration: "Sept 2009 - Sept 2012",
      alt: "ENSIIE",
      url: "https://www.ensiie.fr/",
      description: "Ecole nationale supérieure pour l'industrie et l'entreprise - Formation continue"
    },
    stanislas: {
      logo: stanLogo,
      duration: "Sept 2006 - Sept 2009",
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
