(() => {
    // Select elements that are needed for toggling in navigation menu
    const openNav = document.querySelector(".open-menu"),
        closeNav = document.querySelector(".close-menu"),
        navMenu = document.querySelector(".nav-links-container"),
        background = document.querySelector(".background"),
        mediaSize = 992; //This should be the breakpoint


    //Adding click event for open, close and background 
    openNav.addEventListener("click", toggleMenu);
    closeNav.addEventListener("click", toggleMenu);
    background.addEventListener("click", toggleMenu);

    // Function to toggle the navigation menu and background at the back
    function toggleMenu() {
        navMenu.classList.toggle("open"); //Toggle of menu
        background.classList.toggle("active"); //Toggle of backgroud
    }

    //Handling the dropdown menu toggle
    navMenu.addEventListener("click", (event) => {

        //Checking if the clicked element has data-toggle
        if (event.target.hasAttribute("data-toggle") && window.innerWidth <= mediaSize) {
            event.preventDefault(); //Prevent default link behaviour
            const dropdownMenuBranch = event.target.parentElement;

            //If the dropdown is already open then it should collapse it
            if (dropdownMenuBranch.classList.contains("active")) {
                collapseDropdownMenu();
            } else {
                //Collapse any other open dropdown first
                if (navMenu.querySelector(".dropdown-menu-branch.active")) {
                    collapseDropdownMenu();
                }

                //Opening of the clicked dropdown 
                dropdownMenuBranch.classList.add("active");
                const dropdownMenu = dropdownMenuBranch.querySelector(".dropdown-menu")
                dropdownMenu.style.maxHeight = dropdownMenu.scrollHeight + "px";
            }
        }
    });

    // The function collapses the open dropdown mneu that is currently open
    function collapseDropdownMenu() {
        navMenu
            .querySelector(".dropdown-menu-branch.active .dropdown-menu")
            .removeAttribute("style") // Removing of the max-height style
        navMenu
            .querySelector(".dropdown-menu-branch.active")
            .classList.remove("active") // Remove active class
    }
})();