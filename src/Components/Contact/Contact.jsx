import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
import youtubeIcon from '../../assets/youtube.png'

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "85cf7ffd-6bc9-4411-af03-04992a095bac");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  const openLink = (URL) => {
    window.open(URL);
  }


  return (
    <div className='Contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>Fill out the form so that our executive will reach you ASAP...</p>
        <ul>
          <li><img src={mail_icon} alt="" />4tels.modification@gmail.com</li>

          <li
            onClick={() => { openLink("https://www.youtube.com/@4telsmodification646") }}
          ><img src={youtubeIcon} alt="" />Checkout our youtube channel</li>

          <li><img src={phone_icon} alt="" />+91 70580 03780</li>
          <li><img src={location_icon} alt="" />Sitamani, Champa Road, Korba<br /> Chattisgarh, India </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input type="text" name='name' placeholder='Enter your name' required />

          <label>Phone number</label>
          <input type="tel" name='phone' placeholder='Enter your mobile number' required />

          <label>Write your message here</label>
          <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>

          <button type='submit' className='btn dark-btn'>Submit Now <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
