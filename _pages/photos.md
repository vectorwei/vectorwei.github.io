---
layout: single
title: "Photo Gallery"
permalink: /photos/
author_profile: true
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /assets/images/background.jpg
excerpt: "A collection of photographs from my adventures"

feature_row:
  - image_path: /assets/images/gallary/grad_photos/013.jpg
    alt: "SUSTech graduation photography"
    title: "SUSTech Graduation"
    excerpt: "Memories from my graduation at SUSTech-2024.6.24"
    url: "/photos/graduation/"
    btn_label: "View Gallery"
    btn_class: "btn--primary"
  - image_path: assets/images/gallary/moutainhuang/019.jpg
    alt: "Travel photography"
    title: "黄山"
    excerpt: "没有看到日出的黄山游记2025.7.19"
    url: "/photos/huangshan/"
    btn_label: "View Gallery"
    btn_class: "btn--primary"
  - image_path: /assets/images/background.jpg
    alt: "Urban photography"
    title: "Urban"
    excerpt: "City scenes, architecture, and street photography."
    url: "#"
    btn_label: "View Gallery"
    btn_class: "btn--primary"
  - image_path: /assets/images/background.jpg
    alt: "People photography"
    title: "People"
    excerpt: "Portraits and candid shots of people and events."
    url: "#"
    btn_label: "View Gallery"
    btn_class: "btn--primary"
---

# My Photo Collection

Welcome to my photo gallery! Here I share photographs from various categories that I've taken over time. Click on any category to explore.

{% include feature_row %}

<style>
.feature__item {
  transition: all 0.3s ease;
}

.feature__item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}

.archive__item-teaser img {
  transition: all 0.3s ease;
}

.feature__item:hover .archive__item-teaser img {
  opacity: 0.8;
}
</style> 