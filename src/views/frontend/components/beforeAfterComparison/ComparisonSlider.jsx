import React, { useState, useEffect, useRef, useCallback } from "react";

const ComparisonSlider = ({ topImage, BackgroundImage }) => {
  const [isResizing, setIsResizing] = useState(false);
  const topImageRef = useRef();
  const handleRef = useRef();
  const comparisonItemRef = useRef();
  const [height, setHeight] = useState(500);

  const setComparisonItemHeight = useCallback(() => {
    const topImageHeight = topImageRef.current.clientHeight;
    const bottomImageHeight =
      comparisonItemRef.current.clientHeight - topImageHeight;

    setHeight(Math.max(topImageHeight, bottomImageHeight));
  }, []);

  const setPositioning = useCallback((x) => {
    const { left, width } = topImageRef.current.getBoundingClientRect();
    const handleWidth = handleRef.current.offsetWidth;
    const relativeX = (x - left) / width;

    if (relativeX >= 0 && relativeX <= 1) {
      handleRef.current.style.left = `${relativeX * 100}%`;
      topImageRef.current.style.clipPath = `inset(0 ${
        100 - relativeX * 100
      }% 0 0)`;
    }
  }, []);

  const handleResize = useCallback(
    (e) => {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      setPositioning(clientX);
    },
    [setPositioning]
  );

  const handleResizeEnd = useCallback(() => {
    setIsResizing(false);
  }, []);

  const onKeyDown = useCallback(
    (e) => {
      const { offsetLeft, offsetParent } = handleRef.current;

      if (e.code === "ArrowLeft" || e.code === "ArrowRight") {
        const increment = e.code === "ArrowLeft" ? -10 : 10;
        setPositioning(offsetLeft + offsetParent.offsetLeft + increment);
      }
    },
    [setPositioning]
  );

  useEffect(() => {
    const { left, width } = topImageRef.current.getBoundingClientRect();
    const handleWidth = handleRef.current.offsetWidth;
    setPositioning(width / 2 + left - handleWidth / 2);
  }, [setPositioning]);

  useEffect(() => {
    if (isResizing) {
      window.addEventListener("mousemove", handleResize);
      window.addEventListener("touchmove", handleResize);
      window.addEventListener("mouseup", handleResizeEnd);
      window.addEventListener("touchend", handleResizeEnd);
    }

    return () => {
      window.removeEventListener("mousemove", handleResize);
      window.removeEventListener("touchmove", handleResize);
      window.removeEventListener("mouseup", handleResizeEnd);
      window.removeEventListener("touchend", handleResizeEnd);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isResizing, handleResize, handleResizeEnd, onKeyDown]);

  useEffect(() => {
    setComparisonItemHeight();
  }, [setComparisonItemHeight]);

  return (
    <div className="container pad50-50">
      <div className="our_process_head">
        <h4>Our Process</h4>
        <h2 className="main-heading">Our Process</h2>
        <p>
          We are your 360° digital marketing agency helping you bring your goals
          and visions to life with market-
          <br />
          leading strategies and exceptional customer service.
        </p>
      </div>
      <div className="comparison-slider">
        <div
          ref={handleRef}
          className="handle"
          onMouseDown={() => setIsResizing(true)}
          onTouchStart={() => setIsResizing(true)}
        >
          {/* Inline SVG code here */}
          <svg
            fill="none"
            viewBox="0 0 79 78"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#a)">
              <circle cx="39.5" cy="35" r="31" fill="#fff" />
            </g>
            <path
              d="M53.914 41.01l-1.415-1.413 4.6-4.6-4.6-4.6 1.415-1.407 6.01 6.01-6.009 6.01h-.001zm-5.425 0l-1.414-1.413 4.6-4.6-4.6-4.593 1.414-1.414L54.5 35l-6.01 6.01h-.001zm-23.404 0L19.075 35l6.01-6.01 1.415 1.414-4.6 4.6 4.6 4.6-1.414 1.406h-.001zm5.425 0L24.499 35l6.011-6.01 1.414 1.414-4.6 4.6 4.6 4.6-1.413 1.406h-.001z"
              fill="#8275FF"
            />
            <defs>
              <filter
                id="a"
                x=".5"
                y="0"
                width="78"
                height="78"
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  result="hardAlpha"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="4" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix values="0 0 0 0 0.129412 0 0 0 0 0.0823529 0 0 0 0 0.254902 0 0 0 0.24 0" />
                <feBlend
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_206_541"
                />
                <feBlend
                  in="SourceGraphic"
                  in2="effect1_dropShadow_206_541"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
        <div
          className="comparison-item top"
          ref={topImageRef}
          style={{ height: `${height}px` }}
        >
          <img
            src={topImage}
            draggable={false}
            alt="Foreground Image"
            onLoad={setComparisonItemHeight}
          />
        </div>
        <div
          className="comparison-item"
          style={{ height: `${height}px` }}
          ref={comparisonItemRef}
        >
          <img
            draggable={false}
            src={BackgroundImage}
            alt="Background Image"
            onLoad={setComparisonItemHeight}
          />
        </div>
      </div>
    </div>
  );
};

export default ComparisonSlider;
