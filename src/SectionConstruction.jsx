import '../styling/construction.css'

const SectionConstruction = () => {
  return (
    <>
      <div className="graphic">
        <div className="lights">
          <div id="blinky-1" className="blinky-light"></div>
          <div id="blinky-2" className="blinky-light"></div>
          <div id="blinky-3" className="blinky-light"></div>
        </div>
        <div className="construction-bar"></div>
      </div>
      <div className="under-construction">
        <span>Welcome to my website! </span>
        <span>It's currently under construction.</span>
      </div>
      <div className="link-container">
        <h5>In the meantime, check me out at these places:</h5>
        <div className="links">
          <a target="_blank" href="https://www.linkedin.com/in/trevor-depew/">LinkedIn</a>
          <a target="_blank" href="https://github.com/tdep">GitHub</a>
          <a target="_blank" href="./trevor_depew_resume.pdf">Resume</a>
        </div>
      </div>
      <div id="root"></div>
      <script type="module" src="/src/main.jsx"></script>
    </>
  )
}

export default SectionConstruction