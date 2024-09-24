import React from 'react'
import './Home.css'
const Home = () => {
  return (
    <>
        <main>
        <div className="box">
            {/* <!--box1--> */}
            <div className="box1">
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img src="https://www.code-x.in/images/slider.png" className="d-block w-100" alt="..."/>
                      </div>
                      <div className="carousel-item">
                        <img src="https://www.code-x.in/images/slider-2.png" className="d-block w-100" alt="..."/>
                      </div>
                      <div className="carousel-item">
                        <img src="https://www.code-x.in/images/slider-3.png" className="d-block w-100" alt="..."/>
                      </div>
                      <div className="carousel-item">
                        <img src="https://www.code-x.in/images/slider-4.png" className="d-block w-100" alt="..."/>
                      </div>
                      <div className="carousel-item">
                        <img src="https://www.code-x.in/images/slider-4.png" className="d-block w-100" alt="..."/>
                      </div>
                    </div>
                  </div>

            </div>

            {/* <!--box2--> */}
            <div className="box2">
                <div className="box2-1"><h1>Welcome to Code-X Technologies</h1></div>
                <div className="box2-2">
                  
                        <p>In the present scenario most of the countries over the world have relied upon Indian software company and firms or Software Companies for the software development activities, as the country possesses a global competency in the IT sector. The Software development company India comprises of businesses related to the production and maintenance of computer software. The roots of the Software Industry India lies in the IT phenomenon. Services regarding software such as training, consulting and maintenance are a part of this ever-growing industry.</p>
                        <p>The Software companies is witnessing a rapid growth and offers lucrative job opportunities making IT a premium career option for the youth. Infact it is one of the fastest growing sector of Indian industry.</p>
                        <p>India is emerging as a Global IT superpower. The success can be attributed to factor advantage of high quality of software human resources. The Software Industry has succeeded in converting this comparative advantage to increasing exports. More and more companies are receiving the ISO 9000 certification and the day is not far when India will have the highest number of ISO 9000 companies in the world.</p>
                    
                </div>

                <div className="box2-3"><h2>Our Products</h2></div>

                <div className="box3">

                <div className="box3-1">
                    <div className="box3-1-1">
                        <div className="img1 image"><img src="https://www.code-x.in/images/Survey%20Solution.ico" alt="" style={{width:"100px"}}/></div>
                        
                    </div>
                    <div className="box3-1-1-1">
                    <div className="box3-1-2"><p>India's 1st rapidly growing Survey report generation software that gives you peace of mind.</p></div>
                    <div className="box3-1-3"><p>This is very surveyor friendly software, Despite of any other available survey software(s), this unique software is very user friendly and easy to operate. As tested in real world working scenario, Survey Solution Software improves day to day working efficiency and increase productivity, this software also have built-in album creation software that helps to create photo-sheets within seconds, this software comes with vast varieties of reports.
                        For more information</p></div>
                    </div>

                </div>

                <div className="box3-2">
                    <iframe className="video" width="560" height="415" src="https://www.youtube.com/embed/mTQvRBm9oZE?si=r_nreZs_CfxDE099" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>

            </div>

            <div className="box4">
                <div className="box4-1">
                  <div className="box4-1-1 h"><h3>Projects</h3></div>
                  <div className="box4-1-2 img2"><img src="project.png" alt="" style={{width:"100px"}}/></div>
                  <div className="box4-1-3"><span>Over the years, we at Code-X Technologies have successfully completed a wide range of projects for different industries and business sectors. The projects differ in...</span></div>
                </div>


                <div className="box4-2">
                  <div className="box4-2-1 h"><h3>Services</h3></div>
                  <div className="box4-2-2 img2"><img src="services.png" alt="" style={{width:"100px"}}/></div>
                  <div className="box4-2-3">
                    <span>Product Development.
                      Research and Consulting.
                      Offshore Web Applications Request for Proposal.
                      Architecture, Design, and Development.</span>
                     {/* <ul>
                      <li>Product Development.</li>
                      <li>Research and Consulting.</li>
                      <li>Offshore Web Applications Request for Proposal.</li>
                      <li>Architecture, Design, and Development.</li>
                    </ul> */}
                  </div>
                </div>
                <div className="box4-3">
                  <div className="box4-3-1 h"><h3>Careers</h3></div>
                  <div className="box4-3-2 img2"><span><img src="careers.png" alt="" style={{ width:"100px" }}/></span></div>
                  <div className="box4-3-3">Working environment has evolved over the years that each person feels comfortable to develop their skills or potential and make the best use of their abilities…</div>
                </div>
            </div>

           
           
            </div>
        </div>
    </main>
    </>
  )
}

export default Home