document.getElementById('qualitySelector').addEventListener('change', function() {
    var quality = this.value;
    var image = document.getElementById('qualityImage');
    var crushText = document.getElementById('crushText');

    if (quality === '144p') {
        image.src = 'images/144p.jpg';
        crushText.style.display = 'none';
    } else if (quality === '240p') {
        image.src = 'images/240p.jpg';
        crushText.style.display = 'none';
    } else if (quality === '480p') {
        image.src = 'images/480p.jpg';
        crushText.style.display = 'none';
    } else if (quality === '720p') {
        image.src = 'images/720p.jpg';
        crushText.style.display = 'none';
    } else if (quality === '1080p') {
        image.src = 'images/her.jpg';
        crushText.style.display = 'block'; // Show the text when 1080p is selected
    } else {
        image.src = '';
        crushText.style.display = 'none';
    }
});
