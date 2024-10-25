const types = ["website", "figma", "tg bot"];
const hardness = ["low", "medium", "high"];
const hardnessColors = {
  low: "rgba(57, 150, 95, 1)",
  medium: "rgb(234, 179, 8, 1)",
  high: "rgb(239, 68, 68, 1)",
};

const projectsList = [
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-859f5.appspot.com/o/projects%2Fk20-team.jpg?alt=media&token=6d8e9bdb-1154-4278-836f-aeaa3cedf341",
    link: "https://github.com/yaxyobekuz/k20-team",
    name: "K20 Team",
    hardness: hardness[0],
    appLink: "https://k20-team.netlify.app/",
    description:
      "The K20 Team website is designed to facilitate requests from truck drivers to join the K20 team, with requests automatically sent to a Telegram channel. The website is entirely in English and consists of four pages: Home, About, Join, and Success Notification. Notably, the website was developed without using any Figma designs.",
    tags: [
      "Vite",
      "ReactJS",
      "TailwindCSS",
      "SwiperJS",
      "AnimateCSS",
      "English",
      "Truck",
      "Requests",
      "Team",
    ],
    type: types[0],
  },

  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-859f5.appspot.com/o/projects%2Fkarate-kido.jpg?alt=media&token=30aa25bc-6bce-4b45-9bff-e131eef44170",
    link: "https://github.com/yaxyobekuz/karate-kido",
    name: "Karate Kido Website Game",
    hardness: hardness[1],
    appLink: "https://karate-kido.netlify.app/",
    description:
      "Karate Kido is an exciting website game with an interface entirely in Uzbek. The game features a small karate master character who trains by breaking karate boards without colliding with them. Each time the character successfully breaks a board, extra time is granted. However, as the character progresses and breaks more boards, the time gradually decreases. The key to success in the game is maintaining and increasing speed!",
    tags: ["HTML", "CSS", "JS", "Game", "Karate", "Karate Kido", "Funny"],
    type: types[0],
  },

  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-859f5.appspot.com/o/projects%2Fofis-mebellari.jpg?alt=media&token=71162a62-b902-4ee6-b50a-3f1865e3f3e7",
    link: "https://github.com/yaxyobekuz/ofis-mebellari",
    name: "Ofis mebellari",
    hardness: hardness[2],
    appLink: "https://ofis-mebellari.uz/",
    description:
      "The Ofis mebellari website is dedicated to showcasing high-quality office furniture designed to enhance productivity and comfort in the workplace. I built the website from scratch without any team involvement, focusing primarily on its visual appeal.In developing this site, I used Vite, ReactJS, and TailwindCSS as the main technologies. Additionally, I integrated SwiperJS for dynamic content display, React Toastify for user notifications, and Ant Design for a modern and intuitive user interface.",
    tags: ["Vite", "TailwindCSS", "ReactJS", "Furniture", "Website"],
    type: types[0],
  },

  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-859f5.appspot.com/o/projects%2Fclaim-blum-tokens.jpg?alt=media&token=2a475784-6053-4707-873a-32abf9285dfe",
    link: "https://github.com/yaxyobekuz/claim-blum-tokens",
    name: "Claim BLum Tokens Bot",
    hardness: hardness[0],
    appLink: "https://t.me/claimblumtokensbot",
    description:
      "The Claim-Blum-Tokens bot is a Telegram mini-app designed to help users easily collect tokens from the popular Blum game on Telegram. As long as the Blum game continues to run, this bot will remain fully operational!",
    tags: [
      "Vite",
      "TailwindCSS",
      "ReactJS",
      "Telegram",
      "Web App",
      "Blum Game",
      "Blum Token",
      "Bot",
      "Mini App",
    ],
    type: types[2],
  },

  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-859f5.appspot.com/o/projects%2Fmene-market-image.png?alt=media&token=15aa190b-d780-4162-b2bf-45f57da5c92d",
    link: "https://github.com/yaxyobekuz/mene-market",
    name: "Mene Market",
    hardness: hardness[2],
    appLink: "https://mene-market.netlify.app/",
    description:
      "The Mene Market website is an online platform for selling products, primarily designed in Uzbek. It features a user-friendly admin panel that allows for easy management of products and orders. With more than 18 pages, the site provides a comprehensive shopping experience, making it easy for users to browse and purchase a wide range of products.",
    tags: [
      "Vite",
      "TailwindCSS",
      "ReactJS",
      "Website",
      "E-commerce",
      "Online Shopping",
      "Uzbek",
      "Admin Panel",
    ],
    type: types[0],
  },

  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-859f5.appspot.com/o/projects%2Fmashina-bozor-image.webp?alt=media&token=992c36f1-7e23-4b7e-b25a-09d55053fc1b",
    link: "https://github.com/Andarov/moshina-bozor",
    name: "Mene Market",
    hardness: hardness[1],
    appLink: "https://moshina-bozor.vercel.app/",
    description:
      "The Mashina Bozor website is a collaborative project focused on the buying and selling of cars in Uzbekistan. I contributed by creating the design for the site, while the internal functionalities were developed by the team. The platform provides a user-friendly experience for users looking to buy or sell vehicles, featuring a variety of listings and options.",
    tags: [
      "Vite",
      "ReactJS",
      "TailwindCSS",
      "Uzbekistan",
      "Car Sales",
      "Design",
      "Collaboration",
      "User-Friendly",
    ],
    type: types[0],
  },

  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-859f5.appspot.com/o/projects%2Fmy-team.png?alt=media&token=4415c44e-7775-4047-b4c9-aab5a8a7dd0d",
    link: "https://github.com/yaxyobekuz/my-team",
    name: "My Team",
    hardness: hardness[0],
    appLink: "https://uz-myteam.netlify.app/",
    description:
      "The My Team website provides detailed information about a specific user's team. It is designed to be fully responsive, ensuring a seamless experience across all devices. The site consists of a total of three pages, offering an intuitive layout for easy navigation and accessibility.",
    tags: ["Vite", "TailwindCSS", "ReactJS", "Team", "Website", "Multipage"],
    type: types[0],
  },

  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-859f5.appspot.com/o/projects%2Fcontacts.png?alt=media&token=ea16a997-e4ff-43d1-8b88-b0c229806ebd",
    name: "Contacts Figma Design",
    hardness: hardness[0],
    appLink:
      "https://www.figma.com/file/L6yB27lYbyAomXkd9JrXTE/mini-contact-app?type=design&node-id=0-1&mode=design&t=Bbdv0hf5nB9g5Uzg-0",
    description:
      "The Contacts Figma design is a single-page website interface created entirely in Uzbek. This design was specifically made for a contact page and includes both light and dark modes. It has layouts for both desktop and mobile devices, ensuring a responsive and adaptive user experience across platforms.",
    tags: [
      "Figma",
      "Design",
      "Contacts",
      "Website",
      "Landing",
      "Dark mode",
      "Light mode",
    ],
    type: types[1],
  },

  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-859f5.appspot.com/o/projects%2Fportfolio-figma.jpg?alt=media&token=efc166ae-4eee-4206-8209-db52104cc723",
    name: "Portfolio Figma",
    hardness: hardness[0],
    appLink:
      "https://www.figma.com/file/L6yB27lYbyAomXkd9JrXTE/mini-contact-app?type=design&node-id=0-1&mode=design&t=Bbdv0hf5nB9g5Uzg-0",
    description:
      "This Figma design represents the layout of my Yaxyobekk.uz portfolio website. It uses a modern color palette, featuring primary green (#39965F), secondary white (#ffffff), and various shades of black (#545454, #313131, #1B1B1B). The design is in Uzbek and is intended for desktop use only.",
    tags: ["Figma", "Design", "Portfolio", "Website", "Multipage"],
    type: types[1],
  },
];

const searchProjectsByType = (selectedType) => {
  return selectedType === ""
    ? projectsList
    : projectsList.filter((project) => project.type === selectedType);
};

const searchProjectsByName = (inputValue) => {
  return inputValue === ""
    ? projectsList
    : projectsList.filter((project) =>
        project.name.toLowerCase().includes(inputValue.toLowerCase().trim())
      );
};

const showProjects = (projects) => {
  projectsContainer.innerHTML = ``;
  projects.forEach((project) => {
    showProject(project);
  });
};
const showModalContent = (name, description, image) => {
  const modalContent = document.getElementById(`modal_body`);
  const topContent = document.getElementById(`modal_title`);
  const title = document.querySelector("#modal_title h3");
  title.textContent = name;

  const img = document.querySelector("#modal_image img");
  img.alt = name;
  img.src = image;

  const descriptionContent = document.getElementById(`modal_description`);
  descriptionContent.textContent = description;

  return modalContent.innerHTML;
};

const showImageContent = (
  image,
  name,
  appLink,
  link,
  description,
  liProject
) => {
  const imageContent = document.createElement(`div`);
  imageContent.className = "project-image";

  const img = document.createElement(`img`);
  img.src = image;
  img.alt = name;

  const linkHolder = document.createElement(`div`);
  linkHolder.className = "project-links";

  const moreButton = document.createElement(`button`);
  moreButton.innerHTML = `<img src="../images/technologies/eye.png" src="eye"/>`;
  moreButton.addEventListener("click", () => {
    openModal(showModalContent(name, description, image));
  });

  linkHolder.append(moreButton);

  const linkApp = document.createElement(`a`);
  linkApp.href = appLink;
  linkApp.target = "_blank";
  linkApp.innerHTML = `<img src="../images/technologies/link.png" src="app link"/>`;

  if (link) {
    const links = document.createElement(`div`);

    const sourceLink = document.createElement(`a`);
    sourceLink.href = link;
    sourceLink.target = "_blank";
    sourceLink.innerHTML = `<img src="../images/git-icon.png" src="source link"/>`;

    links.append(linkApp, sourceLink);
    linkHolder.append(links);
  } else {
    linkHolder.append(linkApp);
  }

  imageContent.append(img, linkHolder);
  liProject.append(imageContent);
};

const showProjectInfo = (name, hardness, liProject) => {
  const info = document.createElement(`div`);
  info.className = "project-info";

  const projectName = document.createElement(`h3`);
  projectName.innerText = name;

  const projectHardness = document.createElement(`div`);
  projectHardness.className = "project-info-hardness";

  const hardnessDot = document.createElement(`span`);
  hardnessDot.className = "hardness-dot";
  hardnessDot.style.backgroundColor = hardnessColors[hardness];

  projectHardness.innerHTML = `<span>${hardness}<span>`;
  projectHardness.append(hardnessDot);

  info.append(projectName, projectHardness);
  liProject.append(info);
};

const showProjectTags = (tags, liProject) => {
  const tagsWrapper = document.createElement(`ul`);
  tagsWrapper.className = "project-tags";

  tags.forEach(
    (tag) => (tagsWrapper.innerHTML += `<li class="tag">#${tag}</li>`)
  );

  liProject.append(tagsWrapper);
};

const showProject = (project) => {
  const { image, appLink, hardness, name, description, tags, link } = project;

  const liProject = document.createElement(`li`);
  liProject.className = "project";

  showImageContent(image, name, appLink, link, description, liProject);

  showProjectInfo(name, hardness, liProject);

  showProjectTags(tags, liProject);

  projectsContainer.append(liProject);
};

document.addEventListener("DOMContentLoaded", () => {
  showProjects(projectsList);
});

const input = document.querySelector(".filter__tools-search input");
const searchContainer = document.querySelector(".filter__tools-search");
const selector = document.getElementById("filter__tools-selector");
const projectsContainer = document.getElementById("projects__container");

let selectedOption = "";

function openModal(content) {
  const modal = document.getElementById("modal");
  const modalBody = document.getElementById("modal_body");
  modalBody.innerHTML = "";
  modalBody.innerHTML = content;
  modal.style.display = "block";
  window.document.body.style.overflowY = "hidden";
  document
    .getElementById("close_modal")
    .addEventListener("click", () => closeModal());
}

function closeModal() {
  window.document.body.style.overflowY = "scroll";
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}

const handelSelect = (element) => {
  const selectedTitle = document.querySelector(".selector-title");
  selectedTitle.innerHTML = element.innerHTML;
  const selectedOption = element.getAttribute("data-value");
  const projects = searchProjectsByType(selectedOption);
  showProjects(projects);
};

document.querySelectorAll(".selector-options div").forEach((option) => {
  option.addEventListener("click", function () {
    handelSelect(this);
    const selector = document.querySelector(".selector");
    if (selector) {
      selector.classList.remove("active");
    }
  });
});

selector.addEventListener("click", function () {
  selector.classList.toggle("active");
});

document.addEventListener("click", function (event) {
  if (!selector.contains(event.target)) {
    selector.classList.remove("active");
  }
});

input.addEventListener("focus", () => {
  searchContainer.classList.add("focus");
});

input.addEventListener("blur", () => {
  searchContainer.classList.remove("focus");
});

input.addEventListener("input", (event) => {
  const inputValue = event.target.value;
  const projects = searchProjectsByName(inputValue);
  showProjects(projects);
});
