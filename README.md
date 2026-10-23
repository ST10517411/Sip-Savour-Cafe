Sip & Savour Café Website

Project Overview
Sip & Savour Café is a website created for a fictional local café based in Rosebank, Johannesburg, Gauteng, South Africa.

The website was developed as a Part 1 and Part 2 web development project. Part 1 focused on creating the website structure and content using HTML. Part 2 improved the original website by adding CSS styling, branding, a café logo, a fixed background image, visual effects and responsive layouts for different screen sizes.

The website provides customers with information about the café, the menu, promotions, events, photographs, contact details and booking information.

Business Information
Business name: Sip & Savour Café Location: 50 Bath Avenue, Rosebank, Johannesburg, Gauteng, 2196, South Africa Email: hello@sipandsavourcafe.co.za Phone: 011 000 0000

Opening hours:

Monday – Friday: 07:00 – 18:00

Saturday – Sunday: 08:00 – 17:00

Project Objectives
The main objectives of the website are to:

Give customers information about Sip & Savour Café.

Display the café's food and drinks menu.

Advertise weekly promotions and seasonal desserts.

Show photographs of the café and its products.

Provide contact and location information.

Allow customers to submit a booking request.

Provide a newsletter subscription form.

Create a consistent visual identity across all pages.

Make the website usable on desktop, tablet and mobile screen sizes.

Website Pages
Home Page

The Home page introduces Sip & Savour Café and includes welcome information, services, popular items, location information and links to the other pages.

About Us Page

The About Us page provides information about the café, its mission, vision, values and target customers.

Menu Page

The Menu page displays:

Breakfast

Lunch

Drinks

Desserts

Pastries

Weekly promotions

Seasonal desserts

Example items include Sunrise Breakfast, Avocado Toast, Chicken Wrap, Garden Salad, House Latte, Fresh Lemonade, Fresh Juice, Hot Chocolate, Chocolate Cake, Cheesecake, Lemon Tart, Apple Crumble, Chocolate Brownie, Strawberry Cheesecake, Butter Croissant and Blueberry Muffin.

Gallery Page

The Gallery page displays café-related photographs, including the café interior, coffee, breakfast, desserts, pastries and drinks.

Special Offers Page

The Special Offers page contains weekly promotions, seasonal desserts, upcoming events and a newsletter subscription form.

Contact Us Page

The Contact Us page contains the café address, email, telephone number, opening hours, booking form, contact form and an embedded Google Map.

Part 1 Development
Part 1 focused on creating the basic website structure using HTML.

The six main pages are:

index.html about.html menu.html gallery.html offers.html contact.html

The pages were connected using navigation links.

HTML features used include:

Headings

Paragraphs

Lists

Links

Tables

Images

Forms

Input fields

Buttons

Navigation

Footer sections

Embedded map content

Part 2 Development
Part 2 improved the existing Part 1 website instead of creating a completely new website.

A shared stylesheet called style.css was added to control the appearance of the pages.

The main improvements include:

Consistent colours and branding

Sip & Savour Café logo

Fixed café background image

Transparent content sections

Header styling

Navigation styling

Button styling

Table styling

Gallery styling

Image hover effects

Form styling

Footer styling

Mobile layout

Tablet layout

Desktop layout

Mobile and tablet preview controls

Website Branding
A PNG logo was created for Sip & Savour Café.

The logo contains:

The café name

A coffee cup

Coffee steam

Leaf elements

Green, brown, gold and cream colours

The logo is intended to appear consistently across the website pages.

Website Background
A café interior image is used as the main website background.

The CSS uses the following properties:

background-image: url('../images/cafe-background.jpg'); background-size: cover; background-position: center; background-attachment: fixed;

The background-attachment: fixed property keeps the background image fixed while the page content scrolls.

A darker overlay is also used on the hero section to improve text readability.

CSS Design
The shared style.css file controls the appearance of the website.

It includes styling for:

Body and background

Header

Logo

Navigation

Main content

Sections

Headings

Buttons

Tables

Gallery images

Forms

Footer

Responsive layouts

Glass-Style Sections
The header and main sections use a transparent glass-style effect. The design uses semi-transparent white backgrounds, blur, borders and shadows to make the content readable while still showing the café background.

Example:

background: rgba(255, 255, 255, 0.65); backdrop-filter: blur(12px); border: 1px solid rgba(255, 255, 255, 0.5); box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);

Gallery Effects
The gallery images have simple hover and active effects.

When the mouse is placed over an image, it moves slightly upwards and receives a larger shadow.

.gallery img:hover { transform: translateY(-10px); }

These effects are created with CSS and do not require JavaScript.

Responsive Design
The website was designed to work on different screen sizes, including desktop computers, tablets and mobile phones.

CSS media queries are used to change the layout according to screen width.

Mobile Layout

On smaller screens:

The logo becomes smaller.

Navigation links are displayed vertically.

Gallery images use more screen width.

Content sections use less padding.

Tables can scroll horizontally when needed.

Text sizes are reduced where necessary.

Tablet Layout

On tablet-sized screens:

The main content uses more of the available width.

Gallery images use a flexible layout.

Navigation remains compact.

The logo is slightly smaller than the desktop version.

Mobile and Tablet Preview Controls
A simple Mobile and Tablet layout selection area was added for testing the appearance of the website.

The controls use HTML radio buttons and CSS. No JavaScript is required for the controls.

The controls are intended as a simple way to preview the different layouts while developing the website.

Technologies and Tools Used
HTML5

HTML5 was used to create the structure and content of the website pages.

CSS3

CSS3 was used for colours, fonts, spacing, backgrounds, layouts, buttons, tables, forms, gallery effects and responsive design.

Visual Studio Code

Visual Studio Code was used to create and edit the HTML and CSS files.

Live Server

Live Server was used to open and test the website in a browser while making changes.

GitHub

GitHub was used to store and manage the website project and its files.

Google Chrome

Google Chrome was used to view and test the website.

Project Structure
The project can be organised as follows:

Sip-and-Savour-Cafe/ │ ├── index.html ├── about.html ├── menu.html ├── gallery.html ├── offers.html ├── contact.html ├── style.css │ └── images/ ├── logo.png ├── cafe-background.jpg └── other website images

The exact image filenames may differ depending on the files stored in the project.

How to Run the Website
Using Visual Studio Code

Open the project folder in Visual Studio Code.

Make sure all six HTML pages are in the project folder.

Make sure style.css is in the correct folder.

Make sure the images are stored in the correct images folder.

Open index.html.

Right-click the file.

Select Open with Live Server.

The website will open in the browser.

Opening the HTML File Directly

The website can also be opened by double-clicking index.html. Live Server is useful during development because it makes it easier to view changes.

Testing
The website should be tested to make sure:

All navigation links work.

All six pages open correctly.

The CSS loads correctly.

The logo appears correctly.

The background image appears correctly.

The background stays fixed while scrolling.

Images load correctly.

Tables display correctly.

Forms display correctly.

The Google Map displays correctly.

The gallery displays correctly.

Mobile layout works correctly.

Tablet layout works correctly.

Desktop layout works correctly.

The website does not require JavaScript.

Design Choices
The design uses green, brown, gold and cream colours because they suit the café theme and create a warm and natural appearance.

The café background image helps create a stronger connection between the website and a café environment.

The transparent sections allow the background image to remain visible while keeping the website content readable.

The same navigation, logo and colour scheme are used throughout the website to keep the pages consistent.

Accessibility and Usability
The website uses descriptive alternative text for images where appropriate.

The navigation is kept simple so visitors can move between the main pages easily.

Forms contain labels and input fields for the information required from customers.

Responsive CSS allows the website to adapt to different screen sizes.

Limitations
This is a front-end website created using HTML and CSS.

The following features are not connected to a real database or backend system:

Booking submissions

Contact form submissions

Newsletter subscriptions

The website does not use JavaScript. The forms are therefore mainly included as part of the website interface and demonstration.

Future Improvements
Possible future improvements include:

Connecting the booking form to a real database.

Adding an online ordering system.

Adding a real newsletter service.

Adding a customer feedback section.

Adding more café photographs.

Adding accessibility testing.

Adding a secure backend.

Adding real-time booking availability.

Publishing the website online using GitHub Pages or another hosting service.

Project Status
Part 1

Website structure completed.

Six HTML pages created.

Navigation added.

Menu and business information added.

Forms and tables added.

Gallery added.

Contact information added.

Part 2

CSS stylesheet added.

Logo added.

Background image added.

Fixed background implemented.

Glass-style sections added.

Gallery hover effects added.

Forms and tables styled.

Mobile layout added.

Tablet layout added.

Desktop layout maintained.

Mobile and tablet preview controls added.

Changelog
Part 1 – Initial Website

Created the basic Sip & Savour Café website structure.

Created six HTML pages: Home, About Us, Menu, Gallery, Special Offers and Contact Us.

Added navigation links between the pages.

Added café information, menu items, prices and promotions.

Added tables, lists, images and forms.

Added contact details, opening hours and a map.

Added the website to GitHub.

Part 2 – Website Styling and Improvements

Added a shared style.css file to style the existing Part 1 pages.

Added the Sip & Savour Café PNG logo.

Added a café interior background image.

Added a fixed background so the image stays in place while the page scrolls.

Added a darker background overlay for the hero section.

Added green, brown, gold and cream colours to match the café branding.

Added transparent glass-style sections to improve the visual design.

Styled the header, navigation, buttons, tables, forms and footer.

Added gallery hover and click effects using CSS.

Added responsive CSS for mobile devices.

Added responsive CSS for tablets.

Added an additional layout for smaller mobile screens.

Added Mobile and Tablet buttons for previewing the layouts.

Kept the project HTML and CSS based without JavaScript.

Current Version

The current version combines the original Part 1 website structure with the Part 2 CSS styling, branding, background image and responsive design improvements.

References
The following sources were used to support the technical aspects of the website and the README documentation.

GitHub Docs, 2026. About the repository README file. Available at: < https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes. > [Accessed 18 September 2026].

GitHub Docs, 2026. Best practices for repositories. Available at: < https://docs.github.com/en/repositories/creating-and-managing-repositories/best-practices-for-repositories. > [Accessed 18 September 2026].

MDN Web Docs, 2026. HTML elements reference. Available at: < https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements. > [Accessed 18 September 2026].

MDN Web Docs, 2026. background-attachment CSS property. Available at: < https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/background-attachment. > [Accessed 18 September 2026].

MDN Web Docs, 2026. backdrop-filter CSS property. Available at: < https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/backdrop-filter. > [Accessed 18 September 2026].

MDN Web Docs, 2026. Responsive web design. Available at: < https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design. > [Accessed 18 September 2026].

MDN Web Docs, 2026. Media query fundamentals. Available at: < https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Media_queries. > [Accessed 18 September 2026].

MDN Web Docs, 2026. Flexbox. Available at: < https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Flexbox. > [Accessed 18 September 2026].

Unsplash, 2025. Can I use Unsplash images for personal or commercial projects? Available at: < https://help.unsplash.com/en/articles/2612315-can-i-use-unsplash-images-for-personal-or-commercial-projects. > [Accessed 18 September 2026].

Unsplash, 2025. Terms and Conditions. Available at: < https://unsplash.com/terms. > [Accessed 18 September 2026].

## Part 3: JavaScript, SEO and Form Improvements

The existing Part 1 and Part 2 pages and design were retained. Part 3 adds the following features:

- JavaScript menu search to filter menu rows and items.
- Gallery hover effects and a larger image viewer with previous/next buttons.
- Keyboard support for gallery viewing (Enter, Space, Escape and arrow keys).
- Booking form validation and an on-page confirmation message.
- A new `enquiry.html` page with topic-specific responses.
- Contact form validation and a `mailto:` link that prepares an email in the visitor's email application.
- SEO page titles, meta descriptions, keywords and responsive viewport metadata.
- `robots.txt` and `sitemap.xml` templates.
- A responsive lightbox and form message styles appended to the existing stylesheet.

### Part 3 limitations

The booking form is a front-end demonstration and does not save a booking or check live availability. The contact form opens the visitor's email application; the visitor must send the email. The enquiry form displays a demonstration response and does not send or store enquiries. A real booking or contact service requires a backend or a trusted form-processing service.

### Changelog

- **Part 1:** Created six main HTML pages with café information, menu, gallery, promotions and contact details.
- **Part 2:** Added the shared CSS styling, café logo, fixed background, glass-style sections, gallery hover effects and responsive mobile/tablet layouts.
- **Part 3:** Added JavaScript interactions, menu search, single-image gallery viewer, booking/contact validation, enquiry page, SEO metadata, robots and sitemap templates.
