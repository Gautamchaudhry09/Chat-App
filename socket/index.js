import { Server } from "socket.io";


const io = new Server(9000, {
    cors: {
        origin: '*'
    }
})

let users = [];

let a = [];

const addUser = (userData,socketId) =>{
    if(!users.some(user => user.sub == userData.sub)){
        users.push({...userData, socketId});
        a = [];
        users.map(user=> {a.push({name:user.name,id:user.sub})});
        // a.push({name:userData.name,id:userData.sub})
    } 
}

const getUser = (userId) => {
    return users.find(user => user.sub == userId);
}

const removeUser = (userData,socketId) => {
    users = users.filter(user => user.sub !== userData.sub);
    a = [];
    users.map(user=> {a.push({name:user.name,id:user.sub})});
}




io.on('connection', (socket) => {

    
    socket.join(socket.id);
    
    
    console.log(a);    
    socket.on("addUsers", userData => {
        addUser(userData, socket.id);
        io.emit("getUsers",users); 
    })
    
    socket.on("removeUser", (userData)=> {
        removeUser(userData,socket.id);
        console.log(a);    
        io.emit("getUsers",users);
    })

    socket.on('sendMessage', data => {
        const user = getUser(data.receiverId);
        console.log(user);
        if(user){
            io.to(user.socketId).emit('getMessage',data);
        }
    })


})

