import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt
} from "react-icons/fa";


const Footer = () => {


return (

<footer className="footer">


<div className="container">


<div className="footer-grid">



{/* About */}

<div className="footer-box">


<h2 className="footer-logo">

Tech<span>Academy</span>

</h2>


<p>

Building careers through practical learning,
industry-focused courses and expert mentorship.

</p>




<div className="social-icons">


<a href="#">
<FaFacebookF/>
</a>


<a href="#">
<FaInstagram/>
</a>


<a href="#">
<FaLinkedinIn/>
</a>


<a href="#">
<FaYoutube/>
</a>


</div>



</div>






{/* Links */}


<div className="footer-box">


<h3>
Quick Links
</h3>



<Link to="/">
Home
</Link>


<Link to="/about">
About Us
</Link>


<Link to="/courses">
Courses
</Link>


<Link to="/faculty">
Faculty
</Link>


<Link to="/contact">
Contact
</Link>


</div>








{/* Courses */}


<div className="footer-box">


<h3>
Popular Courses
</h3>


<Link to="/courses">
Full Stack Development
</Link>


<Link to="/courses">
React JS
</Link>


<Link to="/courses">
Python Programming
</Link>


<Link to="/courses">
Data Science
</Link>


<Link to="/courses">
Digital Marketing
</Link>


</div>








{/* Contact */}


<div className="footer-box">


<h3>
Contact Us
</h3>



<p>

<FaPhone/>

+91 98765 43210

</p>



<p>

<FaEnvelope/>

info@techacademy.com

</p>




<p>

<FaMapMarkerAlt/>

Pune, Maharashtra

</p>



</div>




</div>





<div className="footer-bottom">


<p>

© 2026 TechAcademy. All Rights Reserved.

</p>



<div>


<Link to="/privacy-policy">
Privacy Policy
</Link>


<Link to="/refund-policy">
Refund Policy
</Link>


<Link to="/terms-conditions">
Terms
</Link>


</div>



</div>




</div>


</footer>


);


};


export default Footer;