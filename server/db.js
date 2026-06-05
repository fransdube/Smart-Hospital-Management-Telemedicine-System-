const Database = require('better-sqlite3');
const path = require('path');
const bcrypt = require('bcryptjs');

const dbPath = path.join(__dirname, 'hospital.db');
const db = new Database(dbPath, { verbose: console.log });

const initDb = () => {
    // Create Users table
    db.exec(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL,
            role TEXT CHECK(role IN ('patient', 'doctor', 'admin')) NOT NULL,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        );
    `);

    // Create Appointments table
    db.exec(`
        CREATE TABLE IF NOT EXISTS appointments (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            patient_id INTEGER,
            doctor_id INTEGER,
            date TEXT NOT NULL,
            time TEXT NOT NULL,
            status TEXT CHECK(status IN ('scheduled', 'completed', 'cancelled')) DEFAULT 'scheduled',
            reason TEXT,
            FOREIGN KEY(patient_id) REFERENCES users(id),
            FOREIGN KEY(doctor_id) REFERENCES users(id)
        );
    `);

    // Create Medical Records (EHR) table
    db.exec(`
        CREATE TABLE IF NOT EXISTS medical_records (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            patient_id INTEGER,
            doctor_id INTEGER,
            diagnosis TEXT,
            prescription TEXT,
            notes TEXT,
            date DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY(patient_id) REFERENCES users(id),
            FOREIGN KEY(doctor_id) REFERENCES users(id)
        );
    `);

    // Create Billing table
    db.exec(`
        CREATE TABLE IF NOT EXISTS billing (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            patient_id INTEGER,
            amount DECIMAL(10,2) NOT NULL,
            description TEXT,
            status TEXT CHECK(status IN ('pending', 'paid')) DEFAULT 'pending',
            date TEXT DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY(patient_id) REFERENCES users(id)
        );
    `);

    // Create Pharmacy Prescriptions table
    db.exec(`
        CREATE TABLE IF NOT EXISTS pharmacy_prescriptions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            medication TEXT NOT NULL,
            doctor TEXT NOT NULL,
            status TEXT CHECK(status IN ('Processing', 'Ready for Pickup', 'Dispensed')) DEFAULT 'Processing',
            date TEXT NOT NULL
        );
    `);

    // Create Laboratory Tests table
    db.exec(`
        CREATE TABLE IF NOT EXISTS laboratory_tests (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            test TEXT NOT NULL,
            status TEXT CHECK(status IN ('Pending', 'In Progress', 'Completed')) DEFAULT 'Pending',
            result TEXT,
            date TEXT NOT NULL
        );
    `);

    // Seed data
    const seedCheck = db.prepare("SELECT COUNT(*) as count FROM users").get();
    if (seedCheck.count === 0) {
        const insertUser = db.prepare("INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)");
        const hash = bcrypt.hashSync('password123', 8);

        insertUser.run("Admin User", "admin@afyaconnect.com", hash, "admin");
        insertUser.run("Dr. Smith", "smith@afyaconnect.com", hash, "doctor");
        insertUser.run("John Doe", "john@example.com", hash, "patient");
        console.log("Database seeded with initial users.");
    }

    // Seed Pharmacy Prescriptions
    const rxCheck = db.prepare("SELECT COUNT(*) as count FROM pharmacy_prescriptions").get();
    if (rxCheck.count === 0) {
        const insertRx = db.prepare("INSERT INTO pharmacy_prescriptions (medication, doctor, status, date) VALUES (?, ?, ?, ?)");
        insertRx.run("Amoxicillin 500mg", "Dr. Sarah Johnson", "Ready for Pickup", "May 15, 2026");
        insertRx.run("Lisinopril 10mg", "Dr. Michael Chen", "Processing", "May 18, 2026");
        insertRx.run("Metformin 850mg", "Dr. Emily Davis", "Dispensed", "May 10, 2026");
        console.log("Database seeded with pharmacy prescriptions.");
    }

    // Seed Laboratory Tests
    const labCheck = db.prepare("SELECT COUNT(*) as count FROM laboratory_tests").get();
    if (labCheck.count === 0) {
        const insertLab = db.prepare("INSERT INTO laboratory_tests (test, status, result, date) VALUES (?, ?, ?, ?)");
        insertLab.run("Complete Blood Count (CBC)", "Completed", "Normal", "May 14, 2026");
        insertLab.run("Lipid Panel", "Completed", "Abnormal", "May 11, 2026");
        insertLab.run("Urinalysis", "In Progress", "-", "May 17, 2026");
        console.log("Database seeded with laboratory tests.");
    }

    // Seed Billing
    const billCheck = db.prepare("SELECT COUNT(*) as count FROM billing").get();
    if (billCheck.count === 0) {
        const insertBill = db.prepare("INSERT INTO billing (amount, description, status, date) VALUES (?, ?, ?, ?)");
        insertBill.run(5000, "Consultation - Dr. Sarah Johnson", "paid", "May 15, 2026");
        insertBill.run(3500, "Blood Test - Complete Panel", "paid", "May 12, 2026");
        insertBill.run(8000, "X-Ray Imaging", "pending", "May 10, 2026");
        insertBill.run(2500, "Medication - Pharmacy", "paid", "May 8, 2026");
        console.log("Database seeded with billing records.");
    }

    console.log("Database initialized successfully.");
};

initDb();

module.exports = db;
