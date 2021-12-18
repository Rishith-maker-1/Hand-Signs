prediction = "";

function speak() {
    var synth = window.speechSynthesis;
    speech = "Detected " + prediction;
    utterThis = new SpeechSynthesisUtterance(speech);
    synth.speak(utterThis);
}
Webcam.set({
    width: 300,
    height: 300,
    image_format: 'jpg',
    jpg_quality: 99
});
camera = document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '" width= "350" height= "300"/>';;
    });
}
console.log('ml5 version', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/xQRttb4CE/model.json', modelLoaded);

function modelLoaded() {
    console.log(modelLoaded);
}

function check() {
    img = document.getElementById('captured_image');
    classifier.classify(img, gotresult);
}

function gotresult(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
    }
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("resultEmotionName").innerHTML = results[0].label;
        prediction1 = results[0].label;
        prediction2 = results[1].label;
        speak();
        if (results[0].label == "amazing") {
            document.getElementById("updateEmoji").innerHTML = "&#128076;";
        }
        if (results[0].label == "best") {
            document.getElementById("updateEmoji").innerHTML = "&#128077;";
        }
        if (results[0].label == "victory") {
            document.getElementById("updateEmoji").innerHTML = "&#9996;";
        }
    }
}