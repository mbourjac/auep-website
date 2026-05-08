import { ContactPerson, Institution } from './contact.types';

export const CONTACT_PEOPLE: ContactPerson[] = [
  {
    name: 'Suzel Balez',
    institutions: ['ENSAG', 'CRESSON'],
    email: 'suzel.balez@grenoble.archi.fr',
  },
  {
    name: 'Marine Bourgeois',
    institutions: ['Sciences Po Grenoble', 'PACTE'],
    email: 'marine.bourgeois@iepg.fr',
  },
  {
    name: 'Théa Manola',
    institutions: ['ENSAG', 'CRESSON'],
    email: 'thea.manola@grenoble.archi.fr',
  },
  {
    name: 'Inès Ramirez-Cobo',
    institutions: ['IUGA', 'PACTE'],
    email: 'ines.ramirez-cobo@univ-grenoble-alpes.frr',
  },
];

export const INSTITUTIONS: Institution[] = [
  {
    name: "École Nationale Supérieure d'Architecture de Grenoble",
    address: '60 Av. de Constantine CS 12636',
    city: '38036 Grenoble Cedex 2',
    picture: 'images/contact/ensag.jpg',
    link: 'https://www.grenoble.archi.fr/',
  },
  {
    name: 'Institut d’Urbanisme et de Géographie Alpine',
    address: '14 et 14 Bis Avenue Marie Reynoard',
    city: '38100 Grenoble',
    picture: 'images/contact/iuga.jpg',
    link: 'https://iuga.univ-grenoble-alpes.fr/institut-d-urbanisme-et-de-geographie-alpine/accueil-iuga-975218.kjsp',
  },
  {
    name: 'Sciences Po Grenoble',
    address: '1030 Av. Centrale',
    city: "38400 Saint-Martin-d'Hères",
    picture: 'images/contact/siences-po.jpg',
    link: 'https://www.sciencespo-grenoble.fr/',
  },
];
