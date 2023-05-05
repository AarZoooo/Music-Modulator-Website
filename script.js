// get the audio player iframe
const audioPlayer = document.getElementById('audio-player');

// get the volume slider and set the initial value to 50
const volumeSlider = document.getElementById('volume-slider');
audioPlayer.contentWindow.postMessage('{"type": "volume", "data": ' + volumeSlider.value / 100 + '}', '*');

// add event listener to volume slider
volumeSlider.addEventListener('input', function() {
  audioPlayer.contentWindow.postMessage('{"type": "volume", "data": ' + this.value / 100 + '}', '*');
});

// get the frequency slider and set the initial value to 50
const frequencySlider = document.getElementById('frequency-slider');
audioPlayer.contentWindow.postMessage('{"type": "seek", "data": audioPlayer.contentWindow.SC.Widget.Events.SEEK + ': ' + audioPlayer.contentWindow.SC.Widget.Events.PLAY_PROGRESS + ': ' + (frequencySlider.value / 100) * audioPlayer.contentWindow.document.querySelector('.sound__waveform svg g').getTotalLength() + '}', '*');

// add event listener to frequency slider
frequencySlider.addEventListener('input', function() {
  audioPlayer.contentWindow.postMessage('{"type": "seek", "data": audioPlayer.contentWindow.SC.Widget.Events.SEEK + ': ' + audioPlayer.contentWindow.SC.Widget.Events.PLAY_PROGRESS + ': ' + (this.value / 100) * audioPlayer.contentWindow.document.querySelector('.sound__waveform svg g').getTotalLength() + '}', '*');
});
