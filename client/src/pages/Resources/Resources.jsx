import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './Resources.css';
import { FileText } from 'lucide-react';
export const Resources = () => {
  return (
    <>
      <Header />
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
      </div>
      <Footer />
    </>
  );
};
