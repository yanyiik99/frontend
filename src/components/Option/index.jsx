// import React from "react";
// import Select from "react-select";

// function Option(props) {
//   const inputSelect = [
//     {
//       label: "Hadir",
//       value: "Hadir"
//     },
//     {
//       label: "Berhalangan",
//       value: "Berhalangan"
//     }
//   ]

//   const themeCustom = (theme) => {
//     return {
//       ...theme,
//       borderRadius: 2,
//       colors: {
//         ...theme.colors,
//         primary25: '#F0CAA3',
//         primary: '#F49D1A',
//         primary50: '#F49D1A'
//       }
//     }
//   }


//   return (
//     <Select
//       theme={themeCustom}
//       options={inputSelect}
//       placeholder="Pilih Kehadiran"
//       value={inputSelect.find(obj => obj.value == kehadiran)}
//       onChange={(val) =>
//         setDataInput((prev) => ({ ...prev, kehadiran: val.value }))
//       }
//     />
//   )
// }

// export default Option;