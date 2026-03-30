import { RefObject } from 'react';
import { DitherCanvas } from '@/components/dither-canvas';
import { Dot } from '@/components/dot';

type CareerOpportunitiesProps = {
  careerRef: RefObject<HTMLDivElement | null>;
};

export const CareerOpportunities = ({
  careerRef,
}: CareerOpportunitiesProps) => {
  return (
    <section className="text-lg">
      <div
        ref={careerRef}
        id="debouches-professionnels"
        className="scroll-mt-24"
      >
        <h2 className="w-fit border-x-2 border-t-2 px-4 pt-1 text-2xl font-bold sm:text-3xl">
          débouchés professionnels
        </h2>
        <div className="flex flex-col gap-4 border-l-2 pt-8 pl-4">
          <DitherCanvas
            src="/images/formation/formation-7.jpg"
            height={360}
            fitMode="cover"
            className="w-full"
          />
          <div className="flex flex-col gap-4">
            <p>
              Se positionnant dans une logique alternative à la sectorisation
              des tâches, des rôles et des métiers, les professionnel·les
              issu·es de la formation AUEP seront aptes à s’adapter à des mondes
              professionnels variés.
            </p>
            <p>
              AUEP prépare aussi pour des métiers hors des cadres préétablis et
              alternatifs aux modes actuels de la production des territoires.
            </p>
            <ul>
              <li>
                <Dot />
                <span>
                  Au sein d’organisations diverses&nbsp;: collectivités locales
                  et services de l’État, bureaux d’études, cabinets de
                  consultants, établissements d’aménagement, sociétés de
                  développement immobilier, agences d’urbanisme, bailleurs
                  sociaux, associations, organismes de protection sociale, etc.
                </span>
              </li>
              <li>
                <Dot />
                <span>
                  Dans un large éventail de domaines&nbsp;: élaboration et mise
                  en œuvre des politiques publiques, maîtrises d&apos;œuvre et
                  maîtrises d’ouvrage (en architecture, aménagement,
                  planification et d’urbanisme), etc.
                </span>
              </li>
              <li>
                <Dot />
                <span>
                  La formation AUEP est également très adaptée aux étudiant·es
                  souhaitant s’engager dans la recherche.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
