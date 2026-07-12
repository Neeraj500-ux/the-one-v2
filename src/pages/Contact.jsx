import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt
} from "react-icons/fa";


const Contact = () => {


return (

<>


{/* Hero */}

<section className="page-hero">

<div className="container">


<h1>
Contact Us
</h1>


<p>
Have questions? Our team is here to help you.
</p>


</div>

</section>







<section className="section">


<div className="container">


<div className="contact-grid">





{/* Contact Info */}


<div className="contact-info">


<h2>
Get In Touch
</h2>


<p>
Connect with our team for course details,
admission support and career guidance.
</p>





<div className="contact-box">


<FaPhone/>


<div>

<h3>
Phone
</h3>

<p>
+91 98765 43210
</p>


</div>


</div>







<div className="contact-box">


<FaEnvelope/>


<div>

<h3>
Email
</h3>


<p>
info@ascend.com
</p>


</div>


</div>







<div className="contact-box">


<FaMapMarkerAlt/>


<div>

<h3>
Address
</h3>


<p>
Pune, Maharashtra, India
</p>


</div>


</div>



</div>








{/* Form */}



<div className="card contact-form">


<h2>
Send Message
</h2>



<form>


<input

type="text"

placeholder="Your Name"

/>



<input

type="email"

placeholder="Email Address"

/>




<input

type="tel"

placeholder="Mobile Number"

/>





<textarea

placeholder="Your Message"

rows="5"

></textarea>





<button

className="btn"

type="submit"

>

Send Enquiry

</button>



</form>



</div>




</div>


</div>


</section>








{/* Map Section */}



<section className="section bg-light">


<div className="container">


<div className="map-box">


<iframe

title="location"

src="https://maps.google.com/maps?q=pune&t=&z=13&ie=UTF8&iwloc=&output=embed"

loading="lazy"

/>


</div>


</div>


</section>







</>

);

};


export default Contact;