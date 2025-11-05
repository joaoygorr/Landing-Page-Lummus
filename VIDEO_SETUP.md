# Watch Video Feature - Setup Guide

## Overview
The "Watch Video" feature has been successfully implemented in the Hero section of your Lummus project. It displays a modal popup with a video player when users click the "Watch Video" button.

## Features Implemented
✅ **Watch Video Button** - Prominent button in the Hero section with play icon
✅ **Learn More Button** - Opens a PDF brochure (link can be updated)
✅ **Buy Parts Now Button** - Links to the Lummus shop
✅ **Video Modal** - Clean, professional popup modal with video player
✅ **Responsive Design** - Works on all screen sizes
✅ **Auto-play** - Video starts automatically when modal opens
✅ **Close Button** - Easy to close the modal

## How to Replace the Placeholder Video

### Current Setup
The video modal currently uses a placeholder video:
```
https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4
```

### To Update the Video:

1. **Option 1: Direct URL**
   - Open `/app/src/components/Hero.tsx`
   - Find line 15 with the `videoUrl` property
   - Replace the URL with your video URL:
   ```jsx
   videoUrl="YOUR_VIDEO_URL_HERE"
   ```

2. **Option 2: Use Lummus Official Video**
   Replace with the actual Lummus video:
   ```jsx
   videoUrl="https://video.wixstatic.com/video/56d0cb_a5f5a79cc4724faf9109ff51d9d0d9d7/1080p/mp4/file.mp4"
   ```

3. **Option 3: Host Your Own Video**
   - Upload your video to the `/app/public/` folder
   - Name it something like `centurion-video.mp4`
   - Update the URL:
   ```jsx
   videoUrl="/centurion-video.mp4"
   ```

## File Structure

```
/app/
├── src/
│   ├── components/
│   │   ├── Hero.tsx          # Main hero section with Watch Video button
│   │   └── VideoModal.tsx    # Video modal popup component
```

## Customization Options

### Change Video Title
In `/app/src/components/Hero.tsx` line 16:
```jsx
title="Your Custom Title"
```

### Change Button Text
In `/app/src/components/Hero.tsx` line 71:
```jsx
Watch Video  // Change this text
```

### Update Learn More PDF Link
In `/app/src/components/Hero.tsx` line 77:
```jsx
onClick={() => window.open('/assets/centurion-brochure.pdf', '_blank')}
```
Place your PDF in `/app/public/assets/` folder or use an external URL.

## Testing
The feature has been tested and verified:
- ✅ Button displays correctly in Hero section
- ✅ Modal opens on button click
- ✅ Video player loads and plays
- ✅ Close button works properly
- ✅ Responsive on all screen sizes

## Need Help?
If you need to make any changes or adjustments to the video feature, just let me know!
