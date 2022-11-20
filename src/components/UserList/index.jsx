import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../Button/index';
import * as Component from '../index';
import { useSelector, useDispatch } from 'react-redux';
import { loadUsersStart } from '../../bootstraps/actions';

function UserList() {
  const {users} = useSelector((state) => state.data);
  const dispatch = useDispatch();
  


  // Dispatch go to redux state 
  useEffect(()=>{
    dispatch(loadUsersStart())
  }, [])
  console.log(users)


  // DELETE DATA
  const deleteData = (id) => {

    axios.delete('http://localhost:8200/users/' + id)
      .then((ress) => {
        console.log(ress);
      })
      .catch((err) => {
        console.log(err);
      })
  }





  return (
    <div>
      <h1 className='text-4xl mb-10'>User List</h1>
      {/* <div onClick={
        ()=>{
          navigate('/testing')
        }
      }>
        <Button btn="tambah" className='mb-10'/>
      </div> */}

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
                      deleteData(el.id)
                    }}
                  />
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