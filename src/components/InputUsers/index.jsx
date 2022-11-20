import classNames from 'classnames';
import { useEffect, useState } from 'react'
import * as Component from '../index'
import Select from "react-select";
import MyBtn from '../Button/index';
import { useDispatch, useSelector } from 'react-redux';
import { loadUsersStart, postUserStart } from '../../bootstraps/actions';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const initialState = {
  name: "",
  kehadiran: "",
  ucapan: ""
}

function InputUsers() {
  // Mengambil initial State
  const [dataInput, setDataInput] = useState(initialState);
  const {name, kehadiran, ucapan} = dataInput;
  const dispatch = useDispatch();


  const handleSubmit = (e) => {
    e.preventDefault();
    if(name && kehadiran && ucapan ){
      // POST DATA REDUX
      dispatch(postUserStart(dataInput))

      // UNTUK MENGHAPUS VALUE CACHE YANG ADA DI DALAM INPUT
      setDataInput({
        name: "",
        kehadiran: "",
        ucapan: ""
      })

      // GET DATA AGAIN IN REDUX 
      setTimeout(()=>{
        toast.success("HURRAY BERHASIL")
        dispatch(loadUsersStart());
      }, 500)
    }
  }


  // console.log(dataInput)
  const inputSelect = [
    {
      label: "Hadir",
      value: "Hadir"
    },
    {
      label: "Berhalangan",
      value: "Berhalangan"
    }
  ]

  const themeCustom = (theme) => {
    return{
      ...theme,
      borderRadius: 2,
      colors: {
        ...theme.colors,
        primary25: '#F0CAA3',
        primary: '#F49D1A',
        primary50: '#F49D1A'
      }
    }
  }







  return (
    <div className='max-w-lg mx-auto'>
      <h1 className='text-3xl my-10'>Input User</h1>
      <form onSubmit={handleSubmit}>
        <div className='my-4'>
          <Component.Input 
            label="Nama"
            type="text"  
            placeholder="masukan nama"
            value={name}
            className={classNames('border-2 px-4 py-1 min-w-full')}
            onChange={(val)=>
              setDataInput((prev)=> ({...prev, name: val}) )
            }
          />
          <label>Kehadiran</label>
          <Select
            theme={themeCustom}
            options={inputSelect}
            placeholder="Pilih Kehadiran"
            value={inputSelect.find(obj => obj.value === kehadiran)}
            onChange={(val)=>
              setDataInput((prev) => ({...prev, kehadiran: val.value}))
            }
          />
          <Component.Input 
            label="Ucapan"
            type="text"  
            placeholder="masukan ucapan"
            value={ucapan}
            className={classNames('border-2 px-4 py-1 min-w-full')}
            onChange={(val)=>
              setDataInput((prev)=> ({...prev, ucapan: val}) )
            }
          />
        </div>
        <MyBtn btn="tambah" type='submit'/>
      </form>
    </div>
  )
}

export default InputUsers;