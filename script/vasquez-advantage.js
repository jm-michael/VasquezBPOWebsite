const videoContainer = document.getElementById('videoContainer');
const minimizeBtn = document.getElementById('minimizeBtn');
const restoreBtn = document.getElementById('restoreBtn');
const closeBtn = document.getElementById('closeBtn');
const videoPlayer = document.getElementById('videoPlayer');
const videoSource = document.getElementById('videoSource');
const iframee = document.getElementById('iframee');

const videos = [
    "img/vasquez-advantage/page 2/This is Life at Vasquez (2nd page).mp4",
    "img/vasquez-advantage/page 2/What makes Vasquez an advantage (2nd page).mp4",
    "img/vasquez-advantage/page 3/By fostering career advancement in a healthy working environment.mp4",
    "img/vasquez-advantage/page 3/By prioritizing employee wellbeing.mp4",
    "img/vasquez-advantage/page 3/By providing opportunities to work in the United States.mp4",
    "img/vasquez-advantage/page 3/Through compassionate and mindful leadership.mp4",
]

const pictures = [
    "img/vasquez-advantage/page 3/By fostering career advancement in a healthy working environment.JPG",
    "img/vasquez-advantage/page 3/By fostering career advancement in a healthy working environment.JPG",
    "img/vasquez-advantage/page 3/By fostering career advancement in a healthy working environment.JPG",
    "img/vasquez-advantage/page 3/By fostering career advancement in a healthy working environment.JPG",
    "img/vasquez-advantage/page 3/By fostering career advancement in a healthy working environment.JPG",
]

minimizeBtn.addEventListener('click', () => {
    videoContainer.style.top = 'auto';
    videoContainer.style.bottom = '10px';
    videoContainer.style.left = 'auto';
    videoContainer.style.right = '10px';
    videoContainer.style.transform = 'none';
    videoContainer.style.width = '400px'; // Set the size of the minimized video
    minimizeBtn.style.display = 'none';
    restoreBtn.style.display = 'block';
});

restoreBtn.addEventListener('click', () => {
    videoContainer.style.top = '50%';
    videoContainer.style.left = '50%';
    videoContainer.style.bottom = 'auto';
    videoContainer.style.right = 'auto';
    videoContainer.style.transform = 'translate(-50%, -50%)';
    videoContainer.style.width = '80%'; // Restore the original size
    minimizeBtn.style.display = 'block';
    restoreBtn.style.display = 'none';
});

closeBtn.addEventListener('click', () => {
    videoContainer.classList.add('hidden');
    videoPlayer.pause(); // Pause the video
    videoPlayer.currentTime = 0; // Optional: Reset the video to the beginning  
    document.getElementById("iframee").src = '';
});

function isVideo(show,iframe,indx){
    if (show) {
        changeVideo(videos[indx]);
        videoContainer.classList.remove('hidden');
    } else {
        videoContainer.classList.add('hidden');
    }

    if(iframe){
        iframee.classList.remove('hidden');
        videoPlayer.classList.add('hidden');
        document.getElementById("iframee").src = 'https://drive.google.com/file/d/1K3-cixQ9tCjw2BqT6qKqrbKDEm1g3pjr/preview';

    } 
    else {
        iframee.classList.add('hidden');
        videoPlayer.classList.remove('hidden');
    }
}

function changeVideo(videoPath) {
    videoSource.src = videoPath;
    videoPlayer.load(); // Reload the video with the new source
    videoPlayer.play(); // Optionally start playing the new video automatically
}

const radios = document.querySelectorAll('input[name="position"]');
const leftBtn = document.getElementById('leftBtn');
const rightBtn = document.getElementById('rightBtn');
var p3Index = 1;

// Function to find the currently checked radio button
function getCheckedRadioIndex() {
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            return i;
        }
    }
    return -1; // No radio button is checked
}

// Add event listener for the "Previous" button
leftBtn.addEventListener('click', function() {
    let currentIndex = getCheckedRadioIndex();
    if (currentIndex > 0) {
        radios[currentIndex].checked = false;
        radios[currentIndex - 1].checked = true;
        p3Index = currentIndex - 1
    }
});

// Add event listener for the "Next" button
rightBtn.addEventListener('click', function() {
    let currentIndex = getCheckedRadioIndex();
    if (currentIndex < radios.length - 1) {
        radios[currentIndex].checked = false;
        radios[currentIndex + 1].checked = true;
        p3Index = currentIndex + 1
    }
});

function playVideo(){
    console.log(p3Index+2)
    isVideo(true,false,(p3Index+2))
}