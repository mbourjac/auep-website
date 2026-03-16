import { RefObject } from 'react';
import { DissertationsYear as DissertationsYearType } from '../works.types';
import { DissertationsYear } from './dissertations-year';
import { WorksSection } from './works-section';

type DissertationsProps = {
  years: DissertationsYearType[];
  sectionRef: RefObject<HTMLDivElement | null>;
  yearRefs: RefObject<HTMLDivElement | null>[];
};

export const Dissertations = ({
  sectionRef,
  years,
  yearRefs,
}: DissertationsProps) => {
  return (
    <WorksSection title="mémoires" sectionRef={sectionRef}>
      <div className="flex flex-col gap-2.5 border-t-2 py-2.5">
        <p>
          Pour la réalisation de leur mémoire, les étudiant.es AUEP bénéficient
          d’un double accompagnement&nbsp;: un suivi collectif dans le cadre
          d’un cours « &nbsp;Initiation à la recherche&nbsp;» et un suivi
          individuel. A travers ces enseignements, il s’agit de&nbsp;: s’initier
          aux logiques et à la pratique d’une démarche de recherche&nbsp;;
          apprendre à poser des questions pertinentes et à problématiser un
          sujet&nbsp;; maîtriser les concepts associés&nbsp;; construire et
          défendre une idée sur la base d’arguments scientifiques&nbsp;;
          proposer une démarche méthodologique et la mettre en oeuvre pour
          répondre à une série de questionnements&nbsp;; développer son esprit
          critique en prenant appui sur des éléments théoriques et en
          développant une posture réflexive propre&nbsp;; produire un document
          écrit qui respecte les règles académiques.
        </p>
      </div>
      {years.map((year, index) => (
        <DissertationsYear
          key={year.id}
          {...year}
          sectionRef={yearRefs[index]}
        />
      ))}
    </WorksSection>
  );
};
