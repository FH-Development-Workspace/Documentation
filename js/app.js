const links = document.querySelectorAll(".nav-link");
const content = document.getElementById("content");

async function loadPage(page) {
    try {
        const response = await fetch(page);

        if (!response.ok) {
            throw new Error();
        }

        const html = await response.text();

        content.innerHTML = `
            <article>
                ${html}
            </article>
        `;
    }
    catch {
        content.innerHTML = `
            <article>
                <div class="page-title">HTTP 404 - Page Not Found</div>

                <div class="section">
                    <div class="section-title">What's a 404 Error?</div>

                     <p>The HTTP 404 Error means that the pages your trying to get to <b>do not exist or have been moved</b>, you can ask our Technical Support Department to have a look if you think the file should exist. We will
                        make sure that we have a look at your report. Please find our website home at <a href="https://fh-development.xyz/" target="_blank">https://fh-development.xyz/</a> if your still struggling.
                    </p>
                </div>
            </article>
        `;
    }
}

links.forEach(link => {

    link.addEventListener("click", () => {

        document
            .querySelector(".nav-link.active")
            ?.classList.remove("active");

        link.classList.add("active");

        loadPage(
            link.dataset.page
        );

    });

});

loadPage(
    document
        .querySelector(".nav-link.active")
        .dataset.page
);