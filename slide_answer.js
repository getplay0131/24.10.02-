document.addEventListener("DOMContentLoaded", () => {
  const slideArea = document.querySelector(".slideArea");
  const slideControl = document.querySelector(".slideControl");
  const images = slideControl.querySelectorAll("img");
  const prevBtn = document.querySelector(".prevBtn");
  const nextBtn = document.querySelector(".nextBtn");

  let currentIndex = 0;
  let intervalId = null;
  let isReversed = false; // 추가: 슬라이드 방향을 추적하는 변수

  // 우측무한반복 슬라이드 구성해보기
  function slideShow() {
    if (isReversed) {
      currentIndex++;
      if (currentIndex >= images.length) {
        currentIndex = 0;
        slideControl.style.transition = "none";
        slideControl.style.transform = `translateX(0)`;
        setTimeout(() => {
          slideControl.offsetHeight;
          slideControl.style.transition = "all 0.5s ease-in-out";
          slideControl.style.transform = `translateX(-${currentIndex * 100}%)`;
        }, 50);
      } else {
        slideControl.style.transition = "all 0.5s ease-in-out";
        slideControl.style.transform = `translateX(-${currentIndex * 100}%)`;
      }
    } else {
      currentIndex--;
      if (currentIndex < 0) {
        currentIndex = images.length - 1;
        slideControl.style.transition = "none";
        slideControl.style.transform = `translateX(-${currentIndex * 100}%)`;
        setTimeout(() => {
          slideControl.offsetHeight;
          slideControl.style.transition = "all 0.5s ease-in-out";
          slideControl.style.transform = `translateX(-${currentIndex * 100}%)`;
        }, 50);
      } else {
        slideControl.style.transition = "all 0.5s ease-in-out";
        slideControl.style.transform = `translateX(-${currentIndex * 100}%)`;
      }
    }
  }

  function autoStartShow() {
    clearInterval(intervalId);
    intervalId = setInterval(slideShow, 2500);
  }

  function stopSlideShow() {
    clearInterval(intervalId);
  }

  function detectedMouse() {
    btnHover();
    slideArea.addEventListener("mouseenter", () => {
      stopSlideShow();
    });
    slideArea.addEventListener("mouseleave", () => {
      autoStartShow();
    });
  }

  function btnHover() {
    slideArea.addEventListener("mouseleave", () => {
      prevBtn.style.opacity = 0;
      prevBtn.style.transition = "all 0.5s ease-in-out";
      nextBtn.style.opacity = 0;
      nextBtn.style.transition = "all 0.5s ease-in-out";
    });
    slideArea.addEventListener("mouseenter", () => {
      prevBtn.style.opacity = 1;
      prevBtn.style.transition = "all 0.5s ease-in-out";
      nextBtn.style.opacity = 1;
      nextBtn.style.transition = "all 0.5s ease-in-out";
    });
  }

  // 추가: 슬라이드 방향을 전환하는 함수
  function reverseSlide() {
    isReversed = !isReversed;
    slideShow(); // 방향 전환 후 즉시 한 번 슬라이드
    stopSlideShow();
    autoStartShow();
  }

  nextBtn.addEventListener("click", reverseSlide);
  prevBtn.addEventListener("click", reverseSlide);

  autoStartShow();
  detectedMouse();
});
