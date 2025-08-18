import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  const bgStyle = { backgroundColor: "#f5f5f5" };
    const [date, setDate] = React.useState("");
    React.useEffect(() => {
        const d = new Date(document.lastModified);
        setDate(d.toLocaleDateString("fr-FR", { year: "numeric", month: "2-digit" }));
    }, []);
  return (
    <footer style={bgStyle} className="mt-auto py-5 text-center ">
      <Container>
        {props.children}
        Template fait par {" "}
        <a
          className="badge badge-dark"
          rel="noopener"
          href="https://github.com/hashirshoaeb"
          aria-label="My GitHub"
        >
          Hashir Shoaib
        </a>{" "}
        en utilisant <i className="fab fa-react" />
        <p>
          <small className="text-muted">
            <a href="https://github.com/hashirshoaeb/home">Project code is open source. Feel free to fork and make your own
            version.</a>
          </small>
              </p>
              <div className="text-muted small">Derniere mise a jour : {date}</div>

      </Container>
    </footer>
  );
};

export default Footer;
