import { useState } from "react";
import LegalCheck from "./LegalCheck";


const LegalCheckContainer = ({ legalPage, setLegalPage }) => {
  const [modal, setModal] = useState(false);
  return (
    <>
      <LegalCheck
        legalPage={legalPage}
        setLegalPage={setLegalPage}
        modal={modal}
        setModal={setModal}
      />
    </>
  );
};

export default LegalCheckContainer;
