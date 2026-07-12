import {
  FaBriefcase,
  FaBuilding,
  FaUserTie,
  FaChartLine
} from "react-icons/fa";


const Placements = () => {


const stats = [

{
icon:<FaUserTie/>,
number:"5000+",
title:"Students Placed"
},


{
icon:<FaBuilding/>,
number:"200+",
title:"Hiring Partners"
},


{
icon:<FaBriefcase/>,
number:"95%",
title:"Placement Rate"
},


{
icon:<FaChartLine/>,
number:"10+",
title:"Years Experience"
}

];




const companies = [

"Google",
"Microsoft",
"Amazon",
"TCS",
"Infosys",
"Wipro"

];



return (

<>


{/* Hero */}

<section className="page-hero">

<div className="container">

<h1>
Career & Placement Support
</h1>


<p>
We help students transform their skills into successful careers
with complete placement assistance.
</p>


</div>

</section>







{/* Stats */}

<section className="section">


<div className="container">


<div className="grid grid-4">


{

stats.map((item,index)=>(


<div 
className="card placement-card"
key={index}
>


<div className="feature-icon">

{item.icon}

</div>


<h2>
{item.number}
</h2>


<p>
{item.title}
</p>


</div>


))


}


</div>


</div>


</section>








{/* Process */}


<section className="section bg-light">


<div className="container">


<div className="section-title">

<h2>
Our Placement Process
</h2>


<p>
Complete support from learning to getting hired.
</p>


</div>




<div className="grid grid-4">



<div className="card">

<h3>
01
</h3>

<h3>
Skill Training
</h3>

<p>
Build strong technical and professional skills.
</p>

</div>




<div className="card">

<h3>
02
</h3>

<h3>
Resume Building
</h3>

<p>
Create professional resumes and portfolios.
</p>

</div>





<div className="card">

<h3>
03
</h3>

<h3>
Interview Preparation
</h3>

<p>
Mock interviews and placement guidance.
</p>

</div>





<div className="card">

<h3>
04
</h3>

<h3>
Job Placement
</h3>

<p>
Connect with top hiring companies.
</p>

</div>



</div>


</div>


</section>








{/* Companies */}


<section className="section">


<div className="container">


<div className="section-title">

<h2>
Our Hiring Partners
</h2>

</div>




<div className="company-grid">


{

companies.map((company,index)=>(


<div
className="company-box"
key={index}
>

{company}

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
Ready To Start Your Career?
</h2>


<p>
Join our placement focused programs today.
</p>



<a
href="/admissions"
className="btn"
>

Get Started

</a>


</div>


</div>


</section>



</>

);

};


export default Placements;