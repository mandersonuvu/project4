main_page = document.getElementById("main_page");
intro = document.getElementById("intro");
guide = document.getElementById("guide");
paper_types = document.getElementById("paper_types");
const pages = [main_page, intro, guide, paper_types];

function changePage(newPage) {
  for (const page of pages) {
    page.style.display = "none";
  }
  newPage.style.display = "block";
}

main_link = document.getElementById("main_link");
main_link.onclick = function(){changePage(main_page)};

intro_link = document.getElementById("intro_link");
intro_link.onclick = function(){changePage(intro)};

guides_link = document.getElementById("guides_link");
guides_link.onclick = function(){changePage(guide)};

paper_link = document.getElementById("paper_link");
paper_link.onclick = function(){changePage(paper_types)};
