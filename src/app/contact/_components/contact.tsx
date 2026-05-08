import { DitherCanvas } from '../../../components/dither-canvas';
import { SectionHeading } from '../../../components/section-heading';

export const Contact = () => {
  const CONTACTS = [
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

  const INSTITUTIONS = [
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

  return (
    <div className="px-4 sm:px-6 xl:px-12">
      <div className="flex min-h-[calc(100dvh-64px)] flex-col gap-24 border-b-2 pb-32">
        <h1 className="mt-[-1.2vw] cursor-default border-b-20 pb-[2vw] text-[clamp(2rem,7.5vw,8.75rem)] leading-none font-extrabold md:border-b-28 lg:border-b-36">
          contact
        </h1>
        <div className="flex w-full flex-col gap-32">
          <section>
            <SectionHeading>nous contacter</SectionHeading>
            <div className="flex flex-col gap-32 border-l-2 pt-8 pl-4">
              <ul className="flex flex-col gap-8">
                {CONTACTS.map(({ name, institutions, email }) => (
                  <li key={name}>
                    <a
                      href={`mailto:${email}`}
                      className="hover:border-primary group hover:text-primary relative flex items-end justify-between gap-4 overflow-hidden border-b transition-all"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 60.731 60.731"
                        xmlSpace="preserve"
                        transform="rotate(90)"
                        fill="currentColor"
                        className="text-primary absolute top-[0.525rem] size-4 -translate-x-4 transition-transform group-hover:translate-0"
                      >
                        <g strokeWidth="0"></g>
                        <g strokeLinecap="round" strokeLinejoin="round"></g>
                        <g>
                          <g>
                            <g>
                              <polygon points="30.366,0 0.625,29.735 17.998,29.735 18.003,60.731 42.733,60.729 42.733,29.735 60.107,29.735 "></polygon>
                            </g>
                          </g>
                        </g>
                      </svg>
                      <span className="text-xl font-bold transition-transform group-hover:translate-x-6 sm:text-2xl">
                        {name} ({institutions.join(', ')})
                      </span>
                      <span>{email}</span>
                    </a>
                  </li>
                ))}
              </ul>
              <ul className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                {INSTITUTIONS.map(({ name, address, city, picture, link }) => (
                  <li key={name} className="relative flex-col">
                    <a href={link} target="_blank" rel="noopener noreferrer">
                      <p className="absolute px-2 py-1">
                        <span className="bg-primary box-decoration-clone px-2 text-xl font-bold text-white sm:text-2xl">
                          {name}
                        </span>
                      </p>
                      <DitherCanvas
                        src={picture}
                        height={240}
                        fitMode="cover"
                        className="w-full"
                      />
                      <address className="absolute bottom-0 px-2 py-1">
                        <span className="bg-primary px-2 text-xl font-bold text-white">
                          {address}
                        </span>
                        <br />
                        <span className="bg-primary px-2 text-xl font-bold text-white">
                          {city}
                        </span>
                      </address>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
