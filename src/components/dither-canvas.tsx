'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

type DitherMethod = 'ordered' | 'floyd-steinberg' | 'jarvis';
type FitMode = 'contain' | 'cover' | 'stretch';

type DitherCanvasProps = {
  src: string;
  width?: number;
  height?: number;
  method?: DitherMethod;
  color?: string;
  invert?: boolean;
  hidpi?: boolean;
  fitMode?: FitMode;
  className?: string;
};

export const DitherCanvas = ({
  src,
  width,
  height,
  method = 'ordered',
  color = '#0066FF',
  invert = false,
  hidpi = true,
  fitMode = 'cover',
  className = '',
}: DitherCanvasProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);

  const [containerDimensions, setContainerDimensions] = useState<{
    width: number;
    height: number;
  } | null>(null);
  const [naturalImageDimensions, setNaturalImageDimensions] = useState<{
    width: number;
    height: number;
  } | null>(null);

  const expandShorthandHexToFull = useCallback(
    (shorthandHex: string): string => {
      // `shorthandHex` is expected without a leading '#'
      return shorthandHex
        .split('')
        .map((hexDigit) => hexDigit + hexDigit)
        .join('');
    },
    []
  );

  const convertHexStringToRgb = useCallback(
    (hexString: string): [number, number, number] => {
      const hexWithoutHash = hexString.replace('#', '');
      const expandedHex =
        hexWithoutHash.length === 3
          ? expandShorthandHexToFull(hexWithoutHash)
          : hexWithoutHash;

      const parsedValue = parseInt(expandedHex, 16);
      const red = (parsedValue >> 16) & 255;
      const green = (parsedValue >> 8) & 255;
      const blue = parsedValue & 255;

      return [red, green, blue];
    },
    [expandShorthandHexToFull]
  );

  useEffect(() => {
    if (width && height) return;

    const container = containerRef.current;

    if (!container) return;

    let rafId: number | null = null;

    const resizeObserver = new window.ResizeObserver(
      (entries: ResizeObserverEntry[]) => {
        const rect = entries[0].contentRect;

        if (rafId) cancelAnimationFrame(rafId);

        rafId = requestAnimationFrame(() =>
          setContainerDimensions({
            width: Math.max(1, Math.floor(rect.width)),
            height: Math.max(1, Math.floor(rect.height)),
          })
        );
      }
    );

    resizeObserver.observe(container);

    const rect = container.getBoundingClientRect();

    setContainerDimensions({
      width: Math.max(1, Math.floor(rect.width)),
      height: Math.max(1, Math.floor(rect.height)),
    });

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      resizeObserver.disconnect();
    };
  }, [width, height]);

  useEffect(() => {
    if (!src) return;

    const image = new Image();

    image.crossOrigin = 'anonymous';
    image.src = src;
    imageRef.current = image;

    const onLoad = () =>
      setNaturalImageDimensions({
        width: image.naturalWidth || image.width,
        height: image.naturalHeight || image.height,
      });

    const onError = () => setNaturalImageDimensions(null);

    image.addEventListener('load', onLoad);
    image.addEventListener('error', onError);

    return () => {
      image.removeEventListener('load', onLoad);
      image.removeEventListener('error', onError);
    };
  }, [src]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    const image = imageRef.current;

    if (!canvas || !container || !image) return;

    let targetWidth = width ?? containerDimensions?.width;
    let targetHeight = height ?? containerDimensions?.height;

    if (targetWidth && !targetHeight && naturalImageDimensions)
      targetHeight = Math.round(
        targetWidth *
          (naturalImageDimensions.height / naturalImageDimensions.width)
      );

    if (!targetWidth && targetHeight && naturalImageDimensions)
      targetWidth = Math.round(
        targetHeight *
          (naturalImageDimensions.width / naturalImageDimensions.height)
      );

    if (!targetWidth || !targetHeight) return;

    const context = canvas.getContext('2d');

    if (!context) return;

    const ratio = hidpi ? Math.max(1, window.devicePixelRatio || 1) : 1;

    canvas.width = Math.round(targetWidth * ratio);
    canvas.height = Math.round(targetHeight * ratio);
    canvas.style.width = `${targetWidth}px`;
    canvas.style.height = `${targetHeight}px`;
    context.setTransform(ratio, 0, 0, ratio, 0, 0);

    // Offscreen canvas in logical pixels where the image is drawn and processed
    const offscreenCanvas = document.createElement('canvas');

    offscreenCanvas.width = targetWidth;
    offscreenCanvas.height = targetHeight;

    const offscreenContext = offscreenCanvas.getContext('2d');

    if (!offscreenContext) return;

    // Draw source into offscreen canvas according to fitMode (logical pixels)
    const srcWidth = image.naturalWidth || image.width;
    const srcHeight = image.naturalHeight || image.height;
    const srcAspect = srcWidth / srcHeight;
    const targetAspect = targetWidth / targetHeight;

    if (fitMode === 'cover') {
      if (srcAspect > targetAspect) {
        const sourceCropWidth = Math.round(srcHeight * targetAspect);
        const sourceCropX = Math.round((srcWidth - sourceCropWidth) / 2);

        offscreenContext.drawImage(
          image,
          sourceCropX,
          0,
          sourceCropWidth,
          srcHeight,
          0,
          0,
          targetWidth,
          targetHeight
        );
      } else {
        const sourceCropHeight = Math.round(srcWidth / targetAspect);
        const sourceCropY = Math.round((srcHeight - sourceCropHeight) / 2);

        offscreenContext.drawImage(
          image,
          0,
          sourceCropY,
          srcWidth,
          sourceCropHeight,
          0,
          0,
          targetWidth,
          targetHeight
        );
      }
    } else if (fitMode === 'contain') {
      offscreenContext.fillStyle = '#ffffff';
      offscreenContext.fillRect(0, 0, targetWidth, targetHeight);

      let destinationWidth = targetWidth;
      let destinationHeight = targetHeight;

      if (srcAspect > targetAspect) {
        destinationWidth = targetWidth;
        destinationHeight = Math.round(targetWidth / srcAspect);
      } else {
        destinationHeight = targetHeight;
        destinationWidth = Math.round(targetHeight * srcAspect);
      }

      const destinationX = Math.round((targetWidth - destinationWidth) / 2);
      const destinationY = Math.round((targetHeight - destinationHeight) / 2);

      offscreenContext.drawImage(
        image,
        0,
        0,
        srcWidth,
        srcHeight,
        destinationX,
        destinationY,
        destinationWidth,
        destinationHeight
      );
    } else {
      offscreenContext.drawImage(
        image,
        0,
        0,
        srcWidth,
        srcHeight,
        0,
        0,
        targetWidth,
        targetHeight
      );
    }

    // Sample pixels from offscreen canvas (logical resolution)
    const srcData = offscreenContext.getImageData(
      0,
      0,
      targetWidth,
      targetHeight
    );
    const srcPixels = srcData.data;

    // Build a normalized *darkness* buffer: 0 = white, 1 = black
    const processingWidth = targetWidth;
    const processingHeight = targetHeight;
    const darkness = new Float32Array(processingWidth * processingHeight);

    for (
      let pixelIndex = 0, dataIndex = 0;
      pixelIndex < darkness.length;
      pixelIndex++, dataIndex += 4
    ) {
      const red = srcPixels[dataIndex];
      const green = srcPixels[dataIndex + 1];
      const blue = srcPixels[dataIndex + 2];

      // Perceptual luminance (0..255) using Rec.709 weights
      const luminance = 0.2126 * red + 0.7152 * green + 0.0722 * blue;

      // Store normalized darkness: 0 = white, 1 = black
      darkness[pixelIndex] = 1 - luminance / 255;
    }

    // Output bits buffer (0/1)
    const outputBits = new Uint8Array(processingWidth * processingHeight);

    if (method === 'ordered') {
      // ordered Bayer 4x4: compare darkness against threshold
      const bayer4 = [
        [0, 8, 2, 10],
        [12, 4, 14, 6],
        [3, 11, 1, 9],
        [15, 7, 13, 5],
      ];

      for (let y = 0; y < processingHeight; y++) {
        for (let x = 0; x < processingWidth; x++) {
          const pixelIndex = y * processingWidth + x;
          const threshold = (bayer4[y % 4][x % 4] + 0.5) / 16;

          outputBits[pixelIndex] = darkness[pixelIndex] > threshold ? 1 : 0;
        }
      }
    } else if (method === 'floyd-steinberg') {
      // Floyd–Steinberg error diffusion on darkness (0..1)
      for (let y = 0; y < processingHeight; y++) {
        for (let x = 0; x < processingWidth; x++) {
          const pixelIndex = y * processingWidth + x;
          const currentDarkness = darkness[pixelIndex];
          const quantizedBit = currentDarkness >= 0.5 ? 1 : 0;

          outputBits[pixelIndex] = quantizedBit;

          const quantizationError = currentDarkness - quantizedBit;

          // distribute error
          if (x + 1 < processingWidth)
            darkness[pixelIndex + 1] += (quantizationError * 7) / 16;
          if (x - 1 >= 0 && y + 1 < processingHeight)
            darkness[pixelIndex + processingWidth - 1] +=
              (quantizationError * 3) / 16;
          if (y + 1 < processingHeight)
            darkness[pixelIndex + processingWidth] +=
              (quantizationError * 5) / 16;
          if (x + 1 < processingWidth && y + 1 < processingHeight)
            darkness[pixelIndex + processingWidth + 1] +=
              (quantizationError * 1) / 16;
        }
      }
    } else {
      // Jarvis, Judice & Ninke (JJN) error diffusion on darkness (0..1)
      const diffusionKernel = [
        [0, 0, 0, 7, 5],
        [3, 5, 7, 5, 3],
        [1, 3, 5, 3, 1],
      ];
      const kernelNormalization = 48;

      for (let y = 0; y < processingHeight; y++) {
        for (let x = 0; x < processingWidth; x++) {
          const pixelIndex = y * processingWidth + x;
          const currentDarkness = darkness[pixelIndex];
          const quantizedBit = currentDarkness >= 0.5 ? 1 : 0;

          outputBits[pixelIndex] = quantizedBit;

          const quantizationError = currentDarkness - quantizedBit;

          for (let offsetX = 0; offsetX < 3; offsetX++) {
            for (let offsetY = -2; offsetY <= 2; offsetY++) {
              const neighborX = x + offsetY;
              const neighborY = y + offsetX;

              if (
                neighborX < 0 ||
                neighborX >= processingWidth ||
                neighborY < 0 ||
                neighborY >= processingHeight
              )
                continue;

              const weight = diffusionKernel[offsetX][offsetY + 2];

              if (weight === 0) continue;

              darkness[neighborY * processingWidth + neighborX] +=
                (quantizationError * weight) / kernelNormalization;
            }
          }
        }
      }
    }

    // Compose final offscreen ImageData from outputBits and chosen color
    const outputImageData = offscreenContext.createImageData(
      processingWidth,
      processingHeight
    );
    const [redChannel, greenChannel, blueChannel] =
      convertHexStringToRgb(color);

    for (
      let i = 0, dataOffset = 0;
      i < outputBits.length;
      i++, dataOffset += 4
    ) {
      const pixelBit = outputBits[i];
      const isPixelOn = invert ? 1 - pixelBit : pixelBit;

      if (isPixelOn) {
        outputImageData.data[dataOffset] = redChannel;
        outputImageData.data[dataOffset + 1] = greenChannel;
        outputImageData.data[dataOffset + 2] = blueChannel;
        outputImageData.data[dataOffset + 3] = 255;
      } else {
        outputImageData.data[dataOffset] = 255;
        outputImageData.data[dataOffset + 1] = 255;
        outputImageData.data[dataOffset + 2] = 255;
        outputImageData.data[dataOffset + 3] = 255;
      }
    }

    // Put processed pixels into the offscreen canvas, then draw that offscreen onto the main canvas
    offscreenContext.putImageData(outputImageData, 0, 0);
    context.drawImage(
      offscreenCanvas,
      0,
      0,
      processingWidth,
      processingHeight,
      0,
      0,
      processingWidth,
      processingHeight
    );
  }, [
    src,
    width,
    height,
    containerDimensions,
    naturalImageDimensions,
    method,
    color,
    invert,
    hidpi,
    fitMode,
    convertHexStringToRgb,
  ]);

  return (
    <div ref={containerRef} className={className}>
      <canvas ref={canvasRef} className="block h-full w-full" />
    </div>
  );
};
