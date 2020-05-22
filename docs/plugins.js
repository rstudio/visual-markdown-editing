

// convert Cmd keyboard shortcuts to Ctrl on non-mac systems
function cmdToCtrlPlugin(hook, vm) {
   
  const kPlatformMac = typeof navigator !== 'undefined' ? /Mac/.test(navigator.platform) : false;
   
  hook.ready(function() {
    if (!kPlatformMac) {
      const kbdTags = window.document.getElementsByTagName('kbd');
      for (let i = 0; i<kbdTags.length; i++) {
        const kbd = kbdTags.item(i);
        kbd.innerText = kbd.innerText.replace('⌘', '⌃');
      }
    }
  });
}
