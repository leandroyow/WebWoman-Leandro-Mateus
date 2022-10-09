function renderJobs() {
  const main = document.querySelector("main");

  main.innerHTML = "";

  const h4MainTitle = document.createElement("h4");
  h4MainTitle.innerText = "Vagas";
  h4MainTitle.classList.add("mainVagas");
  main.append(h4MainTitle);

  jobsData.map((elem) => {
    const main = document.querySelector("main");
    const divAllCards = document.createElement("div");

    const divCard = document.createElement("div");
    const h4JobTitle = document.createElement("h4");
    const divCardJobLocal = document.createElement("div");
    const spanJobCompany = document.createElement("span");
    const spanJobLocal = document.createElement("span");
    const pJobDescription = document.createElement("p");
    const divCardFooter = document.createElement("div");
    const spanJobType = document.createElement("span");
    const btnSubscribe = document.createElement("button");

    h4JobTitle.innerText = elem.title;
    h4JobTitle.id = elem.id;
    spanJobLocal.innerText = elem.location;
    spanJobCompany.innerText = elem.enterprise;
    pJobDescription.innerText = elem.descrition;
    spanJobType.innerText = elem.modalities[0 || 1];
    btnSubscribe.innerText = "Candidatar";

    divCard.classList.add("card");
    divCardJobLocal.classList.add("div_card--local");
    divCardFooter.classList.add("div_card--footer");
    btnSubscribe.classList.add("btn_card--subscribe");

    divCardJobLocal.append(spanJobCompany, spanJobLocal);
    divCardFooter.append(spanJobType, btnSubscribe);
    divCard.append(h4JobTitle, divCardJobLocal, pJobDescription, divCardFooter);
    main.appendChild(divCard);
  });
}
function applyToJob() {
  let btnSubscribe = document.querySelectorAll(".btn_card--subscribe");

  btnSubscribe.forEach((elem) => {
    elem.addEventListener("click", () => {
      if (elem.innerText === "Candidatar") {
        elem.innerText = "Remover candidatura";

        const ul = document.querySelector("ul");
        const span0Jobs = document.querySelector(".span0Jobs");
        span0Jobs.classList.add("hidden");

        const li = document.createElement("li");

        const divTitle = document.createElement("div");
        const h5JobTitle = document.createElement("h5");
        const trash = document.createElement("i");

        const divFooter = document.createElement("div");
        const spanJobCompany = document.createElement("span");
        const spanJobLocal = document.createElement("span");

        trash.classList.add("fa-solid", "fa-trash-can");

        h5JobTitle.innerText =
          elem.parentElement.parentElement.childNodes[0].innerText;
        spanJobCompany.innerText =
          elem.parentElement.parentElement.childNodes[1].childNodes[0].innerText;
        spanJobLocal.innerText =
          elem.parentElement.parentElement.childNodes[1].childNodes[1].innerText;

        divTitle.append(h5JobTitle, trash);
        divFooter.append(spanJobCompany, spanJobLocal);

        li.append(divTitle, divFooter);
        ul.appendChild(li);

        removeJobAppliedByTrash();
      } else if (elem.innerText === "Remover candidatura") {
        elem.innerText = "Candidatar";
        let h5AppliedJobs = document.querySelectorAll("h5");
        let title = elem.parentElement.parentElement.childNodes[0].innerText;

        h5AppliedJobs.forEach((element) => {
          if (element.innerText === title) {
            let liToRemove = element.parentElement.parentElement;
            liToRemove.remove();
          }
        });
      }
    });
  });
}
function removeJobAppliedByTrash() {
  const btnAll = document.querySelectorAll(".fa-solid");

  btnAll.forEach((elem) => {
    elem.addEventListener("click", () => {
      let jobTitle = elem.parentElement.childNodes[0].innerText;

      let liJob = elem.parentElement.parentElement;
      let btnSubscribeAll = document.querySelectorAll(".btn_card--subscribe");
      console.log("test");
      btnSubscribeAll.forEach((elem) => {
        let title = elem.parentElement.parentElement.childNodes[0].innerText;

        if (title === jobTitle) {
          elem.innerText = "Candidatar";
          liJob.remove();
        }
      });
    });
  });
}

renderJobs();
applyToJob();
