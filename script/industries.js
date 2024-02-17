$(document).ready(function () {
    // Function to handle screen size changes
    function handleScreenSize() {
        // Check if the screen width is below the specified breakpoint (767px)
        if ($(window).width() < 768) {
            // If it's a small screen, fade out desktop-svg and fade in mobile-svg
            $('.desktop-svg').css('opacity', 0);
            $('.mobile-svg').css('opacity', 1);
        } else {
            // If it's a normal screen, fade out mobile-svg and fade in desktop-svg
            $('.desktop-svg').css('opacity', 1);
            $('.mobile-svg').css('opacity', 0);
        }
    }

    // Call the function on page load
    handleScreenSize();s

    // Bind the function to the window resize event
    $(window).resize(handleScreenSize);
});