import Swal from "sweetalert2";

export const alertSuccess = (message) =>{
    Swal.fire('Bien!',message,'success')
}

export const alertError = (message) =>{
    Swal.fire('Error',message,'error')
}