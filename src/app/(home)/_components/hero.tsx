export const Hero = () => {
  return (
    <>
      <div className="px-4 sm:px-6 xl:px-12">
        <h1 className="mt-[-1.2vw] cursor-default border-b-20 pb-[2vw] text-[clamp(2rem,7.5vw,8.75rem)] leading-none font-extrabold md:border-b-36">
          architecture, urbanisme
          <br />
          et études politiques
        </h1>
      </div>
      <div className="px-4 sm:px-6 xl:px-12">
        <p className="py-16 tracking-wide md:py-24 md:text-lg">
          <strong className="font-bold">
            Architecture, Urbanisme et Études Politiques
          </strong>{' '}
          (<abbr>AUEP</abbr>) est une formation tri-diplômante
          <br className="hidden lg:block" /> portée conjointement par trois
          établissements composantes de l’Université Grenoble Alpes&nbsp;:
          <br />
          l’École Nationale Supérieure d’Architecture de Grenoble (
          <abbr>ENSAG-UGA</abbr>),
          <br className="hidden lg:block" /> l’Institut d’Urbanisme et de
          Géographie Alpine (<abbr>IUGA</abbr>) et Sciences Po Grenoble-UGA.
        </p>
      </div>
    </>
  );
};
