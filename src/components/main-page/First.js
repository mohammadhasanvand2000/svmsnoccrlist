import React, { useState } from 'react';
import './app.css';
import { Helmet } from 'react-helmet';
import { Navbar, Nav } from 'react-bootstrap';
import { BsBox, BsHouseDoor } from 'react-icons/bs';
import { FaCalendarDay, FaPlus,FaCheck  } from 'react-icons/fa';
import { FiPhone } from 'react-icons/fi';
import * as XLSX from 'xlsx';
import { HiOutlineDownload,HiOutlineUpload } from 'react-icons/hi';
import { Modal, Button } from 'react-bootstrap';

import Manual from './manual';


const First = () => {
  const [showCrList, setShowCrList] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showList, setShowList] = useState(false);
  const [showCommaSeparated, setShowCommaSeparated] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showModal1, setShowModal1] = useState(false);


 

  const [crData, setCrData] = useState([
    {
      CR_ID: 'NWG-OPS-CR-20240906-555551',
      Title: 'R4-site-affect-sa-bss&rss',
      Region:'R1',
      Site_ID: 'T3376 W4047 K1067 N9119 N4742 T1234 T3965 N4741',
      Planned_Start_Time: '2024-9-7 10:00 AM',
      Planned_End_Time:'',
      vendor: 'Huawei-SVMS',
      change_type:'Go live',
      status: 'Completed',
      Outage_Start_Time: '2024-9-7 10:00 AM',
      Outage_End_Time: '2024-9-7 16:00 PM',
      Real_Start_Time:'9:36 AM',
      Real_Finish_Time:'2:03 PM',
      Implementer:'09120121973',
      ImportantCR:'',
      Coreswitch_Site:'',
      product:'IPBB',
      create_by :'meisam.be',
      isAffect: 'YES',
      timeAffect: '120 M',
      crStatus: 'Running',
      

    },
    {
      CR_ID: 'NWG-OPS-CR-20240906-00451',
      Title: 'R4-site-affect-sa-bss&rss',
      Region:'R4',
      Site_ID: 'T3376 W4047 K1067 N9119 N4742 T3153 T3965 N4741',
      Planned_Start_Time: '2024-9-7 10:00 AM',
      Planned_End_Time:'',
      vendor: 'Huawei-SVMS',
      change_type:'Go live',
      status: 'Completed',
      Outage_Start_Time: '2024-9-7 10:00 AM',
      Outage_End_Time: '2024-9-7 16:00 PM',
      Real_Start_Time:'9:36 AM',
      Real_Finish_Time:'2:03 PM',
      Implementer:'09120121973',
      ImportantCR:'',
      Coreswitch_Site:'',
      product:'IPBB',
      create_by :'meisam.be',
      isAffect: 'YES',
      timeAffect: '120 M',
      crStatus: 'Running',
      

    },
    {
      CR_ID: 'NWG-OPS-CR-20240906-00451',
      Title: 'R4-site-affect-sa-bss&rss',
      Region:'R1',
      Site_ID: 'T3376 W4047 K1067 N9119 N4742 T3153 T3965 N4741',
      Planned_Start_Time: '2024-9-7 10:00 AM',
      Planned_End_Time:'',
      vendor: 'Huawei-SVMS',
      change_type:'Go live',
      status: 'Completed',
      Outage_Start_Time: '2024-9-7 10:00 AM',
      Outage_End_Time: '2024-9-7 16:00 PM',
      Real_Start_Time:'9:36 AM',
      Real_Finish_Time:'2:03 PM',
      Implementer:'09120121973',
      ImportantCR:'',
      Coreswitch_Site:'',
      product:'IPBB',
      create_by :'meisam.be',
      isAffect: 'YES',
      timeAffect: '120 M',
      crStatus: 'Running',
      

    },
    {
      CR_ID: 'NWG-OPS-CR-20240906-00451',
      Title: 'R4-site-affect-sa-bss&rss',
      Region:'R10',
      Site_ID: 'T3376 W4047 K1067 N9119 N4742 T3153 T3965 N4741',
      Planned_Start_Time: '2024-9-7 10:00 AM',
      Planned_End_Time:'',
      vendor: 'Huawei-SVMS',
      change_type:'Go live',
      status: 'Completed',
      Outage_Start_Time: '2024-9-7 10:00 AM',
      Outage_End_Time: '2024-9-7 16:00 PM',
      Real_Start_Time:'9:36 AM',
      Real_Finish_Time:'2:03 PM',
      Implementer:'09120121973',
      ImportantCR:'',
      Coreswitch_Site:'',
      product:'IPBB',
      create_by :'meisam.be',
      isAffect: 'YES',
      timeAffect: '120 M',
      crStatus: 'Running',
      

    },
    {
      CR_ID: 'NWG-OPS-CR-20240906-00451',
      Title: 'R4-site-affect-sa-bss&rss',
      Region:'R4',
      Site_ID: 'T3376 W4047 K1067 N9119 N4742 T3153 T3965 N4741',
      Planned_Start_Time: '2024-9-7 10:00 AM',
      Planned_End_Time:'',
      vendor: 'Huawei-SVMS',
      change_type:'Go live',
      status: 'Completed',
      Outage_Start_Time: '2024-9-7 10:00 AM',
      Outage_End_Time: '2024-9-7 16:00 PM',
      Real_Start_Time:'9:36 AM',
      Real_Finish_Time:'2:03 PM',
      Implementer:'09120121973',
      ImportantCR:'',
      Coreswitch_Site:'',
      product:'IPBB',
      create_by :'meisam.be',
      isAffect: 'YES',
      timeAffect: '120 M',
      crStatus: 'Running',
      

    },
    {
      CR_ID: 'NWG-OPS-CR-20240906-55551',
      Title: 'R4-site-af-bss&rss',
      Region:'R3',
      Site_ID: 'MSBSCH1',
      Planned_Start_Time: '2024-9-7 10:00 AM',
      Planned_End_Time:'',
      vendor: 'Huawei-SVMS',
      change_type:'Go live',
      status: 'Completed',
      Outage_Start_Time: '2024-9-7 10:00 AM',
      Outage_End_Time: '2024-9-7 16:00 PM',
      Real_Start_Time:'9:36 AM',
      Real_Finish_Time:'2:03 PM',
      Implementer:'09120121973',
      ImportantCR:'',
      Coreswitch_Site:'',
      product:'IPBB',
      create_by :'meisam.be',
      isAffect: 'YES',
      timeAffect: '120 M',
      crStatus: 'CLOSE',
      

    },
    {
      CR_ID: 'NWG-OPS-CR-20240906-00451',
      Title: 'R4-site-affect-sa-bss&rss',
      Region:'R1',
      Site_ID: 'T3376 W4047 K1067 N9119 N4742 T3153 T3965 N4741',
      Planned_Start_Time: '2024-9-7 10:00 AM',
      Planned_End_Time:'',
      vendor: 'Huawei-SVMS',
      change_type:'Go live',
      status: 'Completed',
      Outage_Start_Time: '2024-9-7 10:00 AM',
      Outage_End_Time: '2024-9-7 16:00 PM',
      Real_Start_Time:'9:36 AM',
      Real_Finish_Time:'2:03 PM',
      Implementer:'09120121973',
      ImportantCR:'',
      Coreswitch_Site:'',
      product:'IPBB',
      create_by :'meisam.be',
      isAffect: 'YES',
      timeAffect: '120 M',
      crStatus: 'Running',
      
      

    },
    {
      CR_ID: 'NWG-OPS-CR-20240906-00451',
      Title: 'R4-site-affect-sa-bss&rss',
      Region:'R4',
      Site_ID: 'T3376 W4047 K1067 N9119 N4742 T3153 T3965 N4741',
      Planned_Start_Time: '2024-9-7 10:00 AM',
      Planned_End_Time:'',
      vendor: 'Huawei-SVMS',
      change_type:'Go live',
      status: 'Completed',
      Outage_Start_Time: '2024-9-7 10:00 AM',
      Outage_End_Time: '2024-9-7 16:00 PM',
      Real_Start_Time:'9:36 AM',
      Real_Finish_Time:'2:03 PM',
      Implementer:'09120121973',
      ImportantCR:'',
      Coreswitch_Site:'',
      product:'IPBB',
      create_by :'meisam.be',
      isAffect: 'YES',
      timeAffect: '120 M',
      crStatus: 'Running',
      

    },
    {
      CR_ID: 'NWG-OPS-CR-20240906-00451',
      Title: 'R4-site-affect-sa-bss&rss',
      Region:'R4',
      Site_ID: 'T3376 W4047 K1067 N9119 N4742 T3153 T3965 N4741',
      Planned_Start_Time: '2024-9-7 10:00 AM',
      Planned_End_Time:'',
      vendor: 'Huawei-SVMS',
      change_type:'Go live',
      status: 'Completed',
      Outage_Start_Time: '2024-9-7 10:00 AM',
      Outage_End_Time: '2024-9-7 16:00 PM',
      Real_Start_Time:'9:36 AM',
      Real_Finish_Time:'2:03 PM',
      Implementer:'09120121973',
      ImportantCR:'',
      Coreswitch_Site:'',
      product:'IPBB',
      create_by :'meisam.be',
      isAffect: 'YES',
      timeAffect: '120 M',
      crStatus: 'Running',
      

    },
    {
      CR_ID: 'NWG-OPS-CR-20240906-44444',
      Title: 'R4-site-affect-sa-bss&rss',
      Region:'R1',
      Site_ID: 'T3376 W4047 K1067 N9119 N4742 T3153 T3965 N4741',
      Planned_Start_Time: '2024-9-7 10:00 AM',
      Planned_End_Time:'',
      vendor: 'Huawei-SVMS',
      change_type:'Go live',
      status: 'Completed',
      Outage_Start_Time: '2024-9-7 10:00 AM',
      Outage_End_Time: '2024-9-7 16:00 PM',
      Real_Start_Time:'9:36 AM',
      Real_Finish_Time:'2:03 PM',
      Implementer:'09120121973',
      ImportantCR:'',
      Coreswitch_Site:'',
      product:'IPBB',
      create_by :'meisam.be',
      isAffect: 'YES',
      timeAffect: '120 M',
      crStatus: 'Running',
      

    },
    {
      CR_ID: 'NWG-OPS-CR-20240906-11111',
      Title: 'R4-site-affect-sa-bss&rss',
      Region:'R1',
      Site_ID: 'RRBSCH1',
      Planned_Start_Time: '2024-9-7 10:00 AM',
      Planned_End_Time:'',
      vendor: 'Huawei-SVMS',
      change_type:'Go live',
      status: 'Completed',
      Outage_Start_Time: '2024-9-7 10:00 AM',
      Outage_End_Time: '2024-9-7 16:00 PM',
      Real_Start_Time:'9:36 AM',
      Real_Finish_Time:'2:03 PM',
      Implementer:'09120121973',
      ImportantCR:'',
      Coreswitch_Site:'',
      product:'IPBB',
      create_by :'meisam.be',
      isAffect: 'YES',
      timeAffect: '120 M',
      crStatus: 'Running',
      

    },
    {
      CR_ID: 'NWG-OPS-CR-20240906-00451',
      Title: 'R4-site-affect-sa-bss&rss',
      Region:'R4',
      Site_ID: 'T3376 W4047 K1067 N9119 N4742 T3153 T3965 N4741',
      Planned_Start_Time: '2024-9-7 10:00 AM',
      Planned_End_Time:'',
      vendor: 'Huawei-SVMS',
      change_type:'Go live',
      status: 'Completed',
      Outage_Start_Time: '2024-9-7 10:00 AM',
      Outage_End_Time: '2024-9-7 16:00 PM',
      Real_Start_Time:'9:36 AM',
      Real_Finish_Time:'2:03 PM',
      Implementer:'09120121973',
      ImportantCR:'',
      Coreswitch_Site:'',
      product:'IPBB',
      create_by :'meisam.be',
      isAffect: 'YES',
      timeAffect: '120 M',
      crStatus: 'Running',
      

    },
    {
      CR_ID: 'NWG-OPS-CR-20240906-55551',
      Title: 'R4-site-affect-sa-bss&rss',
      Region:'R4',
      Site_ID: 'SJBSCH1',
      Planned_Start_Time: '2024-9-7 10:00 AM',
      Planned_End_Time:'',
      vendor: 'Huawei-SVMS',
      change_type:'Go live',
      status: 'Completed',
      Outage_Start_Time: '2024-9-7 10:00 AM',
      Outage_End_Time: '2024-9-7 16:00 PM',
      Real_Start_Time:'9:36 AM',
      Real_Finish_Time:'2:03 PM',
      Implementer:'09122111173',
      ImportantCR:'',
      Coreswitch_Site:'',
      product:'IPBB',
      create_by :'meisam.be',
      isAffect: 'YES',
      timeAffect: '120 M',
      crStatus: 'Running',
      

    },
    {
      CR_ID: 'NWG-OPS-CR-20240906-00451',
      Title: 'R4-site-affect-sa-bss&rss',
      Region:'R1',
      Site_ID: 'T3376 W4047 K1067 N9119 N4742 T3153 T3965 N4741',
      Planned_Start_Time: '2024-9-7 10:00 AM',
      Planned_End_Time:'',
      vendor: 'Huawei-SVMS',
      change_type:'Go live',
      status: 'Completed',
      Outage_Start_Time: '2024-9-7 10:00 AM',
      Outage_End_Time: '2024-9-7 16:00 PM',
      Real_Start_Time:'9:36 AM',
      Real_Finish_Time:'2:03 PM',
      Implementer:'09120121973',
      ImportantCR:'',
      Coreswitch_Site:'',
      product:'IPBB',
      create_by :'meisam.be',
      isAffect: 'YES',
      timeAffect: '120 M',
      crStatus: 'Running',
      
      

    },
    {
      CR_ID: 'NWG-OPS-CR-20240906-00451',
      Title: 'R4-site-affect-sa-bss&rss',
      Region:'R1',
      Site_ID: 'T3376 W4047 K1067 N9119 N4742 T3153 T3965 N4741',
      Planned_Start_Time: '2024-9-7 10:00 AM',
      Planned_End_Time:'',
      vendor: 'Huawei-SVMS',
      change_type:'Go live',
      status: 'Completed',
      Outage_Start_Time: '2024-9-7 10:00 AM',
      Outage_End_Time: '2024-9-7 16:00 PM',
      Real_Start_Time:'9:36 AM',
      Real_Finish_Time:'2:03 PM',
      Implementer:'09120121973',
      ImportantCR:'',
      Coreswitch_Site:'',
      product:'IPBB',
      create_by :'meisam.be',
      isAffect: 'YES',
      timeAffect: '120 M',
      crStatus: 'Running',
      
      

    },
  ]);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);
  

        const processedData = jsonData.map(row => ({
          ...row,
          cr: row.manual === 'TRUE' ? 'manual' : 'regular' 
        }));

        setCrData(prevData => [...prevData, ...processedData]);
      };
      reader.readAsArrayBuffer(file);
    }
  };


  const handleUploadButtonClick = () => {
    document.getElementById('file-input').click(); 
  };



  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true); 
      setTimeout(() => setCopied(false), 2000); 
    });
  }

 
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);


  const handleShow1 = () => setShowModal1(true);
  const handleClose1 = () => setShowModal1(false);



  const countCrByRejen = () => {
    const crCount = {};
    crData.forEach(cr => {
      crCount[cr.Region] = (crCount[cr.Region] || 0) + 1;
    });
    return crCount;
  };
  
  const crByRejen = countCrByRejen();


  const handleTodayCrClick = () => {
    setShowCrList(true); 
  };


  const [selectedRejen, setSelectedRejen] = useState(null);


  const filteredCrData = selectedRejen
    ? crData.filter(cr => cr.Region === selectedRejen)
    : crData; 
  const totalCrCount = crData.length;
  const getFormattedDateTime = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0'); 
    const day = String(now.getDate()).padStart(2, '0'); 
    const hours = String(now.getHours()).padStart(2, '0'); 
    const minutes = String(now.getMinutes()).padStart(2, '0'); 
    const seconds = String(now.getSeconds()).padStart(2, '0');
  
    return ` CR list at ${year}-${month}-${day}_${hours}-${minutes}-${seconds}`;
  };
  const handleShowList = () => {
    setShowList(true);
    setShowCommaSeparated(false);
  };
  
  const handleShowCommaSeparated = () => {
    setShowList(false);
    setShowCommaSeparated(true);
  };
  
  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(crData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'CR Data');
    
   
    const fileName = `${getFormattedDateTime()}.xlsx`;
  

    XLSX.writeFile(workbook, fileName);
  };
  
  return (
    
    <main className="body">
        <Modal
        show={showModal}
        onHide={handleClose}
        centered
        size='xl'
        scrollable
       
      >
        <Modal.Header closeButton>
          <Modal.Title><h3>List of mobile numbers of RM&RMA</h3></Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ maxHeight: '70vh', overflowY: 'auto'}}>
    
    <div className=" customTable"  style={{ Width: 'auto' }}>
    
    
      <table  className="tableStyle custom-background" style={{ ...styles.tableStyle, backgroundColor: '#06c4e6' }}>
      <thead>
    <tr>
      <th style={{ ...styles.thTdStyle, ...styles.thStyle }}>Region</th>
      <th style={{ ...styles.thTdStyle, ...styles.thStyle }}>NTN RM&RMA</th>
      <th style={{ ...styles.thTdStyle, ...styles.thStyle }}>Huawei RM&RMA</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <td  rowSpan="8" style={{ ...styles.thTdStyle, ...styles.thStyle }}>
        <h2 style={{ margin: 0, lineHeight: '3' }}>R1</h2>
      </td>
      </tr>
      <tr>
      <td style={{ ...styles.thTdStyle, ...styles.thStyle }}>RM--> shahrir :09120643083</td>
      <td style={{ ...styles.thTdStyle, ...styles.thStyle }}>RM--> shahrir :09120643083</td>
    
    </tr >
    <tr>
    <td style={{ ...styles.thTdStyle, ...styles.thStyle }}>RMA--> shahrir :09120643083</td>
    <td style={{ ...styles.thTdStyle, ...styles.thStyle }}>RMA--> shahrir :09120643083</td>
  
    </tr>
    <tr>
    <td style={{ ...styles.thTdStyle, ...styles.thStyle }}>RMA--> shahrir :09120643083</td>
    <td style={{ ...styles.thTdStyle, ...styles.thStyle }}>RMA--> shahrir :09120643083</td>
      
    </tr>
    
  </tbody>
</table>


<table className="tableStyle custom-background" style={{ ...styles.tableStyle, backgroundColor: '#373d01' }}>

      <thead>
    <tr>
      <th style={{ ...styles.thTdStyle, ...styles.thStyle }}>Region</th>
      <th style={{ ...styles.thTdStyle, ...styles.thStyle }}>NTN RM&RMA</th>
      <th style={{ ...styles.thTdStyle, ...styles.thStyle }}>Huawei RM&RMA</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <td  rowSpan="8" style={{ ...styles.thTdStyle, ...styles.thStyle }}>
        <h2 style={{ margin: 0, lineHeight: '3' }}>R2</h2>
      </td>
      </tr>
      <tr>
      <td style={{ ...styles.thTdStyle, ...styles.thStyle }}>RM--> shahrir :09120643083</td>
      <td style={{ ...styles.thTdStyle, ...styles.thStyle }}>RM--> shahrir :09120643083</td>
    
    </tr >
    <tr>
    <td style={{ ...styles.thTdStyle, ...styles.thStyle }}>RMA--> shahrir :09120643083</td>
    <td style={{ ...styles.thTdStyle, ...styles.thStyle }}>RMA--> shahrir :09120643083</td>
  
    </tr>
    <tr>
    <td style={{ ...styles.thTdStyle, ...styles.thStyle }}>RMA--> shahrir :09120643083</td>
    <td style={{ ...styles.thTdStyle, ...styles.thStyle }}>RMA--> shahrir :09120643083</td>
      
    </tr>
    
  </tbody>
</table>
<table className="tableStyle custom-background" style={{ ...styles.tableStyle, backgroundColor: '#2a6309' }}>

      <thead>
    <tr>
      <th style={{ ...styles.thTdStyle, ...styles.thStyle }}>Region</th>
      <th style={{ ...styles.thTdStyle, ...styles.thStyle }}>NTN RM&RMA</th>
      <th style={{ ...styles.thTdStyle, ...styles.thStyle }}>Huawei RM&RMA</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <td  rowSpan="8" style={{ ...styles.thTdStyle, ...styles.thStyle }}>
        <h2 style={{ margin: 0, lineHeight: '3' }}>R3</h2>
      </td>
      </tr>
      <tr>
      <td style={{ ...styles.thTdStyle, ...styles.thStyle }}>RM--> shahrir :09120643083</td>
      <td style={{ ...styles.thTdStyle, ...styles.thStyle }}>RM--> shahrir :09120643083</td>
    
    </tr >
    <tr>
    <td style={{ ...styles.thTdStyle, ...styles.thStyle }}>RMA--> shahrir :09120643083</td>
    <td style={{ ...styles.thTdStyle, ...styles.thStyle }}>RMA--> shahrir :09120643083</td>
  
    </tr>
    <tr>
    <td style={{ ...styles.thTdStyle, ...styles.thStyle }}>RMA--> shahrir :09120643083</td>
    <td style={{ ...styles.thTdStyle, ...styles.thStyle }}>RMA--> shahrir :09120643083</td>
      
    </tr>
    
  </tbody>
</table>
<table className="tableStyle custom-background" style={{ ...styles.tableStyle, backgroundColor: '#a00b0b' }}>

      <thead>
    <tr>
      <th style={{ ...styles.thTdStyle, ...styles.thStyle }}>Region</th>
      <th style={{ ...styles.thTdStyle, ...styles.thStyle }}>NTN RM&RMA</th>
      <th style={{ ...styles.thTdStyle, ...styles.thStyle }}>Huawei RM&RMA</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <td  rowSpan="8" style={{ ...styles.thTdStyle, ...styles.thStyle }}>
        <h2 style={{ margin: 0, lineHeight: '3' }}>R4</h2>
      </td>
      </tr>
      <tr>
      <td style={{ ...styles.thTdStyle, ...styles.thStyle }}>RM--> shahrir :09120643083</td>
      <td style={{ ...styles.thTdStyle, ...styles.thStyle }}>RM--> shahrir :09120643083</td>
    
    </tr >
    <tr>
    <td style={{ ...styles.thTdStyle, ...styles.thStyle }}>RMA--> shahrir :09120643083</td>
    <td style={{ ...styles.thTdStyle, ...styles.thStyle }}>RMA--> shahrir :09120643083</td>
  
    </tr>
    <tr>
    <td style={{ ...styles.thTdStyle, ...styles.thStyle }}>RMA--> shahrir :09120643083</td>
    <td style={{ ...styles.thTdStyle, ...styles.thStyle }}>RMA--> shahrir :09120643083</td>
      
    </tr>
    
  </tbody>
</table>
<table className="tableStyle custom-background" style={{ ...styles.tableStyle, backgroundColor: '#0b47a0' }}>

      <thead>
    <tr>
      <th style={{ ...styles.thTdStyle, ...styles.thStyle }}>Region</th>
      <th style={{ ...styles.thTdStyle, ...styles.thStyle }}>NTN RM&RMA</th>
      <th style={{ ...styles.thTdStyle, ...styles.thStyle }}>Huawei RM&RMA</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <td  rowSpan="8" style={{ ...styles.thTdStyle, ...styles.thStyle }}>
        <h2 style={{ margin: 0, lineHeight: '3' }}>R5</h2>
      </td>
      </tr>
      <tr>
      <td style={{ ...styles.thTdStyle, ...styles.thStyle }}>RM--> shahrir :09120643083</td>
      <td style={{ ...styles.thTdStyle, ...styles.thStyle }}>RM--> shahrir :09120643083</td>
    
    </tr >
    <tr>
    <td style={{ ...styles.thTdStyle, ...styles.thStyle }}>RMA--> shahrir :09120643083</td>
    <td style={{ ...styles.thTdStyle, ...styles.thStyle }}>RMA--> shahrir :09120643083</td>
  
    </tr>
    <tr>
    <td style={{ ...styles.thTdStyle, ...styles.thStyle }}>RMA--> shahrir :09120643083</td>
    <td style={{ ...styles.thTdStyle, ...styles.thStyle }}>RMA--> shahrir :09120643083</td>
      
    </tr>
    
  </tbody>
</table>
<table className="tableStyle custom-background" style={{ ...styles.tableStyle, backgroundColor: '#580ba0' }}>

      <thead>
    <tr>
      <th style={{ ...styles.thTdStyle, ...styles.thStyle }}>Region</th>
      <th style={{ ...styles.thTdStyle, ...styles.thStyle }}>NTN RM&RMA</th>
      <th style={{ ...styles.thTdStyle, ...styles.thStyle }}>Huawei RM&RMA</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <td  rowSpan="8" style={{ ...styles.thTdStyle, ...styles.thStyle }}>
        <h2 style={{ margin: 0, lineHeight: '3' }}>R6</h2>
      </td>
      </tr>
      <tr>
      <td style={{ ...styles.thTdStyle, ...styles.thStyle }}>RM--> shahrir :09120643083</td>
      <td style={{ ...styles.thTdStyle, ...styles.thStyle }}>RM--> shahrir :09120643083</td>
    
    </tr >
    <tr>
    <td style={{ ...styles.thTdStyle, ...styles.thStyle }}>RMA--> shahrir :09120643083</td>
    <td style={{ ...styles.thTdStyle, ...styles.thStyle }}>RMA--> shahrir :09120643083</td>
  
    </tr>
    <tr>
    <td style={{ ...styles.thTdStyle, ...styles.thStyle }}>RMA--> shahrir :09120643083</td>
    <td style={{ ...styles.thTdStyle, ...styles.thStyle }}>RMA--> shahrir :09120643083</td>
      
    </tr>
    
  </tbody>
</table>
<table className="tableStyle custom-background" style={{ ...styles.tableStyle, backgroundColor: '#000000' }}>

      <thead>
    <tr>
      <th style={{ ...styles.thTdStyle, ...styles.thStyle }}>Region</th>
      <th style={{ ...styles.thTdStyle, ...styles.thStyle }}>NTN RM&RMA</th>
      <th style={{ ...styles.thTdStyle, ...styles.thStyle }}>Huawei RM&RMA</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <td  rowSpan="8" style={{ ...styles.thTdStyle, ...styles.thStyle }}>
        <h2 style={{ margin: 0, lineHeight: '3' }}>R7</h2>
      </td>
      </tr>
      <tr>
      <td style={{ ...styles.thTdStyle, ...styles.thStyle }}>RM--> shahrir :09120643083</td>
      <td style={{ ...styles.thTdStyle, ...styles.thStyle }}>RM--> shahrir :09120643083</td>
    
    </tr >
    <tr>
    <td style={{ ...styles.thTdStyle, ...styles.thStyle }}>RMA--> shahrir :09120643083</td>
    <td style={{ ...styles.thTdStyle, ...styles.thStyle }}>RMA--> shahrir :09120643083</td>
  
    </tr>
    <tr>
    <td style={{ ...styles.thTdStyle, ...styles.thStyle }}>RMA--> shahrir :09120643083</td>
    <td style={{ ...styles.thTdStyle, ...styles.thStyle }}>RMA--> shahrir :09120643083</td>
      
    </tr>
    
  </tbody>
</table>
<table className="tableStyle custom-background" style={{ ...styles.tableStyle, backgroundColor: '#a00b93' }}>

      <thead>
    <tr>
      <th style={{ ...styles.thTdStyle, ...styles.thStyle }}>Region</th>
      <th style={{ ...styles.thTdStyle, ...styles.thStyle }}>NTN RM&RMA</th>
      <th style={{ ...styles.thTdStyle, ...styles.thStyle }}>Huawei RM&RMA</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <td  rowSpan="8" style={{ ...styles.thTdStyle, ...styles.thStyle }}>
        <h2 style={{ margin: 0, lineHeight: '3' }}>R8</h2>
      </td>
      </tr>
      <tr>
      <td style={{ ...styles.thTdStyle, ...styles.thStyle }}>RM--> shahrir :09120643083</td>
      <td style={{ ...styles.thTdStyle, ...styles.thStyle }}>RM--> shahrir :09120643083</td>
    
    </tr >
    <tr>
    <td style={{ ...styles.thTdStyle, ...styles.thStyle }}>RMA--> shahrir :09120643083</td>
    <td style={{ ...styles.thTdStyle, ...styles.thStyle }}>RMA--> shahrir :09120643083</td>
  
    </tr>
    <tr>
    <td style={{ ...styles.thTdStyle, ...styles.thStyle }}>RMA--> shahrir :09120643083</td>
    <td style={{ ...styles.thTdStyle, ...styles.thStyle }}>RMA--> shahrir :09120643083</td>
      
    </tr>
    
  </tbody>
</table>
<table className="tableStyle custom-background" style={{ ...styles.tableStyle, backgroundColor: '#0ba067' }}>

      <thead>
    <tr>
      <th style={{ ...styles.thTdStyle, ...styles.thStyle }}>Region</th>
      <th style={{ ...styles.thTdStyle, ...styles.thStyle }}>NTN RM&RMA</th>
      <th style={{ ...styles.thTdStyle, ...styles.thStyle }}>Huawei RM&RMA</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <td  rowSpan="8" style={{ ...styles.thTdStyle, ...styles.thStyle }}>
        <h2 style={{ margin: 0, lineHeight: '3' }}>R9</h2>
      </td>
      </tr>
      <tr>
      <td style={{ ...styles.thTdStyle, ...styles.thStyle }}>RM--> shahrir :09120643083</td>
      <td style={{ ...styles.thTdStyle, ...styles.thStyle }}>RM--> shahrir :09120643083</td>
    
    </tr >
    <tr>
    <td style={{ ...styles.thTdStyle, ...styles.thStyle }}>RMA--> shahrir :09120643083</td>
    <td style={{ ...styles.thTdStyle, ...styles.thStyle }}>RMA--> shahrir :09120643083</td>
  
    </tr>
    <tr>
    <td style={{ ...styles.thTdStyle, ...styles.thStyle }}>RMA--> shahrir :09120643083</td>
    <td style={{ ...styles.thTdStyle, ...styles.thStyle }}>RMA--> shahrir :09120643083</td>
      
    </tr>
    
  </tbody>
</table>
<table className="tableStyle custom-background" style={{ ...styles.tableStyle, backgroundColor: '#a03a0b' }}>

      <thead>
    <tr>
      <th style={{ ...styles.thTdStyle, ...styles.thStyle }}>Region</th>
      <th style={{ ...styles.thTdStyle, ...styles.thStyle }}>NTN RM&RMA</th>
      <th style={{ ...styles.thTdStyle, ...styles.thStyle }}>Huawei RM&RMA</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <td  rowSpan="8" style={{ ...styles.thTdStyle, ...styles.thStyle }}>
        <h2 style={{ margin: 0, lineHeight: '3' }}>R10</h2>
      </td>
      </tr>
      <tr>
      <td style={{ ...styles.thTdStyle, ...styles.thStyle }}>RM--> shahrir :09120643083</td>
      <td style={{ ...styles.thTdStyle, ...styles.thStyle }}>RM--> shahrir :09120643083</td>
    
    </tr >
    <tr>
    <td style={{ ...styles.thTdStyle, ...styles.thStyle }}>RMA--> shahrir :09120643083</td>
    <td style={{ ...styles.thTdStyle, ...styles.thStyle }}>RMA--> shahrir :09120643083</td>
  
    </tr>
    <tr>
    <td style={{ ...styles.thTdStyle, ...styles.thStyle }}>RMA--> shahrir :09120643083</td>
    <td style={{ ...styles.thTdStyle, ...styles.thStyle }}>RMA--> shahrir :09120643083</td>
      
    </tr>
    
  </tbody>
</table>

<br /><br /><br />
</div>
   

  

    
    
    
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={handleClose1}>
      Close
    </Button>
  </Modal.Footer>
</Modal>


<Modal
        show={showModal1}
        onHide={handleClose1}
        centered
        size='xl'
        scrollable
       
      >
        <Modal.Header closeButton>
          <Modal.Title><h2>List of back office mobile numbers</h2></Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ maxHeight: '70vh', overflowY: 'auto'}}>
    
    <div className=" customTable"  style={{ Width: 'auto' }}>
     
    
      <table  className="tableStyle custom-background" style={{ ...styles.tableStyle1, backgroundColor: '#ffffff' }}>
      <thead>
    <tr>
    <th style={{ ...styles.thTdStyle1, ...styles.thStyle1 }}>ON CALL</th>
      <th style={{ ...styles.thTdStyle1, ...styles.thStyle1 }}>NAME</th>
      <th style={{ ...styles.thTdStyle1, ...styles.thStyle1 }}>PHONE NUMBER</th>
      
    </tr>
  </thead>
  <tbody>
    
   
  
      <tr>
      <td style={{ ...styles.thTdStyle1, ...styles.thStyle1 }}></td>
      <td style={{ ...styles.thTdStyle1, ...styles.thStyle1 }}>shaqayeq nematepour</td>
      <td style={{ ...styles.thTdStyle1, ...styles.thStyle1 }}> 09120643083</td>
    
    </tr >
   
    <tr>
      <td style={{ ...styles.thTdStyle1, ...styles.thStyle1 }}></td>
      <td style={{ ...styles.thTdStyle1, ...styles.thStyle1 }}>shaqayeq nematepour</td>
      <td style={{ ...styles.thTdStyle1, ...styles.thStyle1 }}> 09120643083</td>
    
    </tr >
    
    <tr>
      <td style={{ ...styles.thTdStyle1, ...styles.thStyle1 }}></td>
      <td style={{ ...styles.thTdStyle1, ...styles.thStyle1 }}>shsaqadfhyeq nematepour</td>
      <td style={{ ...styles.thTdStyle1, ...styles.thStyle1 }}> 09120643083</td>
    
    </tr >
    
    <tr>
      <td style={{ ...styles.thTdStyle1, ...styles.thStyle1 }}> <FaCheck style={{ fontSize: '24px', color: 'green' }} /></td>
      <td style={{ ...styles.thTdStyle1, ...styles.thStyle1 }}>shaqayeq nematepour</td>
      <td style={{ ...styles.thTdStyle1, ...styles.thStyle1 }}> 09120643083</td>
    
    </tr >
    
    <tr>
      <td style={{ ...styles.thTdStyle1, ...styles.thStyle1 }}></td>
      <td style={{ ...styles.thTdStyle1, ...styles.thStyle1 }}>dtghdsghsf nematepour</td>
      <td style={{ ...styles.thTdStyle1, ...styles.thStyle1 }}> 09120643083</td>
    
    </tr >
    
    <tr>
      <td style={{ ...styles.thTdStyle1, ...styles.thStyle1 }}></td>
      <td style={{ ...styles.thTdStyle1, ...styles.thStyle1 }}>shaqasdfhdfhyeq nematepour</td>
      <td style={{ ...styles.thTdStyle1, ...styles.thStyle1 }}> 09120643083</td>
    
    </tr >
    
    <tr>
      <td style={{ ...styles.thTdStyle1, ...styles.thStyle1 }}></td>
      <td style={{ ...styles.thTdStyle1, ...styles.thStyle1 }}>shsdfhsdaqayeq nematepour</td>
      <td style={{ ...styles.thTdStyle1, ...styles.thStyle1 }}> 09120643083</td>
    
    </tr >

    
  </tbody>
</table>




  

    
</div>
    
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={handleClose1}>
      Close
    </Button>
  </Modal.Footer>
</Modal>



      <Helmet>
        <title>SVMS</title>
      </Helmet>
      <div style={{ maxHeight: '90%', maxWidth: "98%" }} className="container">
        <header className="header--style-1">
          <div className="navbar-container">
            <div className="container">
              <div dir="rtl" className="primary-nav d-flex justify-content-between">
                <Navbar className="custom-navbar" expand="lg" variant="dark">
                  <Navbar.Brand className="custom-button" href="/"><BsHouseDoor /> Home</Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                  </Navbar.Toggle>
                  <Navbar.Collapse style={{ backgroundColor: '#ffffff' }} id="basic-navbar-nav">
                    <Nav className="ah-list ml-auto">
                      <Nav.Link 
                        className="custom-button" 
                        onClick={handleTodayCrClick} 
                      >
                        <FaCalendarDay href='/00' style={{ marginRight: '5px' }} />
                        Today's CR
                      </Nav.Link>
                      
                      <Nav.Link className="custom-button" href="/"><BsBox /> All CR</Nav.Link>
                      <Nav.Link href="/manual" className="custom-button">
                          <FaPlus style={{ marginRight: '2px' }} /> Add CR
                      </Nav.Link>
                      <Nav.Link className="custom-button" onClick={handleShow}>
                        <FiPhone /> RM & RMA
                      </Nav.Link>

                      <Nav.Link className="custom-button" onClick={handleShow1}>
                        <FiPhone /> back office
                      </Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </Navbar>
              </div>
            </div>
          </div>
        </header>
       
        {/* محتوای CR */}
        {showCrList && (
          <div className="cr-list-container " style={{ maxHeight: 'none', overflow: 'visible' }}>
          
      

        

            <div style={styles.rejenCountContainer} className="container  mt-3">
           
  <button 
    onClick={exportToExcel} 
    title={`Export to Excel for ${totalCrCount} CRS`} 
    style={{ 
      padding: '10px 20px', 
      backgroundColor: '#ffffff', 
      color: '#000000', 
      borderRadius: '5px', 
      display: 'flex', 
      alignItems: 'center', 
      border: '1px solid #ddd', 
      cursor: 'pointer',
      marginRight: '10px',
     
    }}
  >
    <HiOutlineUpload 
      style={{ marginRight: '5px' }} 
      aria-label="Upload file" 
    />
    
   
  </button>

 
    <h2 style={{ color: '#000000', margin: 0 }}>Total CR: {totalCrCount}</h2>
 

  <input 
    type="file" 
    id="fileInput" 
    accept=".xlsx, .xls" 
    onChange={handleFileUpload} 
    style={{ display: 'none' }} 
  />
  <button 
    className="upload-button" 
    onClick={() => document.getElementById('fileInput').click()}
    title={`Upload manual CRS`} 
    style={{ 
      padding: '10px 20px', 
      backgroundColor: '#ffffff', 
      color: '#000000', 
      borderRadius: '5px', 
      display: 'flex', 
      alignItems: 'center', 
      border: '1px solid #ddd', 
      cursor: 'pointer',
      marginLeft: '10px' 
    }}
  >
    <HiOutlineDownload 
      style={{ marginRight: '5px' }} 
      aria-label="Export to Excel" 
    />
 
  </button>
</div>



           
            <div style={styles.rejenCountContainer}>
            <div style={styles.rejenListContainer}>
  <div 
    key="all" 
    style={{
      ...styles.rejenCountItem, 
      backgroundColor: selectedRejen === null ? '#000' : '#f7f7f7', 
      color: selectedRejen === null ? '#fff' : '#000', 
      borderRadius: '20px',
    }}
    onClick={() => setSelectedRejen(null)} 
  >
    <span><strong>All </strong></span>
  </div>

  {['R1', 'R2', 'R3', 'R4', 'R5', 'R6', 'R7', 'R8', 'R9', 'R10']
    .filter(Region => crByRejen[Region])
    .map(Region      => (
      <div 
        key={Region} 
        style={{
          ...styles.rejenCountItem, 
          backgroundColor: selectedRejen === Region ? '#000' : '#f7f7f7', 
          color: selectedRejen === Region ? '#fff' : '#000', 
          borderRadius: '20px',
        }}
        onClick={() => setSelectedRejen(Region)} 
      >
        <span><strong>{Region}:</strong> {crByRejen[Region]}</span>
      </div>
    ))}
</div>
</div>


    {crData
    .filter(cr => !selectedRejen || cr.Region === selectedRejen).map((cr, index) => {

  const crStatusBackgroundColor = cr.crStatus === 'Running' ? '#15ff00' : 
                                   cr.crStatus === 'CLOSE' ? '#ff0000' : 
                                   '#ffffff'; 


  const isAffectBackgroundColor = cr.isAffect === 'YES' ? '#15ff00' : 
                                   cr.isAffect === 'NO' ? '#ff0000' : 
                                   '#ffffff'; 

  return (
    <div key={index} className="cr-item" style={styles.crItem}>
      <h4><strong>Create by:</strong> {cr.create_by}</h4> {cr.manual === 'TRUE' && <h4><strong>CR is manual</strong></h4>}
      <h2 style={{ textAlign: 'center', color: '#000000', marginBottom: '10px' }}>CR Details</h2><br /><br />
      <div style={styles.crDetailRow}>
            <h4 style={styles.crDetailText}><strong>Region:</strong> {cr.Region}</h4><br /><br />
          
          </div>
      <div style={styles.crDetails}>
        <div style={styles.crDetailColumn}>
          <div style={styles.crDetailRow}>
            <h4 style={styles.crDetailText}><strong>CR ID:</strong> {cr.CR_ID}</h4>
            <button onClick={() => copyToClipboard(cr.CR_ID)} style={styles.copyButton}>{copied ? "Copied" : "Copy"}</button><br /><br />
          </div>
          <div style={styles.crDetailRow}>
            <h4 style={styles.crDetailText}><strong>Time Create:</strong> {cr.Planned_Start_Time}</h4><br /><br />
          </div>
          <div style={styles.crDetailRow}>
            <h4 style={styles.crDetailText}><strong>Change Type :</strong> {cr.change_type}</h4><br /><br />
          </div>
          <div style={styles.crDetailRow}>
            <h4 style={styles.crDetailText}><strong>Vendor:</strong> {cr.vendor}</h4>
            <button onClick={() => copyToClipboard(cr.vendor)} style={styles.copyButton}>{copied ? "Copied" : "Copy"}</button><br /><br />
          </div>
          <div style={styles.crDetailRow}>
            <h4 style={styles.crDetailText}><strong>Status:</strong> {cr.status}</h4><br /><br />
          </div>
          <div style={styles.crDetailRow}>
            <h4 style={styles.crDetailText}><strong>Start Time:</strong> {cr.Outage_Start_Time}</h4><br /><br />
          </div>
          <div style={styles.crDetailRow}>
            <h4 style={{ ...styles.crDetailText, backgroundColor: isAffectBackgroundColor }}><strong>Is Affect:</strong> {cr.isAffect}</h4><br /><br />
          </div>
        </div>
        <div style={styles.crDetailColumn}>
          <div style={styles.crDetailRow}>
            <h4 style={styles.crDetailText}><strong>CR Title:</strong> {cr.Title}</h4>
            <button onClick={() => copyToClipboard(cr.Title)} style={styles.copyButton}>{copied ? "Copied" : "Copy"}</button><br /><br />
          </div>
          
          <div style={styles.crDetailRow}>
            <h4 style={styles.crDetailText}><strong>Product :</strong> {cr.product}</h4><br /><br />
          </div>
          
          <div style={styles.crDetailRow}>
            <h4 style={styles.crDetailText}><strong>CR Info Subject:</strong></h4>
            <div style={styles.scrollableBox}>
              <p>{cr.Site_ID}</p>
            </div>
            <button 
        onClick={() => copyToClipboard(cr.Site_ID)} 
        style={styles.copyButton}>
        {copied ? "Copied" : "Copy"} 
      </button>
      <br /><br />
          </div>
          <div style={styles.crDetailRow}>
            <h4 style={styles.crDetailText}><strong>Time Affect:</strong> {cr.timeAffect}</h4><br /><br />
          </div>
          <div style={styles.crDetailRow}>
            <h4 style={styles.crDetailText}><strong>Implementer:</strong> {cr.Implementer}</h4><br /><br />
          </div>
          <div style={styles.crDetailRow}>
            <h4 style={styles.crDetailText}><strong>End Time:</strong> {cr.Outage_End_Time}</h4><br /><br />
          </div>
          
          <div style={styles.crDetailRow}>
            <h4 style={{ ...styles.crDetailText, backgroundColor: crStatusBackgroundColor }}><strong>CR Status:</strong> {cr.crStatus}</h4><br /><br />
          </div>
        </div>
      </div>
    </div>
  );
})}


  </div>
)}

        <footer style={{ margin: "center", backgroundColor: '#ffffff' }}>
          <div id="call" style={{ margin: "center" }} className="text-center outer-footer">
            <h1 style={{ color: "#000000" }}>SVMS NOC </h1>
          </div>
        </footer>
      </div>
    </main>
  );
};

const styles = {
  crItem: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '10px',
    margin: '10px auto',
    backgroundColor: '#ffffff',
    width: '50%', 
    color: '#000000',
  },
  crDetails: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  crDetailColumn: {
    flex: '1 1 45%', 
    margin: '0 10px',
  },
  crDetailRow: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
  },
  crDetailText: {
    margin: 0,
    paddingRight: '10px',
    
  },
  copyButton: {
    border: '1px solid #ddd',
    borderRadius: '4px',
    backgroundColor: '#f0f0f0',
    padding: '5px 10px',
    cursor: 'pointer',
    fontSize: '12px',
  },
  scrollableBox: {
    border: '1px solid #ccc',
    borderRadius: '4px',
    padding: '5px',
    width: '100%',
    maxHeight: '1cm',
    overflowY: 'auto',
    wordBreak: 'break-all',
    width:'160px' 
  },
  rejenCountContainer: {
    display: 'flex',
    justifyContent: 'center', 
    backgroundColor: '#f7f7f7',
    padding: '10px',
    marginBottom: '20px',
    borderRadius: '5px',
    width: '50%',
    margin: '0 auto', 
  },
  rejenListContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
 
  rejenCountItem: {
    fontSize: '16px',
    color: '#000',
    margin: '0 10px',
    cursor: 'pointer',
    padding: '10px 20px', 
    borderRadius: '20px', 
    backgroundColor: '#f7f7f7',
    transition: 'background-color 0.3s ease', 
  },
  customTable: {
    fontSize: '16px',
    color: '#000',
    margin: '0 10px',
    cursor: 'pointer',
    padding: '10px 20px',
    borderRadius: '20px',
   
    transition: 'background-color 0.3s ease',
  },
  tableStyle:{
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '10px',
    margin: '10px auto',
 
    width: '100%',
    color: '#000000',
    borderCollapse: 'collapse'
  },
  thTdStyle:{
    border: '1px solid #ddd',
    padding: '10px',
    textAlign: 'center'
  },

  thStyle : {

   
    color: '#ffffff'
  },

  customTable1: {
    fontSize: '16px',
    color: '#000',
    margin: '0 10px',
    cursor: 'pointer',
    padding: '10px 20px',
    borderRadius: '20px',
   
    transition: 'background-color 0.3s ease',
  },

  tableStyle1:{
    border: '1px solid #000000',
    borderRadius: '8px',
    padding: '10px',
    margin: '10px auto',
 
    width: '100%',
    color: '#000000',
    borderCollapse: 'collapse'
  },
  thTdStyle1:{
    border: '1px solid #000000',
    padding: '10px',
    textAlign: 'center'
  },
  thStyle1 : {

   
    color: '#000000'
  }
};





export default First;
