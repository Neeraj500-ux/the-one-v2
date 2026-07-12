import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";


const Blog = () => {


const blogs = [

{
title:"How To Start A Career In Web Development",
text:"Learn the roadmap, skills and technologies required to become a professional developer.",
image:"https://picsum.photos/600/400?random=30"
},


{
title:"Top Programming Languages In 2026",
text:"Explore the most demanding programming languages for technology careers.",
image:"https://picsum.photos/600/400?random=31"
},


{
title:"Importance Of Practical Learning",
text:"Why projects and real-world experience matter for students.",
image:"https://picsum.photos/600/400?random=32"
},


{
title:"How To Prepare For IT Interviews",
text:"Best tips for technical interviews and placement success.",
image:"https://picsum.photos/600/400?random=33"
},


{
title:"Future Of Artificial Intelligence",
text:"Understand how AI is changing industries and careers.",
image:"https://picsum.photos/600/400?random=34"
},


{
title:"Building A Strong Developer Portfolio",
text:"Create an impressive portfolio to attract recruiters.",
image:"https://picsum.photos/600/400?random=35"
}

];



return (

<>


{/* Hero */}

<section className="page-hero">

<div className="container">

<h1>
Latest Blogs
</h1>

<p>
Read technology updates, career tips and learning resources.
</p>

</div>

</section>







{/* Blog Cards */}


<section className="section">


<div className="container">


<div className="section-title">

<h2>
Latest Articles
</h2>


<p>
Improve your knowledge with expert insights.
</p>


</div>





<div className="grid grid-3">


{

blogs.map((blog,index)=>(


<div
className="blog-card"
key={index}
>


<div className="blog-image">


<img

src={blog.image}

alt={blog.title}

/>


</div>




<div className="blog-body">


<span className="blog-date">

Career Tips

</span>



<h3>

{blog.title}

</h3>



<p>

{blog.text}

</p>




<Link
to="/contact"
className="course-btn"
>

Read More

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


<section className="section bg-light">


<div className="container">


<div className="cta">


<h2>
Want To Learn New Skills?
</h2>


<p>
Join our career-focused courses today.
</p>


<Link
to="/courses"
className="btn"
>

Explore Courses

</Link>


</div>


</div>


</section>




</>

);

};


export default Blog;