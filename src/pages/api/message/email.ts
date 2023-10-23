
const nodemailer = require('nodemailer');

interface EmailData {
  subject: string;
  text: string;
  html: string;
  email: string;
}

async function sendEmail(emailData: EmailData) {
  let transporter = nodemailer.createTransport({
    // service: 'gmail',
    host: 'smtp.163.com',
    port: 465,
    auth: {
      user: '13610307032@163.com',
      pass: 'GEPPIPRLOFVZLISU'
    }
  });

  let info = await transporter.sendMail({
    from: '13610307032@163.com',
    to: emailData.email || 'alissa@chengyiauto.cn',
    subject: emailData.subject || 'chengyi（成益）跨境贸易公司',
    text: emailData.text || '✔官网邮件发送测试',
    html: emailData.html || '<h2 style="color: orange;">✔官网邮件发送测试</h2>'
  });

  console.log('Message sent: %s', info.messageId);
}

export default async function email(req, res) {
  if (req.method === 'POST') {
    // 获取 POST 请求的数据
    const data = req.body;
    try {
      await sendEmail(data);
      res.status(200).json({ msg: '发送成功' })
    } catch(err) { 
      res.status(500).json({ msg: '发送失败' + err })
    } 
  } else {
    res.status(403).json({ msg: '请求错误' });
  }
}
