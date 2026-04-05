'use client';

import { RefObject } from 'react';
import { Dot } from '@/components/dot';
import { FormationSubSection } from './formation-sub-section';

type StudyPlanProps = {
  studyPlanRef: RefObject<HTMLDivElement | null>;
  bachelorRef: RefObject<HTMLDivElement | null>;
  masterRef: RefObject<HTMLDivElement | null>;
  graduationsRef: RefObject<HTMLDivElement | null>;
  metrofablabRef: RefObject<HTMLDivElement | null>;
};

export const StudyPlan = ({
  studyPlanRef,
  bachelorRef,
  masterRef,
  graduationsRef,
  metrofablabRef,
}: StudyPlanProps) => {
  return (
    <section className="text-lg">
      <div ref={studyPlanRef} className="scroll-mt-24">
        <h2 className="w-fit border-x-2 border-t-2 px-4 pt-1 text-2xl font-bold sm:text-3xl">
          schéma des études
        </h2>
        <div className="flex gap-4 border-l-2 pt-8 pb-8 pl-4">
          <div className="text-primary grid w-full grid-cols-[auto_1fr_1fr] gap-2 font-semibold">
            <div className="border-primary col-span-3 grid grid-cols-subgrid border-b-16 border-dashed pb-2">
              <div className="bg-primary"></div>
              <div className="border-primary bg-primary col-start-2 border px-4 py-2 text-center text-white">
                <p>
                  Concours
                  <br />
                  Sciences Po Grenoble
                </p>
              </div>
              <div className="border-primary bg-primary flex items-center justify-center border px-4 py-2 text-center text-white">
                <p>
                  Sélection
                  <br />
                  ENSAG
                </p>
              </div>
            </div>
            <div className="col-span-3 grid grid-cols-subgrid">
              <div className="border-primary bg-primary flex items-center justify-center border px-4 py-2 text-white">
                <p>année 1</p>
              </div>
              <div className="border-primary flex items-center justify-center border px-4 py-2 text-center">
                <p>Licence 1 Sciences Po Grenoble</p>
              </div>
              <div className="border-primary flex items-center justify-center border px-4 py-2 text-center">
                <p>Licence 1 ENSAG</p>
              </div>
            </div>
            <div className="col-span-3 grid grid-cols-subgrid">
              <div className="border-primary col-span-2 col-start-2 flex justify-center border px-4 py-2 text-center">
                <p>
                  Admission en AUEP
                  <br />
                  Dossier et entretien
                </p>
              </div>
            </div>
            <div className="col-span-3 grid grid-cols-subgrid">
              <div className="border-primary bg-primary flex items-center justify-center border px-4 py-2 text-white">
                <p>année 2</p>
              </div>
              <div className="border-primary flex items-center justify-center border px-4 py-2 text-center">
                <p>Licence 1 ENSAG</p>
              </div>
              <div className="border-primary flex items-center justify-center border px-4 py-2 text-center">
                <p>Licence 1 Sciences Po Grenoble</p>
              </div>
            </div>
            <div className="col-span-3 grid grid-cols-subgrid">
              <div className="border-primary bg-primary flex items-center justify-center border px-4 py-2 text-white">
                <p>année 3</p>
              </div>
              <div className="border-primary col-span-2 flex items-center justify-center border px-4 py-2 text-center">
                <p>Licence 2 ENSAG + Licence 3 Sciences Po Grenoble</p>
              </div>
            </div>
            <div className="border-primary col-span-3 grid grid-cols-subgrid border-b-16 border-dashed pb-2">
              <div className="border-primary bg-primary flex items-center justify-center border px-4 py-2 text-white">
                <p>année 4</p>
              </div>
              <div className="border-primary col-span-2 flex items-center justify-center border px-4 py-2 text-center">
                <p>Mobilité internationale</p>
              </div>
            </div>
            <div className="col-span-3 grid grid-cols-subgrid">
              <div className="border-primary bg-primary flex items-center justify-center border px-4 py-2 text-white">
                <p>année 5</p>
              </div>
              <div className="border-primary col-span-2 flex items-center justify-center border px-4 py-2 text-center">
                <p>
                  Enseignements théoriques et professionnalisants en
                  architecture, urbanisme, aménagement, sciences politiques
                </p>
              </div>
            </div>
            <div className="col-span-3 grid grid-cols-subgrid">
              <div className="border-primary bg-primary flex items-center justify-center border px-4 py-2 text-white">
                <p>année 6</p>
              </div>
              <div className="border-primary col-span-2 flex items-center justify-center border px-4 py-2 text-center">
                <p>
                  Enseignements du projet (ateliers & séminaires) + Mémoire et
                  projet de fin d&apos;études
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FormationSubSection
        sectionRef={bachelorRef}
        id="licence-auep"
        heading="licence AUEP"
        headingAlignment="right"
        image="/images/formation/formation-3.jpg"
      >
        <div>
          <p>
            Le parcours AUEP en Licence intègre, en 4 années, le cycle du
            Bachelor de Sciences Po Grenoble et le cycle conduisant au diplôme
            d’études en architecture valant grade de Licence de l’ENSAG. Il est
            structuré de la façon suivante&nbsp;:
          </p>
          <ul>
            <li>
              <Dot />
              <span>année 1&nbsp;: L1 ENSAG ou L1 Sciences Po Grenoble</span>
            </li>
            <li>
              <Dot />
              <span>année 2&nbsp;: L1 Sciences Po Grenoble ou L1 ENSAG</span>
            </li>
            <li>
              <Dot />
              <span>
                année 3&nbsp;: L2 ENSAG et L3 Sciences Po Grenoble intégrées
              </span>
            </li>
            <li>
              <Dot />
              <span>année 4&nbsp;: Mobilité internationale obligatoire</span>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="py-1 underline underline-offset-4">Admission</h4>
          <p>
            L’accès au tricursus concerne les étudiantes et étudiants inscrits
            en première année à Sciences Po Grenoble ou à l’ENSAG. A l’issue de
            la première année validée dans l’un ou l’autre de ces
            établissements, les candidates et candidats à l’inscription au
            parcours AUEP sont sélectionnés sur la base d’un dossier de
            candidature pour l’admissibilité et d’un entretien oral pour
            l’admission.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="py-1 underline underline-offset-4">Inscription</h4>
          <p>
            L’admission en Licence nécessite une double inscription à Sciences
            Po Grenoble et à l’ENSAG, à partir de l’année 2.
          </p>
        </div>
      </FormationSubSection>
      <FormationSubSection
        sectionRef={masterRef}
        id="master-auep"
        heading="master AUEP"
        headingAlignment="left"
        image="/images/formation/formation-4.jpg"
      >
        <div>
          <p>
            AUEP propose en 2 années des enseignements spécifiques qui
            articulent chaque semestre&nbsp;:
          </p>
          <ul>
            <li>
              <Dot />
              <span>
                un atelier de projet architectural et urbain abordant, sur trois
                semestres, une réflexion sur les politiques publiques à
                différentes échelles territoriales et leur évolution, voire
                détournement, dans des contextes spécifiques&nbsp;;
              </span>
            </li>
            <li>
              <Dot />
              <span>
                un séminaire associé à l’atelier, proposant des cours théoriques
                et travaux dirigés sur les thématiques spécifiques traitées en
                atelier&nbsp;;
              </span>
            </li>
            <li>
              <Dot />
              <span>
                la réalisation d’un mémoire en Master 1 accompagnée d’une
                initiation à la recherche&nbsp;;
              </span>
            </li>
            <li>
              <Dot />
              <span>
                la réalisation d’un Projet de Fin d’Études en Master 2&nbsp;;
              </span>
            </li>
            <li>
              <Dot />
              <span>
                la réalisation d’un ou plusieurs stages de minimum 4 mois au
                total&nbsp;;
              </span>
            </li>
            <li>
              <Dot />
              <span>
                des cours théoriques sur l’architecture, l’urbanisme et
                l’aménagement.
              </span>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="py-1 underline underline-offset-4">Admission</h4>
          <p>
            Les étudiantes et étudiants ayant suivi le parcours AUEP en Licence
            seront admis de droit dans le parcours AUEP en Master. Le parcours
            compte 20 places en Master.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="py-1 underline underline-offset-4">Inscription</h4>
          <p>
            L’admission en Master nécessite une inscription dans les trois
            établissements avec des droits d’inscription modulés selon les
            parcours des étudiant·es.
          </p>
        </div>
      </FormationSubSection>
      <FormationSubSection
        sectionRef={graduationsRef}
        id="diplomations"
        heading="diplômations"
        headingAlignment="right"
        image="/images/formation/formation-5.jpg"
      >
        <p>
          La validation du cycle complet AUEP (Licence + Master) conduit, à
          l’issue du Master, à la délivrance du diplôme d’État d’architecte, du
          diplôme de Sciences Po Grenoble-UGA et du Master en urbanisme et
          aménagement. Le cas échéant, le diplôme délivré est relatif à la
          Licence d’entrée&nbsp;:
        </p>
        <table className="text-primary border-separate border-spacing-2">
          <thead>
            <tr>
              <th
                scope="col"
                className="bg-primary w-1/2 px-4 py-2 font-semibold text-white"
              >
                Licence d&apos;entrée
              </th>
              <th
                scope="col"
                className="bg-primary w-1/2 px-4 py-2 font-semibold text-white"
              >
                Master à la sortie
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-primary border px-4 py-2">ARCHI</td>
              <td className="border-primary border px-4 py-2">
                DE ARCHI + Master URBA
              </td>
            </tr>
            <tr>
              <td className="border-primary border px-4 py-2">SCIENCES PO</td>
              <td className="border-primary border px-4 py-2">
                SCIENCES PO + Master URBA
              </td>
            </tr>
            <tr>
              <td className="border-primary border px-4 py-2">
                URBA ou autres
              </td>
              <td className="border-primary border px-4 py-2">Master URBA</td>
            </tr>
          </tbody>
        </table>
      </FormationSubSection>
      <FormationSubSection
        sectionRef={metrofablabRef}
        id="programme-metrofablab"
        heading="le programme MetroFabLab"
        headingAlignment="left"
        image="/images/formation/formation-6.jpg"
        isLast
      >
        <p>La formation AUEP est associée au programme MetroFabLab.</p>
        <p>
          Ce programme vise à former les étudiant·es par (et pour) la recherche
          aux nouvelles conditions de la fabrique métropolitaine, dans un
          contexte de changement rapide, de transitions et de transformation de
          la société. Interdisciplinaire et multi-scalaire, il repose sur les
          savoirs et les pratiques de l’architecture, de l’urbanisme et de
          l’aménagement de l’espace, du design, des sciences politiques, de la
          géographie et des sciences économiques. L’objectif du programme
          MetroFabLab est de former les étudiant·es par et pour la recherche aux
          nouvelles conditions de la fabrique métropolitaine dans un contexte de
          changement rapide, de transitions et de transformation de la société.
          Face aux enjeux et impératifs écologiques, mais également sociaux,
          économiques et politiques, il est nécessaire de renouveler les cadres
          d’analyse, les approches conceptuelles et méthodologiques pour tenter
          de mieux comprendre les dynamiques en cours, éclairer voire objectiver
          les débats et mieux accompagner l’action dans ces mutations profondes.
          Ce programme thématique bénéficie de l’excellence scientifique des
          laboratoires du site Grenoblois. Il s’appuie sur les programmes de
          recherche en cours et se construit en dialogue sur les acteurs du
          territoire. Son ambition est de former des chercheur·es et des cadres
          sensibles aux défis futurs en matière d’architecture, d’urbanisme, de
          design et de conception des politiques publiques. Cette thématique de{' '}
          <a
            href="https://www.univ-grenoble-alpes.fr/formation/graduate-school/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline underline-offset-2"
          >
            Graduate School
          </a>{' '}
          est ouverte à tous les étudiant·es des parcours de master en
          architecture, urbanisme, design et science politique.
        </p>
      </FormationSubSection>
    </section>
  );
};
