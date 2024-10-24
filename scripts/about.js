const technologiesListContainer = document.getElementById(
  "about__technologies__list"
);
const doListContainer = document.getElementById("about__do__list");

const technologiesList = [
  { image: "../images/technologies/html.png", name: "HTML" },
  { image: "../images/technologies/css.png", name: "CSS" },
  { image: "../images/technologies/js.png", name: "JS" },
  { image: "../images/technologies/react.png", name: "React JS" },
  { image: "../images/technologies/tailwind.png", name: "Tailwind CSS" },
  { image: "../images/technologies/figma.png", name: "Figma" },
  { image: "../images/technologies/swiper.png", name: "Swiper JS" },
  { image: "../images/technologies/antd.png", name: "ANTD" },
];

const doingList = [
  {
    image: "../images/do/seo.png",
    title: "SEO",
    description: "Boost website ranking in search engine results",
  },
  {
    image: "../images/do/design.png",
    title: "Strong Design",
    description: "Focus on elegance and attention to small details in design",
  },
  {
    image: "../images/do/hqd.png",
    title: "High-Quality Development",
    description: "Develop websites with top-notch quality and modern standards",
  },
  {
    image: "../images/do/efficiency.png",
    title: "Efficiency",
    description:
      "Create websites quickly and efficiently within short time frames",
  },
];

const handleHover = (name) => {
  const element = document.getElementById(name);
  const image = document.getElementById("image-" + name);
  const title = document.getElementById("name-" + name);

  element.addEventListener("mouseover", () => {
    image.style.display = "none";
    title.style.display = "flex";
  });

  element.addEventListener("mouseleave", () => {
    image.style.display = "flex";
    title.style.display = "none";
  });
};

for (let i = 0; i < technologiesList.length; i++) {
  const { image, name } = technologiesList[i];
  const liItem = `<li class="technology__item" id="${name}">
                    <img src="${image}" src="${name}" class="technology__logo" id="image-${name}"/>
                    <span class="technology__name" id="name-${name}">${name}</span>
                </li>
                `;

  technologiesListContainer.innerHTML += liItem;
}

technologiesList.forEach((technology) => {
  const { name } = technology;
  handleHover(name);
});

for (let i = 0; i < doingList.length; i++) {
  const { image, title, description } = doingList[i];
  const liItem = `<li class="do__item">
                      <img src="${image}" src="${title}" class="do__image"/>
                      <div class="do__text">
                        <h4 class="do__text__title"> ${title}</h4>
                        <p class="do__text__description">${description} </p>
                      </div>
                  </li>
                  `;

  doListContainer.innerHTML += liItem;
}
