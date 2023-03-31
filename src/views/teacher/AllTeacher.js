import { CButton, CFormInput, CPagination, CPaginationItem, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from '@coreui/react';
import React from 'react';
import { FiEdit } from 'react-icons/fi'
import { RiDeleteBin5Fill, RiDeleteBin5Line } from 'react-icons/ri'
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
const AllTeacher = () => {
  return (
    <div>
      <div className="card border-0 shadow-sm">
        <div className="card-body">
          <h6 className="card-title">All Teahcer</h6>
          <div className="my-3 d-flex">
            <CFormInput
              placeholder="Search by Name"
              className="w-25"
            />
          </div>
          <CTable size='small'>
            <CTableHead>
              <CTableRow style={{ backgroundColor: '#dfe6e9' }}>
                <CTableHeaderCell className="py-3" scope="col" style={{ fontSize: '14px' }}>
                  Name
                </CTableHeaderCell>
                <CTableHeaderCell className="py-3" scope="col" style={{ fontSize: '14px' }}>
                  Courses
                </CTableHeaderCell>
                <CTableHeaderCell className="py-3 text-center" scope="col" style={{ fontSize: '14px' }}>
                  Action
                </CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {
                [1, 2, 3].map(() => (
                  <CTableRow key="1">
                    <CTableDataCell style={{ fontSize: '14px', color: '#8E98AA' }}>John Abraham</CTableDataCell>
                    <CTableDataCell style={{ fontSize: '14px', color: '#8E98AA' }}> English </CTableDataCell>
                    <CTableDataCell className="d-flex align-items-center justify-content-center w-full">


                      <CButton
                        // onClick={() => onDelete(blog?.blogID)}
                        className="bg-transparent border-0 cursor-pointer"
                        style={{ color: '#8E98AA' }}
                      >
                        <FiEdit />
                      </CButton>
                      <CButton
                        // onClick={() => onDelete(blog?.blogID)}
                        className="bg-transparent border-0 cursor-pointer"
                        style={{ color: '#8E98AA' }}
                      >
                        <RiDeleteBin5Fill  />
                      </CButton>
                    </CTableDataCell>
                  </CTableRow>
                ))
              }

            </CTableBody>
          </CTable>
          <CPagination align="center" aria-label="Page navigation example">
            <CPaginationItem style={{ cursor: 'pointer' }}>Previous</CPaginationItem>
            <CPaginationItem style={{ cursor: 'pointer' }}>1</CPaginationItem>
            <CPaginationItem style={{ cursor: 'pointer' }}>2</CPaginationItem>
            <CPaginationItem style={{ cursor: 'pointer' }}>3</CPaginationItem>
            <CPaginationItem style={{ cursor: 'pointer' }}>Next</CPaginationItem>
          </CPagination>
        </div>
      </div>
    </div>
  );
};

export default AllTeacher;
