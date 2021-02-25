function hello() {
    // Single h1
    //document.querySelector("h1").innerHTML = "Hello World!";

    // For all headings
    //
    const headings = document.querySelectorAll("h1");
    for (heading of headings) {
        heading.innerHTML = "Hello World!";
    }
}