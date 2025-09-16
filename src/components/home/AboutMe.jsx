import React from "react";
import Pdf from "../../editable-stuff/cv_ia_fr.pdf";
import { withTranslation, initReactI18next } from "react-i18next";
import '../../i18n.js';
import { useTranslation } from "react-i18next";
import ReactGA from "react-ga4";

import axios from "axios";

const useAnalyticsEventTracker = (category="Blog category") => {
  const eventTracker = (action = "test action", label = "test label") => {
    ReactGA.event({category, action, label});
  }
  return eventTracker;
}

const pictureLinkRegex = new RegExp(
  /[(http(s)?):(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/
);

const AboutMe = ({ heading, message, link, imgSize, resume, resumeDev, resumeIa }) => {
    const { t } = useTranslation();
    const gaEventTracker = useAnalyticsEventTracker("Contact us");
    const [profilePicUrl, setProfilePicUrl] = React.useState("");
    const [showPic, setShowPic] = React.useState(Boolean(link));

    React.useEffect(() => {
        if (link && !pictureLinkRegex.test(link)) {
            handleRequest();
        } else {
            setProfilePicUrl(link);
        }
    }, [link]);

    const handleRequest = async () => {
        const instaLink = "https://www.instagram.com/";
        const instaQuery = "/?__a=1";
        try {
            const response = await axios.get(instaLink + link + instaQuery);
            setProfilePicUrl(response.data.graphql.user.profile_pic_url_hd);
        } catch (error) {
            setShowPic(false);
            console.error(error.message);
        }
    };

    // Hrefs des deux CV (fallback sur `resume` si besoin)
    const devHref = resumeDev || resume || null;
    const iaHref = resumeIa || null;

    return (
        <div id="aboutme" className="jumbotron jumbotron-fluid m-0">
            <div className="container container-fluid">
                <div className="row">
                    <div className="col-5 d-none d-lg-block align-self-center">
                        {showPic && (
                            <img
                                className="border border-secondary rounded-circle"
                                src={profilePicUrl}
                                alt="Maxime Yonnet profile picture"
                                width={imgSize}
                                height={imgSize}
                                loading="lazy"
                                decoding="async"
                            />
                        )}
                    </div>

                    <div className={`col-lg-${showPic ? "7" : "12"}`}>
                        <h2 className="display-4 mb-5 text-center">{heading}</h2>
                        <p className="lead text-center">{message}</p>

                        {(iaHref) && (
                            <p className="lead text-center">
                                {iaHref && (
                                    <a
                                        className="btn btn-outline-secondary btn-lg"
                                        href={iaHref}
                                        target="_blank"
                                        rel="noreferrer noopener"
                                        role="button"
                                        aria-label="CV IA"
                                        onClick={() => gaEventTracker("CV_IA")}
                                    >
                                        {t("cvIa.label") || "CV IA"}
                                    </a>
                                )}
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
