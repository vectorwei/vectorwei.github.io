---
layout: single
title: "SUSTech Graduation Photos"
permalink: /photos/graduation/
author_profile: true
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /assets/images/grad_photos/DSC_0453.jpg
  caption: "SUSTech Graduation"

# 照片画廊 - 使用grad_photos目录中的照片
gallery:
  - url: /assets/images/grad_photos/DSC_0242.jpg
    image_path: /assets/images/grad_photos/DSC_0242.jpg
    alt: "SUSTech Graduation"
  - url: /assets/images/grad_photos/IMG_8670.jpg
    image_path: /assets/images/grad_photos/IMG_8670.jpg
    alt: "SUSTech Graduation"  
  - url: /assets/images/grad_photos/DSC_0271.jpg
    image_path: /assets/images/grad_photos/DSC_0271.jpg
    alt: "SUSTech Graduation"
  - url: /assets/images/grad_photos/WechatIMG8.jpg
    image_path: /assets/images/grad_photos/WechatIMG8.jpg
    alt: "SUSTech Graduation"
  - url: /assets/images/grad_photos/DSC_0324.jpg
    image_path: /assets/images/grad_photos/DSC_0324.jpg
    alt: "SUSTech Graduation"
  - url: /assets/images/grad_photos/13f8c52d92bb03a5f15bd151d103a7c7.jpg
    image_path: /assets/images/grad_photos/13f8c52d92bb03a5f15bd151d103a7c7.jpg
    alt: "SUSTech Graduation"
  - url: /assets/images/grad_photos/DSC_0353.jpg
    image_path: /assets/images/grad_photos/DSC_0353.jpg
    alt: "SUSTech Graduation"
  - url: /assets/images/grad_photos/WechatIMG10.jpg
    image_path: /assets/images/grad_photos/WechatIMG10.jpg
    alt: "SUSTech Graduation"
  - url: /assets/images/grad_photos/DSC_0453.jpg
    image_path: /assets/images/grad_photos/DSC_0453.jpg
    alt: "SUSTech Graduation"
  - url: /assets/images/grad_photos/4ae5c1d609dbeef43f98f1883bcde85c.jpg
    image_path: /assets/images/grad_photos/4ae5c1d609dbeef43f98f1883bcde85c.jpg
    alt: "SUSTech Graduation"
  - url: /assets/images/grad_photos/DSC_0509.jpg
    image_path: /assets/images/grad_photos/DSC_0509.jpg
    alt: "SUSTech Graduation"
  - url: /assets/images/grad_photos/IMG_8510.jpg
    image_path: /assets/images/grad_photos/IMG_8510.jpg
    alt: "SUSTech Graduation"
  - url: /assets/images/grad_photos/DSC_0945.jpg
    image_path: /assets/images/grad_photos/DSC_0945.jpg
    alt: "SUSTech Graduation"
  - url: /assets/images/grad_photos/39eedd67e827de47e59868d440edd580.jpg
    image_path: /assets/images/grad_photos/39eedd67e827de47e59868d440edd580.jpg
    alt: "SUSTech Graduation"
  - url: /assets/images/grad_photos/DSC_1324.jpg
    image_path: /assets/images/grad_photos/DSC_1324.jpg
    alt: "SUSTech Graduation"
  - url: /assets/images/grad_photos/9507b01661d90dbbc53eb103216917a6.jpg
    image_path: /assets/images/grad_photos/9507b01661d90dbbc53eb103216917a6.jpg
    alt: "SUSTech Graduation"
  - url: /assets/images/grad_photos/IMG_8638.jpg
    image_path: /assets/images/grad_photos/IMG_8638.jpg
    alt: "SUSTech Graduation"
  - url: /assets/images/grad_photos/2c62156e325fe13d5318aa9f79af55f8.jpg
    image_path: /assets/images/grad_photos/2c62156e325fe13d5318aa9f79af55f8.jpg
    alt: "SUSTech Graduation"
  - url: /assets/images/grad_photos/IMG_8702.jpg
    image_path: /assets/images/grad_photos/IMG_8702.jpg
    alt: "SUSTech Graduation"
  - url: /assets/images/grad_photos/096b55933d1e039b296f93b9af289edf.jpg
    image_path: /assets/images/grad_photos/096b55933d1e039b296f93b9af289edf.jpg
    alt: "SUSTech Graduation"
  - url: /assets/images/grad_photos/IMG_8758.jpg
    image_path: /assets/images/grad_photos/IMG_8758.jpg
    alt: "SUSTech Graduation"
  - url: /assets/images/grad_photos/57D1699E-03BF-4E77-B4D1-FB3ACA310FD8_4_5005_c.jpeg
    image_path: /assets/images/grad_photos/57D1699E-03BF-4E77-B4D1-FB3ACA310FD8_4_5005_c.jpeg
    alt: "SUSTech Graduation"
---

{% include gallery layout="third" %}

<style>
/* 基本图片样式 */
.gallery {
  display: grid;
  margin-bottom: 2rem !important;
}

.gallery.layout--third {
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

.gallery figure {
  margin: 0;
  position: relative;
  overflow: hidden;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

/* 设置图片高度，同时保持比例 */
.gallery img {
  width: 100%;
  height: 220px;
  object-fit: cover;
  transition: all 0.3s ease;
  vertical-align: middle;
  /* 添加延迟加载提示 */
  opacity: 0;
  animation: fadeIn 0.5s ease-in forwards;
}

@keyframes fadeIn {
  0% {opacity: 0;}
  100% {opacity: 1;}
}

/* 延迟加载不同行的图片 */
.gallery figure:nth-child(3n+1) img {
  animation-delay: 0.1s;
}
.gallery figure:nth-child(3n+2) img {
  animation-delay: 0.2s;
}
.gallery figure:nth-child(3n+3) img {
  animation-delay: 0.3s;
}

/* 悬停效果 - 只保留图片缩放效果 */
.gallery a:hover img {
  opacity: 0.95;
  transform: scale(1.03);
}

/* 隐藏所有标题/文字 */
.gallery figcaption {
  display: none;
}

/* 隐藏画廊标题和说明文字 */
.gallery-caption {
  display: none;
}

/* 响应式布局 */
@media (max-width: 768px) {
  .gallery.layout--third {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .gallery.layout--third {
    grid-template-columns: 1fr;
  }
  
  .gallery img {
    height: auto;
  }
}
</style>

<script>
// 图片加载失败时的处理
document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('.gallery img');
  images.forEach(img => {
    img.onerror = function() {
      // 图片加载失败时，显示占位符
      this.src = '/assets/images/bio-photo.jpg';
    };
  });
});
</script>

[← Back to Photo Categories](/photos/)