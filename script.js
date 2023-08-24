const oceanBtn = document.getElementById("oceanBtn");
const lionsBtn = document.getElementById("lionBtn");
const cards = document.querySelectorAll("div.card.mb-4.shadow-sm");

oceanBtn.onclick = () => {
  displayOceanImg();
};

lionsBtn.onclick = () => {
  displayLionImg();
};

const hide = (event) => {
  event.preventDefault();
  const col = event.target.parentElement.parentElement.parentElement.parentElement.parentElement;
  col.remove();
};

const displayLionImg = () => {
  fetch("https://api.pexels.com/v1/search?query=lion&per_page=9", {
    headers: {
      Authorization: "eKlADKL7N3esapnPMxmZhvabKthKJ90fFi75vFhgwqs7KOjX7QQQxZhB",
    },
  })
    .then((res) => res.json())
    .then((photosObj) => {
      const photosArr = photosObj.photos;
      cards.forEach((card, i) => {
        card.innerHTML = `<a href="./description.html?photoId=${photosArr[i].id}">
        <img
        class="bd-placeholder-img card-img-top"
        src=${photosArr[i].src.medium}
        alt=""
        width="100%"
        height="225"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
        cursor="pointer"
        />
      </a>
      <div class="card-body">
      <a href="./description.html?photoId=${photosArr[i].id}"><h5 class="card-title">${photosArr[i].photographer}</h5></a>
      <p class="card-text">
        ${photosArr[i].alt}
      </p>
      <div class="d-flex justify-content-between align-items-center">
        <div class="btn-group">
          <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
          <button type="button" class="btn btn-sm btn-outline-secondary btn-danger text-light" onclick="hide(event)">Hide</button>
        </div>
        <small class="text-muted">${photosArr[i].id}</small>
      </div>
    </div>`;
      });
    });
};

const displayOceanImg = () => {
  fetch("https://api.pexels.com/v1/search?query=ocean&per_page=9", {
    headers: {
      Authorization: "eKlADKL7N3esapnPMxmZhvabKthKJ90fFi75vFhgwqs7KOjX7QQQxZhB",
    },
  })
    .then((res) => res.json())
    .then((photosObj) => {
      const photosArr = photosObj.photos;
      cards.forEach((card, i) => {
        card.innerHTML = `
        <a href="./description.html?photoId=${photosArr[i].id}">
        <img
        class="bd-placeholder-img card-img-top"
        src=${photosArr[i].src.medium}
        alt=""
        width="100%"
        height="225"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
      />
      </a>
      <div class="card-body">
      <a href="./description.html?photoId=${photosArr[i].id}"><h5 class="card-title">${photosArr[i].photographer}</h5></a>
      <p class="card-text">
        ${photosArr[i].alt}
      </p>
      <div class="d-flex justify-content-between align-items-center">
        <div class="btn-group">
          <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
          <button type="button" class="btn btn-sm btn-outline-secondary btn-danger text-light" onclick="hide(event)">Hide</button>
        </div>
        <small class="text-muted">${photosArr[i].id}</small>
      </div>
    </div>`;
      });
    });
};

const displayImgs = (event) => {
  event.preventDefault();
  const searched = event.target[0].value;
  fetch("https://api.pexels.com/v1/search?query=" + searched + "&per_page=9", {
    headers: {
      Authorization: "eKlADKL7N3esapnPMxmZhvabKthKJ90fFi75vFhgwqs7KOjX7QQQxZhB",
    },
  })
    .then((res) => res.json())
    .then((photosObj) => {
      const photosArr = photosObj.photos;
      cards.forEach((card, i) => {
        card.innerHTML = `
        <a href="./description.html?photoId=${photosArr[i].id}">
        <img
          class="bd-placeholder-img card-img-top"
          src=${photosArr[i].src.medium}
          alt=""
          width="100%"
          height="225"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        />
        </a>
        <div class="card-body">
        <a href="./description.html?photoId=${photosArr[i].id}"><h5 class="card-title">${photosArr[i].photographer}</h5></a>
        <p class="card-text">
          ${photosArr[i].alt}
        </p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
            <button type="button" class="btn btn-sm btn-outline-secondary btn-danger text-light" onclick="hide(event)">Hide</button>
          </div>
          <small class="text-muted">${photosArr[i].id}</small>
        </div>
      </div>`;
      });
    });
};
