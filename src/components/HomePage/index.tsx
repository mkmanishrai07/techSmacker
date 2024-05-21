"use client";
import { Helmet } from "react-helmet";
import INFO from "@/helpers/data/user";
import SEO from "@/helpers/data/seo";
import NavBar from "../common/navbar";
import React, { useEffect, useState } from "react";
import Logo from "@/components/common/logo"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
	faTwitter,
	faGithub,
	faStackOverflow,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import AllProjects from "@/components/projects/allProjects"

import myArticles from "@/helpers/data/articles"
import Article from "@/components/articles/article"
import Works from "@/components/works/works"
import Footer from "@/components/footers/footer"
const HomePage = (props:any) => {
  const currentSEO = SEO.find((item) => item.page === "home");

  const [stayLogo, setStayLogo] = useState(false);
  const [logoSize, setLogoSize] = useState(80);

	const [oldLogoSize, setOldLogoSize] = useState(80);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			let scroll = Math.round(window.pageYOffset);

			let newLogoSize = 80 - (scroll * 4) / 10;

			if (newLogoSize < oldLogoSize) {
				if (newLogoSize > 40) {
					setLogoSize(newLogoSize);
					setOldLogoSize(newLogoSize);
					setStayLogo(false);
				} else {
					setStayLogo(true);
				}
			} else {
				setLogoSize(newLogoSize);
				setStayLogo(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [logoSize, oldLogoSize]);

  const logoStyle: any = {
    display: "flex",
    position: stayLogo ? "fixed" : "relative",
    top: stayLogo ? "3vh" : "auto",
    zIndex: 999,
    border: stayLogo ? "1px solid white" : "none",
    borderRadius: stayLogo ? "50%" : "none",
    boxShadow: stayLogo ? "0px 4px 10px rgba(0, 0, 0, 0.25)" : "none",
  };
  return (
    <>
      <Helmet>
        <title>{INFO.main.title}</title>
        <meta name="description" content={currentSEO?.description} />
        <meta name="keywords" content={currentSEO?.keywords.join(", ")} />
      </Helmet>
      <div className="page-content ">
        <NavBar active="home" />
        <div className="content-wrapper">
          {/* <div className="homepage-logo-container">
            <div style={logoStyle}>
              <Logo width={logoSize} link={false} />
            </div>
          </div> */}

          <div className="homepage-container">
            <div className="homepage-first-area">
              <div className="homepage-first-area-left-side">
                <div className="title homepage-title">
                  {INFO.homepage.title}
                </div>

                <div className="subtitle homepage-subtitle">
                  {INFO.homepage.description}
                </div>
              </div>

              <div className="homepage-first-area-right-side">
                <div className="homepage-image-container w-[60%] lg:w-[100%]">
                  <div className="homepage-image-wrapper">
                    <img
                      src="mypic.jpg"
                      alt="about"
                      className="homepage-image"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="homepage-socials">
              <a href={INFO.socials.twitter} target="_blank" rel="noreferrer">
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="homepage-social-icon"
                />
              </a>
              <a href={INFO.socials.github} target="_blank" rel="noreferrer">
                <FontAwesomeIcon
                  icon={faGithub}
                  className="homepage-social-icon"
                />
              </a>
              <a
                href={INFO.socials.stackoverflow}
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faStackOverflow}
                  className="homepage-social-icon"
                />
              </a>
              <a href={INFO.socials.instagram} target="_blank" rel="noreferrer">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="homepage-social-icon"
                />
              </a>
              <a
                href={`mailto:${INFO.main.email}`}
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faMailBulk}
                  className="homepage-social-icon"
                />
              </a>
            </div>

            <div className="homepage-projects">
              <AllProjects />
            </div>

            <div className="homepage-after-title">
              <div className="homepage-articles">
                {myArticles.map((article, index) => (
                  <div
                    className="homepage-article"
                    key={(index + 1).toString()}
                  >
                    <Article
                      key={(index + 1).toString()}
                      date={article().date}
                      title={article().title}
                      description={article().description}
                      link={"/article/" + (index + 1)}
                    />
                  </div>
                ))}
              </div>

              <div className="homepage-works">
                <Works />
              </div>
            </div>

            <div className="page-footer">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
