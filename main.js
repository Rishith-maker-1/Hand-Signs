Webcam.set({
    width: 300,
    height: 300,
    image_format: 'jpg',
    jpg_quality: 9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
});
camera = document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '" width= "350" height= "300"/>';;
    });
}
console.log('ml5 version', ml5.version);
classifier = ml5.imageClassifier('', modelLoaded);

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