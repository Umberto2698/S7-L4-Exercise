const photoId = new URLSearchParams(window.location.search).get("photoId");
const main = document.querySelector("main");

window.onload = async () => {
  const resp = await fetch("https://api.pexels.com/v1/photos/" + photoId, {
    headers: {
      Authorization: "eKlADKL7N3esapnPMxmZhvabKthKJ90fFi75vFhgwqs7KOjX7QQQxZhB",
    },
  });
  const photoObj = await resp.json();
  main.innerHTML = `<div class="container">
  <div class="d-flex flex-column justify-content-center align-items-center">
    <img
      src="${photoObj.src.large}"
      alt="${photoObj.alt}"
      class="my-4"
    />
    <div class="d-flex justify-content-between align-items-center w-100">
            <div class="me-100">
            <h4>${photoObj.photographer}</h4>
            <a href="${photoObj.photographer_url}"><span>Pagina fotografo</span></a>
            </div>
            <a href="./Starting-template.html">
              <button class="btn btn-primary">Torna indietro</button>
            </a>
          </div>
  </div>
</div>`;
};
