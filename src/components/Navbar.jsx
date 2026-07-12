import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useState } from "react";


const Navbar = () => {


const [open,setOpen]=useState(false);



return (

<nav className="navbar">


<div className="container nav-container">



<Link to="/" className="logo">

Tech<span>Academy</span>

</Link>





<div 
className={open ? "nav-links active":"nav-links"}
>


<Link to="/">
Home
</Link>


<Link to="/about">
About
</Link>


<Link to="/courses">
Courses
</Link>


<Link to="/faculty">
Faculty
</Link>


<Link to="/placements">
Placements
</Link>


<Link to="/gallery">
Gallery
</Link>


<Link to="/blog">
Blog
</Link>


<Link to="/contact">
Contact
</Link>


</div>





<button

className="menu-btn"

onClick={()=>setOpen(!open)}

>

<FaBars/>

</button>



</div>


</nav>

);


};


export default Navbar;