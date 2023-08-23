import './Skills.css'

export default function Skills () {
  return (
    <div id='skills'>
      <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseList" aria-expanded="false" aria-controls="collapseList">
        My Dev Skills
      </button>
      <div class="collapse" id="collapseList">
        <div class="card card-body">
          <ul className='list-group'>
            <li className="list-group-item">MERN-Stack</li>
            <li className="list-group-item">JavaScript</li>
            <li className="list-group-item">HTML</li>
            <li className="list-group-item">CSS</li>
            <li className="list-group-item">EJS</li>
            <li className="list-group-item">Python</li>
            <li className="list-group-item">Django</li>
            <li className="list-group-item">SQLite</li>
            <li className="list-group-item">Bootstrap 5</li>
            <li className="list-group-item">React-Bootstrap</li>
            <li className="list-group-item">Materialize</li>
            <li className="list-group-item">Team Version Control</li>
          </ul>
        </div>
      </div>
    </div>
  )
}