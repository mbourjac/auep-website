import { cn } from '../../../lib/tailwind';
import { EmailIcon } from '../../icons/email-icon';
import { InstagramIcon } from '../../icons/instagram-icon';

type SocialLinksProps = {
  className?: string;
};

export const SocialLinks = ({ className }: SocialLinksProps) => {
  return (
    <ul className={cn('flex gap-4', className)}>
      <li>
        <a
          href="mailto:marine.bourgeois@iepg.fr,manola.t@grenoble.archi.fr,ines.ramirez-cobo@univ-grenoble-alpes.fr"
          className="flex size-10 items-center justify-center self-center rounded-full bg-black text-white"
        >
          <span className="sr-only">Email</span>
          <EmailIcon aria-hidden="true" className="size-6" />
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/a_u_e_p/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex size-10 items-center justify-center rounded-full bg-black text-white"
        >
          <span className="sr-only">Instagram</span>
          <InstagramIcon aria-hidden="true" className="size-6" />
        </a>
      </li>
    </ul>
  );
};
