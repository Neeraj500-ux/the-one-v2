import { useParams, Link } from "react-router-dom";
import { courses } from "../data/courses";
import {
  FaClock,
  FaLaptopCode,
  FaUserGraduate,
  FaCertificate,
  FaBriefcase,
  FaCheckCircle
} from "react-icons/fa";


const CourseDetail = () => {


const {id}=useParams();


const course = courses.find(
(item)=>String(item.id)===id
);



if(!course){

return(

<section className="section">

<div className="container">

<h2>
Course Not Found
</h2>


<Link
to="/courses"
className="btn"
>

Back To Courses

</Link>


</div>

</section>

);

}



return(

<>


{/* HERO */}


<section className="page-hero">


<div className="container">


<span className="course-category">

{course.category}

</span>


<h1>

{course.title}

</h1>


<p>

{course.shortDescription}

</p>


</div>


</section>







{/* OVERVIEW */}


<section className="section">


<div className="container">


<div className="grid grid-2">


<div>


<img

src={course.image}

alt={course.title}

className="course-detail-image"

/>


</div>





<div>


<h2>
Course Overview
</h2>



<p>

{course.description}

</p>




<div className="detail-info">


<p>

<FaClock/>

<strong>
Duration:
</strong>

{course.duration}

</p>



<p>

<FaLaptopCode/>

<strong>
Mode:
</strong>

{course.mode}

</p>



<p>

<FaUserGraduate/>

<strong>
Level:
</strong>

{course.level}

</p>



<p>

<FaCertificate/>

<strong>
Certificate:
</strong>

Available

</p>



</div>



</div>


</div>


</div>


</section>








{/* LEARNING */}



<section className="section bg-light">


<div className="container">


<div className="section-title">


<h2>
What You Will Learn
</h2>


</div>




<div className="grid grid-3">


{

course.learning?.map((item,index)=>(


<div
className="card"
key={index}
>


<FaCheckCircle className="check-icon"/>


<h3>
{item}
</h3>


</div>


))


}



</div>


</div>


</section>








{/* CURRICULUM */}



<section className="section">


<div className="container">


<div className="section-title">


<h2>
Course Curriculum
</h2>


</div>




<div className="curriculum">


{

course.curriculum?.map((item,index)=>(


<div
className="curriculum-box"
key={index}
>


<h3>

{index+1}. {item.title}

</h3>


<p>

{item.description}

</p>


</div>


))


}



</div>


</div>


</section>








{/* CAREER */}


<section className="section bg-light">


<div className="container">


<div className="grid grid-2">


<div className="card">


<h2>
Career Opportunities
</h2>


{

course.careers?.map((item,index)=>(

<p key={index}>

✅ {item}

</p>

))


}


</div>





<div className="card">


<h2>
Expected Salary
</h2>


<p>

Fresher:

<strong>
{course.salary?.fresher}
</strong>

</p>



<p>

Experienced:

<strong>
{course.salary?.experienced}
</strong>

</p>



</div>



</div>


</div>


</section>








{/* CTA */}


<section className="section">


<div className="container">


<div className="cta">


<h2>
Ready To Start Learning?
</h2>


<p>

Enroll today and build your professional career.

</p>



<Link
to="/admissions"
className="btn"
>

Apply Now

</Link>



</div>


</div>


</section>





</>

);


};


export default CourseDetail;