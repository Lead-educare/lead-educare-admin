import { CButton, CFormInput, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from '@coreui/react';
import React from 'react';
import { FiEdit } from 'react-icons/fi'
import { RiDeleteBin5Fill, RiDeleteBin5Line } from 'react-icons/ri'
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
const AllBlog = () => {
    return (
        <div>
            <div className="card border-0 shadow-sm">
                <div className="card-body">
                    <h6 className="card-title">All Blogs</h6>
                    <div className="my-3 d-flex">
                        <CFormInput
                            placeholder="Search by title"
                            className="w-25"
                        />
                    </div>
                    <CTable>
                        <CTableHead>
                            <CTableRow style={{ backgroundColor: '#dfe6e9' }}>
                                <CTableHeaderCell className="py-3" scope="col" style={{ fontSize: '14px' }}>
                                    Title
                                </CTableHeaderCell>
                                <CTableHeaderCell className="py-3" scope="col" style={{ fontSize: '14px' }}>
                                    Published Date
                                </CTableHeaderCell>
                                <CTableHeaderCell className="py-3 text-center" scope="col" style={{ fontSize: '14px' }}>
                                    Action
                                </CTableHeaderCell>
                            </CTableRow>
                        </CTableHead>
                        <CTableBody>
                            <CTableRow key="1">
                                <CTableDataCell style={{ fontSize: '14px', color: '#8E98AA' }}>Title</CTableDataCell>
                                <CTableDataCell style={{ fontSize: '14px', color: '#8E98AA' }}> 12.01.2022</CTableDataCell>
                                <CTableDataCell className="d-flex align-items-center justify-content-center w-full">
                                    <div
                                    >
                                        <FiEdit className="cursor-pointer mx-3" />
                                    </div>
                                    <CButton
                                        // onClick={() => onDelete(blog?.blogID)}
                                        className="bg-transparent border-0 cursor-pointer delete_btn_hover"
                                        style={{ color: '#8E98AA' }}
                                    >
                                        <RiDeleteBin5Fill />
                                    </CButton>
                                </CTableDataCell>
                            </CTableRow>
                        </CTableBody>
                    </CTable>

                </div>
            </div>
        </div>
    );
};

export default AllBlog;
