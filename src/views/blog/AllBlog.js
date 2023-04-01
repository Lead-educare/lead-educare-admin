import { CButton, CFormInput, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from '@coreui/react';
import React, { useEffect, useState } from 'react';
import { FiEdit } from 'react-icons/fi'
import { RiDeleteBin5Fill, RiDeleteBin5Line } from 'react-icons/ri'
import { ThreeDots } from 'react-loader-spinner'
import { trackPromise, usePromiseTracker } from 'react-promise-tracker'
const AllBlog = () => {
    const primary_orange = '#F26133'
    const [blogs, setBlogs] = useState([])
    const [blogTitle, setBlogTitle] = useState('')
    const { promiseInProgress } = usePromiseTracker()

    // const loadBlogs = async () => {
    //     const res = await trackPromise(
    //         axiosJWT.get(
    //             `https://student-bazar.herokuapp.com/api/v1/public/blog/blogs?query=${blogTitle ? `${blogTitle}` : ''}`,
    //             {
    //                 headers: {
    //                     Authorization: `${token}`,
    //                 },
    //             },
    //         ),
    //     )
    //     if (res?.data?.status === 200) {
    //         setBlogs(res?.data?.data)
    //         console.log(res?.data?.data)
    //     }
    // }
    // useEffect(() => {

    //     loadBlogs()
    // }, [token, blogTitle])

    const blogEditHandler = (blog) => {
        navigate(`/edit-blog/${blog?.blogID}`, { state: blog })
    }
    return (
        <>
{/*             
                <ThreeDots
                    height="80"
                    width="80"
                    radius="9"
                    color={primary_orange}
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{ justifyContent: 'center', margin: '5rem 0' }}
                    wrapperClassName=""
                    visible={true}
                /> */}
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
                        {promiseInProgress === false ? (
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
                                             style={{ color: '#8E98AA' }}
                                            //   onClick={() => blogEditHandler(blog)}
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
                        ) : (
                            <ThreeDots
                                height="80"
                                width="80"
                                radius="9"
                                color={primary_orange}
                                ariaLabel="three-dots-loading"
                                wrapperStyle={{ justifyContent: 'center', margin: '5rem 0' }}
                                wrapperClassName=""
                                visible={true}
                            />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default AllBlog;
