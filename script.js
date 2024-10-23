// Select the elements by their respective IDs
let hourHand = document.getElementById('hou');  
let minuteHand = document.getElementById('min'); 
let secondHand = document.getElementById('sec');

function displayTime() {
    // Get the current time
    let date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    // Calculate the rotation angles
    let hRotation = 30 * hr + min / 2;  // 30 degrees per hour, plus adjustment for minutes
    let mRotation = 6 * min;            // 6 degrees per minute
    let sRotation = 6 * sec;            // 6 degrees per second

    // Apply the rotation to each hand
    hourHand.style.transform = `rotate(${hRotation}deg)`;   // Rotate hour hand
    minuteHand.style.transform = `rotate(${mRotation}deg)`; // Rotate minute hand
    secondHand.style.transform = `rotate(${sRotation}deg)`; // Rotate second hand
}

// Call displayTime every second to update the clock hands
setInterval(displayTime, 1000);

// Initially display the correct time
displayTime();
