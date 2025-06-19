const nodemailer = require('nodemailer');
require('dotenv').config();

// Create a transporter using Gmail
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD
    }
});

// Welcome email template
const getWelcomeEmailTemplate = (firstName) => {
    return {
        subject: 'Welcome to PlacePrep! 🎉',
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #2c3e50; text-align: center;">Welcome to PlacePrep! 🎉</h2>
                <p style="color: #34495e; font-size: 16px;">Dear ${firstName},</p>
                <p style="color: #34495e; font-size: 16px;">Thank you for joining PlacePrep! We're excited to have you on board and help you prepare for your placement journey.</p>
                <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
                    <h3 style="color: #2c3e50; margin-top: 0;">What's Next?</h3>
                    <ul style="color: #34495e;">
                        <li>Complete your profile</li>
                        <li>Explore practice problems</li>
                        <li>Join mock interviews</li>
                        <li>Track your progress</li>
                    </ul>
                </div>
                <p style="color: #34495e; font-size: 16px;">If you have any questions or need assistance, don't hesitate to reach out to our support team.</p>
                <p style="color: #34495e; font-size: 16px;">Best regards,<br>The PlacePrep Team</p>
                <div style="text-align: center; margin-top: 30px; color: #7f8c8d; font-size: 12px;">
                    <p>This is an automated message, please do not reply to this email.</p>
                </div>
            </div>
        `
    };
};

// Function to send welcome email
const sendWelcomeEmail = async (userEmail, firstName) => {
    try {
        const { subject, html } = getWelcomeEmailTemplate(firstName);
        
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: userEmail,
            subject: subject,
            html: html
        };

        const info = await transporter.sendMail(mailOptions);
        console.log('Welcome email sent successfully:', info.messageId);
        return true;
    } catch (error) {
        console.error('Error sending welcome email:', error);
        return false;
    }
};

module.exports = {
    sendWelcomeEmail
}; 