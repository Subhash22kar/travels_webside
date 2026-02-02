import { google } from "googleapis";

/**
 * Appends a row of data to the Google Sheet.
 * @param data - The inquiry data object.
 * @returns boolean - True if successful, false otherwise.
 */
export async function appendToSheet(data: {
    name: string;
    phone: string;
    destination: string;
    budget: string;
    message: string;
}) {
    try {
        const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
        const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");
        const spreadsheetId = process.env.GOOGLE_SHEET_ID;

        if (!clientEmail || !privateKey || !spreadsheetId) {
            console.warn("Google Sheets credentials missing. Log only mode.");
            console.log("Data to save:", data);
            return false; // Fail gracefully or return true if just logging
        }

        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: clientEmail,
                private_key: privateKey,
            },
            scopes: ["https://www.googleapis.com/auth/spreadsheets"],
        });

        const sheets = google.sheets({ version: "v4", auth });

        const row = [
            new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }), // Timestamp
            data.name,
            data.phone,
            data.destination,
            data.budget,
            data.message,
        ];

        await sheets.spreadsheets.values.append({
            spreadsheetId,
            range: "Sheet1!A:F",
            valueInputOption: "USER_ENTERED",
            requestBody: {
                values: [row],
            },
        });

        return true;
    } catch (error) {
        console.error("Google Sheets Error:", error);
        return false;
    }
}
