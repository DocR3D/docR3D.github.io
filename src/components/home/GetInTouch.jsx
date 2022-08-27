import React from "react";
import ReactGA from "react-ga4";
const useAnalyticsEventTracker = (category="Blog category") => {
  const eventTracker = (action = "test action", label = "test label") => {
    ReactGA.event({category, action, label});
  }
  return eventTracker;
}
const GetInTouch = ({ heading, message, email }) => {
  const gaEventTracker = useAnalyticsEventTracker('Contact us');
  return (
    <>
      <h2 className="display-4 pb-3 text-center">{heading}</h2>
      <p className="lead text-center pb-3">
        {message}, <a href={`mailto:${email}`} onClick={()=>gaEventTracker('email')} >{email}</a>.
      </p>
    </>
  );
};

export default GetInTouch;
