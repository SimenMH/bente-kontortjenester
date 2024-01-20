const navigateTo = (e, id) => {
  let el = document.getElementById(id);
  e.preventDefault();
  el && scrollToTargetAdjusted(el);
};

function scrollToTargetAdjusted(element) {
  const headerOffset = 85;
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  });
}

export default navigateTo;
