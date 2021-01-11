

// Put the body of the table section of the HTML code 
var tbody = d3.select("tbody");
// Puts data. js into a variable 
var tabledata = data

// Appends each row of data onto the empty table 
//Step 1
tabledata.forEach((ufoData) => {
    //Step2
    var row = tbody.append("tr")
    //Step 3 - select objects using . Entries
    Object.entries(ufoData).forEach(([key, value]) => {
        var cell = row.append("td")
        cell.text(value)
    })
})


var video = document.getElementById("myVideo");

// Get the button
var btn = document.getElementById("myBtn");

// Pause and play the video, and change the button text
function myFunction() {
    if (video.paused) {
        video.play();
        btn.innerHTML = "Pause";
    } else {
        video.pause();
        btn.innerHTML = "Play";
    }
}


