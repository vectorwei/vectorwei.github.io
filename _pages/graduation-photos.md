---
layout: single
title: "SUSTech Graduation Photos"
permalink: /photos/graduation/
author_profile: true
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /assets/images/gallary/grad_photos/013.jpg
  caption: "SUSTech Graduation"

# 照片画廊 - 使用grad_photos目录中的照片
gallery:
  - url: /assets/images/gallary/grad_photos/01.jpg
    image_path: /assets/images/gallary/grad_photos/01.jpg
    alt: "SUSTech Graduation"
  - url: /assets/images/gallary/grad_photos/02.jpg
    image_path: /assets/images/gallary/grad_photos/02.jpg
    alt: "SUSTech Graduation"  
  - url: /assets/images/gallary/grad_photos/03.jpg
    image_path: /assets/images/gallary/grad_photos/03.jpg
    alt: "SUSTech Graduation"
  - url: /assets/images/gallary/grad_photos/04.jpg
    image_path: /assets/images/gallary/grad_photos/04.jpg
    alt: "SUSTech Graduation"
  - url: /assets/images/gallary/grad_photos/05.jpeg
    image_path: /assets/images/gallary/grad_photos/05.jpeg
    alt: "SUSTech Graduation"
  - url: /assets/images/gallary/grad_photos/06.jpg
    image_path: /assets/images/gallary/grad_photos/06.jpg
    alt: "SUSTech Graduation"
  - url: /assets/images/gallary/grad_photos/07.jpg
    image_path: /assets/images/gallary/grad_photos/07.jpg
    alt: "SUSTech Graduation"
  - url: /assets/images/gallary/grad_photos/08.jpg
    image_path: /assets/images/gallary/grad_photos/08.jpg
    alt: "SUSTech Graduation"
  - url: /assets/images/gallary/grad_photos/09.jpg
    image_path: /assets/images/gallary/grad_photos/09.jpg
    alt: "SUSTech Graduation"
  - url: /assets/images/gallary/grad_photos/010.jpg
    image_path: /assets/images/gallary/grad_photos/010.jpg
    alt: "SUSTech Graduation"
  - url: /assets/images/gallary/grad_photos/011.jpg
    image_path: /assets/images/gallary/grad_photos/011.jpg
    alt: "SUSTech Graduation"
  - url: /assets/images/gallary/grad_photos/012.jpg
    image_path: /assets/images/gallary/grad_photos/012.jpg
    alt: "SUSTech Graduation"
  - url: /assets/images/gallary/grad_photos/013.jpg
    image_path: /assets/images/gallary/grad_photos/013.jpg
    alt: "SUSTech Graduation"
  - url: /assets/images/gallary/grad_photos/014.jpg
    image_path: /assets/images/gallary/grad_photos/014.jpg
    alt: "SUSTech Graduation"
  - url: /assets/images/gallary/grad_photos/015.jpg
    image_path: /assets/images/gallary/grad_photos/015.jpg
    alt: "SUSTech Graduation"
  - url: /assets/images/gallary/grad_photos/016.jpg
    image_path: /assets/images/gallary/grad_photos/016.jpg
    alt: "SUSTech Graduation"
  - url: /assets/images/gallary/grad_photos/017.jpg
    image_path: /assets/images/gallary/grad_photos/017.jpg
    alt: "SUSTech Graduation"
  - url: /assets/images/gallary/grad_photos/018.jpg
    image_path: /assets/images/gallary/grad_photos/018.jpg
    alt: "SUSTech Graduation"
  - url: /assets/images/gallary/grad_photos/019.jpg
    image_path: /assets/images/gallary/grad_photos/019.jpg
    alt: "SUSTech Graduation"
  - url: /assets/images/gallary/grad_photos/020.jpg
    image_path: /assets/images/gallary/grad_photos/020.jpg
    alt: "SUSTech Graduation"
  - url: /assets/images/gallary/grad_photos/021.jpg
    image_path: /assets/images/gallary/grad_photos/021.jpg
    alt: "SUSTech Graduation"
  - url: /assets/images/gallary/grad_photos/022.jpg
    image_path: /assets/images/gallary/grad_photos/022.jpg
    alt: "SUSTech Graduation"
---

{% include gallery %}

<style>
/* Masonry grid styles */
.gallery-grid {
  margin: 0 auto;
}

/* Clearfix for the container */
.gallery-grid:after {
  content: '';
  display: block;
  clear: both;
}

.grid-sizer,
.grid-item {
  width: 33.333%;
}

@media (max-width: 768px) {
  .grid-sizer,
  .grid-item {
    width: 50%;
  }
}

@media (max-width: 480px) {
  .grid-sizer,
  .grid-item {
    width: 100%;
  }
}

.grid-item {
  float: left;
  padding: 5px;
}

.grid-item img {
  display: block;
  width: 100%;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
}

.grid-item a:hover img {
  opacity: 0.9;
  transform: scale(1.03);
}
</style>

<script src="https://unpkg.com/imagesloaded@5/imagesloaded.pkgd.min.js"></script>
<script src="https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.min.js"></script>

<script>
document.addEventListener('DOMContentLoaded', function() {
  var grid = document.querySelector('.gallery-grid');
  
  imagesLoaded( grid, function() {
    // init Masonry after all images have loaded
    var msnry = new Masonry( grid, {
      itemSelector: '.grid-item',
      columnWidth: '.grid-sizer',
      percentPosition: true,
      gutter: 0
    });
  });

  // Fallback for image errors
  const images = document.querySelectorAll('.grid-item img');
  images.forEach(img => {
    img.onerror = function() {
      this.src = '/assets/images/bio-photo.jpg'; // Fallback image
      this.closest('.grid-item').style.display = 'none'; // Optionally hide broken items
    };
  });
});
</script>

[← Back to Photo Categories](/photos/)