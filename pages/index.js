import Head from "next/head";
import { Accordion, Card } from "react-bootstrap";
import { URL } from "../common";
import { HiDotsVertical } from "react-icons/hi";
import Lecturers from "../components/Lecturers";

export default function Home({ data }) {
  let result = [];
  if (process.browser) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(data, "text/html");
    document.body.classList.add("light-mode");
    Array.from(doc.querySelectorAll("ol li h3 strong")).forEach((i) => {
      const tempDiv = document.createElement("div");
      tempDiv.classList.add("ml-3");
      tempDiv.textContent = "+";
      i.insertAdjacentElement("afterend", tempDiv);
      i.parentElement.classList.add(
        "d-flex",
        "align-items-center",
        "justify-content-between"
      );
    });
    Array.from(doc.querySelectorAll("a")).forEach((i) => {
      if (i.getAttribute("href") && i.getAttribute("href") !== "#") {
        i.setAttribute(
          "href",
          `${i
            .getAttribute("href")
            .replace("http://web.archive.org/web/20210210143025/", "")}`
        );
        i.setAttribute("target", "_blank");
      }
    });
    Array.from(doc.querySelectorAll("h2")).forEach((i) => {
      const text = i.textContent;
      const isTextValid = !(
        i.textContent.includes("Conc") || i.textContent.includes("Whol")
      );
      if (isTextValid) {
        let loop = true;
        let siblings = [];
        let nextSibling = i.nextElementSibling;
        let youTube;
        while (loop) {
          if (
            nextSibling.nodeName === "DIV" &&
            nextSibling.className === "youtube-responsive-container"
          ) {
            youTube =
              nextSibling.querySelector("iframe").getAttribute("data-ezsrc") ||
              nextSibling.querySelector("iframe").getAttribute("src");
            youTube = youTube.replace(
              "http://web.archive.org/web/20210210143025if_/",
              ""
            );
            const hyperlink = document.createElement("a");
            hyperlink.setAttribute("href", youTube);
            hyperlink.setAttribute("target", "_blank");
            hyperlink.setAttribute("rel", "noopener noreferrer");
            hyperlink.textContent = "Reference lecture on this topic";
            hyperlink.classList.add("d-none", "youtube");
            siblings.push(hyperlink);
          } else {
            if (
              nextSibling.nodeName !== "DIV" &&
              nextSibling.innerHTML !== "" &&
              nextSibling.innerHTML !== "&nbsp;" &&
              !nextSibling.innerHTML.includes(" -->&nbsp;") &&
              !nextSibling.innerHTML.includes("</span>&nbsp;")
            ) {
              if (
                nextSibling.nodeName === "P" ||
                nextSibling.nodeName === "UL" ||
                (nextSibling.nodeName === "OL" &&
                  nextSibling.querySelector("h3") === null)
              ) {
                nextSibling.classList.add("d-none");
              }
              siblings.push(nextSibling);
            }
          }
          nextSibling = nextSibling.nextElementSibling;
          if (nextSibling.nodeName === "H2") {
            loop = false;
          }
        }
        siblings = siblings
          .map((i) => {
            if (i.outerHTML !== "<p></p>" && i.outerHTML !== "<p>&nbsp;</p>") {
              return i.outerHTML;
            }
          })
          .join("");
        result.push({
          title: text.replace(/.*:\s/, ""),
          siblings,
        });
      }
    });
    document.addEventListener("click", (e) => {
      const node = e.target.nodeName;
      if (node === "H3" || node === "STRONG") {
        let parent =
          node === "H3"
            ? e.target
            : node === "STRONG"
            ? e.target.parentElement
            : false;
        parent.querySelector(".ml-3").textContent =
          parent.querySelector(".ml-3").textContent === "+" ? "-" : "+";
        console.log(parent);
        let loop = true;
        let siblings = [];
        let nextSibling =
          node === "STRONG"
            ? e.target.parentElement.parentElement.parentElement
                .nextElementSibling
            : e.target.parentElement.parentElement.nextElementSibling;
        while (loop) {
          siblings.push(nextSibling);
          if (nextSibling === null) {
            loop = false;
          } else if (nextSibling.nextElementSibling === null) {
            loop = false;
          } else {
            nextSibling = nextSibling.nextElementSibling;
            if (
              nextSibling.nodeName === "OL" &&
              nextSibling.getAttribute("start")
            ) {
              loop = false;
            }
          }
        }
        siblings.forEach((i) => {
          // foo
          i.classList.toggle("d-none");
        });
      }
    });
    document.querySelector("#toggle").addEventListener("click", (e) => {
      document.body.classList.toggle("light-mode");
      e.target.textContent = document.body.classList.contains("light-mode")
        ? "Lights off"
        : "Lights on";
    });
  }
  return (
    <div className="p-3 min-vh-100">
      <Head>
        <title>CS1000</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="text-center">
        <h1 className="text-white m-0 mb-1">CS1000</h1>
        <p className="text-secondary m-0 mb-2">
          I've switched to <code>web.archive.org</code> for faster rendering of
          this page. Current version is: <code>02/10/2021</code>.
        </p>
      </div>
      <nav className="container-fluid">
        <div className="text-center mb-3 row mx-auto">
          <a href="#" className="col col-4" id="toggle">
            Lights off
          </a>
          <a
            href="https://laconicml.com/computer-science-curriculum-youtube-videos/"
            target="_blank"
            rel="noopener noreferrer"
            className="col col-4"
          >
            Reference
          </a>
          <a
            href="https://github.com/tpkahlon/cs1000"
            target="_blank"
            rel="noopener noreferrer"
            className="col col-4"
          >
            Source
          </a>
        </div>
      </nav>
      <Accordion>
        {result.map((i, index) => (
          <Card key={index} bg="dark" text="secondary">
            <Accordion.Toggle
              as={Card.Header}
              variant="link"
              eventKey={index.toString()}
              className="d-flex justify-content-between align-items-center p-3"
            >
              <div className="title">{i.title}</div>
              <div className="ml-3">
                <HiDotsVertical />
              </div>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={index.toString()}>
              <div
                dangerouslySetInnerHTML={{ __html: i.siblings }}
                className="siblings"
              ></div>
            </Accordion.Collapse>
          </Card>
        ))}
      </Accordion>
      <Lecturers />
      <div className="text-muted text-center d-flex justify-content-center dignity">
        <p className="m-0 small">
          Proudly made by son of an{" "}
          <a
            href="https://en.wikipedia.org/wiki/2020%E2%80%932021_Indian_farmers%27_protest"
            target="_blank"
            rel="noopener noreferrer"
            className="text-success"
          >
            Indian farmer
          </a>
          , for the people...
        </p>
      </div>
    </div>
  );
}

Home.getInitialProps = async () => {
  const r = await fetch(URL);
  const j = await r.text();
  return {
    data: j,
  };
};
