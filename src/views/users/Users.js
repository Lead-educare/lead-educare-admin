import React from 'react';
import { AiFillDelete,AiFillEdit } from "react-icons/ai";
const users=[
  {
    name:"sohan",
    role:'admin',
    gems:12
  },
  {
    name:"shakil",
    role:'student',
    gems:15
  },
  {
    name:"dip",
    role:'student',
    gems:12
  },
  {
    name:"afnan",
    role:'teacher',
    gems:14
  },
  {
    name:"jony",
    role:'admin',
    gems:12
  },
  {
    name:"alamgir",
    role:'student',
    gems:12
  },
  {
    name:"parvej",
    role:'admin',
    gems:12
  },
]
const Users = () => {
  return (
    <div>
      <div>
        <table className="table">
          <thead style={{backgroundColor:'#dfe6e9'}} >
          <tr>
            <th className={'text-center'} scope="col">id</th>
            <th className={'text-center'} scope="col">Name</th>
            <th className={'text-center'} scope="col">Role</th>
            <th className={'text-center'} scope="col">Gems</th>
            <th className={'text-center'} scope="col">Action</th>
          </tr>
          </thead>
          <tbody>

          {
            users.map((user,key) => {
              return <tr className={'my-2'}>
                <td className={'text-center'}>{key + 1}</td>
                <td className={'text-center'}>{user.name}</td>
                <td className={'text-center'} style={{color:`${ user.role === 'admin' ? '#6c5ce7':"" || user.role === 'student' ? '#0984e3':"" || user.role === 'teacher' ? '#00cec9':"" }`}}>{user.role}</td>
                <td className={'text-center'}>{user.gems}</td>
                <td className={'d-flex justify-content-center '}>
                  <button className={'btn btn-secondary me-2'}> <AiFillEdit/> </button>
                  <button className={'btn btn-danger'}><AiFillDelete/></button>
                </td>
              </tr>
            })
          }

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
