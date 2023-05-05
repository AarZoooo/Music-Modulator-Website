// Select DOM elements
const audioPlayer = document.querySelector('.audio-player');
const audio = new Audio('audio/audio.mp3');
const playPauseBtn = audioPlayer.querySelector('#play-pause-btn');
const amplitudeSlider = audioPlayer.querySelector('#amplitude-slider');
const frequencySlider = audioPlayer.querySelector('#frequency-slider');
const progressBar = audioPlayer.querySelector('#progress-bar');

// Set audio properties
audio.volume = amplitudeSlider.value;
audio.playbackRate = frequencySlider.value;

// Add event listeners
playPauseBtn.addEventListener('click', togglePlayPause);
amplitudeSlider.addEventListener('input', changeAmplitude);
frequencySlider.addEventListener('input', changeFrequency);
audio.addEventListener('timeupdate', updateProgress);

// Toggle play and pause
function togglePlayPause() {
	if (audio.paused) {
		audio.play();
		playPauseBtn.innerHTML = '<i class="fa fa-pause"></i>';
	} else {
		audio.pause();
		playPauseBtn.innerHTML = '<i class="fa fa-play"></i>';
	}
}

// Change amplitude
function changeAmplitude() {
	audio.volume = amplitudeSlider.value;
}

// Change frequency
function changeFrequency() {
	audio.playbackRate = frequencySlider.value;
}

// Update progress bar
function updateProgress() {
	const duration = audio.duration;
	const currentTime = audio.currentTime;
	const progress = (currentTime / duration) * 100;
	progressBar.style.width = `${progress}%`;
}
