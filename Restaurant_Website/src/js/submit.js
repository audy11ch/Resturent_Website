document.getElementById("reserveForm").addEventListener("submit", function (e) {
    e.preventDefault(); // ป้องกันการโหลดหน้าใหม่

    // ดึงค่าจาก input ทีละช่อง
    const guestNo = document.getElementById("guestNo").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const fullName = document.getElementById("fullName").value;
    const phoneNo = document.getElementById("phoneNo").value;

    // แสดงใน console
    console.log("Form Submitted:");
    console.log("Guest No:", guestNo);
    console.log("Date:", date);
    console.log("Time:", time);
    console.log("Full Name:", fullName);
    console.log("Phone No:", phoneNo);
  });
