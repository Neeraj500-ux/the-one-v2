const Gallery = () => {


const images = [

"https://picsum.photos/600/400?random=1",
"https://picsum.photos/600/400?random=2",
"https://picsum.photos/600/400?random=3",
"https://picsum.photos/600/400?random=4",
"https://picsum.photos/600/400?random=5",
"https://picsum.photos/600/400?random=6",
"https://picsum.photos/600/400?random=7",
"https://picsum.photos/600/400?random=8"

];



return (

<>


{/* Hero */}

<section className="page-hero">

<div className="container">

<h1>
Our Gallery
</h1>

<p>
Explore our classrooms, events, workshops and student activities.
</p>

</div>

</section>







{/* Gallery */}


<section className="section">


<div className="container">


<div className="section-title">

<h2>
Campus Moments
</h2>


<p>
Learning, events and achievements captured.
</p>


</div>





<div className="gallery-grid">


{

images.map((image,index)=>(


<div
className="gallery-card"
key={index}
>


<img

src={image}

alt={`Gallery ${index}`}

/>


</div>


))


}


</div>


</div>


</section>







{/* Events */}


<section className="section bg-light">


<div className="container">


<div className="grid grid-3">


<div className="card">

<h3>
Coding Workshops
</h3>

<p>
Hands-on coding sessions with practical projects.
</p>

</div>



<div className="card">

<h3>
Student Events
</h3>

<p>
Regular events to improve skills and confidence.
</p>

</div>



<div className="card">

<h3>
Career Sessions
</h3>

<p>
Industry talks and placement preparation.
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
Want To Join Our Community?
</h2>


<p>
Start your learning journey with us today.
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


export default Gallery;