import { Link } from "react-router-dom";
import {
  FaLaptopCode,
  FaUserGraduate,
  FaCertificate,
  FaBriefcase,
  FaArrowRight
} from "react-icons/fa";


const Home = () => {


const features = [

{
icon:<FaLaptopCode />,
title:"Industry Ready Courses",
text:"Learn latest technologies with practical projects."
},


{
icon:<FaUserGraduate />,
title:"Expert Trainers",
text:"Get guidance from experienced industry professionals."
},


{
icon:<FaCertificate />,
title:"Certification",
text:"Receive recognized certificates after course completion."
},


{
icon:<FaBriefcase />,
title:"Placement Support",
text:"Career guidance, resume building and interview preparation."
}

];



const courses=[

"Full Stack Development",
"React JS Development",
"Python Programming",
"Data Science",
"Digital Marketing",
"UI UX Design"

];



return(

<>


{/* HERO */}


<section className="home-hero">


<div className="container hero-content">


<div className="hero-left">


<span className="hero-badge">

India's Leading IT Training Institute

</span>



<h1>

Build Your Future With

<span>
 Modern Technology Skills
</span>

</h1>



<p>

Learn Web Development, React, Python,
Data Science and Digital Marketing with
real-world projects and expert mentors.

</p>



<div className="hero-buttons">


<Link
to="/courses"
className="btn"
>

Explore Courses

</Link>



<Link
to="/admissions"
className="btn btn-light"
>

Apply Now

</Link>


</div>


</div>




<div className="hero-image">


<img

src="https://picsum.photos/700/500"

alt="students"

/>


</div>



</div>


</section>





{/* FEATURES */}


<section className="section">


<div className="container">


<div className="section-title">

<h2>
Why Choose Us?
</h2>


<p>
Everything you need to build a successful career.
</p>

</div>




<div className="grid grid-4">


{

features.map((item,index)=>(


<div
className="card feature-card"
key={index}
>


<div className="feature-icon">

{item.icon}

</div>



<h3>
{item.title}
</h3>



<p>
{item.text}
</p>



</div>


))

}


</div>


</div>


</section>







{/* COURSES */}



<section className="section bg-light">


<div className="container">


<div className="section-title">


<h2>
Popular Courses
</h2>


<p>
Career focused programs for students.
</p>


</div>




<div className="grid grid-3">


{

courses.map((course,index)=>(


<div
className="course-card"
key={index}
>


<img

src={`https://picsum.photos/500/300?${index}`}

alt={course}

/>



<div className="course-body">


<h3>
{course}
</h3>


<p>

Practical training with live projects.

</p>



<Link
to="/courses"
className="course-btn"
>

Learn More

<FaArrowRight/>

</Link>



</div>



</div>


))

}


</div>


</div>


</section>








{/* CTA */}



<section className="section">


<div className="container">


<div className="cta">


<h2>
Start Your Career Journey Today
</h2>


<p>
Join thousands of students learning job-ready skills.
</p>


<Link
to="/admissions"
className="btn"
>

Enroll Now

</Link>


</div>


</div>


</section>



</>

);


};


export default Home;