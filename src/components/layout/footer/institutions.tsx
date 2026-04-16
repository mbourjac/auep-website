export const Institutions = () => {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h3 className="font-medium">
          École Nationale Supérieure d&apos;Architecture de Grenoble
        </h3>
        <address>
          60 Av. de Constantine CS 12636
          <br />
          38036 Grenoble Cedex 2
        </address>
      </div>
      <div>
        <h3 className="font-medium">
          Institut d’Urbanisme et de Géographie Alpine
        </h3>
        <address>
          14 et 14 Bis Avenue Marie Reynoard
          <br />
          38100 Grenoble
        </address>
      </div>
      <div>
        <h3 className="font-medium">Sciences Po Grenoble</h3>
        <address>
          1030 Av. Centrale
          <br />
          38400 Saint-Martin-d&apos;Hères
        </address>
      </div>
    </div>
  );
};
