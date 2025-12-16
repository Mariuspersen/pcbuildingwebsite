window.onload = load;

async function load() {
    const main_body = document.getElementById("content");
    const home = await fetch("home.html");
    const home_html = await home.text();
    main_body.innerHTML = home_html;
}

