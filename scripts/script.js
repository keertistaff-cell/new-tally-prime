    // Load Header
    fetch("/assets/header.html")
        .then(res => res.text())
        .then(data => {
            document.getElementById("header").innerHTML = data;
        });

    // Load Footer Company Name
    fetch("/assets/footer.html")
        .then(res => res.text())
        .then(data => {
            document.getElementById("footer").innerHTML = data;
        });


        fetch("/advanced-tally.html")
    .then(res => res.text())
    .then(data => {
        const doc = new DOMParser().parseFromString(data, "text/html");

        const container = doc.querySelector(".container");

        document.getElementById("nav").appendChild(container);
    })
    .catch(err => console.error(err));