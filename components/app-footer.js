const footerTemplate = `
  <footer class="footer">
    <div class="container footer-inner">
      <a class="logo footer-logo" href="#">Vaccination.ng</a>

      <nav class="footer-navigation" aria-label="Footer navigation">
        <ul class="footer-navigation-list">
          <li><a class="is-active" href="#">Home</a></li>
          <li><a href="#schedule">Schedule</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact us</a></li>
        </ul>
      </nav>

      <div class="social-links">
        <a href="#" aria-label="YouTube"><i class="fa-brands fa-youtube"></i></a>
        <a href="#" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
        <a href="#" aria-label="Twitter"><i class="fa-brands fa-twitter"></i></a>
        <a href="#" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
      </div>
    </div>
  </footer>
`;

class AppFooter extends HTMLElement {
  connectedCallback() {
    if (this.hasChildNodes()) {
      return;
    }

    this.innerHTML = footerTemplate;
  }
}

if (!customElements.get("app-footer")) {
  customElements.define("app-footer", AppFooter);
}
