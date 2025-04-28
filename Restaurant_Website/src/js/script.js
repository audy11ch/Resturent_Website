// JavaScript สำหรับการจัดการ responsive layout
document.addEventListener('DOMContentLoaded', function() {
    // เลือก elements
    const hamburgerButton = document.querySelector('.hamburger-menu button');
    
    // ถ้ามีเมนูมือถืออยู่แล้วในโครงสร้าง HTML (โดยซ่อนไว้ด้วย CSS)
    const mobileMenu = document.querySelector('.mobile-menu'); 
    const closeButton = document.querySelector('.mobile-menu-close');
    
    // ถ้ามี hamburger button และ mobile menu
    if (hamburgerButton && mobileMenu) {
        // เพิ่ม event listener สำหรับปุ่มแฮมเบอร์เกอร์
        hamburgerButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
        });
        
        // ถ้ามีปุ่มปิด
        if (closeButton) {
            // เพิ่ม event listener สำหรับปุ่มปิด
            closeButton.addEventListener('click', function() {
                mobileMenu.classList.remove('active');
            });
        }
        
        // ปิดเมนูเมื่อคลิกที่ลิงก์ในเมนู
        const mobileMenuLinks = document.querySelectorAll('.mobile-menu ul li a');
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.remove('active');
            });
        });
    }
    
    // เปลี่ยน tab ในส่วนของเมนูอาหาร
    const menuTabs = document.querySelectorAll('.menu-tab');
    menuTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // ลบคลาส active จากทุก tab
            menuTabs.forEach(t => t.classList.remove('active'));
            // เพิ่มคลาส active ให้กับ tab ที่คลิก
            this.classList.add('active');
            
            // ส่วนนี้สามารถเพิ่มโค้ดสำหรับการเปลี่ยนเนื้อหาตาม tab ที่เลือกได้
            // ตัวอย่าง:
            // const category = this.querySelector('.tab-label').textContent;
            // loadMenuItems(category);
        });
    });
    
    // ปรับ layout ตาม breakpoint
    function adjustLayout() {
        const width = window.innerWidth;
        const heroContent = document.querySelector('.hero-content');
        const featuredProduct = document.querySelector('.featured-product');
        
        if (width <= 768) {
            // ย้าย featured product ไปต่อท้าย hero content สำหรับมือถือ
            if (featuredProduct && heroContent && !featuredProduct.classList.contains('moved')) {
                heroContent.after(featuredProduct);
                featuredProduct.classList.add('moved');
            }
        } else {
            // ย้ายกลับตำแหน่งเดิมสำหรับเดสก์ท็อป (ถ้าคุณต้องการ)
            if (featuredProduct && featuredProduct.classList.contains('moved')) {
                // ต้องระบุตำแหน่งเดิมที่ต้องการย้ายกลับ
                // เช่น document.querySelector('.hero').appendChild(featuredProduct);
                featuredProduct.classList.remove('moved');
            }
        }
    }
    
    // เรียกใช้ฟังก์ชันเมื่อโหลดหน้าเว็บและเมื่อ resize หน้าต่าง
    adjustLayout();
    window.addEventListener('resize', adjustLayout);
  });