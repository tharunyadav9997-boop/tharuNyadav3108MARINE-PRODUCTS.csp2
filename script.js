// js/script.js

// Tailwind Custom Colors config
tailwind.config = {
    theme: {
        extend: {
            colors: {
                ocean: '#0f172a',
                aqua: '#06b6d4',
                sea: '#14b8a6',
            }
        }
    }
}

// Mobile menu toggle
function toggleMobileMenu() {
    let menu = document.getElementById('mobile-menu');
    if (menu) {
        menu.classList.toggle('hidden');
    }
}

// Homepage: Show sub-sections (Week 1, Week 2, etc.)
function showSubSection(sectionId) {
    let grid = document.getElementById('home-buttons-grid');
    if(grid) grid.classList.add('hidden');
    
    let sections = document.querySelectorAll('.sub-section');
    sections.forEach(function(sec) {
        sec.classList.add('hidden');
    });
    
    let target = document.getElementById(sectionId);
    if(target) target.classList.remove('hidden');
}

// Homepage: Back to buttons grid
function backToHomeGrid() {
    let sections = document.querySelectorAll('.sub-section');
    sections.forEach(function(sec) {
        sec.classList.add('hidden');
    });
    
    let grid = document.getElementById('home-buttons-grid');
    if(grid) grid.classList.remove('hidden');
}

// Feature: Click to Upload/Change Photo
function changeImage(imgElement) {
    let fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    
    fileInput.onchange = function(event) {
        let file = event.target.files[0];
        if (file) {
            let reader = new FileReader();
            reader.onload = function(e) {
                imgElement.src = e.target.result;
            }
            reader.readAsDataURL(file);
        }
    };
    
    fileInput.click();
}
