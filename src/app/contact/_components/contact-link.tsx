import { ContactPerson } from '../contact.types';

type ContactLinkProps = ContactPerson;

export const ContactLink = ({
  name,
  institutions,
  email,
}: ContactLinkProps) => {
  return (
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
  );
};
