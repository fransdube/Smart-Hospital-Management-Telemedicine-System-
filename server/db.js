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
            date DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY(patient_id) REFERENCES users(id)
        );
    `);

    // Seed data (Optional but good for immediate testing)
    const seedCheck = db.prepare("SELECT COUNT(*) as count FROM users").get();
    if (seedCheck.count === 0) {
        const insertUser = db.prepare("INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)");

        // Default passwords for testing: 'password123'
        const hash = bcrypt.hashSync('password123', 8);

        insertUser.run("Admin User", "admin@afyaconnect.com", hash, "admin");
        insertUser.run("Dr. Smith", "smith@afyaconnect.com", hash, "doctor");
        insertUser.run("John Doe", "john@example.com", hash, "patient");
        console.log("Database seeded with initial users.");
    }

    console.log("Database initialized successfully.");
};

initDb();

module.exports = db;
