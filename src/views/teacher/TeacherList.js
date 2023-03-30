import { CAvatar, CBadge, CButton, CCard, CCardBody, CImage, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from '@coreui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const TeacherList = () => {
  return (
    <>
      <CCard style={{ marginTop: '50px', marginBottom: '30px', border: '1px solid #fff' }}>
        <CCardBody style={{ boxShadow: '-4px 4px 13px 4px #00000017'}}>
          <h4 style={{ padding: '10px 0' }}>Teacher List</h4>
          <CTable>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell width='100px' scope="col">Avater</CTableHeaderCell>
                <CTableHeaderCell scope="col">Name</CTableHeaderCell>
                <CTableHeaderCell scope="col">Course</CTableHeaderCell>
                <CTableHeaderCell style={{textAlign: 'right', paddingRight: '20px'}} scope="col">Action</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {
                [1, 2, 3].map(() => (
                  <CTableRow>
                    <CTableDataCell>
                      <CAvatar className='my-1' src='https://th.bing.com/th/id/OIP.STdrVT87X1tnQJWSdE5VeQHaHa?pid=ImgDet&rs=1' />
                    </CTableDataCell>
                    <CTableDataCell style={{textAlign: 'left'}}>
                      <CTableHeaderCell>Jon Abraham</CTableHeaderCell>
                      <div style={{fontSize: '.8rem'}}>MSC</div>
                    </CTableDataCell>
                    <CTableDataCell>
                      English
                    </CTableDataCell>
                    <CTableDataCell style={{textAlign: 'right'}}>
                      <CButton component={Link} to='/teacherdetails' style={{borderRadius: 0}} color='dark' className="text-left text-white">Details</CButton>
                    </CTableDataCell>
                  </CTableRow>
                ))
              }
            </CTableBody>
          </CTable>
        </CCardBody>
      </CCard>
    </>
  )
}

export default TeacherList