// import { useMutation } from "@tanstack/react-query";
import http from "../../utils/http"
import { API_ENDPOINT } from "../../utils/api-endpoint";
import { useQuery } from "@tanstack/react-query";


const fetchDataClass = async (classCode) => {
    try {
        const { data } = await http.get(`${API_ENDPOINT.DATA_CLASS}/${classCode}`);
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
}

const useClassDataQuery = (classCode) =>{
    
    return useQuery([API_ENDPOINT.DATA_CLASS, classCode], fetchDataClass(classCode));
}

export { fetchDataClass, useClassDataQuery };
