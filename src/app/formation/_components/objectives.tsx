'use client';

import { RefObject } from 'react';
import { DitherCanvas } from '@/components/dither-canvas';
import { Dot } from '@/components/dot';
import { FormationSubSection } from './formation-sub-section';

type ObjectivesProps = {
  objectivesRef: RefObject<HTMLDivElement | null>;
  principlesRef: RefObject<HTMLDivElement | null>;
};

export const Objectives = ({
  objectivesRef,
  principlesRef,
}: ObjectivesProps) => {
  return (
    <section className="text-lg">
      <div
        ref={objectivesRef}
        id="objectifs-et-competences"
        className="scroll-mt-24"
      >
        <h2 className="w-fit border-x-2 border-t-2 px-4 pt-1 text-4xl font-bold">
          objectifs et compétences
        </h2>
        <div className="flex flex-col gap-4 border-l-2 pt-8 pb-8 pl-4">
          <DitherCanvas
            src="/images/formation/formation-1.jpg"
            height={360}
            fitMode="cover"
            className="w-full"
          />
          <div className="flex flex-col gap-4">
            <p>
              Le parcours AUEP est une formation portée conjointement par trois
              établissements composantes de l’Université Grenoble Alpes&nbsp;:
              l’École Nationale Supérieure d’Architecture de Grenoble,
              l’Institut d’Urbanisme et de Géographie Alpine et Sciences Po
              Grenoble.
            </p>
            <p>
              Cette formation propose l’acquisition de compétences conjointes en
              architecture, en urbanisme et en sciences sociales, conduisant à
              une triple diplomation de niveau master (pour les étudiantes et
              étudiants ayant suivi l’ensemble de la formation AUEP en Licence
              et en Master)&nbsp;: diplôme d’Etat d’architecte, master en
              urbanisme et aménagement, et diplôme de Sciences Po Grenoble-UGA.
            </p>
            <div>
              <p>
                AUEP propose une formation originale, au croisement de
                l’architecture, de l’urbanisme et des sciences sociales, qui
                vise à outiller les étudiant·es pour comprendre et agir face aux
                mutations qui traversent nos territoires et champs
                d’action&nbsp;:
              </p>
              <ul>
                <li>
                  <Dot />
                  <span>
                    crises environnementales, pressions économiques,
                    recompositions sociales, transformations des institutions et
                    des politiques publiques&nbsp;;
                  </span>
                </li>
                <li>
                  <Dot />
                  <span>
                    production des territoires qui s’ancre dans des cadres
                    physiques, environnementaux, sociaux, économiques et
                    politiques de plus en plus complexes&nbsp;;
                  </span>
                </li>
                <li>
                  <Dot />
                  <span>
                    politiques publiques territoriales, dispositifs et enjeux de
                    gouvernance associés qui connaissent des reconfigurations
                    profondes et d’ampleur.
                  </span>
                </li>
              </ul>
            </div>
            <p>
              Ces transformations appellent de meilleures interactions et une
              plus grande transversalité entre les acteur·ices des territoires.
              Partant de ce constat, la formation AUEP ambitionne de préparer
              les professionnel·les de demain à agir, en identifiant les
              possibles alternatives et en portant des projets respectueux du
              vivant, attentifs à la sobriété, ouverts à une pluralité
              d’acteur·rices et d’usages dans les territoires.
            </p>
          </div>
        </div>
      </div>
      <FormationSubSection
        sectionRef={principlesRef}
        id="cinq-grands-principes"
        heading="cinq grands principes"
        headingAlignment="right"
        image="/images/formation/formation-2.jpg"
        isLast
      >
        <ol className="flex flex-col gap-4">
          <li>
            Les urgences écologique, sociale et politique ne sont pas des enjeux
            sectoriels, mais un cadre global d’action qui invite à repenser les
            finalités mêmes des projets.
          </li>
          <li>
            L’interdisciplinarité entre «&nbsp;arts de la conception&nbsp;» et
            sciences sociales permet d’agir de manière éclairée sur les
            territoires, ce qui implique&nbsp;:
            <ul>
              <li>
                <Dot />
                de comprendre les cadres théoriques, les logiques de production
                des territoires habités, leurs acteurs et leurs enjeux, afin
                d’agir le plus justement possible&nbsp;;
              </li>
              <li>
                <Dot />
                d’acquérir une capacité d’analyse stratégique&nbsp;;
              </li>
              <li>
                <Dot />
                de créer une culture commune entre disciplines et métiers, à la
                fois dans les raisonnements et la mobilisation d’outils.
              </li>
            </ul>
          </li>
          <li>
            L’ancrage dans les réalités professionnelles est central, ce qui
            amène à penser conjointement l’aboutissement d’un processus de
            projet et les conditions de sa mise en œuvre. Il s’agit d’interroger
            les cadres concrets de l’action publique (processus de projet,
            gouvernance, instruments) et d’apprendre à&nbsp;:
            <ul>
              <li>
                <Dot />
                travailler en lien étroit avec les territoires et leurs
                acteur·rices&nbsp;;
              </li>
              <li>
                <Dot />
                enquêter sur le terrain&nbsp;;
              </li>
              <li>
                <Dot />
                coopérer en groupe.
              </li>
            </ul>
          </li>
          <li>
            Une approche multi-scalaire structure le parcours de master (du
            «&nbsp;grand territoire&nbsp;» au bâtiment) en lien avec des
            situations spatiales concrètes&nbsp;:
            <ul>
              <li>
                <Dot />
                semestre 1&nbsp;: territoires ruraux en mutation&nbsp;;
              </li>
              <li>
                <Dot />
                semestre 2&nbsp;: «&nbsp;campagnes urbaines&nbsp;» et
                périphéries sous pression&nbsp;;
              </li>
              <li>
                <Dot />
                semestre 3&nbsp;: cœurs métropolitains et de leurs équipements.
              </li>
            </ul>
          </li>
          <li>
            Un dialogue avec les mutations professionnelles actuelles et futures
            est recherché, dans un triple objectif&nbsp;:
            <ul>
              <li>
                <Dot />
                se positionner dans une logique alternative à la sectorisation
                des tâches, des rôles et des métiers&nbsp;;
              </li>
              <li>
                <Dot />
                «&nbsp;parler plusieurs langages&nbsp;» et se destiner à des
                pratiques professionnelles et métiers variés, hors des cadres
                préétablis&nbsp;;
              </li>
              <li>
                <Dot />
                proposer des alternatives aux modes actuels de la fabrique
                urbaine et de la production des territoires.
              </li>
            </ul>
          </li>
        </ol>
      </FormationSubSection>
    </section>
  );
};
