"use client";
import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-left'>
      <div className='text-center p-3 mt-9' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Copyright:{'  Diana Zawislak   '}</div>

        <div className='pl-4'>
        <a className='text-dark' href='https://www.linkedin.com/in/dianazawislak1980/'>
          Let's Connect 
        </a>
      </div>
    </MDBFooter>
  );
}