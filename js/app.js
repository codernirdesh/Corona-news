const main = document.getElementById("npvai");
khabar = [];
fetch("https://nepalcorona.info/api/v1/news")
  .then((response) => response.json())
  .then((news) => {
    news.data.forEach((update) => {
      addNews(update);
    });
  });

async function addNews(news) {
  let topDiv = document.createElement("div");
  topDiv.classList = "container, np-content";
  topDiv.innerHTML = `<div class="breaking-news np-grey"><h1 class="headline"> <a target="_blank" href="${
    news.url
  }" class="breaking-link">${
    news.title
  }</a><!--</Post Heading LINK>--></h1><div class="author justify-content-center row"><i class="fas fa-feather-alt"></i> ${
    news.source
  } | <i class="fas fa-calendar-alt"></i> ${news.updated_at
    .toString()
    .split()}</div><div class="media-thumb"><a href="${
    news.url
  }"><img class="img-fluid" width="100%" src="${
    news.image_url
  }" /></a></div></div>`;
  console.log(topDiv);
  main.appendChild(topDiv);
}
