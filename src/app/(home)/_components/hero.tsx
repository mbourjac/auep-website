export const Hero = () => {
  return (
    <>
      <div className="px-6 xl:px-12">
        <h1 className="mt-[-1.5vw] cursor-default border-b-36 pb-[2vw] text-[7.75vw] leading-none font-black">
          architecture, urbanisme
          <br />
          et études politiques
        </h1>
      </div>
      <div className="px-6 xl:px-12">
        <p className="py-24 text-lg tracking-wide">
          <strong className="font-bold">
            Architecture, Urbanisme et Études Politiques
          </strong>{' '}
          (<abbr>AUEP</abbr>) est une formation tri-diplômante
          <br />
          portée conjointement par trois établissements composantes de
          l’Université Grenoble Alpes :
          <br />
          l’École Nationale Supérieure d’Architecture de Grenoble (
          <abbr>ENSAG-UGA</abbr>),
          <br />
          l’Institut d’Urbanisme et de Géographie Alpine (<abbr>IUGA</abbr>) et
          Sciences Po Grenoble-UGA.
        </p>
      </div>
    </>
  );
};
