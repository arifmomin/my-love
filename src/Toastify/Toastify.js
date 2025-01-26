import { Bounce, toast } from "react-toastify"


const SuccessToast = ( message="Arif Momin", position= "top-right", duration = 3000) =>{
    toast.success (message), {
        position: position,
        autoClose: duration,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
    }
}
const ErrorToast = ( message="Arif Momin", position= "top-right", duration = 3000) =>{
    toast.error (message), {
        position: position,
        autoClose: duration,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
    }
}


export {SuccessToast, ErrorToast}