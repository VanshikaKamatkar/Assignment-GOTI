# Kilangi - eCommerce Website

A responsive, high-fidelity eCommerce homepage for the luxury jewelry brand **Kilangi**. This project demonstrates a pixel-perfect conversion of a design mockup into code, featuring a distinct "Modern Luxury" aesthetic, responsive layouts for desktop and mobile, and custom JavaScript animations.

## 🌟 Project Overview

This homepage is designed to showcase premium gold and silver jewelry. It features a split-layout hero section, a horizontal scrolling product carousel, a grid-based category collection, and an interactive testimonial slider. The design emphasizes typography (Playfair Display & Montserrat), negative space, and a curated color palette (`#214b48` Deep Teal & `#fffbf9` Cream).

### 📱 Responsive Design
* **Desktop:** Full-width navigation, split-screen hero, 3-column product grids.
* **Mobile:** App-like experience with a category pill navigation, vertical image-first hero section, and touch-friendly horizontal scrollers for bestsellers and reviews.

## 🚀 Features

* **Custom Animations:**
    * *Waterfall Entrance:* Elements fade in and slide up sequentially as you scroll.
    * *Hover Effects:* Product cards lift with a 3D shadow; buttons fill with color on hover.
    * *Luxury Shine:* A subtle light gleam effect sweeps across category images on hover.
* **Mobile Optimizations:**
    * Sticky header with mobile-specific search & navigation pills.
    * Horizontal swipe/scroll areas for Collections and Testimonials.
    * Adaptive Hero section that restructures completely for portrait screens.
* **Clean Code:** Built with semantic HTML5, organized CSS variables, and vanilla JavaScript (no frameworks).

## 🛠️ Technologies Used

* **HTML5** (Semantic Structure)
* **CSS3** (Flexbox, Grid, Variables, Keyframe Animations)
* **JavaScript** (IntersectionObserver API for scroll animations)
* **FontAwesome** (Icons)
* **Google Fonts** (Montserrat & Playfair Display)

## 📂 File Structure

```text
/Kilangi-Website
│
├── index.html          # Main HTML structure
├── style.css           # Global styles, variables, and responsive media queries
├── script.js           # Scroll animations and interaction logic
│
└── /assets             # (Optional) Folder for local images
    ├── hero-bg.png
    ├── mobile-hero.jpg
    └── ...
