import { SectionHeading } from '../../../components/section-heading';
import { CONTACT_PEOPLE, INSTITUTIONS } from '../contact.constants';
import { ContactLink } from './contact-link';
import { InstitutionCard } from './institution-card';

export const Contact = () => {
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
                {CONTACT_PEOPLE.map((person) => (
                  <li key={person.name}>
                    <ContactLink {...person} />
                  </li>
                ))}
              </ul>
              <ul className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                {INSTITUTIONS.map((institution) => (
                  <li key={institution.name} className="relative flex-col">
                    <InstitutionCard {...institution} />
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
