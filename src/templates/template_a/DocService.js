import { savePDF } from "@progress/kendo-react-pdf";

class DocService {
  createPdf = (html) => {
    savePDF(html, {
      paperSize: "Letter",
      fileName: "Resume.pdf",
      margin: 0,
    });
  };
}

const Doc = new DocService();
export default Doc;
