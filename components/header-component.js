class HeaderComponent extends HTMLElement {
  constructor() {
    super();

    const template = document.createElement("template");
    template.innerHTML = `
        <style>
          @import url("../styles/css/index.css");
        </style>
        <header class="header">
          <div class="header__left">
            <span class="header__title"> <span>YAXYOBEK</span> </span>
          </div>
          <nav class="header__right">
            <ul>
              <li><a href="./index.html" id="index" class="nav__link">Home</a></li>
              <li><a href="./about.html" id="about" class="nav__link">About</a></li>
              <li><a href="./projects.html" id="projects" class="nav__link">Projects</a></li>
              <li><a href="./contact.html" id="contact" class="nav__link">Contact</a></li>
            </ul>
            <a
              target="_blank"
              class="header__right__git-link"
              href="https://github.com/yaxyobekuz"
              aria-label="Yaxyobek github profile"
            >
              <img
                src="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M12%201.5C6.1995%201.5%201.5%206.195%201.5%2011.9895C1.5%2016.6245%204.509%2020.5545%208.6805%2021.942C9.2055%2022.038%209.3975%2021.714%209.3975%2021.4365C9.3975%2021.1875%209.3885%2020.5275%209.3825%2019.6515C6.462%2020.286%205.847%2018.246%205.847%2018.246C5.3685%2017.034%204.68%2016.7115%204.68%2016.7115C3.7275%2016.0605%204.752%2016.074%204.752%2016.074C5.8065%2016.149%206.3615%2017.154%206.3615%2017.154C7.2975%2018.759%208.8185%2018.294%209.417%2018.027C9.5115%2017.349%209.783%2016.887%2010.083%2016.6245C7.752%2016.3605%205.301%2015.4605%205.301%2011.4405C5.301%2010.296%205.7105%209.3585%206.381%208.6265C6.273%208.361%205.913%207.2945%206.486%205.8515C6.486%205.8515%207.365%205.568%209.372%206.9255C10.2286%206.69213%2011.1122%206.5731%2012%206.5715C12.8925%206.576%2013.791%206.6915%2014.6295%206.9255C16.6335%205.568%2017.514%205.85%2017.514%205.85C18.087%207.2945%2017.727%208.361%2017.619%208.625C18.291%209.36%2018.699%2010.296%2018.699%2011.4405C18.699%2015.4695%2016.242%2016.3575%2013.9035%2016.6155C14.28%2016.9395%2014.616%2017.58%2014.616%2018.5595C14.616%2019.9605%2014.6025%2021.0915%2014.6025%2021.4365C14.6025%2021.717%2014.793%2022.0425%2015.3255%2021.9405C17.4141%2021.2441%2019.2307%2019.9084%2020.5183%2018.1226C21.8058%2016.3367%2022.4991%2014.1911%2022.5%2011.9895C22.4984%209.20618%2021.3913%206.53747%2019.4222%204.57035C17.4531%202.60323%2014.7833%201.49881%2012%201.5Z'%20fill='white'/%3e%3c/svg%3e"
                alt="github logo svg"
              />
            </a>
          </nav>
        </header>
      `;

    this.attachShadow({ mode: "open" }).append(
      template.content.cloneNode(true)
    );
  }

  createActiveLink() {
    const links = this.shadowRoot.querySelectorAll(".nav__link");
    const currentPath = window.location.pathname.split("/").slice(-1)[0];
    links.forEach((link) => {
      const currentLink = link.getAttribute("href").split("/").slice(-1)[0];

      if (currentLink === currentPath) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }

  connectedCallback() {
    this.createActiveLink();
  }
}

customElements.define("header-component", HeaderComponent);
