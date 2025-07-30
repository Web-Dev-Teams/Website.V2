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
              <a href="">Computer Basics</a>
              <hr />
              <a href="">History of Computer</a>
            </li>
            <hr /> <hr />
            <li>
              <h4>Internet Basics and Responsible Usage:</h4>
              <a href="">Internet usage</a>
            </li>
            <hr /> <hr />
            <li>
              <h4>CyberSecurity:</h4>
              <a href="">CyberSecurity</a>
              <hr />
              <a href="">Detect Scam Messages</a>
            </li>
            <hr /> <hr />
            <li>
              <h4>MS Word:</h4>
              <a href="">MS Word</a>
              <hr />
              <a href="">MS Word+Google Docs</a>
            </li>
            <hr /> <hr />
            <li>
              <h4>MS Excel:</h4>
              <a href="">MS Excel</a>
            </li>
            <hr /> <hr />
            <li>
              <h4>MS Paint:</h4>
              <a href="">MS Paint</a>
            </li>
            <hr /><hr />
            <li>
              <h4>Canva:</h4>
              <a href="">Canva</a>
            </li>
            <hr /> <hr />
            <li>
              <h4>Financial & Business Literacy:</h4>
              <a href="">What is Financial Literacy</a>
            </li>
            <hr /> <hr />
           </ul>

        </div>

      </div>
      <Footer />
    </div>
  );
};
