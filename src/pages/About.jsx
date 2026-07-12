import {
  FaBullseye,
  FaGraduationCap,
  FaUsers,
  FaLaptopCode
} from "react-icons/fa";


const About = () => {


const features=[

{
icon:<FaGraduationCap/>,
title:"Quality Education",
text:"Industry focused courses designed with practical learning."
},


{
icon:<FaUsers/>,
title:"Expert Mentors",
text:"Learn from experienced trainers and professionals."
},


{
icon:<FaLaptopCode/>,
title:"Practical Training",
text:"Work on real projects and build professional skills."
},


{
icon:<FaBullseye/>,
title:"Career Growth",
text:"Complete guidance for your successful career."
}

];



return(

<>


<section className="page-hero">

<div className="container">

<h1>
About Our Institute
</h1>

<p>
Building future professionals through quality education,
practical learning and career focused training.
</p>

</div>

</section>





<section className="section">


<div className="container">


<div className="grid grid-2">


<div>


<img

src="https://picsum.photos/700/500"

alt="Institute"

className="about-image"

/>


</div>




<div>


<h2>
Who We Are
</h2>


<p>

We are a leading IT training institute helping students
build successful careers in technology. Our programs combine
theory, practical projects and industry mentorship.

</p>



<p>

Our mission is to provide affordable and
high-quality training that prepares students
for real-world opportunities.

</p>



</div>



</div>


</div>


</section>








<section className="section bg-light">


<div className="container">


<div className="section-title">

<h2>
Why Choose Our Institute?
</h2>


<p>
Everything you need to become job ready.
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








<section className="section">


<div className="container">


<div className="cta">


<h2>
Learn Today. Lead Tomorrow.
</h2>


<p>

Start your journey with professional training
and career support.

</p>


<a
href="/admissions"
className="btn"
>

Join Now

</a>


</div>


</div>


</section>




</>

);


};


export default About;