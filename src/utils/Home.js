import React from 'react';
import { Row, Container} from 'react-bootstrap'

function Home() {
    return (
        <>
            <Container className="py-5">
                <Row>
                <aside class= "col-md-1"></aside>
                <section class="col-md-8">
                    <section class="card mb-3 px-3">
                        <h1 class="text-primary">About Me</h1>
                        <section class="row no-gutters">
                            <section class="col-md-4">
                                <img src="/Assets/jen.jpg" class="card-img" alt="Woman in a pink sweater"/>
                            </section>
                            <section class="col-md-8">
                                <section class="card-body">
                                    <p class="card-text">Thanks for visiting my portfolio page! My 
                                        name is Jen Iglar and I'm originally from Long
                                        Valley, NJ. I currently live in Philadelphia with my chocolate lab rescue, Daisy. I have a Bachelor's degree in Marketing and over ten years of Project Management and Retail Management experience.
                                    </p>
                                </section>
                            </section>
                        </section>
                        <p>I'm currently enrolled in the UPenn LPS Coding Bootcamp, studying to become a Full Stack web developer. I am experienced in HTML, CSS, JavaScript, JQuery, MySQL, and MongoDB. I'm looking forward to broadening my web development skills as I continue my studies. I thrive in fast paced work environments, and I enjoy the challenges of problem solving and critical thinking. I'm excited to build upon my extensive management experience as I pursue a new career in web development.</p>
                        <a href="./Assets/JenIglar.pdf">Resume</a>
                        <br></br>
                        <a href="https://linkedin.com/in/jen-iglar-76356aa">Let's connect on LinkedIn!</a>
                        <br></br>
                        <a href="https://github.com/jeniglar">Check out my GitHub Portfolio</a>
                        <br></br>
                        <p>Email: jeniglar@gmail.com</p>
                        <p>Phone: 908-310-9259</p>
                        </section>
                    </section>
                <aside class= "col-md-3"></aside>
                <section class="push"></section>
                </Row>
            </Container>
        </>
    )
}

export default Home;