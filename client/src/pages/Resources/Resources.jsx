import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './Resources.css';
import { FileText } from 'lucide-react';


export const Resources = () => {
  return (
    <div>
      <Header/>
      <div className='box-1'>
        <div>
          <h1>Academic Documents</h1>
        </div>

        <div className='pdf-container'>
          <div className="pdf-card">
             <FileText/>
            <a href="/pdfs/sample1.pdf" target="_blank" rel="noopener noreferrer">
           
              Sample PDF 1
            </a>
          </div>
          <div className="pdf-card">
               <FileText/>
            <a href="/pdfs/sample2.pdf" target="_blank" rel="noopener noreferrer">
              Sample PDF 2
            </a>
          </div>
          <div className="pdf-card">
               <FileText/>
            <a href="/pdfs/sample3.pdf" target="_blank" rel="noopener noreferrer">
              Sample PDF 3
            </a>
          </div>
        </div>
        <div className='pdf-container2'>
           <h2 >Syllabus 2025-2026 for all classes</h2>
           <ul>
            <li>
              <h4>Basics of computer:</h4>
              <a href="https://drive.google.com/file/d/1VfLBAWqA6Bu4ENsVgOqN4L7F3NmfzOzi/view?usp=sharing " target='_blank'>Computer Basics</a>
              <hr />
              <a href="https://drive.google.com/file/d/1YjN7bQZtPuvXWSdhID-_M2hPNXzRYV6Q/view?usp=drive_link " target='_blank'>History of Computer</a>
            </li>
            <hr /> <hr />
            <li>
              <h4>Internet Basics and Responsible Usage:</h4>
              <a href="https://drive.google.com/file/d/1mQ-KwpSucf9wKjfrvXug7h064Cv0BvdQ/view?usp=drive_link " target='_blank'>Internet usage</a>
            </li>
            <hr /> <hr />
            <li>
              <h4>CyberSecurity:</h4>
              <a href="https://drive.google.com/file/d/1E0F8WfQsRapMFiiZ7FcMNsD6B79dOQ-l/view?usp=drive_link " target="_blank">CyberSecurity</a>
            </li>
            <hr /> <hr />
            <li>
              <h4>MS Word:</h4>
              <a href="https://drive.google.com/file/d/1KiOg43ctCVxrn46y11cAbGka69kF_9St/view?usp=drive_link  " target='_blank'>MS Word</a>
            </li>
            <hr /> <hr />
            <li>
              <h4>MS Excel:</h4>
              <a href="https://drive.google.com/file/d/116pcOXGP6YUtIQjfRs-Fc11KSe1o0S8-/view?usp=drive_link " target="_blank">MS Excel</a>
            </li>
            <hr /> <hr />
            <li>
              <h4>MS Paint:</h4>
              <a href="https://drive.google.com/file/d/1IA_2EpsbgDEyom8x3VMwEqjeOJ9PHH42/view?usp=drive_link " target='_blank'>MS Paint</a>
            </li>
            <hr /><hr />
            <li>
              <h4>Canva:</h4>
              <a href="https://drive.google.com/file/d/1ZCcZ54vCtM9hxFxUUSS_gu3jLMsIXtST/view?usp=drive_link " target='_blank'>Canva</a>
            </li>
            <hr /> <hr />
            <li>
              <h4>Financial & Business Literacy:</h4>
              <a href="https://drive.google.com/file/d/1N1m-lMJbbvxN-EKbaTOc-bgIIz7rptbJ/view?usp=sharing "  target='_blank'>What is Financial Literacy</a>
            </li>
            <hr /> <hr />
           </ul>

        </div>

      </div>
      <Footer />
    </div>
  );
};
