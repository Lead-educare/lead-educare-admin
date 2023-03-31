import React from 'react'
import { CBadge, CButton, CCard, CCardBody, CCardImage, CCardText, CCardTitle, CContainer, CImage } from '@coreui/react'
import { cifBd } from '@coreui/icons'
import CIcon from '@coreui/icons-react'

const TeacherDetails = () => {
  return (
    <>
      <CContainer lg>
        <CCard className='p-0'>
          <CCardBody style={{ boxShadow: 'none' }} className='p-0 '>
            <CImage style={{ width: '100%', height: '170px', background: '#0000ff7d' }} fluid />
            <div>
              <CImage width={200} height={200} style={{ position: 'relative', margin: '0 auto', display: 'flex', marginTop: '-100px', borderRadius: '50em' }} src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />
            </div>
            <CCardTitle className='d-flex justify-content-center p-2'>
              <div style={{ display: 'block', textAlign: 'center' }}>
                <h3 className='font-bold'>SHAKIL HOSSAIN</h3>
                <div className='text-dark'>
                  <span className=''>
                    <CIcon icon={cifBd} size="lg" style={{paddingTop: '5px'}} /> 
                  </span>
                  <span style={{ fontSize: '1rem' }} className='text-secondary text-sm'>  Dhaka, Bangladesh</span>
                </div>
                <div className='my-1'>
                  <span>@shakil52 |</span>
                  <span className='mx-2'>

                  </span>
                  <span>Lead Educare English Teacher </span>
                </div>
                <div className='my-1'>
                  <span className='text-secondary text-sm'>Full Time</span>
                </div>
                <div className='my-2 justify-content-center d-flex'>
                  <CButton type="button" className="mx-1 btn btn-light rounded-pill">Message</CButton>
                  <CButton type="button" className="mx-1 btn btn-success rounded-pill text-white">Share ID</CButton>
                </div>
              </div>
            </CCardTitle>
          </CCardBody>
          <CCardBody style={{ boxShadow: 'none' }} className=''>
            <CCardTitle>Skills</CCardTitle>
            <CCardText>
              <CBadge className='mx-1' color="secondary">English</CBadge>
              <CBadge className='mx-1' color="secondary">Programing</CBadge>
            </CCardText>
          </CCardBody>
          <CCardBody style={{ boxShadow: 'none' }} className=''>
            <CCardTitle>Details</CCardTitle>
            <CCardText>
              MD Shakil Hossain
            </CCardText>
          </CCardBody>
          <CCardBody style={{ boxShadow: 'none' }} className=''>
            <CCardTitle>Summary</CCardTitle>
          </CCardBody>
          <CCardBody style={{ boxShadow: '#0b0b0b1a 0px -2px 0px' }} className='d-flex justify-content-end p-4'>
            <CButton type="button" className="mx-1 btn btn-light rounded-pill">Accept Deny</CButton>
            <CButton type="button" className="mx-1 btn btn-success rounded-pill text-white">Approved</CButton>
          </CCardBody>
        </CCard>
      </CContainer>
    </>
  )
}

export default TeacherDetails