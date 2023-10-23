import { WhatsAppOutlined, WechatOutlined, PhoneOutlined, MailOutlined } from '@ant-design/icons';

const social_links = [
  {
    link: "https://wa.me/+8613725293855?text=Hello",
    target: "_blank",
    icon: <WhatsAppOutlined className="footer-widget_linkIcon" />,
    color: "tp-f-youtube",
  },
  {
    link: "",
    target: "_blank",
    icon: <WechatOutlined className="footer-widget_linkIcon" />,
    color: "tp-f-twitter",
  },
  {
    link: "tel: +8613610307032",
    target: "_blank",
    icon: <PhoneOutlined className="footer-widget_linkIcon" />,
    color: "tp-f-fb",
  },
  {
    link: "mailto:anna@chengyiauto.cn?subject=Subject%20of%20the%20email&body=Body%20of%20the%20email",
    target: "_blank",
    icon: <MailOutlined className="footer-widget_linkIcon" />,
    color: "tp-f-skype",
  },
];

const SocialLinks = () => {
  return (
    <>
      {social_links.map((l, i) => (
        <a
          key={i}
          href={l.link}
          className={l.color}
          target={l.target ? l.target : ""}
        >
          {l.icon}
        </a>
      ))}
    </>
  );
};

export default SocialLinks;
