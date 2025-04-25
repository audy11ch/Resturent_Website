// เพิ่ม JavaScript สำหรับการเปิด/ปิดเมนูมือถือ
document.addEventListener('DOMContentLoaded', function() {
  // สร้าง mobile menu element
  const mobileMenuHTML = `
      <div class="mobile-menu">
          <button class="mobile-menu-close">×</button>
          <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Shop</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Pages</a></li>
              <li><a href="#">Contact</a></li>
          </ul>
      </div>
  `;
  
  // เพิ่ม mobile menu เข้าไปใน body
  document.body.insertAdjacentHTML('beforeend', mobileMenuHTML);
  
  // เลือก elements
  const hamburgerButton = document.querySelector('.hamburger-menu button');
  const mobileMenu = document.querySelector('.mobile-menu');
  const closeButton = document.querySelector('.mobile-menu-close');
  
  // เพิ่ม event listener สำหรับปุ่มแฮมเบอร์เกอร์
  hamburgerButton.addEventListener('click', function() {
      mobileMenu.classList.add('active');
  });
  
  // เพิ่ม event listener สำหรับปุ่มปิด
  closeButton.addEventListener('click', function() {
      mobileMenu.classList.remove('active');
  });
  
  // ปิดเมนูเมื่อคลิกที่ลิงก์ในเมนู
  const mobileMenuLinks = document.querySelectorAll('.mobile-menu ul li a');
  mobileMenuLinks.forEach(link => {
      link.addEventListener('click', function() {
          mobileMenu.classList.remove('active');
      });
  });
  
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
          if (featuredProduct && heroContent) {
              heroContent.after(featuredProduct);
          }
      }
  }
  
  // เรียกใช้ฟังก์ชันเมื่อโหลดหน้าเว็บและเมื่อ resize หน้าต่าง
  adjustLayout();
  window.addEventListener('resize', adjustLayout);
});