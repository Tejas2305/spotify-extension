function restyleSpotify() {
  const dataContainers = document.querySelectorAll('.EntityHeader__title, .Card__details');

}

const observer = new MutationObserver(() => {
  restyleSpotify();
});

observer.observe(document.body, { childList: true, subtree: true });