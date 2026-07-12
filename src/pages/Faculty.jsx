import {
  FaCode,
  FaDatabase,
  FaChartLine,
  FaBullhorn
} from "react-icons/fa";


const Faculty = () => {


const faculty = [

{
name:"Rahul Sharma",
role:"Full Stack Developer",
icon:<FaCode/>,
experience:"8+ Years Experience"
},


{
name:"Priya Verma",
role:"Data Science Expert",
icon:<FaDatabase/>,
experience:"7+ Years Experience"
},


{
name:"Amit Patel",
role:"Digital Marketing Specialist",
icon:<FaBullhorn/>,
experience:"6+ Years Experience"
},


{
name:"Neha Singh",
role:"Career Mentor",
icon:<FaChartLine/>,
experience:"10+ Years Experience"
}

];



return (

<>


<section className="page-hero">

<div className="container">

<h1>
Our Expert Faculty
</h1>

<p>
Learn from industry professionals with real-world experience.
</p>

</div>

</section>





<section className="section">


<div className="container">


<div className="section-title">

<h2>
Meet Our Trainers
</h2>

<p>
Experienced mentors helping students achieve career goals.
</p>

</div>




<div className="grid grid-4">


{

faculty.map((person,index)=>(


<div
className="card faculty-card"
key={index}
>


<div className="faculty-image">


<img

src={`https://picsum.photos/400/400?random=${index+20}`}

alt={person.name}

/>


</div>



<div className="feature-icon">

{person.icon}

</div>




<h3>
{person.name}
</h3>


<h4>
{person.role}
</h4>



<p>
{person.experience}
</p>



<button className="course-btn">

View Profile

</button>


</div>


))


}



</div>


</div>


</section>







<section className="section bg-light">


<div className="container">


<div className="cta">


<h2>
Learn From The Best
</h2>


<p>
Get professional guidance and practical knowledge from experts.
</p>


<a
href="/admissions"
className="btn"
>

Start Learning

</a>


</div>


</div>


</section>




</>

);

};


export default Faculty;