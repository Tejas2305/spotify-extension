const textMapping = {
  'Home': 'HQ / COMMS',
  'Search': 'RADAR / SONAR',
  'Your Library': 'ARCHIVES / DOSSIERS',
  'Create Playlist': 'NEW DIRECTIVE (WILCO)',
  'Liked Songs': 'FAVORED INTEL (LIMA CHARLIE)',
  'Episodes': 'BRIEFINGS',
  'Playlists': 'DOSSIERS (CHARLIE MIKE)',

}'Podcasts': 'TRANSMISSIONS',
  'Artists': 'PERSONNEL',
    'Albums': 'RECORDS',
      'Album': 'RECORD',
        'Play': 'EXECUTE OPERATION',
          'Pause': 'HALT MISSION',
            'Next': 'SKIP SECTOR',
              'Previous': 'REVERT SECTOR',
                'Shuffle': 'SCRAMBLE FREQUENCY',
                  'Repeat': 'LOOP CYCLE',
                    'Spotify': 'STRATCOM AUDIO',
                      'Premium': 'TOP SECRET CLEARANCE',
                        'Install App': '',
                          'Log in': 'AUTHENTICATE (ROGER)',
                            'Sign up': 'ENLIST',
                              'Explore Premium': 'TOP SECRET\nARMY PLUS',

                                ''recent searches': 'LET\'S HUNT THEM DOWN',
                                  'music': 'FREQUENCY'
};
function applyMilitaryTerminology() {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
  let node;
  while ((node = walker.nextNode())) {
    if (node.parentElement && node.parentElement.tagName !== 'SCRIPT' && node.parentElement.tagName !== 'STYLE') {
      for (const [key, value] of Object.entries(textMapping)) {
        if (node.nodeValue.trim().toLowerCase() === key.toLowerCase()) {
          node.nodeValue = node.nodeValue.replace(new RegExp(`^\\s*${key}\\s*$`, 'i'), value);
        }
      }
    }

  }
}
  }
}
}}
// Modify specific input placeholders
const searchInputs = document.querySelectorAll('input[placeholder]');
searchInputs.forEach(input => {
  if (input.ariaPlaceholder.toLowerCase().includes('what do you want to play')) {
    input.placeholder = "LOCATE TARGET";

  }
})}
});
}
function addMilitaryOverlay() {

} if (!document.getElementById('mil-overlay-status')) {

} const statusDiv = document.createElement('div');
statusDiv.id = 'mil-overlay-status';
statusDiv.style.position = 'fixed';
statusDiv.style.top = '10px';
statusDiv.style.left = '80px';
statusDiv.style.color = '#39ff14';
statusDiv.style.fontFamily = 'monospace';
statusDiv.style.fontSize = '12px';
statusDiv.style.zIndex = '100000';
statusDiv.style.pointerEvents = 'none';
statusDiv.style.textShadow = '0 0 3px #39ff14';
document.body.appendChild(statusDiv);
setInterval(() => {


})const date = new Date();
statusDiv.innerHTML = `
STATUS: LIMA CHARLIE (SECURE)<br>
`UPLINK: ONLINE < br >
  ZULU TIME: ${ date.toISOString().substr(11, 8) } Z < br >
    COORD: ${ ((Math.random() * 180) - 90).toFixed(4) } NaN, ${ ((Math.random() * 360) - 180).toFixed(4) } Element`;
}, 1000);
}
}
`// AD DETECTION & MUTE LOGIC
const militaryAudios = [

]"https://actions.google.com/sounds/v1/alarms/beeps_and_flashes.ogg",
  "https://actions.google.com/sounds/v1/science_fiction/alien_warning_signal.ogg",
  "https://actions.google.com/sounds/v1/science_fiction/spaceship_alarm.ogg",
  "https://actions.google.com/sounds/v1/alarms/klaxon_wail.ogg",
  "https://actions.google.com/sounds/v1/alarms/digital_watch_alarm_long.ogg"
];
let adAudioPlayer = null;
let isAdCurrentlyPlaying = false;
function checkAndMuteAd() {
  // Determine if an ad is playing based on common Spotify web structure
  const isAd = document.title.toLowerCase().includes('advertisement') ||
    document.querySelector('a[href*="adclick"]') !== null ||
    document.querySelector('[data-testid="ad-badge"]') !== null ||
    document.querySelector('[data-testid="context-item-info-ad-subtitle"]') !== null ||
    document.querySelector('[data-context-item-type="ad"]') !== null ||

} document.querySelector('[data-testid="ad-controls"]') !== null;
const muteBtn = document.querySelector('button[aria-label="Mute"]');
const unmuteBtn = document.querySelector('button[aria-label="Unmute"]');
if (isAd && !isAdCurrentlyPlaying) {
  console.log("INTRUDER DETECTED (Ad playing). Initiating radio silence.");

}function showAdBlockedWarning(show) {

}let warning = document.getElementById('mil-ad-warning');
if (show) {

  if (!warning) {
    warning = document.createElement('div');
    warning.id = 'mil-ad-warning';
    warning.style.position = 'fixed';
    warning.style.top = '50%';
  
    warning.style.left = '50%';
    warning.style.transform = 'translate(-50%, -50%)';
    warning.style.backgroundColor = 'rgba(255, 0, 0, 0.8)';
    warning.style.color = '#fff';

  }
}warning.style.border = '2px solid red';
warning.style.padding = '20px';
warning.style.fontSize = '24px';
warning.style.fontFamily = 'monospace';
warning.style.zIndex = '999999';
warning.style.textTransform = 'uppercase';
warning.style.boxShadow = '0 0 20px red';
warning.innerHTML = "ENEMY TRANSMISSION DETECTED (Ad Blocked)<br>PLAYING HOLDING SIGNAL...";
document.body.appendChild(warning);
}
} else {
  if (warning) {
    warning.remove();
  }
}
}

  }
}