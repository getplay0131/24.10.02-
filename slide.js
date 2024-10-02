// 클로저 속성 공부하기
// 우측 무한 반복 슬라이드 구현 완료
document.addEventListener("DOMContentLoaded", () => {
  const slideArea = document.querySelector(".slideArea");
  const slideControl = document.querySelector(".slideControl");
  const images = slideControl.querySelectorAll("img");
  const prevBtn = document.querySelector(".prevBtn");
  const nextBtn = document.querySelector(".nextBtn");

  let currentIndex = 0;
  let intervalId = null;

  // 우측무한반복 슬라이드 구성해보기
  function slideShow() {
    currentIndex--;
    // alert(currentIndex);
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
      //   currentIndex--;
      slideControl.style.transition = "all 0.5s ease-in-out";
      slideControl.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  }

  function autoStartShow() {
    intervalId = setInterval(slideShow, 2500);
    detectedMouse();
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

  function reverseSlide() {
    currentIndex++;
    slideControl.style.transition = "all 0.5s ease-in-out";
    slideControl.style.transform = `translateX(-${currentIndex * 100}%)`;
    if (currentIndex === images.length) {
      setTimeout(() => {
        currentIndex = 0;
        slideControl.style.transition = "none";
        slideControl.style.transform = `translateX(-${currentIndex * 100}%)`;
      }, 500);
    }
    // clearInterval(intervalId);
    // intervalId = setInterval(reverseSlide, 2500);
  }

  nextBtn.addEventListener("click", () => {
    reverseSlide;
  });

  autoStartShow();

  // end --------------------------------
});
