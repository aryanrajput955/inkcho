"use client";

import React from 'react';

/**
 * A wrapper component that handles Cloudinary video optimization.
 * It uses f_auto (format) and q_auto (quality) transformations.
 */
export default function OptimizedVideo({ src, className, autoPlay = true, loop = true, muted = true, playsInline = true, ...props }) {
  if (!src) return null;

  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  let finalSrc = src;
  let isCloudinary = src.includes('res.cloudinary.com') || (!src.startsWith('/') && !src.startsWith('http'));

  if (src.includes('res.cloudinary.com')) {
    // Extract Public ID for video
    const parts = src.split('/video/upload/');
    if (parts.length > 1) {
      const pathParts = parts[1].split('/');
      // Remove version number if present (starts with 'v' followed by numbers)
      if (pathParts[0].startsWith('v') && !isNaN(pathParts[0].substring(1))) {
        finalSrc = pathParts.slice(1).join('/');
      } else {
        finalSrc = pathParts.join('/');
      }
      // Remove file extension for Cloudinary IDs
      if (finalSrc.includes('.')) {
        finalSrc = finalSrc.substring(0, finalSrc.lastIndexOf('.'));
      }
    }
  }

  // Optimized Cloudinary Video URL
  const optimizedUrl = isCloudinary 
    ? `https://res.cloudinary.com/${cloudName}/video/upload/f_auto:video,q_auto/${finalSrc}`
    : src;

  return (
    <video
      src={optimizedUrl}
      className={className}
      autoPlay={autoPlay}
      loop={loop}
      muted={muted}
      playsInline={playsInline}
      {...props}
    />
  );
}
