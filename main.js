




$(function() {
    var sinit;
    // Generate static HTML such as the number palette.
    setup_screen();
    if (window.location.hash && (sinit = currentstate()).seed) {

        // If the URL contains game state, adjust the time and log an event.
        starttime = (new Date).getTime() - sinit.elapsed;
        $(document).trigger('log', ['linkgame', {seed: sinit.seed}]);
        saveseed(sinit.seed);
    } else {
        console.log("Setting up new game")
        // For a bare URL, modify the url to have a game (generated or loaded).
        setupgame(0);
    }
    // Render the current state of the game based on the URL.
    redraw();
    // Re-render whenever the URL hash changes.
    $(window).bind('hashchange', function() {
        redraw();
    });
    // Set the selected number to the 'eraser'.
    setcurnumber(0);
    // Show the instructions to the user
    if (currentstate().seed == 1) {
        showpopup('#intro');
    }
});
