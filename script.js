const audio = document.getElementById("audio");
const volumeSlider = document.getElementById("volume-slider");
const frequencySlider = document.getElementById("frequency-slider");

// Set default values
audio.volume = 0.5;
let frequencyValue = 0.5;

// Function to update the frequency value and apply the modulation effect
function updateFrequency() {
  frequencyValue = frequencySlider.value / 100;
  const modulatedValue = Math.sin(audio.currentTime * frequencyValue * 2 * Math.PI) * 0.1;
  const volumeValue = volumeSlider.value / 100;
  audio.volume = volumeValue + modulatedValue;
}

// Attach event listeners to the sliders
volumeSlider.addEventListener("input", updateFrequency);
frequencySlider.addEventListener("input", updateFrequency);
