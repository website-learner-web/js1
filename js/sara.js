
function upDate(previewPic) {
    // 1) Change background image of div#image to the preview image's src
    document.getElementById('image').style.backgroundImage = "url('" + previewPic.src + "')";

    // 2) Change the text inside the div#image to the alt text of the preview image
    document.getElementById('image').textContent = previewPic.alt;
}

function unDo() {
    // 1) Reset background image to original (empty string as in CSS)
    document.getElementById('image').style.backgroundImage = "";

    // 2) Reset the text inside div#image to original message
    document.getElementById('image').textContent = "Hover over an image below to display here.";
}