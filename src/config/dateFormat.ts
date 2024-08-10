
type DateType=string|Date
type DateTypeCreate=Date|undefined|string


export default class   formatDateText{

    private static arrayMeses = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];
    

   private  static formatDateAll=(fecha:DateType)=>{
        const dateOriginal = new Date(fecha);

        let fechaUsoFront = new Date(dateOriginal).toISOString();
        const [fechaFront] = fechaUsoFront.split("Z");
    
        const year = dateOriginal.getFullYear();
        const month = dateOriginal.getMonth() ;
        const day = dateOriginal.getDate(); 
        const hour = dateOriginal.getUTCHours().toString(); 
        const minutes = dateOriginal.getUTCMinutes().toString();
        
        const fechaFormateada=`${day} ${this.arrayMeses[month]}`
        const horaFormateada=`${hour.length>1?hour:"0"+hour}:${minutes.length>1?minutes:"0"+minutes}`
        const fechaHoraFormateada=`${fechaFormateada} ${horaFormateada}`

        return{
            fechaFormateada,
            horaFormateada,
            fechaHoraFormateada,
            fechaFront:fechaFront
        }

    }

    static createDateText(fecha:DateType){

        return this.formatDateAll(fecha).fechaFormateada
        
    }

    static createDateFront(fecha:DateType){

        return this.formatDateAll(fecha).fechaFront
        
    }

    static createDateHorus(fecha:DateType){

        return this.formatDateAll(fecha).fechaHoraFormateada
        
    }

    static createDateAll(fecha:DateType){

        return this.formatDateAll(fecha)
        
    }

    static createDateBack(fecha:DateTypeCreate){

        return fecha
        
    }

}
