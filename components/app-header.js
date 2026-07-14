const headerTemplate = `
  <header class="header">
    <div class="container header-inner">
      <a class="logo" href="#">Vaccination.ng</a>

      <nav class="navigation" aria-label="Primary navigation">
        <ul class="navigation-list" id="primary-navigation">
          <li>
            <a class="navigation-link is-active" href="#">Home</a>
          </li>
          <li>
            <a class="navigation-link" href="#schedule">Schedule</a>
          </li>
          <li>
            <a class="navigation-link" href="#services">Services</a>
          </li>
          <li>
            <a class="navigation-link" href="#contact">Contact us</a>
          </li>
        </ul>
      </nav>

      <a class="status-link" href="#status">Check Status</a>
      <button
        class="menu-toggle"
        type="button"
        aria-label="Toggle menu"
        aria-controls="primary-navigation"
        aria-expanded="false"
      >
        <i class="menu-icon" data-lucide="menu"></i>
        <i class="close-icon" data-lucide="x"></i>
      </button>
    </div>
  </header>
`;

class AppHeader extends HTMLElement {
  connectedCallback() {
    if (this.hasChildNodes()) {
      return;
    }

    this.innerHTML = headerTemplate;
    const header = this.querySelector(".header");
    const menuToggle = this.querySelector(".menu-toggle");

    menuToggle.addEventListener("click", () => {
      const isOpen = header.classList.toggle("is-menu-open");

      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });
  }
}

if (!customElements.get("app-header")) {
  customElements.define("app-header", AppHeader);
}
