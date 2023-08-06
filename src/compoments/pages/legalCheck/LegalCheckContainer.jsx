import LegalCheck from "./LegalCheck";

const LegalCheckContainer = ({ legalPage, setLegalPage }) => {
  return (
    <>
      <LegalCheck legalPage={legalPage} setLegalPage={setLegalPage} />
    </>
  );
};

export default LegalCheckContainer;
