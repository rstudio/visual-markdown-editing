
window.$docsify = {
      
   // site title
   name: 'Visual R Markdown',
   
   // google analytics
   ga: 'UA-77306155-5',
   
   // core options
   homepage: 'index.md',
   auto2top: true,
   maxLevel: 4,
   topMargin: 15,
  
   // copy code (https://github.com/jperasmus/docsify-copy-code/blob/master/README.md#options)
   copyCode: {
     buttonText: 'Copy'
   },
   
   // markdown (https://docsify.js.org/#/markdown?id=markdown-configuration)
   markdown: {},
   
   // themable (https://jhildenbiddle.github.io/docsify-themeable/#/options)
   themeable: {},
   
   // custom plugins
   plugins: [
     cmdToCtrlPlugin
   ],
   
};


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
