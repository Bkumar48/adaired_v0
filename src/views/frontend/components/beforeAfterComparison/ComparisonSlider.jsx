// import React, { useState, useEffect, useRef, useCallback } from "react";

// const ComparisonSlider = ({ topImage, BackgroundImage }) => {
//   const [isResizing, setIsResizing] = useState(false);
//   const topImageRef = useRef();
//   const handleRef = useRef();
//   const comparisonItemRef = useRef();
//   const [height, setHeight] = useState(null);

//   const setComparisonItemHeight = useCallback(() => {
//     const topImageHeight = topImageRef.current.clientHeight;
//     const bottomImageHeight =
//       comparisonItemRef.current.clientHeight - topImageHeight;

//     setHeight(Math.max(topImageHeight, bottomImageHeight));
//   }, []);
//   const setPositioning = useCallback((x) => {
//     const { left, width } = topImageRef.current.getBoundingClientRect();
//     const handleWidth = handleRef.current.offsetWidth;
//     const relativeX = (x - left) / width;

//     if (relativeX >= 0 && relativeX <= 1) {
//       handleRef.current.style.left = `${relativeX * 100}%`;
//       topImageRef.current.style.clipPath = `inset(0 ${
//         100 - relativeX * 100
//       }% 0 0)`;
//     }
//   }, []);

//   const handleResize = useCallback(
//     (e) => {
//       const clientX = e.touches ? e.touches[0].clientX : e.clientX;
//       setPositioning(clientX);
//     },
//     [setPositioning]
//   );

//   const handleResizeEnd = useCallback(() => {
//     setIsResizing(false);
//   }, []);

//   const onKeyDown = useCallback(
//     (e) => {
//       const { offsetLeft, offsetParent } = handleRef.current;

//       if (e.code === "ArrowLeft" || e.code === "ArrowRight") {
//         const increment = e.code === "ArrowLeft" ? -10 : 10;
//         setPositioning(offsetLeft + offsetParent.offsetLeft + increment);
//       }
//     },
//     [setPositioning]
//   );

//   useEffect(() => {
//     const { left, width } = topImageRef.current.getBoundingClientRect();
//     const handleWidth = handleRef.current.offsetWidth;
//     setPositioning(width / 2 + left - handleWidth / 2);
//   }, [setPositioning]);

//   useEffect(() => {
//     if (isResizing) {
//       window.addEventListener("mousemove", handleResize);
//       window.addEventListener("touchmove", handleResize);
//       window.addEventListener("mouseup", handleResizeEnd);
//       window.addEventListener("touchend", handleResizeEnd);
//     }

//     return () => {
//       window.removeEventListener("mousemove", handleResize);
//       window.removeEventListener("touchmove", handleResize);
//       window.removeEventListener("mouseup", handleResizeEnd);
//       window.removeEventListener("touchend", handleResizeEnd);
//       window.removeEventListener("keydown", onKeyDown);
//     };
//   }, [isResizing, handleResize, handleResizeEnd, onKeyDown]);

//   useEffect(() => {
//     setComparisonItemHeight();
//   }, [setComparisonItemHeight]);

//   return (
//     <div className="container pad50-50">
//       <div className="our_process_head">
//         <h4 className="sub-heading sub_hd-mx">Our Process</h4>
//         <h2 className="bigheading">Our Process</h2>
//         <p>
//           We are your 360° digital marketing agency helping you bring your goals
//           and visions to life with market-
//           <br />
//           leading strategies and exceptional customer service.
//         </p>
//       </div>
//       <div className="comparison-slider mt50">
//         <div
//           ref={handleRef}
//           className="handle"
//           onMouseDown={() => setIsResizing(true)}
//           onTouchStart={() => setIsResizing(true)}
//         >
//           {/* Inline SVG code here */}
//           <svg
//             fill="none"
//             viewBox="0 0 79 78"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <g filter="url(#a)">
//               <circle cx="39.5" cy="35" r="31" fill="#fff" />
//             </g>
//             <path
//               d="M53.914 41.01l-1.415-1.413 4.6-4.6-4.6-4.6 1.415-1.407 6.01 6.01-6.009 6.01h-.001zm-5.425 0l-1.414-1.413 4.6-4.6-4.6-4.593 1.414-1.414L54.5 35l-6.01 6.01h-.001zm-23.404 0L19.075 35l6.01-6.01 1.415 1.414-4.6 4.6 4.6 4.6-1.414 1.406h-.001zm5.425 0L24.499 35l6.011-6.01 1.414 1.414-4.6 4.6 4.6 4.6-1.413 1.406h-.001z"
//               fill="#8275FF"
//             />
//             <defs>
//               <filter
//                 id="a"
//                 x=".5"
//                 y="0"
//                 width="78"
//                 height="78"
//                 colorInterpolationFilters="sRGB"
//                 filterUnits="userSpaceOnUse"
//               >
//                 <feFlood floodOpacity="0" result="BackgroundImageFix" />
//                 <feColorMatrix
//                   in="SourceAlpha"
//                   result="hardAlpha"
//                   values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
//                 />
//                 <feOffset dy="4" />
//                 <feGaussianBlur stdDeviation="4" />
//                 <feComposite in2="hardAlpha" operator="out" />
//                 <feColorMatrix values="0 0 0 0 0.129412 0 0 0 0 0.0823529 0 0 0 0 0.254902 0 0 0 0.24 0" />
//                 <feBlend
//                   in2="BackgroundImageFix"
//                   result="effect1_dropShadow_206_541"
//                 />
//                 <feBlend
//                   in="SourceGraphic"
//                   in2="effect1_dropShadow_206_541"
//                   result="shape"
//                 />
//               </filter>
//             </defs>
//           </svg>
//         </div>
//         <div className="comparison-item top" style={{ height: `${height}px` }}>
//           <img
//             src={topImage}
//             ref={topImageRef}
//             draggable={false}
//             alt="Foreground Image"
//             onLoad={setComparisonItemHeight}
//             style={{
//               transition: isResizing ? "none" : "clip-path 0.5s ease",
//             }}
//             className="comparison-item top"
//           />
//         </div>
//         <div className="comparison-item" style={{ height: `${height}px` }}>
//           <img
//             draggable={false}
//             src={BackgroundImage}
//             alt="Background Image"
//             onLoad={setComparisonItemHeight}
//             ref={comparisonItemRef}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ComparisonSlider;

import React, { useEffect, useRef, useState } from "react";

const ComparisonSlider = ({
  className = "",
  aspectRatio = "taller",
  handle = null,
  handleSize = 40,
  hover = false,
  leftImage,
  leftImageAlt = "",
  leftImageCss = {},
  leftImageLabel = null,
  onSliderPositionChange = () => {},
  rightImage,
  rightImageAlt = "",
  rightImageCss = {},
  rightImageLabel = null,
  skeleton = null,
  sliderLineColor = "#ffffff",
  sliderLineWidth = 2,
  sliderPositionPercentage = 0.5,
  vertical = false,
  handleArrowBackgroundImage = "",
}) => {

  const horizontal = !vertical;

  const [sliderPosition, setSliderPosition] = useState(
    sliderPositionPercentage
  );
  const [containerWidth, setContainerWidth] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);
  const [leftImgLoaded, setLeftImgLoaded] = useState(false);
  const [rightImgLoaded, setRightImgLoaded] = useState(false);
  const [isSliding, setIsSliding] = useState(false);

  const containerRef = useRef(null);
  const leftImageRef = useRef(null);
  const rightImageRef = useRef(null);

  // make the component Responsive
  useEffect(() => {
    const containerElement = containerRef.current;
    const resizeObserver = new ResizeObserver(([entry, ..._]) => {
      const currentContainerWidth = entry.target.getBoundingClientRect().width;
      setContainerWidth(currentContainerWidth);
    });
    resizeObserver.observe(containerElement);

    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    // consider the case where loading image is completed immediately
    // due to the cache etc.
    const alreadyDone = leftImageRef.current.complete;
    alreadyDone && setLeftImgLoaded(true);

    return () => {
      // when the left image source is changed
      setLeftImgLoaded(false);
    };
  }, [leftImage]);

  useEffect(() => {
    // consider the case where loading image is completed immediately
    // due to the cache etc.
    const alreadyDone = rightImageRef.current.complete;
    alreadyDone && setRightImgLoaded(true);

    return () => {
      // when the right image source is changed
      setRightImgLoaded(false);
    };
  }, [rightImage]);

  const allImagesLoaded = rightImgLoaded && leftImgLoaded;

  useEffect(() => {
    const handleSliding = (event) => {
      const e = event || window.event;

      // Calc cursor position from the:
      // - left edge of the viewport (for horizontal)
      // - top edge of the viewport (for vertical)
      const cursorXfromViewport = e.touches ? e.touches[0].pageX : e.pageX;
      const cursorYfromViewport = e.touches ? e.touches[0].pageY : e.pageY;

      // Calc Cursor Position from the:
      // - left edge of the window (for horizontal)
      // - top edge of the window (for vertical)
      // to consider any page scrolling
      const cursorXfromWindow = cursorXfromViewport - window.pageXOffset;
      const cursorYfromWindow = cursorYfromViewport - window.pageYOffset;

      // Calc Cursor Position from the:
      // - left edge of the image(for horizontal)
      // - top edge of the image(for vertical)
      const imagePosition = rightImageRef.current.getBoundingClientRect();
      let pos = horizontal
        ? cursorXfromWindow - imagePosition.left
        : cursorYfromWindow - imagePosition.top;

      // Set minimum and maximum values to prevent the slider from overflowing
      const minPos = 0 + sliderLineWidth / 2;
      const maxPos = horizontal
        ? containerWidth - sliderLineWidth / 2
        : containerHeight - sliderLineWidth / 2;

      if (pos < minPos) pos = minPos;
      if (pos > maxPos) pos = maxPos;

      horizontal
        ? setSliderPosition(pos / containerWidth)
        : setSliderPosition(pos / containerHeight);

      // If there's a callback function, invoke it everytime the slider changes
      if (onSliderPositionChange) {
        horizontal
          ? onSliderPositionChange(pos / containerWidth)
          : onSliderPositionChange(pos / containerHeight);
      }
    };

    const startSliding = (e) => {
      setIsSliding(true);

      // Prevent default behavior other than mobile scrolling
      if (!("touches" in e)) {
        e.preventDefault();
      }

      // Slide the image even if you just click or tap (not drag)
      handleSliding(e);

      window.addEventListener("mousemove", handleSliding); // 07
      window.addEventListener("touchmove", handleSliding); // 08
    };

    const finishSliding = () => {
      setIsSliding(false);
      window.removeEventListener("mousemove", handleSliding);
      window.removeEventListener("touchmove", handleSliding);
    };

    const containerElement = containerRef.current;

    if (allImagesLoaded) {
      // it's necessary to reset event handlers each time the canvasWidth changes

      // for mobile
      containerElement.addEventListener("touchstart", startSliding); // 01
      window.addEventListener("touchend", finishSliding); // 02

      // for desktop
      if (hover) {
        containerElement.addEventListener("mousemove", handleSliding); // 03
        containerElement.addEventListener("mouseleave", finishSliding); // 04
      } else {
        containerElement.addEventListener("mousedown", startSliding); // 05
        window.addEventListener("mouseup", finishSliding); // 06
      }

      // calc and set the container's size
      const leftImageWidthHeightRatio =
        leftImageRef.current.naturalHeight / leftImageRef.current.naturalWidth;
      const rightImageWidthHeightRatio =
        rightImageRef.current.naturalHeight /
        rightImageRef.current.naturalWidth;

      const idealWidthHeightRatio =
        aspectRatio === "taller"
          ? Math.max(leftImageWidthHeightRatio, rightImageWidthHeightRatio)
          : Math.min(leftImageWidthHeightRatio, rightImageWidthHeightRatio);

      const idealContainerHeight = containerWidth * idealWidthHeightRatio;

      setContainerHeight(idealContainerHeight);
    }

    return () => {
      // cleanup all event resteners
      containerElement.removeEventListener("touchstart", startSliding); // 01
      window.removeEventListener("touchend", finishSliding); // 02
      containerElement.removeEventListener("mousemove", handleSliding); // 03
      containerElement.removeEventListener("mouseleave", finishSliding); // 04
      containerElement.removeEventListener("mousedown", startSliding); // 05
      window.removeEventListener("mouseup", finishSliding); // 06
      window.removeEventListener("mousemove", handleSliding); // 07
      window.removeEventListener("touchmove", handleSliding); // 08
    };
    // eslint-disable-next-line
  }, [
    allImagesLoaded,
    aspectRatio,
    containerHeight,
    containerWidth,
    horizontal,
    hover,
    sliderLineWidth,
    vertical,
  ]);

  const styles = {
    container: {
      boxSizing: 'border-box',
      position: 'relative',
      width: '100%',
      height: `${containerHeight}px`,
      overflow: 'hidden',
    },
    rightImage: {
      clip: horizontal
        ? `rect(auto, auto, auto, ${containerWidth * sliderPosition}px)`
        : `rect(${containerHeight * sliderPosition}px, auto, auto, auto)`,
      display: 'block',
      height: 'auto',
      objectFit: 'cover',
      position: 'absolute',
      alignItems: 'center',
      top:"50%",
      transform:"translateY(-50%)",
      width: '100%',
      ...rightImageCss,
      transition:"unset"
    },
    leftImage: {
      clip: horizontal
        ? `rect(auto, ${containerWidth * sliderPosition}px, auto, auto)`
        : `rect(auto, auto, ${containerHeight * sliderPosition}px, auto)`,
      display: 'block',
      height: 'auto',
      objectFit: 'cover',
      position: 'absolute',
      
      width: '100%',
      ...leftImageCss,
      transition:"unset"
    },
    slider: {
      alignItems: 'center',
      cursor:
        (!hover && horizontal && 'ew-resize') ||
        (!hover && !horizontal && 'ns-resize'),
      display: 'flex',
      flexDirection: horizontal ? 'column' : 'row',
      height: horizontal ? '100%' : `${handleSize}px`,
      justifyContent: 'center',
      left: horizontal
        ? `${containerWidth * sliderPosition - handleSize / 2}px`
        : 0,
      position: 'absolute',
      top: horizontal
        ? 0
        : `${containerHeight * sliderPosition - handleSize / 2}px`,
      width: horizontal ? `${handleSize}px` : '100%',
      transition:"unset"
    },
    line: {
      background: sliderLineColor,
      boxShadow:
        '0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)',
      flex: '0 1 auto',
      height: horizontal ? '100%' : `${sliderLineWidth}px`,
      width: horizontal ? `${sliderLineWidth}px` : '100%',
      backgroundImage:`${handleArrowBackgroundImage}`,
    },
    handleCustom: {
      alignItems: 'center',
      boxSizing: 'border-box',
      display: 'flex',
      flex: '1 0 auto',
      height: 'auto',
      justifyContent: 'center',
      width: 'auto',
    },
    handleDefault: {
      alignItems: 'center',
      border: `${sliderLineWidth}px solid ${sliderLineColor}`,
      borderRadius: '100%',
      boxShadow:
        '0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)',
      boxSizing: 'border-box',
      display: 'flex',
      flex: '1 0 auto',
      height: `${handleSize}px`,
      justifyContent: 'center',
      width: `${handleSize}px`,
      transform: horizontal ? 'none' : 'rotate(90deg)',
      backgroundImage:`${handleArrowBackgroundImage}`,
    },
    leftArrow: {
      border: `inset ${handleSize * 0.15}px rgba(0,0,0,0)`,
      borderRight: `${handleSize * 0.15}px solid ${sliderLineColor}`,
      height: '0px',
      marginLeft: `-${handleSize * 0.25}px`, // for IE11
      marginRight: `${handleSize * 0.25}px`,
      width: '0px',
    },
    rightArrow: {
      border: `inset ${handleSize * 0.15}px rgba(0,0,0,0)`,
      borderLeft: `${handleSize * 0.15}px solid ${sliderLineColor}`,
      height: '0px',
      marginRight: `-${handleSize * 0.25}px`, // for IE11
      width: '0px',
    },
    leftLabel: {
      background: 'rgba(0, 0, 0, 0.5)',
      color: 'white',
      left: horizontal ? '5%' : '50%',
      opacity: isSliding ? 0 : 1,
      padding: '10px 20px',
      position: 'absolute',
      top: horizontal ? '50%' : '3%',
      transform: horizontal ? 'translate(0,-50%)' : 'translate(-50%, 0)',
      transition: 'opacity 0.1s ease-out',
    },
    rightLabel: {
      background: 'rgba(0, 0, 0, 0.5)',
      color: 'white',
      opacity: isSliding ? 0 : 1,
      padding: '10px 20px',
      position: 'absolute',
      left: horizontal ? null : '50%',
      right: horizontal ? '5%' : null,
      top: horizontal ? '50%' : null,
      bottom: horizontal ? null : '3%',
      transform: horizontal ? 'translate(0,-50%)' : 'translate(-50%, 0)',
      transition: 'opacity 0.1s ease-out',
    },
    leftLabelContainer: {
      clip: horizontal
        ? `rect(auto, ${containerWidth * sliderPosition}px, auto, auto)`
        : `rect(auto, auto, ${containerHeight * sliderPosition}px, auto)`,
      height: '100%',
      position: 'absolute',
      width: '100%',
    },
    rightLabelContainer: {
      clip: horizontal
        ? `rect(auto, auto, auto, ${containerWidth * sliderPosition}px)`
        : `rect(${containerHeight * sliderPosition}px, auto, auto, auto)`,
      height: '100%',
      position: 'absolute',
      width: '100%',
    },
  };

  return  <>
  {skeleton && !allImagesLoaded && (
    <div style={{ ...styles.container }}>{skeleton}</div>
  )}
  <div className={className}
 >

  <div
    style={{
      ...styles.container,
      display: allImagesLoaded ? 'block' : 'none',
    }}
    ref={containerRef}
    data-testid="container"
  >
    <img
      onLoad={() => setRightImgLoaded(true)}
      alt={rightImageAlt}
      data-testid="right-image"
      ref={rightImageRef}
      src={rightImage}
      style={styles.rightImage}
    />
    <img
      onLoad={() => setLeftImgLoaded(true)}
      alt={leftImageAlt}
      data-testid="left-image"
      ref={leftImageRef}
      src={leftImage}
      style={styles.leftImage}
    />
    <div style={styles.slider}>
      <div style={styles.line} />
      {handle ? (
        <div style={styles.handleCustom}>{handle}</div>
      ) : (
        <div style={styles.handleDefault}>
          <div style={styles.leftArrow} />
          <div style={styles.rightArrow} />
        </div>
      )}
      <div style={styles.line} />
    </div>
    {/* labels */}
    {leftImageLabel && (
      <div style={styles.leftLabelContainer}>
        <div style={styles.leftLabel}>{leftImageLabel}</div>
      </div>
    )}
    {rightImageLabel && (
      <div style={styles.rightLabelContainer}>
        <div style={styles.rightLabel}>{rightImageLabel}</div>
      </div>
    )}
  </div>
  </div>
</>;
};

export default ComparisonSlider;
