import React from "react";

const About = () => {
	return (
		<>
		<div className="tm_section" id="about">
			<div className="tm_about">
				<div className="container">
					<div className="about_inner">
						<div className="left">
							<div
								className="image"
								data-aos="fade-up"
								data-aos-duration="1200"
							>
								<img src="/img/placeholders/1-1.jpg" alt="placeholder" />
								<div
									className="main"
									style={{
										backgroundImage: `url(${
											process.env.PUBLIC_URL + "/img/about/1.jpg"
										})`,
									}}
								></div>
							</div>
							{/* End image */}
						</div>
						{/* End left */}
						
						<div className="right">
							<div
								className="tm_title"
								data-aos="fade-up"
								data-aos-duration="1200"
							>
								<span>About Me</span>
								<h3>Creative Multitalented Developer</h3>
							</div>
							<div
								className="text"
								data-aos="fade-up"
								data-aos-duration="1200"
							>
								<p>
									I am a dedicated worker with the resume to back it up.
									My work at iD Tech, teaching multiple classes per week,
									is just one example of my commitment to consistently
									improving in all areas. Currently, I am finishing up my
									degree in Cognitive Science - Machine Learning and Neural
									Computation at UCSD, a degree that will have taken only 2
									years to complete. Alongside this, I worked as an
									Instructional Apprentice at UCSD and a research assistant
									at the Security and Cryptography lab at UCSD.
									<br></br>
									My work is consistently high-quality and I will always
									complete any task put in front of me. Currently, I am
									looking for a job in ML/AI, especially with relation to NLP.
								</p>
							</div>
							<div
								className="tm_button"
								data-aos="fade-up"
								data-aos-duration="1200"
							>
								<a href="img/resume/resume.pdf" download>Download CV</a>
							</div>
						</div>
						{/* End right */}
					</div>
				</div>
				{/* End container */}
			</div>
		</div>
		</>
	);
};

export default About;