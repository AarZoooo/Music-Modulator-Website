// get the audio player iframe
const audioPlayer = document.getElementById('audio-player').querySelector('iframe');

// initialize SoundCloud widget
const widget = SC.Widget(audioPlayer);

// get the volume slider and set the initial value to 50
const volumeSlider = document.getElementById('volume-slider');
widget.setVolume(volumeSlider.value / 100);
volumeSlider.addEventListener('input', function() {
  widget.setVolume(this.value / 100);
});

// get the frequency slider and set the initial value to 50
const frequencySlider = document.getElementById('frequency-slider');
widget.bind(SC.Widget.Events.READY, function() {
  widget.unbind(SC.Widget.Events.READY);
  widget.bind(SC.Widget.Events.PLAY_PROGRESS, function() {
    const totalTime = this.getDurationEstimate();
    const currentPosition = this.getPosition();
    const waveformLength = this.getCurrentSound().waveform_url.match(/-([0-9]+)\./)[1];
    const newSeekPosition = (currentPosition / totalTime) * waveformLength * (frequencySlider.value / 100);
    widget.seekTo(newSeekPosition);
  });
});
frequencySlider.addEventListener('input', function() {
  const totalTime = widget.getDurationEstimate();
  const currentPosition = widget.getPosition();
  const waveformLength = widget.getCurrentSound().waveform_url.match(/-([0-9]+)\./)[1];
  const newSeekPosition = (currentPosition / totalTime) * waveformLength * (this.value / 100);
  widget.seekTo(newSeekPosition);
});
