const CONFIG = {
  SHEET_ID: "1URXMyQlVI22kuroclRqsTGQd9buAwOy7IMegxNYO5F0",
  SHEET_NAME: "Michelle's 15 Guest List",
  GUEST_LIST_SHEET_NAME: "Michelle's 15 Guest List",
  REQUIRE_GUEST_LIST_MATCH: false,
  EVENT_NAME: "Michelle's Quinceanera",
  SEND_EMAIL_NOTIFICATIONS: true,
  NOTIFICATION_EMAIL: "stephy0125@gmail.com",
};

function doGet() {
  return json_({
    ok: true,
    message: "Michelle's Quinceanera RSVP endpoint is active.",
  });
}

function doPost(e) {
  try {
    const payload = JSON.parse(e.postData.contents);
    const sheet = getSheet_();
    const submittedAt = new Date();
    const guestMatch = findGuest_(payload);

    if (CONFIG.REQUIRE_GUEST_LIST_MATCH && !guestMatch.found) {
      return json_({
        ok: false,
        message: "We could not find that name on the guest list.",
      });
    }

    sheet.appendRow([
      submittedAt,
      payload.fullName || "",
      payload.attendance || "",
      payload.guestCount || "",
      guestMatch.found ? "Matched" : "Not matched",
    ]);

    sendNotificationEmail_(payload, submittedAt, guestMatch);

    return json_({
      ok: true,
      message: "RSVP received. Thank you!",
    });
  } catch (error) {
    return json_({
      ok: false,
      message: error.message,
    });
  }
}

function getSheet_() {
  const spreadsheet = getSpreadsheet_();
  let sheet = spreadsheet.getSheetByName(CONFIG.SHEET_NAME);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(CONFIG.SHEET_NAME);
  }

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(["Submitted At", "Full Name", "Attendance", "Number of Guests", "Guest List Status"]);
  }

  return sheet;
}

function findGuest_(payload) {
  const spreadsheet = getSpreadsheet_();
  const guestSheet = spreadsheet.getSheetByName(CONFIG.GUEST_LIST_SHEET_NAME);

  if (!guestSheet || guestSheet.getLastRow() < 2) {
    return { found: false };
  }

  const submittedName = normalize_(payload.fullName || "");
  const rows = guestSheet.getRange(2, 1, guestSheet.getLastRow() - 1, 1).getValues();

  const found = rows.some(([name]) => {
    return normalize_(name) === submittedName;
  });

  return { found };
}

function getSpreadsheet_() {
  const configuredSheetId = String(CONFIG.SHEET_ID || "").trim();

  if (configuredSheetId && !configuredSheetId.includes("PASTE_YOUR")) {
    return SpreadsheetApp.openById(configuredSheetId);
  }

  const activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet();

  if (!activeSpreadsheet) {
    throw new Error("No spreadsheet found. Add your Google Sheet ID to CONFIG.SHEET_ID.");
  }

  return activeSpreadsheet;
}

function sendNotificationEmail_(payload, submittedAt, guestMatch) {
  const notificationEmail = String(CONFIG.NOTIFICATION_EMAIL || "").trim();

  if (
    !CONFIG.SEND_EMAIL_NOTIFICATIONS ||
    !notificationEmail ||
    notificationEmail.includes("PASTE_YOUR")
  ) {
    return;
  }

  const guestName = payload.fullName || "Guest";
  const subject = `New RSVP from ${guestName} - ${CONFIG.EVENT_NAME}`;
  const body = [
    `A new RSVP was submitted for ${CONFIG.EVENT_NAME}.`,
    "",
    `Submitted at: ${submittedAt}`,
    `Full name: ${payload.fullName || ""}`,
    `Attendance: ${payload.attendance || ""}`,
    `Number of guests: ${payload.guestCount || ""}`,
    `Guest list status: ${guestMatch.found ? "Matched" : "Not matched"}`,
  ].join("\n");

  try {
    MailApp.sendEmail({
      to: notificationEmail,
      subject,
      body,
      htmlBody: buildNotificationEmailHtml_(payload, submittedAt, guestMatch),
    });
  } catch (error) {
    console.error(`RSVP notification email failed: ${error.message}`);
  }
}

function buildNotificationEmailHtml_(payload, submittedAt, guestMatch) {
  const guestName = escapeHtml_(payload.fullName || "");
  const attendance = escapeHtml_(payload.attendance || "");
  const guestCount = escapeHtml_(payload.guestCount || "0");
  const status = guestMatch.found ? "Matched" : "Not matched";
  const submitted = escapeHtml_(submittedAt.toLocaleString());

  return `
    <div style="margin:0;padding:28px;background:#fff2f7;font-family:Arial,Helvetica,sans-serif;color:#5a2639;">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;">
        <tr>
          <td align="center">
            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:640px;border-collapse:collapse;background:#fff8fb;border:1px solid #f1c8d6;border-radius:22px;overflow:hidden;box-shadow:0 18px 46px rgba(138,74,94,0.16);">
              <tr>
                <td style="padding:34px 26px 28px;text-align:center;background:linear-gradient(135deg,#7a2c47 0%,#9f4563 55%,#c95f82 100%);">
                  <div style="font-family:Georgia,'Times New Roman',serif;font-size:14px;letter-spacing:5px;text-transform:uppercase;color:#e7c26c;margin-bottom:12px;">New RSVP</div>
                  <div style="font-family:Georgia,'Times New Roman',serif;font-size:38px;line-height:1;color:#fff8fb;font-style:italic;">Michelle's Quinceanera</div>
                  <div style="width:150px;height:1px;background:#e7c26c;margin:20px auto 0;"></div>
                </td>
              </tr>
              <tr>
                <td style="padding:34px 30px 28px;background:linear-gradient(180deg,#fff8fb 0%,#ffe8f0 100%);">
                  <p style="margin:0 0 22px;font-size:22px;line-height:1.4;font-family:Georgia,'Times New Roman',serif;color:#8a4a5e;text-align:center;">
                    A guest has confirmed their RSVP.
                  </p>

                  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:separate;border-spacing:0 10px;">
                    ${emailDetailRow_("Full Name", guestName)}
                    ${emailDetailRow_("Attendance", attendance)}
                    ${emailDetailRow_("Number of Guests", guestCount)}
                    ${emailDetailRow_("Guest List Status", status)}
                    ${emailDetailRow_("Submitted At", submitted)}
                  </table>

                  <div style="margin:28px auto 0;padding:16px 18px;border-radius:18px;background:rgba(255,255,255,0.74);border:1px solid #f1c8d6;text-align:center;">
                    <div style="font-size:12px;letter-spacing:3px;text-transform:uppercase;color:#c14f72;font-weight:bold;">Event Details</div>
                    <div style="margin-top:10px;font-size:15px;line-height:1.7;color:#6f394d;">
                      Saturday, June 20, 2026 at 6:00 PM<br />
                      787 Hacienda
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td style="padding:22px 26px;text-align:center;background:#7a2c47;color:#f9d7e3;">
                  <div style="font-family:Georgia,'Times New Roman',serif;font-size:23px;font-style:italic;color:#fff8fb;">With love, the Rodriguez family</div>
                  <div style="margin-top:10px;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#e7c26c;">Sent automatically from Michelle's invitation</div>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  `;
}

function emailDetailRow_(label, value) {
  return `
    <tr>
      <td style="width:42%;padding:15px 16px;background:#fff;border-top-left-radius:16px;border-bottom-left-radius:16px;border:1px solid #f1c8d6;border-right:0;font-size:13px;letter-spacing:1.6px;text-transform:uppercase;color:#9f4563;font-weight:bold;">
        ${label}
      </td>
      <td style="padding:15px 16px;background:#fff;border-top-right-radius:16px;border-bottom-right-radius:16px;border:1px solid #f1c8d6;border-left:0;font-size:16px;color:#5a2639;">
        ${value}
      </td>
    </tr>
  `;
}

function testRsvpSubmission() {
  const payload = {
    fullName: "Test Guest",
    attendance: "Yes, I wouldn't miss it!",
    guestCount: "1",
  };
  const sheet = getSheet_();
  const submittedAt = new Date();
  const guestMatch = findGuest_(payload);

  sheet.appendRow([
    submittedAt,
    payload.fullName,
    payload.attendance,
    payload.guestCount,
    guestMatch.found ? "Matched" : "Not matched",
  ]);

  sendNotificationEmail_(payload, submittedAt, guestMatch);

  return "Test RSVP saved. Check the RSVP sheet and your notification email.";
}

function json_(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}

function normalize_(value) {
  return String(value).trim().toLowerCase();
}

function escapeHtml_(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
