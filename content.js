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
