window.onload = () => {
    const themeSwitcher = document.getElementById('theme-switcher');
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

    const currentTheme = localStorage.getItem("theme");
    if (currentTheme == "dark") {
        document.body.classList.add('dark-theme');
    } else if (currentTheme == "light") {
        document.body.classList.remove('dark-theme');
    } else if (prefersDarkScheme.matches) {
        // Dark mode on PC
        document.body.classList.add('dark-theme');
    }

    themeSwitcher.addEventListener("click", () => {
        let theme;
        if (document.body.classList.contains('dark-theme')) {
            document.body.classList.remove('dark-theme');
            theme = "light";
        }
        else {
            document.body.classList.add('dark-theme');
            theme = "dark";
        }
        localStorage.setItem("theme", theme);

        switchButtons();
    })

    switchButtons();
}

function switchButtons() {
    const icon = document.getElementById("theme-icon");
    const text = document.getElementById("switch-label");

    if (document.body.classList.contains('dark-theme')) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
        text.innerHTML = "Switch to light"
    } else {
        icon.classList.add("fa-moon");
        icon.classList.remove("fa-sun");
        text.innerHTML = "Switch to dark"
    }
}