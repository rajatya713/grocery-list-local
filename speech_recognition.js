//speech recognition
if ("webkitSpeechRecognition" in window) {

    // Initialize webkitSpeechRecognition
    let speechRecognition = new webkitSpeechRecognition();
    
    // String for the Final Transcript
    let final_transcript = "";

    // Set the properties for the Speech Recognition object
    speechRecognition.continuous = true;
    speechRecognition.interimResults = true;


    // Callback Function for the onStart Event
    speechRecognition.onstart = () => {

        // Show the Status Element
        document.querySelector("#counter").innerHTML = "listening...";
       
    };
    speechRecognition.onerror = () => {

        // Hide the Status Element
        document.querySelector("#counter").innerHTML = "Error!! while listening";
    };

    speechRecognition.onend = () => {

        // Hide the Status Element
        document.querySelector("#counter").innerHTML = "stopped";
    };

    speechRecognition.onresult = (event) => {

        final_transcript = event.results[event.results.length - 1][0].transcript;


        // Set the Final transcript.
        document.querySelector("#input-field").value = final_transcript;
    };
    
    document.querySelector("#mic-on").onclick = () => {

        // Start the Speech Recognition
        final_transcript = "";
        speechRecognition.start();
        document.getElementById("mic-on").style.display = "none";
        document.getElementById("mic-off").style.display = "block";

    };

    document.querySelector("#mic-off").onclick = () => {
        document.getElementById("mic-off").style.display = "none";
        document.getElementById("mic-on").style.display = "block";
        speechRecognition.stop();

    }

    

} else {
    console.log("Speech Recognition Not Available");
}