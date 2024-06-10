import axios from 'axios'

const url='https://chat-app-taui.onrender.com';

export const addUser = async (data) => {
    try {
        await axios.post(`${url}/add`,data);
    } catch(error){
        console.log('Error while adding User', error.message);
    }
}

export const getUsers = async (data) => {
    try {
        let res= await axios.get(`${url}/users`);
        // console.log(res);
        return res.data;

    } catch(error){
        console.log('Error while fetching all Users', error.message);
    }
}


export const setConversation = async(data) => {
    try{
        await axios.post(`${url}/conversation/add`,data)
    } catch(error) {
        console.log('Error while calling setConversation API', error.message);
    }
}


export const getConversation=async(data) => {
    try{
        const res = await axios.post(`${url}/conversation/get`,data)
        return res.data;
    } catch(error) {
        console.log('Error while calling getConversation API', error.message);
    }
}

export const newMessage = async(data) => {
    try{
        await axios.post(`${url}/message/add`,data);
    } catch(error) {
        console.log("Error while calling newMessage API",error.message)
    }
}
export const getMessages = async(id) => {
    try{
        const res = await axios.get(`${url}/message/get/${id}`);
        return res.data;
    } catch(error) {
        console.log("Error while calling newMessage API",error.message)
    }
}

export const uploadFile = (data) => {
    try{
        return axios.post(`${url}/file/upload`,data);
    } catch(error) {
        console.log("Error while calling uploadFile API", error.message);
    }
}
