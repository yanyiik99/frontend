import classNames from 'classnames';
import { useEffect, useState } from 'react'
import * as Component from '../index'
// import Select from "react-select";
import MyBtn from '../Button/index';
import { useDispatch, useSelector } from 'react-redux';
import { postUserStart } from '../../bootstraps/actions';

// const initialState = {
//   name: "",
//   kehadiran: "",
//   ucapan: ""
// }

function InputUsers() {
  // Mengambil initial State
  const [dataInput, setDataInput] = useState({});
  // const {name, kehadiran, ucapan} = dataInput;
  const dispatch = useDispatch();


  const handleSubmit = (e) => {
    e.prevetDefault();
    // if(name && kehadiran && ucapan ){
      dispatch(postUserStart(dataInput))
    // }
  }

  console.log(dataInput)
  // const inputSelect = [
  //   {
  //     label: "Hadir",
  //     value: "Hadir"
  //   },
  //   {
  //     label: "Berhalangan",
  //     value: "Berhalangan"
  //   }
  // ]

  // const themeCustom = (theme) => {
  //   return{
  //     ...theme,
  //     borderRadius: 2,
  //     colors: {
  //       ...theme.colors,
  //       primary25: '#F0CAA3',
  //       primary: '#F49D1A',
  //       primary50: '#F49D1A'
  //     }
  //   }
  // }







  return (
    <div className='max-w-lg mx-auto'>
      <h1 className='text-3xl my-10'>Input User</h1>
      <form onSubmit={handleSubmit}>
        <div className='my-4'>
          <Component.Input 
            label="Nama"
            type="text"  
            placeholder="masukan nama"
            value={dataInput.name}
            className={classNames('border-2 px-4 py-1 min-w-full')}
            onChange={(val)=>
              setDataInput((prev)=> ({...prev, name: val}) )
            }
          />
          <label>Kehadiran</label>
          {/* <Select
            theme={themeCustom}
            options={inputSelect}
            placeholder="Pilih Kehadiran"
            value={inputSelect.find(obj => obj.value === kehadiran)}
            onChange={(val)=>
              setDataInput((prev) => ({...prev, kehadiran: val.value}))
            }
          /> */}
          <Component.Input 
            label="kehadiran"
            type="text"  
            placeholder="masukan kehadiran"
            value={dataInput.kehadiran}
            className={classNames('border-2 px-4 py-1 min-w-full')}
            onChange={(val)=>
              setDataInput((prev)=> ({...prev, kehadiran: val}) )
            }
          />
          <Component.Input 
            label="Ucapan"
            type="text"  
            placeholder="masukan ucapan"
            value={dataInput.ucapan}
            className={classNames('border-2 px-4 py-1 min-w-full')}
            onChange={(val)=>
              setDataInput((prev)=> ({...prev, ucapan: val}) )
            }
          />
        </div>
        <MyBtn btn="tambah" type='text'/>
      </form>
    </div>
  )
}

export default InputUsers;