import classNames from "classnames";
import { BiMoon, BiUpload, BiEdit, BiTrash } from "react-icons/bi";

function Button(props) {
  const btn = props.btn;

  switch(btn){
    case "dark":
      return(
        <button className="flex items-center py-4 px-6 font-bold text-md bg-color-primary text-[#F5F5F5] hover:shadow-xl ">
          <BiMoon className="mr-3 text-2xl"/>
          Dark Mode
        </button>
      )
    case "tambah":
      return (
        <button type={props.type || ''} className={classNames('max-w-sm text-sm flex items-center py-2 px-3 font-bold text-md bg-color-primary text-[#F5F5F5] hover:shadow-xl', props.className)}>
            <BiUpload className="mr-3 text-2xl" />
            Tambah Data
          </button>
      )

    case "edit":
      return (
        <button className="max-w-sm text-sm flex items-center bg-green-700 py-1 px-2 sm:py-2 sm:px-3 sm:max-lg:  sm:text-base font-bold text-md  text-[#F5F5F5] hover:shadow-xl ">
          <BiEdit className="text-xl sm:text-2xl" />
        </button>
      )

    case "delete":
      return (
        <button 
          className="max-w-sm text-sm flex items-center bg-red-700 py-1 px-2 sm:py-2 sm:px-3 sm:max-lg:  sm:text-base font-bold text-md  text-[#F5F5F5] hover:shadow-xl "
          onClick={props.onClick}
        >
          <BiTrash className="text-xl sm:text-2xl" />
        </button>
      )

    default: 
    return(
      <div></div>
    )
  }
}

export default Button