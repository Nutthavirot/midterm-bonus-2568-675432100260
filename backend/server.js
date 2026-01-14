// server.js
const express = require('express');
const bookRoutes = require('./src/presentation/routes/bookRoutes');
const errorHandler = require('./src/presentation/middlewares/errorHandler');
const corsMiddleware = require('./src/presentation/middlewares/cors');
const cors = require('cors');
const app = express();

// การตั้งค่า CORS - เพิ่มส่วนนี้
const corsOptions = {
    origin: true, // อนุญาตทุก origins ใน development
    credentials: true,
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));  // เพิ่มบรรทัดนี้

// Middleware
app.use(express.json());
app.use(corsMiddleware);

// Routes
app.use('/api/books', bookRoutes);

// Error handling (ต้องอยู่ท้ายสุด)
app.use(errorHandler);

// 🆕 Listen on 0.0.0.0 (สำคัญสำหรับ VM)
const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`
╔═══════════════════════════════════════════════╗
║  Library API Server (Client-Server)           ║
║  Server running on http://0.0.0.0:${PORT}     ║
║  API Endpoints: http://192.168.56.2:${PORT}/api  ║
╚═══════════════════════════════════════════════╝
    `);
});

