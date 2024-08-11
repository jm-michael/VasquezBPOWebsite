const videoContainer = document.getElementById('videoContainer');
const minimizeBtn = document.getElementById('minimizeBtn');
const restoreBtn = document.getElementById('restoreBtn');
const closeBtn = document.getElementById('closeBtn');
const videoPlayer = document.getElementById('videoPlayer');
const videoSource = document.getElementById('videoSource');
const iframee = document.getElementById('iframee');

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
});

function isVideo(show,iframe,link){
    if (show) {
        changeVideo(link);
        videoContainer.classList.remove('hidden');
    } else {
        videoContainer.classList.add('hidden');
    }

    if(iframe){
        iframee.classList.remove('hidden');
        videoPlayer.classList.add('hidden');
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

