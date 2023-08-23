import './Projects.css';
import { useState, useRef } from 'react';
import { getOpacity } from '../../utilities/getOpacity';

export default function Projects() {
  const[opacity, setOpacity] = useState(0.2);
  const projectsRef = useRef(null);

  window.addEventListener('scroll', () => getOpacity(setOpacity, projectsRef))

  return (
    <div ref={projectsRef} style={{opacity: opacity}} id='projects'>
      <h1>My Projects</h1>
      <div  className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
              Snoqualmie Valley Garden Club | Full-Stack Web App &nbsp; <strong>in progress</strong>
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <div className='text-center'>
                <h3>
                  <a className='accordion-link' href="https://snoqualmie-valley-garden-club-37f9bfbdf548.herokuapp.com/">Heroku Site</a> 
                </h3>
                <p>
                  To test run the admin features click <a href="https://snoqualmie-valley-garden-club-37f9bfbdf548.herokuapp.com/admin">here</a> to the url and sign in with email: alex@alex.com | password: alex
                </p>
              </div>
                <ul className="list-group">
                  <li className="list-group-item text-center"><strong>MERN Stack, React-Bootstrap, CSS</strong></li>
                  <li className="list-group-item">Delivered high-quality, feature-rich web app with admin focus  ahead of schedule and under budget through agile collaboration with the client, self-directed learning, and diligent project management.</li>
                  <li className="list-group-item">Partnered with the non-profit throughout the project to define and refine features based on business needs. Made recommendations to enhance overall product design.</li>
                  <li className="list-group-item">Enhanced core React skills through building custom components and implementing modern hooks, state management, effects and UI rendering from scratch.</li>
                  <li className="list-group-item">Implemented secure photo upload functionality to AWS S3 storage bucket, enabling administrators to seamlessly add new images to the site gallery.</li>
                </ul>                
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Macro Counter | Full-Stack Web App
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <div className='text-center'>
                <h3>
                  <a className='accordion-link' href="https://macrocounter-8ca2ea342aae.herokuapp.com/foods/search">Heroku Site</a> 
                </h3>
              </div>
              <ul className="list-group">
                <li className="list-group-item text-center"><strong>Python, Django, JS, Materialize CSS, CSS</strong></li>
                <li className="list-group-item">The most back-end intensive project of the list; done as a group project with one other classmate. Learned GitHub team version control flow by working with another contributor, and performed exceptionally with a teammate.</li>
                <li className="list-group-item">Employed Django in conjunction with Python to build a full-stack web application that tracks a user's daily caloric and macronutrient intake, and returns to the user how many macronutrients are left to be consumed in the day.</li>
                <li className="list-group-item">Demonstrated ability to use APIs by utilizing Edemam's Food Database API to search for practically any food and return the calories and macronutrients of the searched food. Information from the API is immediately translated into the database.</li>
                <li className="list-group-item">Utilized Materialize to efficiently configure a clean front-end for a richer user experience; Alongside client-side JS to create a unique user sign-up experience that instantly calculates necessary daily calories from the user entered macronutrient goals.</li>
              </ul>                
            </div>            
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Climbing Advice | Full-Stack Web App
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <div className='text-center'>
                  <h3>
                    <a className='accordion-link' href="https://climbing-advice.herokuapp.com/">Heroku Site</a> 
                  </h3>
              </div>
              <ul className="list-group">
                <li className="list-group-item text-center"><strong>Mongoose, Express, EJS, Node.js, (MEEN stack???) CSS</strong></li>
                <li className="list-group-item">Learned about the interaction between front and back-end by creating an online forum for rock climbing where user's can submit posts asking for help on climbing routes. Posts include YouTube videos, a title, a description and a comment section.</li>
                <li className="list-group-item">Made RESTful API fetch calls to an Express, MongoDB, EJS backend handling all create, read, update, delete (CRUD) operations.</li>
                <li className="list-group-item">Wrote an extensive amount of thoughtfully organized CSS, 100% from scratch, and solidified CSS grid and flexbox skills by building elements such as a navbar and a properly aligned post form.</li>
              </ul> 
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
              Minesweeper | Desktop Web Game
            </button>
          </h2>
          <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <div className='text-center'>
                <h3>
                  <a className='accordion-link' href="https://alexpetit6.github.io/Minesweeper/">GH-Pages Site</a>
                </h3>
              </div>
              <ul className="list-group">
                <li className="list-group-item text-center"><strong>JS, HTML, CSS</strong></li>
                <li className="list-group-item">Created a browser game version of the classic  Minesweeper.</li>
                <li className="list-group-item">Used JS to serve the front-end of the game, applied concepts such as recursion and OOP.</li>
                <li className="list-group-item">Dynamically rendered the game through DOM manipulation.</li>
                <li className="list-group-item">Styled with CSS, using CSS grid and flexbox.</li>
              </ul>
            </div>
          </div>
        </div>
      </div> 
    </div>
  )
}
