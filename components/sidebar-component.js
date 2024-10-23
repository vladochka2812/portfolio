class SidebarComponent extends HTMLElement {
  constructor() {
    super();

    // Переносимо масив у властивість класу
    this.pages = ["index.html", "about.html", "projects.html", "contact.html"];

    const template = document.createElement("template");
    template.innerHTML = `
        <head> 
            <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
            />
        </head>
          <style>
            @import url("../styles/css/index.css");
          </style>
          <div class="sidebar">
          <div class="sidebar__navigation">
            <button id="prev">&#60;</button>
            <button id="next">&#62;</button>
            <button id="reload">&#8634;</button>
          </div>
          <div class="sidebar__profile">
            <img src="../images/portret.png" alt="Portret" />
            <span class="sidebar__profile__name">Yaxyobek Habibulloyev</span>
            <div class="sidebar__profile__description">
              <span>Junior</span>
              <span>Web Developer</span>
              <span>N1 Bot</span>
              <span>Junior Designer</span>
              <span>Human</span>
            </div>
          </div>
    
          <div class="sidebar__links">
            <div class="sidebar__link">
              <span class="sidebar__link__icon_wrapper" id="git-icon">
                <i class="fa fa-github"></i>
              </span>
              <a href="https://github.com/yaxyobekuz">
                <span class="social__media">Github</span>
                <span class="social__link">https://github.com/yaxyobekuz</span>
              </a>
            </div>
            <div class="sidebar__link">
              <span class="sidebar__link__icon_wrapper" id="inst-icon">
                <i class="fa fa-instagram"></i>
              </span>
              <a href="https://www.instagram.com/yaxyobekh.uz">
                <span class="social__media">Instagram</span>
                <span class="social__link"
                  >https://www.instagram.com/yaxyobekh.uz</span
                >
              </a>
            </div>
            <div class="sidebar__link">
              <span class="sidebar__link__icon_wrapper" id="telegram-icon">
                <i class="fa fa-telegram" aria-hidden="true"></i>
              </span>
              <a href="https://t.me/mryaxyobek">
                <span class="social__media">Telegram</span>
                <span class="social__link"> https://t.me/mryaxyobek </span>
              </a>
            </div>
          </div>
        </div>
        `;

    this.attachShadow({ mode: "open" }).append(
      template.content.cloneNode(true)
    );
  }

  goNextPage() {
    const nextButton = this.shadowRoot.getElementById("next");
    const currentPath = window.location.pathname.split("/").slice(-1)[0];
    const currentPageIndex = this.pages.indexOf(currentPath);

    nextButton.addEventListener("click", () => {
      if (currentPageIndex + 1 < this.pages.length) {
        window.location.href = this.pages[currentPageIndex + 1];
      } else if (currentPageIndex === this.pages.length - 1) {
        nextButton.disabled = true;
        nextButton.style.cursor = "not-allowed";
      }
    });
  }

  goPrevPage() {
    const prevButton = this.shadowRoot.getElementById("prev");
    const currentPath = window.location.pathname.split("/").slice(-1)[0];
    const currentPageIndex = this.pages.indexOf(currentPath);

    prevButton.addEventListener("click", () => {
      if (currentPageIndex > 0) {
        window.location.href = this.pages[currentPageIndex - 1];
      } else if (currentPageIndex === 0) {
        prevButton.disabled = true;
        prevButton.style.cursor = "not-allowed";
      }
    });
  }

  reloadPage() {
    this.shadowRoot
      .getElementById("reload")
      .addEventListener("click", function () {
        location.reload();
      });
  }

  connectedCallback() {
    this.goNextPage();
    this.goPrevPage();
    this.reloadPage();
  }
}

customElements.define("sidebar-component", SidebarComponent);
