const cheerio = require('cheerio');
var fs = require('fs');
  
// Use fs.readFile() method to read the file
fs.readFile('./freeformatter-out.html', 'utf8', function(err, html){
      
        const $ = cheerio.load(html);
        var songs = [];

        const data = $('.u-color-js-gray').find('a');

        data.each(function(idx, el){
            var song_name = $(el).text().trim();
            songs.push(song_name);
            // console.log(song_name);
        })
        fs.writeFile("./playlistData.json", JSON.stringify(songs), function(err) {
            if(err) {
                return console.log(err);
            }
            console.log("Songs saved!");
        });

        console.log(songs.length);
});


// Ajay Panikar