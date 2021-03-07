import utilStyles from "../styles/utils.module.css";

export default function Heading() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className={utilStyles.mainHeading}>
              Search among all notaries in Italy
            </h1>
            <p className={utilStyles.mainPara}>
              On <strong className={utilStyles.paraBold}>Notai.it</strong> you{" "}
              <strong className={utilStyles.paraBold}>can</strong> find all
              notaries operating in Italy thanks to a very simple search
              function: you can search either by geographic location of{" "}
              <strong className={utilStyles.paraBold}>the notary</strong> 's{" "}
              <strong className={utilStyles.paraBold}>office</strong> , which is
              the place where the notary has his residence (search by
              municipality), or by <strong className={utilStyles.paraBold}>name and surname</strong>
              of the notary himself. Or you can use both data to get more
              accurate results.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
