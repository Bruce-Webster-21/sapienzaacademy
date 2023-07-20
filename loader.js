const loaderElement = document.getElementById("loader-page");

const hideLoader = () => {
  if (loaderElement) {
    loaderElement.style.display = "none";
  }
};

setTimeout(hideLoader, 10000);