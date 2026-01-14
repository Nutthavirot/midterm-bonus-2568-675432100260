# Architecture Comparison

## Layered Architecture (Before)

### Pros:

* โครงสร้างเข้าใจง่าย แยกตามหน้าที่ (Controller / Service / Repository)
* เหมาะกับระบบขนาดเล็กถึงขนาดกลาง
* แก้ไขโค้ดในแต่ละชั้นได้โดยไม่กระทบทั้งระบบมาก
* ช่วยให้โค้ดเป็นระเบียบและดูแลรักษาง่ายในช่วงแรก

### Cons:

* Frontend และ Backend ยังผูกกันแน่น (coupling สูง)
* ขยายระบบหรือเปลี่ยน frontend ได้ยาก
* ไม่เหมาะกับการรองรับหลาย client (เช่น Web, Mobile)
* การ scale ระบบในอนาคตทำได้จำกัด

---

## Client-Server Architecture (After)

### Pros:

* แยก frontend และ backend ออกจากกันอย่างชัดเจน
* Backend สามารถให้บริการผ่าน API กับหลาย client ได้
* พัฒนาและ deploy แต่ละส่วนแยกกันได้
* รองรับการขยายระบบและ scale ได้ดีกว่า
* เหมาะกับระบบจริงและงาน production

### Cons:

* โครงสร้างซับซ้อนขึ้น ต้องจัดการ API และการสื่อสารระหว่าง client-server
* ต้องดูแลเรื่อง CORS, security และการจัดการข้อมูลมากขึ้น
* ใช้เวลาในการพัฒนาและออกแบบมากกว่าระบบแบบ Layered
* Debug ยากขึ้นเมื่อเกิดปัญหาข้ามฝั่ง (frontend ↔ backend)

## Changes Made

### 1. Separation
- แยก Frontend และ Backend เป็น 2 โปรเจกต์

### 2. Communication
- ใช้ REST API (HTTP/JSON)

### 3. CORS
- เพิ่ม CORS middleware เพื่อให้ Client-Server คุยกันได้

### 4. API Response Format
- มาตรฐาน: { success, data, timestamp }