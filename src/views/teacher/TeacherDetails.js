import React from 'react'
import { CBadge, CCard, CCardBody, CCardImage, CCardText, CCardTitle, CContainer, CImage } from '@coreui/react'
import { cilFullscreen } from '@coreui/icons'

const TeacherDetails = () => {
  return (
    <>
      <CContainer lg>
        <CCard className='p-4'>
          <CCardBody style={{ boxShadow: 'none' }} className='p-0 m-2'>
            <CImage style={{width: '100%', height: '170px', background: '#0000ff7d'}} fluid  />
            <CImage style={{position: 'relative' , margin: '-100px 0 0 40px'}} rounded  src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" width={200} height={200} />
            <CCardTitle>Shakil Hossen</CCardTitle>
          </CCardBody>
          <CCardBody style={{ boxShadow: 'none' }} className='m-2'>
            <CCardTitle>Skills</CCardTitle>
            <CCardText>
              <CBadge color="secondary">English</CBadge>
              <CBadge color="secondary">Programing</CBadge>
            </CCardText>
          </CCardBody>
          <CCardBody style={{ boxShadow: 'none' }} className='m-2'>
            Skills
          </CCardBody>
          <CCardBody style={{ boxShadow: 'none' }} className='m-2'>
            Skills
          </CCardBody>
        </CCard>
      </CContainer>
    </>
  )
}

export default TeacherDetails