import utilStyles from "../styles/utils.module.css";

export default function Footer() {
  return (
    <>
      <div className={utilStyles.footerMain}>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <p>Copyright 2007-2021 PP&E Srl - VAT and CF 05055360969</p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div style={{ float: "left", width: "196px" }}>
                <a href="#">Search Notaries</a> <br />
                <a href="#">All notary districts</a> <br />
                <a href="#">News Notai.it</a> <br />
                <a href="#">Privacy</a> <br />
                <a href="#">RSS</a>
              </div>
              <div style={{ float: "left", width: "220px" }}>
                <a href="#">Abruzzo</a> <br />
                <a href="#">Region Basilicata</a> <br />
                <a href="#">Region Calabria</a> <br />
                <a href="#">Region Campania</a> <br />
                <a href="#">Region Emilia Romagna Region</a>
              </div>
              <div style={{ float: "left", width: "196px" }}>
                <a href="#">Friuli Venezia Giulia</a> <br />
                <a href="#">Region Lazio</a> <br />
                <a href="#">Region Liguria</a> <br />
                <a href="#">Region Lombardy</a> <br />
                <a href="#">Region Marche Region</a>
              </div>
              <div style={{ float: "left", width: "196px" }}>
                <a href="#">Molise</a> <br />
                <a href="#">Region Piedmont</a> <br />
                <a href="#">Region Apulia</a> <br />
                <a href="#">Region Sardinia</a> <br />
                <a href="#">Region Sicily Region</a>
              </div>
              <div style={{ float: "left", width: "196px" }}>
                <a href="#">Tuscany</a> <br />
                <a href="#">Region Trentino Alto Adige</a> <br />
                <a href="#">Region Umbria</a> <br />
                <a href="#">Region Valle d'Aosta</a> <br />
                <a href="#">Region Veneto Region</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
