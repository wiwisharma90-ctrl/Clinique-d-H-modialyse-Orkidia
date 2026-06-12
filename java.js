document.addEventListener("DOMContentLoaded", function() {
    
    // 1. كود لتحديث اسم الملف فور تصوير أو رفع بطاقة التعريف الوطنية
    const fileInput = document.getElementById("idCard");
    const fileNameDisplay = document.getElementById("fileNameDisplay");

    if (fileInput) {
        fileInput.addEventListener("change", function(e) {
            if (e.target.files.length > 0) {
                const name = e.target.files[0].name;
                fileNameDisplay.textContent = "📎 الملف المختار: " + name;
                fileNameDisplay.style.color = "#16a085";
                fileNameDisplay.style.fontWeight = "bold";
            } else {
                fileNameDisplay.textContent = "ولم يتم اختيار أي ملف بعد";
                fileNameDisplay.style.color = "#7f8c8d";
            }
        });
    }

    // 2. إدارة إرسال النموذج (Form Submission) وإظهار التأكيد الطبي
    const bookingForm = document.getElementById("medicalBookingForm");
    const successMessage = document.getElementById("successMessage");

    if (bookingForm) {
        bookingForm.addEventListener("submit", function(event) {
            event.preventDefault(); // منع الصفحة من إعادة التحميل الافتراضية

            // هنا نجمع البيانات التي أدخلها المريض تمهيداً لإرسالها لـ Supabase لاحقاً
            const patientData = {
                firstName: document.getElementById("firstName").value,
                lastName: document.getElementById("lastName").value,
                phone: document.getElementById("phone").value,
                service: document.getElementById("serviceType").value,
                symptoms: document.getElementById("symptoms").value,
                idCardFile: fileInput.files[0]
            };

            console.log("تم تجميع ملف المريض بنجاح:", patientData);

            // إخفاء الفورم بسلاسة وعرض رسالة النجاح والترحيب بالكلينيك
            bookingForm.reset();
            bookingForm.style.display = "none";
            successMessage.classList.remove("hidden");
            
            // تمرير الشاشة تلقائياً ليرى المريض رسالة التثبيت المريحة
            successMessage.scrollIntoView({ behavior: 'smooth' });
        });
    }
});
