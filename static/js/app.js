
// Put the body of the table section of the HTML code into a variable 
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


//var video = document.getElementById("myVideo");

// Get the button
//var btn = document.getElementById("myBtn");

// Pause and play the video, and change the button text
//function myFunction() {
//  if (video.paused) {
//      video.play();
//      btn.innerHTML = "Pause";
//  } else {
//     video.pause();
//     btn.innerHTML = "Play";
// }
//}



var submit = d3.select("#filter-btn")

submit.on("click", function () {

    d3.event.preventDefault();

    var inputElement = d3.select("#datetime");

    var inputValue = inputElement.property("value");

    //console.log(inputValue)
    //console.log(tabledata)

    var filterData = tabledata.filter(Date => Date.datetime === inputValue);

    console.log(filterData);

    var dates = filterData.map(datetime => datetime.datetime);
    var city = filterData.map(datetime => datetime.city);
    var state = filterData.map(datetime => datetime.state);
    var country = filterData.map(datetime => datetime.country);
    var shape = filterData.map(datetime => datetime.shape);
    var duration = filterData.map(datetime => datetime.durationMinutes);
    var comments = filterData.map(datetime => datetime.comments);

    console.log(dates)


    var table = d3.select("tbody");

    table.html("");

    filterData.forEach((ufoData) => {
        //Step2
        var row = table.append("tr")
        //Step 3 - select objects using . Entries
        Object.entries(ufoData).forEach(value) {
            var cell = row.append("td")
            cell.text(value)
        })
})

});


// Appends each row of data onto the empty table 
//Step 1
//tabledata.forEach((ufoData) => {
//Step2
//var row = tbody.append("tr")
//Step 3 - select objects using . Entries
//Object.entries(ufoData).forEach(([key, value]) => {
//    var cell = row.append("td")
//   cell.text(value)
// })
//})

//people = data = the data.js
//person = Date = is the 
//bloodtype = datetime = id for input