import { Link } from "react-router-dom";
import { courses } from "../data/courses";
import { FaClock, FaLaptop, FaArrowRight } from "react-icons/fa";

const Courses = () => {

  return (
    <>

      {/* Hero */}

      <section className="page-hero">

        <div className="container">

          <h1>
            Our Professional Courses
          </h1>

          <p>
            Choose from industry-focused programs designed to make you
            job-ready with practical training, live projects, and placement
            assistance.
          </p>

        </div>

      </section>



      {/* Courses */}

      <section className="section">

        <div className="container">


          <div className="section-title">

            <h2>
              Explore All Courses
            </h2>

            <p>
              Learn from expert mentors and build a successful career.
            </p>

          </div>



          <div className="grid grid-3">


            {courses.map((course)=>(

              <div
                className="course-card"
                key={course.id}
              >


                <div className="course-image">

                  <img
                    src={course.image}
                    alt={course.title}
                  />

                </div>



                <div className="course-body">


                  <span className="course-category">

                    {course.category}

                  </span>



                  <h3>
                    {course.title}
                  </h3>



                  <p>
                    {course.shortDescription}
                  </p>



                  <div className="course-info">


                    <span>

                      <FaClock />

                      {course.duration}

                    </span>



                    <span>

                      <FaLaptop />

                      {course.mode}

                    </span>


                  </div>



                  <Link
                    to={`/courses/${course.id}`}
                    className="course-btn"
                  >

                    View Details

                    <FaArrowRight />

                  </Link>


                </div>


              </div>


            ))}


          </div>


        </div>

      </section>




      {/* Why Choose */}

      <section className="section bg-light">


        <div className="container">


          <div className="section-title">

            <h2>
              Why Learn With Us?
            </h2>

          </div>



          <div className="grid grid-4">


            <div className="card">

              <h3>
                100% Practical
              </h3>

              <p>
                Hands-on projects with live coding sessions.
              </p>

            </div>



            <div className="card">

              <h3>
                Industry Experts
              </h3>

              <p>
                Learn from experienced professionals.
              </p>

            </div>



            <div className="card">

              <h3>
                Certification
              </h3>

              <p>
                Get industry-recognized certificates.
              </p>

            </div>



            <div className="card">

              <h3>
                Placement Support
              </h3>

              <p>
                Resume and interview preparation.
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
              Not Sure Which Course to Choose?
            </h2>


            <p>
              Talk to our career counselor and get guidance.
            </p>


            <Link
              to="/contact"
              className="btn"
            >

              Contact Us

            </Link>


          </div>


        </div>


      </section>


    </>
  );

};


export default Courses;