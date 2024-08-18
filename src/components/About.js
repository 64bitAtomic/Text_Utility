import React, { useState } from 'react'

export default function About() {
    const [mystyle, setmystyle] = useState({
        color: 'white',
        backgroundColor: '#3D3635'
    })
    const [btnStyle, setbtnStyle] = useState("btn btn-light")
    const [a, seta] = useState({
        textDecoration: `none`,
        color: 'black',
    })
    
    return (
        <div className='container my-1' style={mystyle}>
            <h1 className='my-3'>About me</h1>
            <div className="accordion mb-auto" id="accordionExample" style={mystyle}>
                <div className="accordion-item" style={mystyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne-primary">
                            <b><strong>About This Project</strong></b>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={mystyle}>
                            <strong>Welcome to the Text Manipulator,</strong>  a simple yet powerful tool designed to help you easily modify and analyze text. Whether you need to convert text to uppercase, lowercase, or clear it entirely, our tool offers these functions at your fingertips. The preview area allows you to see changes in real-time, and you can also keep track of the number of words and characters, making it perfect for writers, students, and anyone working with text.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={mystyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <b><strong>Owner's Information</strong></b>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={mystyle}>
                            <strong>This project was developed by Mohammad Zaid Khan,</strong>  a passionate programmer and a 3rd-year Bachelor of Computer Applications (BCA) student. Zaid has a keen interest in web development, machine learning, and software engineering, with a strong foundation in various programming languages and technologies.
                        </div>
                        <div className="container my-1">
                            <button type='button' className={btnStyle}>
                                <a href="https://resmzk.netlify.app/" target='_blank' style={a}>Visit My Website</a>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong> <b>Technologies Used</b></strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={mystyle}>
                            <h4>This text manipulator website is built using the following technologies:</h4>
                            <ul>
                                <li><strong>React.js:</strong> A JavaScript library for building user interfaces, allowing for efficient component-based development.</li>
                                <li><strong>JavaScript:</strong> The core programming language used to add interactive functionality.</li>
                                <li><strong>HTML5:</strong> The standard markup language for creating web pages and web applications.</li>
                                <li><strong>CSS3:</strong> For styling the website and ensuring a responsive design.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            <strong> <b>Project Description</b></strong>
                        </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={mystyle}>
                            <h6>The Text Manipulator is a user-friendly web application designed to provide essential text editing functionalities. The interface is intuitive, making it accessible for users of all experience levels. The tool's primary functions include:</h6>
                            <ul>
                                <li><strong>Uppercase Conversion:</strong>  Transform your text to uppercase with a single click.</li>
                                <li><strong>Lowercase Conversion:</strong> Convert your text to lowercase effortlessly.</li>
                                <li><strong>Clear Text:</strong> Quickly clear the text area for new input.</li>
                                <li><strong>Word Count:</strong> Keep track of how many words are in your text.</li>
                                <li><strong>Character Count:</strong> Monitor the number of characters in your text.</li>
                            </ul>
                            This project demonstrates the power of React.js in creating dynamic and responsive web applications, and it serves as a practical example of front-end development skills.
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
    )
}
