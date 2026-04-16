import { cn } from '../../../lib/tailwind';

type LegalNoticesProps = {
  className?: string;
};

export const LegalNotices = ({ className }: LegalNoticesProps) => {
  return (
    <div className={cn('flex flex-col gap-4', className)}>
      <div>
        <h4 className="bg-primary inline px-1 text-white">
          Directrices de publication
        </h4>
        <ul>
          <li>Marine Bourgeois (Sciences Po Grenoble, PACTE)</li>
          <li>Théa Manola (ENSAG, CRESSON/AAU)</li>
          <li>Inès Ramirez-Cobo (IUGA, PACTE)</li>
        </ul>
      </div>
      <div>
        <h4 className="bg-primary inline px-1 text-white">
          Conception et développement du site
        </h4>
        <p>Michaël Bourjac</p>
      </div>
      <div>
        <h4 className="bg-primary inline px-1 text-white">
          Crédits des images
        </h4>
        <p className="text-balance 2xl:text-pretty">
          Toutes les images sont issues des travaux étudiants et des situations
          pédagogiques du parcours AUEP.
        </p>
      </div>
    </div>
  );
};
