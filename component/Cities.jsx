import utilStyles from "../styles/utils.module.css";

export default function Cities() {
  return (
    <>
      <div className="container">
        <div className={utilStyles.mainSec}>
          <div className="row">
            <div className="col-sm-12">
              <h3 className={utilStyles.secHeading}>
                I noticed in the main Italian cities
              </h3>
            </div>
          </div>
          <div className="row">
          <div className="col-sm-4">
             <div className={utilStyles.secBorder}>
              <a href="">I noticed in Rome
              <span className={utilStyles.secNum}>391</span>
              </a> <br/> 
              <a href="">I noticed in Milan
              <span className={utilStyles.secNum}>250</span>
              </a> <br/>
              <a href="">I noticed in Turin
              <span className={utilStyles.secNum}>121</span>
              </a> <br/>
              <a href="">I noticed in Naples
              <span className={utilStyles.secNum}>116</span>
              </a>
              </div>
          </div>
          <div className="col-sm-4">
             <div className={utilStyles.secBorder}>
              <a href="">I noticed in Genoa
              <span className={utilStyles.secNum}>82</span>
              </a> <br/>
              <a href="">I noticed in Bologna
              <span className={utilStyles.secNum}>73</span>
              </a> <br/>
              <a href="">I noticed in Palermo
              <span className={utilStyles.secNum}>71</span>
              </a> <br/>
              <a href="">I noticed in Florence
              <span className={utilStyles.secNum}>62</span>
              </a>
              </div>
          </div>
          <div className="col-sm-4">
          <div className={utilStyles.secBorderOne}>
              <a href="">I noticed in Catania
              <span className={utilStyles.secNum}>48</span>
              </a> <br/>
              <a href="">I noticed in Verona
              <span className={utilStyles.secNum}>36</span>
              </a> <br/>
              <a href="">I noticed in Padua
              <span className={utilStyles.secNum}>36</span>
              </a> <br/>
              <a href="">I noticed in Bergamo
              <span className={utilStyles.secNum}>35</span>
              </a>
              </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}
