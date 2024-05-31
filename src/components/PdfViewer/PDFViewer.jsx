import React, { useEffect, useState } from 'react';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.entry";
import './PDFViewer.css'
const PDFViewer = () => {
    useEffect(() => {
        pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;
    }, []);

    const [isVisibleDoc, setIsVisibleDoc] = useState(true);


    const handleAgree = async () => {
        await localStorage.setItem('hasAgreed', true);
        setIsVisibleDoc(false);
    };

    const handleDocVisible = async () => {
        const isConfirmed = await localStorage.getItem('hasAgreed');
        console.log("Confirmed", isConfirmed)
        setIsVisibleDoc(isConfirmed);
    }

    useEffect(()=>{
        handleDocVisible()
    })
    return (
        <>
            {isVisibleDoc && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        zIndex: 9999,
                    }}
                >
                    <div className='doc'>
                        <div className='pdfDoc'>
                            <Document
                                file="pdf/agreec.pdf"
                                inputProps={{ style: { color: 'white' } }}
                            >
                                <Page pageNumber={1} />
                            </Document>
                        </div>
                        <button
                            onClick={handleAgree}
                            hidden={false}
                            className='agr_btn'
                        >
                            Я ознакомлен
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default PDFViewer;
