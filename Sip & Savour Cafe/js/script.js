document.addEventListener("DOMContentLoaded", function () {
    const search = document.getElementById("menuSearch");
    const searchableItems = document.querySelectorAll("[data-menu-item]");
    const noResults = document.getElementById("noResults");

    if (search) {
        search.addEventListener("input", function () {
            const term = search.value.toLowerCase().trim();
            let shown = 0;
            searchableItems.forEach(function (item) {
                const match = item.textContent.toLowerCase().includes(term);
                item.style.display = match ? "" : "none";
                if (match) shown++;
            });
            if (noResults) {
                noResults.textContent = shown === 0
                    ? "No items found. Try another search."
                    : "";
            }
        });
    }

    const images = Array.from(document.querySelectorAll(".gallery img"));
    const viewer = document.getElementById("imageViewer");
    const viewerImage = document.getElementById("viewerImage");
    const viewerCaption = document.getElementById("viewerCaption");
    const closeButton = document.getElementById("viewerClose");
    const previousButton = document.getElementById("viewerPrevious");
    const nextButton = document.getElementById("viewerNext");
    let currentImage = 0;

    function showImage(index) {
        if (!images.length || !viewer || !viewerImage) return;
        currentImage = (index + images.length) % images.length;
        viewerImage.src = images[currentImage].src;
        viewerImage.alt = images[currentImage].alt || "Café gallery photograph";
        if (viewerCaption) {
            viewerCaption.textContent = (images[currentImage].alt || "Café photograph") +
                " (" + (currentImage + 1) + " of " + images.length + ")";
        }
        viewer.classList.add("is-open");
        viewer.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
        if (closeButton) closeButton.focus();
    }

    function closeViewer() {
        if (!viewer) return;
        viewer.classList.remove("is-open");
        viewer.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
    }

    images.forEach(function (img, index) {
        img.setAttribute("tabindex", "0");
        img.setAttribute("role", "button");
        img.setAttribute("aria-label", "View image: " + (img.alt || "café photo"));
        img.addEventListener("click", function () { showImage(index); });
        img.addEventListener("keydown", function (event) {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                showImage(index);
            }
        });
    });

    if (closeButton) closeButton.addEventListener("click", closeViewer);
    if (previousButton) previousButton.addEventListener("click", function () { showImage(currentImage - 1); });
    if (nextButton) nextButton.addEventListener("click", function () { showImage(currentImage + 1); });
    if (viewer) {
        viewer.addEventListener("click", function (event) {
            if (event.target === viewer) closeViewer();
        });
    }
    document.addEventListener("keydown", function (event) {
        if (!viewer || !viewer.classList.contains("is-open")) return;
        if (event.key === "Escape") closeViewer();
        if (event.key === "ArrowLeft") showImage(currentImage - 1);
        if (event.key === "ArrowRight") showImage(currentImage + 1);
    });

    const bookingForm = document.getElementById("bookingForm");
    if (bookingForm) {
        const dateInput = bookingForm.querySelector('input[type="date"]');
        if (dateInput) {
            const today = new Date();
            const localToday = new Date(today.getTime() - today.getTimezoneOffset() * 60000)
                .toISOString().split("T")[0];
            dateInput.min = localToday;
        }

        bookingForm.addEventListener("submit", function (event) {
            event.preventDefault();
            if (!bookingForm.checkValidity()) {
                bookingForm.reportValidity();
                return;
            }
            let result = bookingForm.querySelector(".form-message");
            if (!result) {
                result = document.createElement("p");
                result.className = "form-message";
                result.setAttribute("role", "status");
                bookingForm.appendChild(result);
            }
            const nameField = bookingForm.querySelector('input[name="name"], input[id*="name" i]');
            const name = nameField ? nameField.value.trim() : "there";
            result.textContent = "Thank you, " + name + "! Your booking request has been prepared. Please phone the café to confirm availability. This website demo does not send a reservation automatically.";
        });
    }

    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();
            if (!contactForm.checkValidity()) {
                contactForm.reportValidity();
                return;
            }

            const fields = new FormData(contactForm);
            const name = fields.get("name") || fields.get("contactName") || "";
            const email = fields.get("email") || fields.get("contactEmail") || "";
            const message = fields.get("message") || fields.get("contactMessage") || "";
            const subjectText = fields.get("subject") || fields.get("messageType") || "Website enquiry";
            const subject = encodeURIComponent("Sip & Savour Café - " + subjectText);
            const body = encodeURIComponent("Name: " + name + "\nEmail: " + email + "\n\nMessage:\n" + message);
            const result = contactForm.querySelector(".form-message") || document.createElement("p");
            result.className = "form-message";
            result.textContent = "Your email app should open with the message prepared. Please press Send in that app. If it does not open, email hello@sipandsavourcafe.co.za.";
            if (!result.parentElement) contactForm.appendChild(result);
            window.location.href = "mailto:hello@sipandsavourcafe.co.za?subject=" + subject + "&body=" + body;
        });
    }

    const newsletter = document.querySelector('form[data-newsletter]');
    if (newsletter) {
        newsletter.addEventListener("submit", function (event) {
            event.preventDefault();
            if (!newsletter.checkValidity()) {
                newsletter.reportValidity();
                return;
            }
            let message = newsletter.querySelector(".form-message");
            if (!message) {
                message = document.createElement("p");
                message.className = "form-message";
                newsletter.appendChild(message);
            }
            message.textContent = "Thank you for your interest! Newsletter subscription is a demonstration and has not been saved.";
        });
    }

    const enquiryForm = document.getElementById("enquiryForm");
    if (enquiryForm) {
        const enquiryDate = document.getElementById("enquiryDate");
        if (enquiryDate) {
            const today = new Date();
            enquiryDate.min = new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString().split("T")[0];
        }
        enquiryForm.addEventListener("submit", function (event) {
            event.preventDefault();
            if (!enquiryForm.checkValidity()) {
                enquiryForm.reportValidity();
                return;
            }
            const topic = document.getElementById("enquiryType").value;
            const guests = document.getElementById("enquiryGuests").value;
            const response = document.getElementById("enquiryResponse");
            const replies = {
                booking: "Thank you for your booking enquiry. Please phone the café to confirm the date, time and table availability.",
                menu: "Thanks for asking about our menu. We offer breakfast, lunch, coffee, drinks, pastries and desserts. Please contact us to confirm current ingredients and availability.",
                catering: "Thank you for your group order enquiry. Please contact the café directly so we can discuss options and pricing.",
                other: "Thank you for contacting Sip & Savour Café. Your enquiry has been checked in this demo. Please contact the café directly for a personal reply."
            };
            response.textContent = replies[topic] || replies.other;
            if (topic === "booking" & guests) response.textContent += " Your request is for " + guests + " guest(s).";
            response.textContent += " This demonstration does not send or save the enquiry.";
        });
    }

});
