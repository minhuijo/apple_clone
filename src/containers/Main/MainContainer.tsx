import React, { useCallback, useEffect, useState } from "react";
import GlobalNav from "../../components/GlobalNav";
import LocalNav from "../../components/LocalNav";
import SectionA from "../../components/SectionsScrollFirst";
import SectionB from "../../components/SectionScrollSecond";
import SectionC from "../../components/SectionScrollThrid";
import SectionD from "../../components/SectionScrollFourd";
import Footer from "../../components/Footer";
import img from "../../assets/img/001/IMG_6726.jpg";

const MainContainer = () => {
  const [page, setPage] = useState<number>(0);
  const [load, setLoad] = useState<boolean>(false);
  const [loaded, setLoaded] = useState<boolean>(false);
  const [imgElem, setImgElem] = useState<HTMLImageElement>();

  let sceneInfo: any[] = [];
  let yOffset = 0;
  let prevScrollHeight = 0;
  let currentScene = 0;
  let nextScene = false;

  const setLayout = useCallback(() => {
    for (let i = 0; i < sceneInfo.length; i++) {
      let sceneInfoObjs = sceneInfo[i].objs;
      if (sceneInfo[i].type === "sticky") {
        sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight;
      } else if (sceneInfo[i].type === "nomal") {
        sceneInfo[i].scrollHeight = sceneInfoObjs.container.offsetHeight;
      }

      sceneInfoObjs.container.style.height = `${sceneInfo[i].scrollHeight}px`;
    }

    let totalScrollHeight = 0;
    for (let i = 0; i < sceneInfo.length; i++) {
      totalScrollHeight += sceneInfo[i].scrollHeight;
      if (totalScrollHeight >= yOffset) {
        currentScene = i;
        break;
      }

      setPage(currentScene);
    }
  }, [sceneInfo, yOffset]);

  const clacValuese = (values: any, currentYOffset: any) => {
    let rv;
    const scrollHeight = sceneInfo[currentScene].scrollHeight;
    const scrollRatio = currentYOffset / sceneInfo[currentScene].scrollHeight;

    if (values.length === 3) {
      const partScrollStart = values[2].start * scrollHeight;
      const partScrollEnd = values[2].end * scrollHeight;
      const partScroll = partScrollEnd - partScrollStart;

      if (
        currentYOffset >= partScrollStart &&
        currentYOffset <= partScrollEnd
      ) {
        rv =
          ((currentYOffset - partScrollStart) / partScroll) *
            (values[1] - values[0]) +
          values[0];
      } else if (currentYOffset < partScrollStart) {
        rv = values[0];
      } else if (currentYOffset > partScrollStart) {
        rv = values[1];
      }
    } else {
      rv = scrollRatio * (values[1] - values[0]) + values[0];
    }

    return rv;
  };

  const playAnimation = useCallback(() => {
    const objs = sceneInfo[currentScene].objs;
    const values = sceneInfo[currentScene].values;
    const currentYOffset = yOffset - prevScrollHeight;
    const scrollHeight = sceneInfo[currentScene].scrollHeight;
    const scrollRatio = currentYOffset / scrollHeight;

    switch (currentScene) {
      case 0: {
        let sequence = Math.round(
          clacValuese(values.imageSequence, currentYOffset)
        );

        if (objs.videoImages) {
          objs.context.drawImage(objs.videoImages[sequence], 0, 0);
        }

        if (scrollRatio <= 0.22) {
          objs.messageA.style.opacity = clacValuese(
            values.message_A_opacity_in,
            currentYOffset
          );
          objs.messageA.style.transform = `translateY(${clacValuese(
            values.message_A_translateY_in,
            currentYOffset
          )}%)`;
        } else {
          objs.messageA.style.opacity = clacValuese(
            values.message_A_opacity_out,
            currentYOffset
          );
          objs.messageA.style.transform = `translateY(${clacValuese(
            values.message_A_translateY_out,
            currentYOffset
          )}%)`;
        }

        if (scrollRatio <= 0.42) {
          objs.messageB.style.opacity = clacValuese(
            values.message_B_opacity_in,
            currentYOffset
          );
          objs.messageB.style.transform = `translateY(${clacValuese(
            values.message_B_translateY_in,
            currentYOffset
          )}%)`;
        } else {
          objs.messageB.style.opacity = clacValuese(
            values.message_B_opacity_out,
            currentYOffset
          );
          objs.messageA.style.transform = `translateY(${clacValuese(
            values.message_B_translateY_out,
            currentYOffset
          )}%)`;
        }

        if (scrollRatio <= 0.62) {
          objs.messageC.style.opacity = clacValuese(
            values.message_C_opacity_in,
            currentYOffset
          );
          objs.messageC.style.transform = `translateY(${clacValuese(
            values.message_C_translateY_in,
            currentYOffset
          )}%)`;
        } else {
          objs.messageC.style.opacity = clacValuese(
            values.message_C_opacity_out,
            currentYOffset
          );
          objs.messageC.style.transform = `translateY(${clacValuese(
            values.message_C_translateY_out,
            currentYOffset
          )}%)`;
        }

        if (scrollRatio <= 0.82) {
          objs.messageD.style.opacity = clacValuese(
            values.message_D_opacity_in,
            currentYOffset
          );
          objs.messageD.style.transform = `translateY(${clacValuese(
            values.message_D_translateY_in,
            currentYOffset
          )}%)`;
        } else {
          objs.messageD.style.opacity = clacValuese(
            values.message_D_opacity_out,
            currentYOffset
          );
          objs.messageD.style.transform = `translateY(${clacValuese(
            values.message_D_translateY_out,
            currentYOffset
          )}%)`;
        }

        break;
      }
      case 1: {
        break;
      }
      case 2: {
        if (scrollRatio <= 0.32) {
          console.log(values.message_A_opacity_in);
          objs.messageA.style.opacity = clacValuese(
            values.message_A_opacity_in,
            currentYOffset
          );
          objs.messageA.style.transform = `translateY(${clacValuese(
            values.message_A_translateY_in,
            currentYOffset
          )}%)`;
        } else {
          objs.messageA.style.opacity = clacValuese(
            values.message_A_opacity_out,
            currentYOffset
          );
          objs.messageA.style.transform = `translateY(${clacValuese(
            values.message_A_translateY_out,
            currentYOffset
          )}%)`;
        }

        if (scrollRatio <= 0.67) {
          objs.messageB.style.opacity = clacValuese(
            values.message_B_opacity_in,
            currentYOffset
          );
          objs.messageB.style.transform = `translateY(${clacValuese(
            values.message_B_translateY_in,
            currentYOffset
          )}%)`;
          objs.pinB.style.transform = `scaleY(${clacValuese(
            values.pinB_scaleY,
            currentYOffset
          )})`;
        } else {
          objs.messageB.style.opacity = clacValuese(
            values.message_B_opacity_out,
            currentYOffset
          );
          objs.messageA.style.transform = `translateY(${clacValuese(
            values.message_B_translateY_out,
            currentYOffset
          )}%)`;
          objs.pinB.style.transform = `scaleY(${clacValuese(
            values.pinB_scaleY,
            currentYOffset
          )})`;
        }

        if (scrollRatio <= 0.93) {
          objs.messageC.style.opacity = clacValuese(
            values.message_C_opacity_in,
            currentYOffset
          );
          objs.messageC.style.transform = `translateY(${clacValuese(
            values.message_C_translateY_in,
            currentYOffset
          )}%)`;
        } else {
          objs.messageC.style.opacity = clacValuese(
            values.message_C_opacity_out,
            currentYOffset
          );
          objs.messageC.style.transform = `translateY(${clacValuese(
            values.message_C_translateY_out,
            currentYOffset
          )}%)`;
        }

        break;
      }
      case 3: {
        break;
      }
    }
  }, [load]);

  const scrollLoop = useCallback(() => {
    nextScene = false;
    prevScrollHeight = 0;
    for (let i = 0; i < currentScene; i++) {
      prevScrollHeight += sceneInfo[i].scrollHeight;
    }

    if (yOffset > prevScrollHeight + sceneInfo[currentScene].scrollHeight) {
      nextScene = true;
      currentScene++;
    }

    if (yOffset < prevScrollHeight) {
      nextScene = true;
      if (currentScene === 0) return;
      if (currentScene >= 0) currentScene--;
    }

    setPage(currentScene);

    if (nextScene) {
      return;
    }

    playAnimation();
  }, [currentScene]);

  const setCanvasImages = () => {};

  useEffect(() => {
    sceneInfo = [
      {
        type: "sticky",
        heightNum: 5,
        scrollHeight: 0,
        objs: {
          container: document.querySelector("#scroll-section-0"),
          messageA: document.querySelector("#scroll-section-0 .messageA"),
          messageB: document.querySelector("#scroll-section-0 .messageB"),
          messageC: document.querySelector("#scroll-section-0 .messageC"),
          messageD: document.querySelector("#scroll-section-0 .messageD"),
          canvas: document.querySelector("#video-canvas-0"),
          context: (
            document.querySelector("#video-canvas-0") as HTMLCanvasElement
          )?.getContext("2d"),
          videoImages: [],
        },
        values: {
          videoImageCount: 300,
          imageSequence: [0, 299],
          message_A_opacity_in: [0, 1, { start: 0.1, end: 0.2 }],
          message_A_opacity_out: [1, 0, { start: 0.25, end: 0.3 }],
          message_A_translateY_in: [20, 0, { start: 0.1, end: 0.2 }],
          message_A_translateY_out: [0, -20, { start: 0.25, end: 0.3 }],
          message_B_opacity_in: [0, 1, { start: 0.3, end: 0.4 }],
          message_B_opacity_out: [1, 0, { start: 0.45, end: 0.5 }],
          message_B_translateY_in: [20, 0, { start: 0.3, end: 0.4 }],
          message_B_translateY_out: [0, -20, { start: 0.45, end: 0.5 }],
          message_C_opacity_in: [0, 1, { start: 0.5, end: 0.6 }],
          message_C_opacity_out: [1, 0, { start: 0.65, end: 0.7 }],
          message_C_translateY_in: [20, 0, { start: 0.5, end: 0.6 }],
          message_C_translateY_out: [0, -20, { start: 0.65, end: 0.7 }],
          message_D_opacity_in: [0, 1, { start: 0.7, end: 0.8 }],
          message_D_opacity_out: [1, 0, { start: 0.85, end: 0.9 }],
          message_D_translateY_in: [20, 0, { start: 0.7, end: 0.8 }],
          message_D_translateY_out: [0, -20, { start: 0.85, end: 0.9 }],
        },
      },

      {
        type: "nomal",
        // heightNum: 5,
        scrollHeight: 0,
        objs: {
          container: document.querySelector("#scroll-section-1"),
        },
      },
      {
        type: "sticky",
        heightNum: 5,
        scrollHeight: 0,
        objs: {
          container: document.querySelector("#scroll-section-2"),
          messageA: document.querySelector("#scroll-section-2 .messageA"),
          messageB: document.querySelector("#scroll-section-2 .messageB"),
          messageC: document.querySelector("#scroll-section-2 .messageC"),
          pinB: document.querySelector("#scroll-section-2 .pinB"),
          pinC: document.querySelector("#scroll-section-2 .pinC"),
        },
        values: {
          message_A_opacity_in: [0, 1, { start: 0.15, end: 0.2 }],
          message_A_opacity_out: [1, 0, { start: 0.3, end: 0.35 }],
          message_A_translateY_in: [20, 0, { start: 0.15, end: 0.2 }],
          message_A_translateY_out: [0, -20, { start: 0.3, end: 0.35 }],
          message_B_opacity_in: [0, 1, { start: 0.5, end: 0.55 }],
          message_B_opacity_out: [1, 0, { start: 0.58, end: 0.63 }],
          message_B_translateY_in: [30, 0, { start: 0.5, end: 0.55 }],
          message_B_translateY_out: [0, -20, { start: 0.58, end: 0.63 }],
          message_C_opacity_in: [0, 1, { start: 0.72, end: 0.77 }],
          message_C_opacity_out: [1, 0, { start: 0.85, end: 0.9 }],
          message_C_translateY_in: [30, 0, { start: 0.72, end: 0.77 }],
          message_C_translateY_out: [0, -20, { start: 0.85, end: 0.9 }],
          pinB_scaleY: [0.5, 1, { start: 0.5, end: 0.55 }],
          pinB_opacity_in: [0, 1, { start: 0.5, end: 0.55 }],
          pinB_opacity_out: [1, 0, { start: 0.58, end: 0.63 }],
          pinC_scaleY: [0.5, 1, { start: 0.72, end: 0.77 }],
          pinC_opacity_in: [0, 1, { start: 0.72, end: 0.77 }],
          pinC_opacity_out: [1, 0, { start: 0.85, end: 0.9 }],
        },
      },
      {
        type: "sticky",
        heightNum: 5,
        scrollHeight: 0,
        objs: {
          container: document.querySelector("#scroll-section-3"),
          canvasCaption: document.querySelector(".canvas-caption"),
        },
      },
    ];
  }, []);

  useEffect(() => {
    setCanvasImages();
    setLayout();
  }, [setLayout]);

  useEffect(() => {
    window.addEventListener("resize", setLayout);
    window.addEventListener("DOMContentLoaded", setLayout);
    window.addEventListener("scroll", () => {
      yOffset = window.pageYOffset;
      scrollLoop();
    });
  }, [scrollLoop]);

  useEffect(() => {
    for (let i = 0; i < sceneInfo[0].values.videoImageCount; i++) {
      let img = new Image();
      setImgElem(img);
      img.src = `../../assets/img/001/IMG_${6726 + i}.jpg`;
      sceneInfo[0].objs.videoImages.push(img);
    }

    if (imgElem) {
      imgElem.onload = () => {
        setLoad(true);
      };
    }
  }, [imgElem]);

  return (
    <>
      <GlobalNav />
      <LocalNav />
      <SectionA page={page} />
      <SectionB />
      <SectionC page={page} />
      <SectionD />
      <Footer />
    </>
  );
};

export default MainContainer;
