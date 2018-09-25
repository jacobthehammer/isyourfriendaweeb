// Basic nodular.js setup so we can run node in browser (terrible, yes, but it should work)
   
   
    // Start time will be useful at the end of the page
    var startTime = new Date();

    // Specify a path prefix on the server for our required scripts
    _nodularJS_.pathPrefix = 'js/';

    // We don't want required scripts to be loaded from the browser cache
    // Might be removed in production
    _nodularJS_.forceDownloads = true;

    // We want to log to the console execution events
    // Remove or change to 0 in production
    _nodularJS_.loglevel = 2;

    // We'll use that to show the source of downloaded JavaScript files
    // This can be used for debug purposes
    _nodularJS_.onmodulestatuschange = function(module) {
        if (module.status == _nodularJS_.ModuleStatus.PREPARING) {
            var source = module.sourceCode();
            var pres = document.getElementsByClassName(module.file().replace(/^\.\//g, ''));
            showSourceCode(source, module.file(), pres);
        }
    }
