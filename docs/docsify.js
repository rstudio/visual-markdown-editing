
window.$docsify = {
      
   // site title
   name: '<img src="images/rstudio-logo.png" width="50%"/><br/>Visual R Markdown',
   
   // google analytics
   ga: 'UA-77306155-5',
   
   // core options
   homepage: 'intro.md',
   auto2top: true,
   topMargin: 15,
   
   // navbar/sidebar/toc
   loadSidebar: '_sidebar.md',
   autoHeader: true,
   maxLevel: 2,
   subMaxLevel: 2,
   
   // search (https://docsify.js.org/#/plugins?id=full-text-search)
   search: {
     maxAge: 0,
     depth: 4,
     namespace: 'visual-markdown-editing'
   },
  
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
     tippyPlugin,
     cmdToCtrlPlugin,
     fixScrollingPlugin
   ],
   
};


// initialize tippy popovers
function tippyPlugin(hook, vm) {
  hook.doneEach(function() {
    let tips = window.document.getElementsByClassName('sha256');
    for (let i = 0; i<tips.length; i++) {
      let sha256 = tips[i].getAttribute('data-sha256');
      tippy(tips[i], {
        allowHTML: true,
        content: '<div><div class="sha-title">SHA-256</div><div>' + sha256 + '</div></div>',
        maxWidth: 240,
        interactive: true,
        interactiveBorder: 10,
        placement: 'left'
      });
    }
  });
}

// fix scrolling for hash links
// https://github.com/docsifyjs/docsify/issues/351
function fixScrollingPlugin(hook, vm) {
   hook.ready(function () {
      // true = show debug log
      let dd = false 
      let TARGET_QUERY = 'id'
      let SCROLL_DELAY = 2000 // in miliseconds
      let location = window.location
      
      dd&&console.log('custom scroll plugin called!')
      let currentUrlWithoutHash = new URL(
        location.origin+location.pathname+
        location.search+location.hash.substring(1)
      )
      let urlQueryParam = currentUrlWithoutHash.searchParams
      let isUrlHasIdQuery = urlQueryParam.has(TARGET_QUERY)
      if(isUrlHasIdQuery){
         dd&&console.log('url has id, will scroll to element')
         let urlId = urlQueryParam.get(TARGET_QUERY)
         // run delayed, to make sure everything loaded
         setTimeout(function() {
             dd&&console.log('will scroll now!')
             try{
                 document.querySelector('#'+urlId)
                     .scrollIntoView()
             } catch(e){ dd&&console.log('custom scroll failed',e) }
         }, SCROLL_DELAY);
      }
})
}

// convert Cmd keyboard shortcuts to Ctrl on non-mac systems
function cmdToCtrlPlugin(hook, vm) {
  const kPlatformMac = typeof navigator !== 'undefined' ? /Mac/.test(navigator.platform) : false;
  hook.afterEach(function(html, next) {
    if (!kPlatformMac) {
      html = html.replace(/⌘/g, '⌃');
    }
    next(html);
  });
}
