const pool = require("./backend/db");

async function testConnection() {
    try {
        const result = await pool.query(
            "SELECT current_database() AS database"
        );

        console.log("Database connected:", result.rows[0].database);
    } catch (error) {
        console.error("Database connection failed:", error.message);
        process.exitCode = 1;
    } finally {
        await pool.end();
    }
}

testConnection();