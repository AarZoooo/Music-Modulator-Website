// Get the audio element and all the sliders
const audio = document.querySelector('audio');
const volumeSlider = document.querySelector('#volume-slider');
const speedSlider = document.querySelector('#speed-slider');
const pitchSlider = document.querySelector('#pitch-slider');
const resetButton = document.querySelector('#reset-button');

// Set the initial values of the sliders
volumeSlider.value = 50;
speedSlider.value = 100;
pitchSlider.value = 0;

// Add event listeners to all the sliders
volumeSlider.addEventListener('input', () => {
	const volumeValue = volumeSlider.value;
	audio.volume = volumeValue / 100;
});

speedSlider.addEventListener('input', () => {
	const speedValue = speedSlider.value;
	audio.playbackRate = speedValue / 100;
});

pitchSlider.addEventListener('input', () => {
	const pitchValue = pitchSlider.value;
	const cents = 1200 * Math.log2(Math.pow(2, pitchValue / 12));
	audio.playbackRate = Math.pow(2, cents / 1200);
});

resetButton.addEventListener('click', () => {
	volumeSlider.value = 50;
	speedSlider.value = 100;
	pitchSlider.value = 0;
	audio.volume = 0.5;
	audio.playbackRate = 1;
});
