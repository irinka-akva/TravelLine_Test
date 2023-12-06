const catalog = document.querySelector(".catalog__list");

const setReservation = (card, method, boolean, tabindex) => {
  card.classList[method]("reserved");
  card.querySelector(".card__button").disabled = boolean;
  card.querySelector(".card__title-link").setAttribute("tabindex", tabindex);
};

const getCardReserved = (evt) => {
  const parentCard = evt.target.closest(".card");
  let relatedTarget = evt.relatedTarget;

  if (!parentCard.contains(relatedTarget)) {
    setReservation(parentCard, "add", true, "-1")
    // parentCard.classList.add("reserved");
    // parentCard.querySelector(".card__button").disabled = true;
    // parentCard.querySelector(".card__title-link").setAttribute("tabindex", "-1");
    parentCard.removeEventListener("mouseout", getCardReserved);
  }
};

const setStatusOfReserve = (evt) => {
  const parentCard = evt.target.closest(".card");

  if (evt.target.closest(".card__button")) {
    parentCard.addEventListener("mouseout", getCardReserved);

  } else if (evt.target.closest(".card__booked") && !evt.target.closest(".card__booked-link")) {
    setReservation(parentCard, "remove", false, "0")
    // parentCard.classList.remove("reserved");
    // parentCard.querySelector(".card__button").disabled = false;
    // parentCard.querySelector(".card__title-link").setAttribute("tabindex", "0");
  }
};

catalog.addEventListener("click", setStatusOfReserve);
