require('dotenv').config();
const axios = require('axios');
const fs = require('fs');

fs.readFile('./playlistData.json', 'utf8', async function(err, data){
    //   console.log(type(data)); 
    const songs = JSON.parse(data);
    // console.log(songs);
    var songURIs = [];
    for(var i=0;i<61;i++){
            // console.log(element);  
           var element  = songs[i];
           await axios({
                method:'get',
                url:'https://api.spotify.com/v1/search',
                params:{
                    q:element,
                    type:'track'
                },
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': process.env.API_KEY
                }
            })
            .then((response)=>{
                // console.log(response.data.tracks.items[0].uri);
                songURIs.push(response.data.tracks.items[0].uri);

            })
            .catch(err=>{
                console.log(err);
            })
    }
    console.log(songURIs);
    fs.writeFile("./songURI.json", JSON.stringify(songURIs), function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("Song uris saved!");
    });


});

