require('dotenv').config();
const axios = require('axios');
const dataArr = require('./songURI.json');
const tempArr = [];
// console.log(typeof(dataArr));

for(var i=0;i<61;i++){
    tempArr.push(dataArr[i]);
}



axios({
    method:'post',
    url:'https://api.spotify.com/v1/playlists/5qdH9qoUnmoh0Ah0JCLwBQ/tracks',
    headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': process.env.API_KEY
    },
    data:{
        "uris":tempArr,
        "position":0
    }
})
.then((response)=>{
    console.log(response.data);
})
.catch((err)=>{
    console.log(err);
})