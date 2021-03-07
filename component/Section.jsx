import Image from 'next/image'
import utilStyles from "../styles/utils.module.css";


export default function Section() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <Image
                src="/../public/images/italia.png"
                height={517}
                width={433}
              />
            </div>
            <div className="col-md-6">
              <p className={utilStyles.mainPara}>
                Alternatively, you can navigate to Notai.it by choosing the
                <strong className={utilStyles.paraBold}>
                  {" "}
                  region in which you need to find a notary
                </strong>{" "}
                by selecting it from the map on the side. By clicking on the
                map, you will see two boxes containing links to the lists of
                notaries operating in the{" "}
                <strong className={utilStyles.paraBold}>
                  provinces of the selected region
                </strong>{" "}
                , or in the various{" "}
                <a className={utilStyles.paraBold} href="">
                  notarial districts
                </a>{" "}
                <strong className={utilStyles.paraBold}>of the same</strong>{" "}
                (the notarial district does not coincide with the provinces
                because it includes several offices, and has an extension equal
                to a district territorial court).
              </p>
              <p className={utilStyles.mainPara}>
                So, thanks to a simple and immediate organization and essential
                graphics, on Notai.it you can find your notary by{" "}
                <strong className={utilStyles.paraBold}>
                  using the free search
                </strong>{" "}
                when you fill in the fields " Notary Municipality " and " Notary
                Surname " at the top of the page (only one, or both ), which by{" "}
                <strong className={utilStyles.paraBold}>
                  browsing the various sections
                </strong>{" "}
                of the site, choosing between different levels of territorial
                segmentation and gradually increasing the accuracy of the
                searches: it is possible to{" "}
                <strong className={utilStyles.paraBold}>
                  customize the results obtained
                </strong>{" "}
                thanks to the availability of numerous filters applicable to the
                lists of notaries proposed.
              </p>
              <p className={utilStyles.mainPara}>
                <strong className={utilStyles.paraBold}>
                  The notary is a Public Official
                </strong>{" "}
                , that is a subject to whom the State delegates the exercise of
                some of its functions. The main activity of notaries is the{" "}
                <strong className={utilStyles.paraBold}>
                  realization of notarial deeds
                </strong>{" "}
                , which are effective as a public deed pursuant to{" "}
                <strong className={utilStyles.paraBold}>
                  art. 2699 of the Civil Code
                </strong>{" "}
                . This is because, although it concerns private subjects, the
                stipulation by the notary gives them "public faith" as there is
                the{" "}
                <strong className={utilStyles.paraBold}>
                  attestation of a public official
                </strong>{" "}
                about the veracity of the facts that took place in his presence.
                Finally, remember that precisely as a public official, the
                notary is above the parties and exercises his ministry in an
                absolutely impartial way.
              </p>
              <p className={utilStyles.mainPara}>
                If you are looking for a notary to sign a deed, we recommend
                that you{" "}
                <strong className={utilStyles.paraBold}>
                  request multiple quotes
                </strong>{" "}
                to find the cheapest notary. Notai.it is for this: to find the
                notaries in your area to contact them and{" "}
                <strong className={utilStyles.paraBold}>
                  ask them for quotes based on your needs
                </strong>{" "}
                . So good research, and good savings, on Notai.it!
              </p>
            </div>
          </div>
        </div>
      </>
    );
}