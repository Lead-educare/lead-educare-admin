import React from 'react';
import {
  CBadge,
  CButton,
  CFormInput,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow
} from "@coreui/react";
import {FiEdit} from "react-icons/fi";
import {RiDeleteBin5Fill} from "react-icons/ri";
const users=[
  {
    name:"sohan",
    email:"sohan@gmail.com",
    role:'admin',
    gems:12
  },
  {
    name:"shakil",
    email:"shakil@gmail.com",
    role:'student',
    gems:15
  },
  {
    name:"dip",
    email:"dip@gmail.com",
    role:'student',
    gems:12
  },
  {
    name:"afnan",
    email:"sohan@gmail.com",
    role:'teacher',
    gems:14
  },
  {
    name:"jony",
    email:"sohan@gmail.com",
    role:'admin',
    gems:12
  },
  {
    name:"alamgir",
    email:"sohan@gmail.com",
    role:'student',
    gems:12
  },
  {
    name:"parvej",
    email:"sohan@gmail.com",
    role:'admin',
    gems:12
  },
]
const Users = () => {
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
              <CTableRow style={{backgroundColor:'#dfe6e9'}}>
                <CTableHeaderCell className="py-3" scope="col" style={{ fontSize: '14px' }}>
                  Id
                </CTableHeaderCell>
                <CTableHeaderCell className="py-3" scope="col" style={{ fontSize: '14px' }}>
                  Name
                </CTableHeaderCell>
                <CTableHeaderCell className="py-3" scope="col" style={{ fontSize: '14px' }}>
                  Email
                </CTableHeaderCell>
                <CTableHeaderCell className="py-3" scope="col" style={{ fontSize: '14px' }}>
                  Role
                </CTableHeaderCell>
                <CTableHeaderCell className="py-3" scope="col" style={{ fontSize: '14px' }}>
                  Gems
                </CTableHeaderCell>
                <CTableHeaderCell className="py-3 text-center" scope="col" style={{ fontSize: '14px' }}>
                  Action
                </CTableHeaderCell>
              </CTableRow>
            </CTableHead>

            <CTableBody>
              {users.map((user,key)=>{
                return <CTableRow>
                  <CTableDataCell style={{ fontSize: '14px', color: '#8E98AA' }}>{key+1}</CTableDataCell>
                  <CTableDataCell style={{ fontSize: '14px', color: '#57606f' }}> {user.name}</CTableDataCell>
                  <CTableDataCell style={{ fontSize: '14px', color: '#57606f' }}>{user.email}</CTableDataCell>
                  <CTableDataCell style={{ fontSize: '14px', color: '#57606f' }}> <CBadge style={{ backgroundColor:'#34495e'}}>{user.role}</CBadge> </CTableDataCell>
                  <CTableDataCell style={{ fontSize: '14px', color: '#57606f' }}> {user.gems}</CTableDataCell>
                  <CTableDataCell className="d-flex align-items-center  justify-content-center w-full">

                    <CButton
                      // onClick={() => onDelete(blog?.blogID)}
                      className=" border-0 cursor-pointer me-2 delete_btn_hover"
                      style={{ color: '#ecf0f1',backgroundColor:"#20bf6b" }}
                    >
                      <FiEdit />
                    </CButton>
                    <CButton
                      // onClick={() => onDelete(blog?.blogID)}
                      className=" border-0 cursor-pointer delete_btn_hover"
                      style={{ color: '#ecf0f1',backgroundColor:"red" }}
                    >
                      <RiDeleteBin5Fill />
                    </CButton>
                  </CTableDataCell>
                </CTableRow>
              })}

            </CTableBody>
          </CTable>

        </div>
      </div>
    </div>
  );
};

export default Users;
