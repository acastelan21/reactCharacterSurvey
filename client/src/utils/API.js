import axios from "axios";

const API ={
    searchDB:() =>{
       
        return  axios.get("/api/database");
   
   
   
    }
   
   }
   export default API;