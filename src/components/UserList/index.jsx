import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../Button/index';
import * as Component from '../index';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUserStart, loadUsersStart } from '../../bootstraps/actions';
import { toast } from 'react-toastify';

function UserList() {
  const {users} = useSelector((state) => state.data);
  const dispatch = useDispatch();
  


  // Dispatch go to redux state 
  useEffect(()=>{
      dispatch(loadUsersStart());
  }, [])

  const handleDelete = (id) => {
    dispatch(deleteUserStart(id))
    setTimeout(()=>{
      toast.warn("BERHASIH HAPUS")
    }, 500)
  }





  return (
    <div>
      <h1 className='text-4xl mb-10'>User List</h1>
      <Component.InputUsers />
      <table className='border-2 h-auto max-w-xl sm:max-w-2xl'>
        <thead>
          <tr className='border-b-2'>
            <th>No</th>
            <th>Nama</th>
            <th>Kehadiran</th>
            <th>Ucapan</th>
            <th>Kondisi</th>
          </tr>
        </thead>
        <tbody>
          {
            users?.map((el,idx)=>{
              return(
              <tr key={el.id} >
                <td className='p-4'>{idx + 1}</td>
                <td className='p-4'>{el.name}</td>
                <td className='p-4'>{el.kehadiran}</td>
                <td className='p-4'>{el.ucapan}</td>
                <td className='p-4 flex'>
                  <Button btn="edit" />
                  <Button 
                    btn="delete"
                    onClick={()=>{
                      // navigate(`/testing/${el.id}`);
                      // deleteData(el.id)
                      handleDelete(el.id);
                    }}
                  />
                  {/* <Component.DeleteModal /> */}
                </td>
              </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default UserList;