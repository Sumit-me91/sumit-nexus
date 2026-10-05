# Adding Images to Your Portfolio

## Profile Image

To add your profile image to the Hero section:

1. Place your image file in the `public` folder (or in `public/images/` for better organization)
2. Open `src/components/Hero.tsx`
3. Replace the placeholder div with the Image component:

```jsx
<Image 
  src="/your-image-name.jpg" 
  alt="Sumit - Full Stack Developer"
  width={320}
  height={320}
  className="object-cover w-full h-full"
  priority
/>
```

4. Make sure to update the `src` attribute with your image's path
   - If directly in public: `src="/your-image-name.jpg"`
   - If in images subfolder: `src="/images/your-image-name.jpg"`

## Image Requirements

- For best results, use a square image (1:1 aspect ratio)
- Recommended size: at least 320x320 pixels
- Supported formats: JPG, PNG, WebP, AVIF, GIF
- Maximum file size: Keep under 500KB for optimal performance

## Example

```jsx
<Image 
  src="/images/profile-photo.jpg" 
  alt="Sumit - Full Stack Developer"
  width={320}
  height={320}
  className="object-cover w-full h-full"
  priority
/>
```

This will display your profile photo in the circular frame on the Hero section. 