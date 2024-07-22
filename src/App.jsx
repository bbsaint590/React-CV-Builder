import React, { useState } from 'react';
import CVForm from './Components/CVForm';
import FormattedCV from './Components/FormattedCV';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const App = () => {
  const [formData, setFormData] = useState({
    personalStatement: '',
    generalInfo: { name: '', email: '', phone: '' },
    educations: [],
    experiences: []
  });

  const handleDownloadPDF = () => {
    const pdfButton = document.getElementById('pdf-download-button');
    if (pdfButton) {
      pdfButton.style.display = 'none'; 
    }

    const input = document.getElementById('cv-preview');
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      const imgWidth = 210; 
      const pageHeight = 295; 
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;

      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, -heightLeft, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save('cv.pdf');

      if (pdfButton) {
        pdfButton.style.display = 'block'; 
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="container mx-auto flex flex-col lg:flex-row gap-8">
      
        <div className="lg:w-1/2 bg-white p-6 rounded-lg shadow-lg">
          <CVForm formData={formData} setFormData={setFormData} />
        </div>

        <div className="lg:w-1/2 bg-white p-6 rounded-lg shadow-lg" id="cv-preview">
          <FormattedCV
            personalStatement={formData.personalStatement}
            generalInfo={formData.generalInfo}
            educations={formData.educations}
            experiences={formData.experiences}
          />
          <button
            id="pdf-download-button"
            onClick={handleDownloadPDF}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Download as PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;



