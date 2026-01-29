import dynamic from "next/dynamic";
import styles from "./policies.module.scss";

const PDFViewer = dynamic(() => import("../PDFViewer"), {
  ssr: false,
});

const Policies = () => {
  return (
    <div className={styles.policiesContainer}>
      <div className={styles.policiesContent}>
        <h1 className="main-title">Policies</h1>
        <PDFViewer filePath="/assets/pdf/Get_Started_With_Smallpdf.pdf" />
      </div>
    </div>
  );
};

export default Policies;
