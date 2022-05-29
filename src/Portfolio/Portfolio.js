import React from 'react';

const Portfolio = () => {
    return (
        <section className='container mx-auto'>
            <div className='mt-5'>
                <h2 className='text-xl uppercase'>Md Sohel Ahamed</h2>
                <h2><strong>Email:</strong> sohel800ahamed@gmail.com</h2>
            </div>
            <div className='mt-5'>
                <h2 className='text-xl uppercase'><strong>Education:</strong></h2>
                <li>sheikh fazilatunnesa degree college</li>
                
            </div>
            <div className='mt-5'>
                <h2 className='text-xl uppercase'><strong>Skills:</strong></h2>
                <h2><strong>Expertise:</strong></h2>
                <li>JavaScript, React JS, ES6, HTML, CSS, Bootstrap CSS, Tailwind CSS, React Bootstrap, daisy UI.</li>
                <h2><strong>Comfortable:</strong></h2>
                <li>Firebase, React Router, Node JS, ES6, MongoDB.</li>
                <h2><strong>Familiar:</strong></h2>
                <li>MySQL, AWS, Software Architect, Project Management, OOP, C, C++, JAVA, Networking.</li>
                <h2><strong>Deploy:</strong></h2>
                <li>Firebase, Heroku, Netlify.</li>
                <h2><strong>Tools:</strong></h2>
                <li>Git, VSCode, GitHub, Chrome Dev-Tool, Photoshop.</li>
            </div>
            <div className='mt-5 mb-36'>
                <h2 className='text-xl uppercase'><strong>Projects:</strong></h2>
                <a className='text-blue-500 hover:underline' href="https://warehouse-management-fdb62.firebaseapp.com/">Home Improvement
</a> ||
                <a className='text-blue-500 hover:underline' href="https://astonishing-pika-1e6f5f.netlify.app/">Service-Website</a> ||
               
            </div>
        </section>
    );
};

export default Portfolio;


