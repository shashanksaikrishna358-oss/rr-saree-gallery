import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
})

export const sendEmail = async (
  to: string,
  subject: string,
  html: string
): Promise<boolean> => {
  try {
    await transporter.sendMail({
      from: process.env.FROM_EMAIL || 'noreply@rrsareegallery.com',
      to,
      subject,
      html,
    })
    return true
  } catch (error) {
    console.error('Error sending email:', error)
    return false
  }
}

export const sendOrderConfirmationEmail = async (
  to: string,
  orderNumber: string,
  total: number
) => {
  const html = `
    <div style="font-family: Arial, sans-serif; background: #f5f5f5; padding: 20px;">
      <div style="background: white; padding: 30px; border-radius: 10px;">
        <h2 style="color: #004225;">Order Confirmation</h2>
        <p>Thank you for your order!</p>
        <p><strong>Order Number:</strong> ${orderNumber}</p>
        <p><strong>Total:</strong> ₹${total.toFixed(2)}</p>
        <p>We will send you an update once your order is shipped.</p>
      </div>
    </div>
  `
  return sendEmail(to, 'Order Confirmation - RR Saree Gallery', html)
}
