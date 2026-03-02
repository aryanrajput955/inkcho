"use client";

import { CldImage } from 'next-cloudinary';
import Image from 'next/image';

/**
 * A wrapper component that uses Cloudinary's CldImage if a cloudinaryId is provided,
 * otherwise falls back to the standard Next.js Image component for local paths.
 */
export default function OptimizedImage({ src, alt, fill, width, height, className, priority, sizes, ...props }) {
  if (!src) return null;

  let finalSrc = src;
  let isCloudinary = !src.startsWith('/') && !src.startsWith('http');

  // If it's a full Cloudinary URL, extract the Public ID
  if (src.includes('res.cloudinary.com')) {
    isCloudinary = true;
    const parts = src.split('/upload/');
    if (parts.length > 1) {
      // Decode URL if it contains %20 etc.
      const decodedPath = decodeURIComponent(parts[1]);
      const pathParts = decodedPath.split('/');
      
      // Only remove the first part if it's a version number (e.g., v1234567)
      if (pathParts[0].startsWith('v') && !isNaN(pathParts[0].substring(1))) {
        finalSrc = pathParts.slice(1).join('/');
      } else {
        finalSrc = pathParts.join('/');
      }
      
      // Remove file extension if present
      if (finalSrc.includes('.')) {
        finalSrc = finalSrc.substring(0, finalSrc.lastIndexOf('.'));
      }
    }
  }

// Removed debug log

  if (isCloudinary) {
    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
    
    // Construct a high-performance optimization URL manually
    // We add w_1200 specifically to fix the "too large" error by forcing resize first
    const resizeWidth = width || 1200;
    const transformedUrl = `https://res.cloudinary.com/${cloudName}/image/upload/c_scale,w_${resizeWidth},f_auto,q_auto/${finalSrc}`;

    return (
      <Image
        src={transformedUrl}
        alt={alt || ""}
        width={!fill ? width || 1200 : undefined}
        height={!fill ? height || 800 : undefined}
        fill={fill}
        className={className}
        priority={priority}
        sizes={sizes || (fill ? "(max-width: 768px) 100vw, (max-width: 1440px) 50vw, 1200px" : undefined)}
        unoptimized={true} // Crucial: This prevents double-optimization by Next.js
        {...props}
      />
    );
  }

  // Fallback to standard Next.js Image for local assets (/public/...) or external URLs
  return (
    <Image
      src={src}
      alt={alt || ""}
      width={!fill ? width || 1200 : undefined}
      height={!fill ? height || 800 : undefined}
      fill={fill}
      className={className}
      priority={priority}
      sizes={sizes}
      {...props}
    />
  );
}
