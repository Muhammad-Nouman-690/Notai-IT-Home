import utilStyles from "../styles/utils.module.css";
import Blogs from "../component/Blogs";

export default function News() {
  return (
    <>
      <div className="container">
        <div className={utilStyles.newsBox}>
        <div className="row">
          
            <div className="col-sm-12">
              <h3>
                <a href="#" className={utilStyles.mainHeading}>
                  News Notai.it
                </a>
              </h3>
              <p className={utilStyles.mainPara}>
                Useful information and insights on notaries and on the main
                issues related to the notary profession.
              </p>
            </div>
            <div className="col-sm-12">
              <div className={utilStyles.separator}></div>
              <Blogs />    
                        
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
