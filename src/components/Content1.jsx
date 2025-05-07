import React, { useState } from 'react';
import personImage from '../assets/images/Owner/Per.jpeg';

import project2 from '../assets/images/Projects/pr2.png';
import project4 from '../assets/images/Projects/pro4.png';

import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaExternalLinkAlt, 
  FaGithub, 
  FaLinkedinIn, 
  FaTwitter, 
  FaInstagram, 
  FaPaperPlane,
  FaGraduationCap,
  FaSchool,
  FaCertificate,
  FaDownload,
  FaLink,
  FaCode,
  FaUser
} from 'react-icons/fa';

const skillsData = [
  {
    category: 'Programming Languages',
    skills: [
      { name: 'Python', icon: 'fab fa-python', level: 60 ,levelText:'60%'},
      { name: 'Java', icon: 'fab fa-java', level: 70,levelText:'70%' },
      { name: 'JavaScript', icon: 'fab fa-js', level: 60,levelText:'60%' },
      { name: 'C', icon: 'fas fa-code', level: 60 ,levelText:'60%' },
    ],
  },
  {
    category: 'Web Technologies',
    skills: [
      { name: 'HTML5', icon: 'fab fa-html5', level: 95 ,levelText:'95%' },
      { name: 'CSS3', icon: 'fab fa-css3-alt', level: 73 ,levelText:'73%'},
      { name: 'React', icon: 'fab fa-react', level: 47 , levelText:'47%' },
      { name: 'Node.js', icon: 'fab fa-node-js', level: 30 ,levelText:'30%' },
    ],
  },
  {
    category: 'Tools & Technologies',
    skills: [
      { name: 'Git', icon: 'fab fa-git-alt', level: 85 ,levelText:'85%'},
      { name: 'GitHub', icon: 'fab fa-github', level: 80 ,levelText:'80%'},
      { name: 'Docker', icon: 'fab fa-docker', level: 60 ,levelText:'60%'},
    ],
  },
];

const projectsData = [
 
  {
    title: 'AI Voice & Music Production Studio',
    category: 'ml',
    image: project2,
    description: 'AI-ML Based Software for Music production using human prompts.',
    techStack: ['Python', 'TensorFlow', 'Pytorch', 'MusicGen', 'AudioGen', 'GTTS', 'Matplotlib'],
    liveLink: '#',
    codeLink: 'https://github.com/1Rajveer-Singh/AI-Projects/tree/main/Al%20Voice%20%26%20Music%20Production%20Studio',
  },

  {
    title: 'Library Management System',
    category: 'web',
    image: project4,
    description: 'Fully functional LSM platform with user authentication, product management, and payment integration.',
    techStack: ['HTML/CSS', 'JavaScript', 'PHP', 'MySQL'],
    liveLink: 'https://www.librarymanagementsystem-rk.great-site.net/?i=1',
    codeLink: 'https://github.com/1Rajveer-Singh/Web-dev-LibraryManagementSystem.git',
  },
  {
    title: 'AI-Desktop Assistance',
    category: 'ml',
    image: 'assets/images/projects/project5.jpg',
    description: 'This Python-based voice assistant helps automate daily tasks efficiently — just speak your command, and it can play music, browse the web, manage files, send emails, and much more.',
    techStack: ['Python', 'pyttsx3/GTTS', 'Speech_recognition', 'webbrowser'],
    liveLink: '#',
    codeLink: '#',
  },
  
];

const filterOptions = ['all', 'web', 'app', 'ml'];

const timelineData = [
  {
    icon: <FaGraduationCap className="text-xl text-white" />,
    title: 'B.Tech in Computer Science & Engineering',
    institution: 'Jodhpur Institute of Engineering & Technology',
    date: '2023 - 2027',
    description:
      'Pursuing my bachelor\'s degree with a focus on artificial intelligence, data science, and web technologies. Maintaining a CGPA of 9.0/10.',
  },
  {
    icon: <FaSchool className="text-xl text-white" />,
    title: 'Secondary & Senior Secondary Education',
    institution: 'KENDRIYA VIDYALAYA AFS NO.I (AFS) JODHPUR',
    date: '2021 - 2023',
    description:
      'Completed 12th grade with Science (PCM) stream, scoring 66% marks overall.',
  },
  {
    icon: <FaCertificate className="text-xl text-white" />,
    title: 'WebHackthon:SPHINX 24',
    institution: 'MNIT Jaipur',
    date: 'November 2024',
    description:
      'Built a web-based platform to streamline student, faculty, and administrative data management at MNIT Jaipur 24-Hour Web-A-Thon (Nov 8–9, 2024).',
    credentialLink: 'https://drive.google.com/file/d/1qaD4cKw6jkdn91vDKfn_zT-DmeMWat2Y/view?usp=drive_link',
  },
  {
    icon: <FaCertificate className="text-xl text-white" />,
    title: 'Data Lake: Design, Architecture, and Implementation',
    institution: 'Udemy',
    date: 'April 2025',
    description:
      'Foundational understanding of Data Lake concepts, design principles, architectural patterns, implementation strategies, and best practices for managing and securing data at scale.',
    credentialLink: 'https://udemy-certificate.s3.amazonaws.com/image/UC-cd9265da-238d-4765-a883-93aed16e6c3d.jpg',
  },
  
];
const dividerStyle = {
  width: "100%",
  height: "2px",
    // Adds space above and below the line
};
const Content1 = () => {
  const [filter, setFilter] = useState('all');

  const filteredProjects =
    filter === 'all' ? projectsData : projectsData.filter((p) => p.category === filter);

    return (
      <>
        <style>{`
          @keyframes gradient-x {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-gradient {
            background-size: 200% 200%;
            animation: gradient-x 4s ease infinite;
          }
        `}</style>
        <section
  id="home"
  className="bg-gradient-to-r from-[#0F2027] via-[#203A43] to-[#2C5364] text-white py-24 px-6 flex flex-col md:flex-row items-center justify-between  mx-auto"
>
          {/* Hero Content */}
          <div className="md:w-1/2 mb-12 md:mb-0 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-wide">
              Hello, I'm
              <span className="ml-2 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent animate-gradient">
                Rajveer Singh
              </span>
            </h1>
            <h2 className="text-lg sm:text-xl lg:text-2xl text-gray-300 mt-4 font-medium">
              B.Tech Computer Science & Engineering Student
            </h2>
            <p className="mt-6 text-gray-400 leading-relaxed max-w-lg mx-auto md:mx-0">
              I'm passionate about software development, machine learning, and building innovative
              solutions to real-world problems through technology.
            </p>
    
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start">
              <a
                href="#projects"
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition transform hover:-translate-y-1 hover:scale-105"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-full font-semibold shadow-lg transition transform hover:-translate-y-1 hover:scale-105"
              >
                Contact Me
              </a>
            </div>
    
            {/* Social Icons */}
            <div className="flex gap-6 mt-12 justify-center md:justify-start text-2xl">
              <a
                href="https://github.com/1Rajveer-Singh"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg transition transform hover:-translate-y-1 hover:scale-110"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/rajveer-singh-997219291"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg transition transform hover:-translate-y-1 hover:scale-110"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://twitter.com/your-twitter"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg transition transform hover:-translate-y-1 hover:scale-110"
              >
                <FaTwitter />
              </a>
              <a
                href="mailto:1.rajveersinghcse@gmail.com"
                aria-label="Email"
                className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg transition transform hover:-translate-y-1 hover:scale-110"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
    
          {/* Hero Image */}
          <div className="hidden md:flex justify-center md:justify-start relative left-[-150px]">
  <img
    src={personImage}
    alt="Rajveer Singh - B.Tech CSE Student"
    className="w-60 h-60 sm:w-72 sm:h-72 object-cover rounded-full shadow-2xl border-4 border-blue-400 hover:scale-105 hover:shadow-blue-500/50 transition duration-500"
  />
</div>

        </section>
        <div style={dividerStyle}></div>
        {/* About section */}
        <section id="about" className="bg-gray-900 text-white py-20 px-6 mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold">About Me</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mt-2 rounded-full"></div>
          </div>
    
          {/* Card Container */}
          <div className="flex justify-center">
            <div className="bg-gray-800 rounded-2xl shadow-2xl p-8 max-w-4xl w-full text-center flex flex-col md:flex-row items-center gap-10">
              {/* Text Section */}
              <div className="md:w-2/3 text-center md:text-left relative md:right-[-120px]">
  <h3 className="text-2xl font-semibold mb-6">Who am I?</h3>
  <p className="text-gray-300 leading-relaxed mb-4">
    I'm a third-year B.Tech student in Computer Science & Engineering at Jodhpur Institute of Engineering & Technology. I'm passionate about developing innovative software solutions and exploring emerging technologies.
  </p>
  <p className="text-gray-300 leading-relaxed mb-4">
    With a solid foundation in computer science principles and hands-on experience in software development, I enjoy solving complex problems and building impactful applications.
  </p>
  <p className="text-gray-300 leading-relaxed mb-6">
    My key interests include web development, machine learning, data science, and cloud computing. I’m committed to continuous learning and staying updated with the latest industry trends.
  </p>


                {/* Personal Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-400 mb-6 justify-center">
                  <div className="flex items-center gap-2 justify-center">
                    <FaUser className="text-blue-500 text-xl" />
                    <span><strong>Name:</strong> Rajveer Singh</span>
                  </div>
                  <div className="flex items-center gap-2 justify-center">
                    <FaGraduationCap className="text-blue-500 text-xl" />
                    <span><strong>Degree:</strong> B.Tech in Computer Science</span>
                  </div>
                  <div className="flex items-center gap-2 justify-center">
                    <FaMapMarkerAlt className="text-blue-500 text-xl" />
                    <span><strong>Location:</strong> Jodhpur, India</span>
                  </div>
                  <div className="flex items-center gap-2 justify-center">
                    <FaEnvelope className="text-blue-500 text-xl" />
                    <span><strong>Email:</strong> 1.rajveersinghcse@gmail.com</span>
                  </div>
                </div>
    
                {/* Download Button */}
                <div className="flex justify-center items-center">
                  <a
  href="../assets/docs/Resume.pdf"
  download="Resume.pdf"
  className="inline-flex items-center bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium shadow-lg transition transform hover:-translate-y-1"
>
  Download CV <FaDownload className="ml-2" />
</a>

                </div>
              </div>
            </div>
          </div>
        </section>
     
    
        <div style={dividerStyle}></div>
      {/* Skills section */}
      <section id="skills" className="bg-gray-900 text-white py-20 px-4  mx-auto">
  {/* Header */}
  <div className="text-center mb-12">
    <h2 className="text-4xl font-bold">My Skills</h2>
    <div className="w-24 h-1 bg-blue-500 mx-auto mt-2 rounded-full"></div>
  </div>

  {/* Skills Container */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
    {skillsData.map((category) => (
      <div key={category.category} className="bg-gray-800 rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-semibold mb-4 text-blue-400">{category.category}</h3>
        <div className="space-y-4">
          {category.skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex items-center gap-3 mb-1">
                <i className={`${skill.icon} text-xl text-blue-500`}></i>
                <h4 className="text-lg font-medium">{skill.name}</h4>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-5 relative overflow-hidden">
                <div
                  className="bg-blue-500 h-5 rounded-full flex items-center justify-end pr-2 text-sm font-semibold"
                  style={{ width: `${skill.level}%` }}
                >
                  {skill.levelText}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>

  {/* CTA Button */}
  <div className="flex justify-center mt-12">
    <a
      href="pages/Skills.html"
      className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition"
    >
      Visit all Skills →
    </a>
  </div>
</section>
<div style={dividerStyle}></div>
{/* Projects section */}
<section id="projects" className="bg-gray-900 text-white py-20 px-4  mx-auto">
  {/* Heading */}
  <div className="text-center mb-12">
    <h2 className="text-4xl font-bold">My Projects</h2>
    <div className="w-24 h-1 bg-blue-500 mx-auto mt-2 rounded-full"></div>
  </div>

  {/* Filter Buttons */}
  <div className="flex justify-center gap-4 mb-10 flex-wrap">
    {filterOptions.map((option) => (
      <button
        key={option}
        onClick={() => setFilter(option)}
        className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
          filter === option ? 'bg-blue-500 text-white' : 'bg-gray-700 hover:bg-gray-600'
        }`}
      >
        {option === 'all'
          ? 'All'
          : option === 'web'
          ? 'Web Dev'
          : option === 'app'
          ? 'App Dev'
          : 'Machine Learning'}
      </button>
    ))}
  </div>

  {/* Projects Grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
    {filteredProjects.length === 0 ? (
      <div className="col-span-full text-center py-20">
        <p className="text-gray-400 text-lg font-medium">
          No projects found in this category.
        </p>
      </div>
    ) : (
      filteredProjects.map((project, index) => (
        <div
          key={index}
          className="bg-gray-800 rounded-lg overflow-hidden shadow-lg flex flex-col"
        >
          <img
            src={project.image}
            alt={project.title}
            className="h-48 w-full object-cover"
          />
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-sm text-gray-300 flex-grow">{project.description}</p>
            <div className="flex flex-wrap gap-2 my-3">
              {project.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="bg-blue-600 text-xs px-2 py-1 rounded-full text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4 mt-auto flex-wrap">
  {project.liveLink && project.liveLink !== '#' ? (
    <a
      href={project.liveLink}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-lg text-sm flex items-center gap-1 transition"
    >
      <FaLink className="inline" /> Live Demo
    </a>
  ) : (
    <span className="bg-red-100 text-red-700 px-3 py-2 rounded-lg text-sm font-semibold shadow-inner">
      Not Available
    </span>
  )}

  {project.codeLink && project.codeLink !== '#' ? (
    <a
      href={project.codeLink}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-gray-700 hover:bg-gray-600 text-white px-3 py-2 rounded-lg text-sm flex items-center gap-1 transition"
    >
      <FaCode className="inline" /> Code
    </a>
  ) : (
    <span className="bg-yellow-100 text-yellow-800 px-3 py-2 rounded-lg text-sm font-semibold shadow-inner">
      Not Available
    </span>
  )}
</div>

          </div>
        </div>
      ))
    )}
  </div>

  {/* CTA Button */}
  <div className="flex justify-center mt-12">
    <a
      href="pages/projects.html"
      className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition"
    >
      Visit all Projects →
    </a>
  </div>
</section>

<div style={dividerStyle}></div>

      {/* Education section */}
      <section id="education" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Education & Certifications</h2>
            <div className="w-24 h-1 bg-indigo-500 mx-auto mt-2 rounded"></div>
          </div>

          <div className="relative border-l-2 border-indigo-300 pl-8">
            {timelineData.map((item, index) => (
              <div key={index} className="mb-12 relative">
                <div className="absolute -left-6 top-1.5 w-12 h-12 rounded-full bg-indigo-500 flex items-center justify-center shadow-lg">
                  {item.icon}
                </div>
                <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-all">
                  <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                  <h4 className="text-sm text-gray-600 italic">{item.institution}</h4>
                  <p className="text-sm text-gray-500 mt-1">{item.date}</p>
                  <p className="mt-2 text-gray-700">{item.description}</p>
                  {item.credentialLink && (
                    <a
                      href={item.credentialLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-indigo-600 mt-2 hover:underline"
                    >
                      View Credential <FaExternalLinkAlt className="ml-1" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="pages/Education.html"
              className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-full shadow hover:bg-indigo-700 transition"
            >
              View all Certifications →
            </a>
          </div>
        </div>
      </section>
      <div style={dividerStyle}></div>
      {/* Contact section */}
      
      <section
  id="contact"
  className="py-16 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700"
>
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Get In Touch</h2>
            <div className="w-24 h-1 bg-indigo-500 mx-auto mt-2 rounded"></div>
          </div>

          <div className="flex flex-col md:flex-row gap-12">
            {/* Contact Info */}
            <div className="md:w-1/2 bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Contact Information</h3>
              <p className="text-gray-600 mb-6">
                Feel free to reach out to me for any queries, collaboration opportunities, or just to say hello!
              </p>

              {/* Email */}
              <div className="flex items-start gap-4 mb-5">
                <div className="bg-indigo-500 text-white p-3 rounded-full shadow">
                  <FaEnvelope />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700">Email</h4>
                  <a href="mailto:1.rajveersinghcse@gmail.com" className="text-indigo-600 hover:underline">
                    1.rajveersinghcse@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 mb-5">
                <div className="bg-indigo-500 text-white p-3 rounded-full shadow">
                  <FaPhone />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700">Phone</h4>
                  <a href="tel:+918529348446" className="text-indigo-600 hover:underline">
                    +91 85293 48446
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4 mb-5">
                <div className="bg-indigo-500 text-white p-3 rounded-full shadow">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700">Location</h4>
                  <p className="text-gray-600">Jodhpur, Rajasthan, India</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 mt-6">
                <a href="https://github.com/1Rajveer-Singh" target="_blank" rel="noopener noreferrer"
                  className="text-gray-600 hover:text-indigo-500 text-xl transition">
                  <FaGithub />
                </a>
                <a href="https://linkedin.com/in/rajveer-singh-997219291" target="_blank" rel="noopener noreferrer"
                  className="text-gray-600 hover:text-indigo-500 text-xl transition">
                  <FaLinkedinIn />
                </a>
                <a href="https://twitter.com/your-twitter" target="_blank" rel="noopener noreferrer"
                  className="text-gray-600 hover:text-indigo-500 text-xl transition">
                  <FaTwitter />
                </a>
                <a href="https://instagram.com/your-instagram" target="_blank" rel="noopener noreferrer"
                  className="text-gray-600 hover:text-indigo-500 text-xl transition">
                  <FaInstagram />
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:w-1/2 bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Send Me a Message</h3>
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    required
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Enter subject"
                    required
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Enter your message"
                    required
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center bg-indigo-600 text-white px-6 py-3 rounded-full shadow hover:bg-indigo-700 transition"
                >
                  Send Message <FaPaperPlane className="ml-2" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Content1;
