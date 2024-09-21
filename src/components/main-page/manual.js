import React, { useState } from 'react';
import * as XLSX from 'xlsx';

const Manual = ({ onDataSubmit }) => {
  const [excelData, setExcelData] = useState([]);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const sheetName = workbook.SheetNames[0];
      const worksheet = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

      // پردازش داده‌های اکسل و اضافه کردن فیلد manual
      const processedData = worksheet.map((row) => ({
        CR_ID: row.CR_ID || '',
        Title: row.Title || '',
        Region: row.Region || '',
        Site_ID: row.Site_ID || '',
        Planned_Start_Time: row.Planned_Start_Time || '',
        Planned_End_Time: row.Planned_End_Time || '',
        vendor: row.vendor || '',
        change_type: row.change_type || '',
        status: row.status || '',
        Outage_Start_Time: row.Outage_Start_Time || '',
        Outage_End_Time: row.Outage_End_Time || '',
        Real_Start_Time: row.Real_Start_Time || '',
        Real_Finish_Time: row.Real_Finish_Time || '',
        Implementer: row.Implementer || '',
        ImportantCR: row.ImportantCR || '',
        Coreswitch_Site: row.Coreswitch_Site || '',
        product: row.product || '',
        create_by: row.create_by || '',
        isAffect: row.isAffect || '',
        timeAffect: row.timeAffect || '',
        crStatus: row.crStatus || '',
        manual: true // اضافه کردن فیلد manual
      }));

      // ذخیره داده‌های پردازش شده در state
      setExcelData(processedData);
    };

    reader.readAsArrayBuffer(file);
  };

  // تابعی که داده پردازش شده را به والد پاس می‌دهد
  const handleSubmit = () => {
    if (onDataSubmit) {
      onDataSubmit(excelData);
    }
  };

  return (
    <div>
      <h2>Manual CR Upload</h2>
      <input type="file" accept=".xlsx, .xls" onChange={handleFileUpload} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Manual;
