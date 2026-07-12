import { useState } from "react";
import {
  FaUser,
  FaPhone,
  FaEnvelope,
  FaGraduationCap
} from "react-icons/fa";


const Admissions = () => {


const [formData,setFormData] = useState({

name:"",
email:"",
phone:"",
course:""

});



const handleChange=(e)=>{

setFormData({

...formData,

[e.target.name]:e.target.value

});

};



const handleSubmit=(e)=>{

e.preventDefault();

alert("Admission enquiry submitted successfully!");

setFormData({

name:"",
email:"",
phone:"",
course:""

});

};



return (

<>


{/* Hero */}

<section className="page-hero">

<div className="container">


<h1>
Start Your Admission Process
</h1>


<p>
Take the first step towards your successful career.
</p>


</div>

</section>







{/* Admission Form */}


<section className="section">


<div className="container">


<div className="admission-wrapper">



<div className="admission-info">


<h2>
Why Join Us?
</h2>


<p>
Get industry-ready skills with expert mentors,
practical projects and placement support.
</p>



<div className="admission-point">

<FaGraduationCap/>

<span>
Professional Career Courses
</span>

</div>




<div className="admission-point">

<FaUser/>

<span>
Expert Trainers
</span>

</div>




<div className="admission-point">

<FaPhone/>

<span>
Career Support
</span>

</div>



</div>







<div className="card admission-form">


<h2>
Apply Now
</h2>



<form onSubmit={handleSubmit}>


<div className="input-box">

<FaUser/>

<input

type="text"

name="name"

placeholder="Full Name"

value={formData.name}

onChange={handleChange}

required

/>

</div>





<div className="input-box">

<FaEnvelope/>

<input

type="email"

name="email"

placeholder="Email Address"

value={formData.email}

onChange={handleChange}

required

/>

</div>






<div className="input-box">

<FaPhone/>

<input

type="tel"

name="phone"

placeholder="Mobile Number"

value={formData.phone}

onChange={handleChange}

required

/>

</div>







<div className="input-box">


<FaGraduationCap/>


<select

name="course"

value={formData.course}

onChange={handleChange}

required

>


<option value="">
Select Course
</option>


<option>
Full Stack Development
</option>


<option>
React JS
</option>


<option>
Python Programming
</option>


<option>
Data Science
</option>


<option>
Digital Marketing
</option>


</select>


</div>





<button
className="btn"
type="submit"
>

Submit Application

</button>



</form>


</div>



</div>


</div>


</section>





</>

);

};


export default Admissions;