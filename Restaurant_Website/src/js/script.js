// JavaScript สำหรับการจัดการ responsive layout
document.addEventListener('DOMContentLoaded', function() {
    // เลือก elements
    const hamburgerButton = document.querySelector('.hamburger-menu button');
    const mobileMenu = document.querySelector('.mobile-menu');
    const closeButton = document.querySelector('.mobile-menu-close');
    
    // จัดการเมนูมือถือ
    if (hamburgerButton && mobileMenu && closeButton) {
        // เพิ่ม event listener สำหรับปุ่มแฮมเบอร์เกอร์
        hamburgerButton.addEventListener('click', function() {
            mobileMenu.classList.add('active');
            document.body.style.overflow = 'hidden'; // ป้องกันการเลื่อนหน้าเมื่อเมนูเปิด
        });
        
        // เพิ่ม event listener สำหรับปุ่มปิด
        closeButton.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = ''; // คืนค่าการเลื่อนหน้า
        });
        
        // ปิดเมนูเมื่อคลิกที่ลิงก์ในเมนู
        const mobileMenuLinks = document.querySelectorAll('.mobile-menu ul li a');
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }
    
    // เปลี่ยน tab ในส่วนของเมนูอาหาร
    const menuTabs = document.querySelectorAll('.menu-tab');
    if (menuTabs.length > 0) {
        menuTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                // ลบคลาส active จากทุก tab
                menuTabs.forEach(t => t.classList.remove('active'));
                // เพิ่มคลาส active ให้กับ tab ที่คลิก
                this.classList.add('active');
                
                // ตัวอย่างโค้ดสำหรับแสดงเนื้อหาตามแท็บที่เลือก
                const category = this.querySelector('.tab-label').textContent;
                console.log('Selected category:', category);
                // ที่นี่คุณสามารถเพิ่มโค้ดสำหรับโหลดเนื้อหาที่เกี่ยวข้องได้
            });
        });
    }
    
    // ฟังก์ชันสำหรับปรับ layout ตามขนาดหน้าจอ
    function adjustLayout() {
        const width = window.innerWidth;
        
        // ปรับตำแหน่ง featured product ใน hero section
        const heroContent = document.querySelector('.hero-content');
        const featuredProduct = document.querySelector('.featured-product');
        
        if (width <= 768 && heroContent && featuredProduct) {
            if (!featuredProduct.classList.contains('moved')) {
                heroContent.parentNode.insertBefore(featuredProduct, heroContent.nextSibling);
                featuredProduct.classList.add('moved');
            }
        } else if (width > 768 && featuredProduct && featuredProduct.classList.contains('moved')) {
            const hero = document.querySelector('.hero');
            if (hero) {
                hero.appendChild(featuredProduct);
                featuredProduct.classList.remove('moved');
            }
        }
        
        // ปรับขนาดรูปภาพใน card-showcase
        const cardImages = document.querySelectorAll('.card-showcase img');
        if (width <= 768 && cardImages.length > 0) {
            cardImages.forEach(img => {
                if (img.hasAttribute('width')) {
                    img.removeAttribute('width');
                }
                if (img.hasAttribute('height')) {
                    img.removeAttribute('height');
                }
            });
        }
        
        // ปรับเลย์เอาท์สำหรับ banner-section บนมือถือ
        const bannerSection = document.querySelector('.banner-section');
        if (width <= 992 && bannerSection) {
            const phoneImage = bannerSection.querySelector('.phone-image');
            const textContent = bannerSection.querySelector('.text-content');
            const visualContent = bannerSection.querySelector('.visual-content');
            
            if (phoneImage && textContent && visualContent && !phoneImage.classList.contains('mobile-positioned')) {
                visualContent.appendChild(phoneImage);
                phoneImage.classList.add('mobile-positioned');
            }
        } else if (width > 992 && bannerSection) {
            const phoneImage = bannerSection.querySelector('.phone-image.mobile-positioned');
            if (phoneImage) {
                bannerSection.appendChild(phoneImage);
                phoneImage.classList.remove('mobile-positioned');
            }
        }
    }
    
    // เรียกใช้ฟังก์ชันเมื่อโหลดหน้าเว็บและเมื่อ resize หน้าต่าง
    adjustLayout();
    window.addEventListener('resize', adjustLayout);
    
    // สร้าง Intersection Observer สำหรับ animations เมื่อ scroll
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // เลือก elements ที่ต้องการให้มี animation เมื่อ scroll
    const animateElements = document.querySelectorAll('.card-showcase .col-lg-4, .dis-menu-item, .testimonial-card, .expert-card');
    animateElements.forEach(el => {
        observer.observe(el);
    });
});
// เพิ่ม JavaScript สำหรับ animation เมื่อโหลดหน้าและเลื่อนหน้า
document.addEventListener('DOMContentLoaded', function() {
    // เพิ่ม animation สำหรับ Hero Section เมื่อโหลดหน้า
    setTimeout(function() {
        const heroSection = document.querySelector('.hero');
        if (heroSection) {
            heroSection.classList.add('loaded');
        }
    }, 300);

    // เพิ่ม animation สำหรับ Banner Section เมื่อโหลดหน้า
    setTimeout(function() {
        const bannerSection = document.querySelector('.banner-section');
        if (bannerSection) {
            bannerSection.classList.add('loaded');
        }
    }, 500);

    // สร้าง Intersection Observer สำหรับ elements ที่ต้องการ animate เมื่อ scroll
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // เลือก elements ที่ต้องการ animate
    const animateElements = document.querySelectorAll(
        '.card-showcase .col-lg-4, .dis-menu-item, .testimonial-card, .expert-card, .gallery-container .image-box, .banner-content .text-content, .banner-content .visual-content'
    );

    // เพิ่ม elements เข้าไปใน observer
    animateElements.forEach(el => {
        observer.observe(el);
    });

    // สร้าง Slider สำหรับ Hero Section
    function setupHeroSlider() {
        const dots = document.querySelectorAll('.hero .slider-dots .dot');
        if (dots.length > 0) {
            let currentSlide = 0;
            
            // เปลี่ยนสไลด์เมื่อคลิกที่จุด
            dots.forEach((dot, index) => {
                dot.addEventListener('click', function() {
                    currentSlide = index;
                    updateSlider();
                });
            });

            // ฟังก์ชันสำหรับอัพเดท slider
            function updateSlider() {
                dots.forEach((dot, index) => {
                    if (index === currentSlide) {
                        dot.classList.add('active');
                    } else {
                        dot.classList.remove('active');
                    }
                });

                // ที่นี่คุณสามารถเพิ่มโค้ดสำหรับเปลี่ยนเนื้อหาของสไลด์ได้
                // ตัวอย่าง:
                // document.querySelector('.hero h1').textContent = slideContent[currentSlide].title;
                // document.querySelector('.hero p').textContent = slideContent[currentSlide].description;
            }

            // เปลี่ยนสไลด์อัตโนมัติทุก 5 วินาที
            setInterval(function() {
                currentSlide = (currentSlide + 1) % dots.length;
                updateSlider();
            }, 5000);
        }
    }

    // เรียกใช้ฟังก์ชันตั้งค่า slider
    setupHeroSlider();

    // สร้าง Counter Animation สำหรับตัวเลขราคา
    function setupCounterAnimation() {
        const priceElements = document.querySelectorAll('.product-price, .item-price');
        
        function animateValue(element, start, end, duration) {
            let startTimestamp = null;
            const step = (timestamp) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                const value = Math.floor(progress * (end - start) + start);
                
                // แสดงค่าในรูปแบบราคา
                if (element.classList.contains('product-price')) {
                    element.textContent = '$' + value.toFixed(2);
                } else {
                    element.textContent = '$' + value.toFixed(2);
                }
                
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };
            window.requestAnimationFrame(step);
        }

        // สร้าง Intersection Observer สำหรับ elements ที่มีตัวเลข
        const counterObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // ดึงค่าราคาจาก text
                    const text = entry.target.textContent;
                    const currentPrice = parseFloat(text.replace('$', ''));
                    
                    // เริ่ม animation จาก 0 ไปถึงค่าราคาจริง
                    animateValue(entry.target, 0, currentPrice, 1500);
                    
                    // เลิกติดตาม element นี้
                    counterObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // เพิ่ม elements เข้าไปใน counter observer
        priceElements.forEach(el => {
            counterObserver.observe(el);
        });
    }

    // เรียกใช้ฟังก์ชัน counter animation
    setupCounterAnimation();
});