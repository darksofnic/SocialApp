import React, { Component } from "react";
import "./Home.css";
import Badge from "../../Components/Badge/Badge";
import SignInWith from "../../Components/SignInWith/SignInWith";
import ColoredButton from "../../Components/ColoredButton/ColoredButton";

// Denis

export default class Home extends Component {
  render() {
    return (
      <div className="screen">
        <div className="login-container">
          {/* Small left card */}
          <div className="info">
            <Badge color="limegreen" text="white">
              Header
            </Badge>
            <h1 className="header">
              A small business is only as good as its tools.
            </h1>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
              adipisci?
            </p>
            <ul className="icon">
              <li>
                <i className="fa fa-check-circle"></i>Lorem ipsum dolor sit
                amet.
              </li>
              <li>
                <i className="fa fa-check-circle"></i>Lorem ipsum dolor sit
                amet.
              </li>
              <li>
                <i className="fa fa-check-circle"></i>Lorem ipsum dolor sit
                amet.
              </li>
            </ul>
          </div>
          {/* Login in Sign up */}
          <div className="card">
            <h1>Join our community</h1>
            <h4>Start your free trial</h4>
            <form className="emailInput">
              <label htmlFor="">Email</label>
              <br />
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter your email address"
              />
              <input className="submit" type="submit" value="Get started" />
              <div className="separator">
                <div className="line"></div>
                <h2>OR</h2>
                <div className="line"></div>
              </div>
              <SignInWith></SignInWith>
              <p className="haveAcc">
                Already have an account? <a href="/login">Sign in</a>
              </p>
            </form>
          </div>
        </div>
        {/* analytics */}
        <div className="analytics">
          <Badge color="#DCFCE7" text="#22C55E" style={{ margin: "0 auto" }}>
            Features
          </Badge>
          <h1>Gain more insight into how people use your</h1>
          <h4>
            With our integrated CRM, project management, collaboration and
            invoicing capabilities, you can manage every aspect of your business
            in one secure platform.
          </h4>
          <div className="analytic-cards">
            <div>
              <div className="analytic-single-card">
                <img src={require("../../Shared/Icons/Temp_logo.png")} alt="" />
                <h1>Measure your performance</h1>
                <p>
                  Stay connected with your team and make quick decisions
                  wherever you are.{" "}
                </p>
              </div>
            </div>
            <div>
              <div className="analytic-single-card">
                <img
                  src={require("../../Shared/Icons/Temp_logo2.png")}
                  alt=""
                />
                <h1>Custom analytics</h1>
                <p>
                  Get a complete sales dashboard in the cloud. See activity,
                  revenue and social metrics all in one place.
                </p>
              </div>
            </div>
            <div>
              <div className="analytic-single-card">
                <img
                  src={require("../../Shared/Icons/Temp_logo2.png")}
                  alt=""
                />
                <h1>Team Management</h1>
                <p>
                  Our calendar lets you know what is happening with customer and
                  projects so you
                </p>
              </div>
            </div>
            <div>
              <div className="analytic-single-card">
                <img
                  src={require("../../Shared/Icons/Temp_logo2.png")}
                  alt=""
                />
                <h1>Build your website</h1>
                <p>
                  A tool that lets you build a dream website even if you know
                  nothing about web design or programming.
                </p>
              </div>
            </div>
            <div>
              <div className="analytic-single-card">
                <img
                  src={require("../../Shared/Icons/Temp_logo2.png")}
                  alt=""
                />
                <h1>Connect multiple apps</h1>
                <p>
                  The first business platform to bring together all of your
                  products from one place.
                </p>
              </div>
            </div>
            <div>
              <div className="analytic-single-card">
                <img
                  src={require("../../Shared/Icons/Temp_logo2.png")}
                  alt=""
                />
                <h1>Easy setup</h1>
                <p>
                  End to End Business Platform, Sales Management, Marketing
                  Automation, Help Desk
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Horizontal Card */}
        <div className="horizontal_card_container">
          <div className="horizontal_card">
            <div className="text">
              <div className="innerText">
                <h1>The fastest way from idea to live site. Period.</h1>
                <p>
                  Flex is a Small SaaS Business. Flex isn’t a traditional
                  company.
                </p>
              </div>
            </div>
            <div className="buttons">
              <div className="innerButtons">
                <ColoredButton
                  background="#22C55E"
                  text="#F0FDF4"
                  style={{ margin: "10px" }}
                >
                  GET STARTED
                </ColoredButton>
                <ColoredButton style={{ margin: "10px" }}>
                  LEARN MORE
                </ColoredButton>
              </div>
            </div>
          </div>
        </div>
        {/* Information/Picture {Left and right} */}
        <div className="info_pic">
          <div className="info_pic_header">
            <Badge color="#DCFCE7" text="#22C55E">
              FEATURES
            </Badge>
            <h1>Gain more insight into how people use your</h1>
            <h4>
              With our integrated CRM, project management, collaboration and
              invoicing capabilities, you can manage every aspect of your
              business in one secure platform.
            </h4>
          </div>
          {/* Top */}
          <div className="info_pic_1">
            <div className="info_pic_information">
              <div className="info_pic_card">
                <img src={require("../../Shared/Icons/Temp_logo.png")} alt="" />
                <h1>Measure your performance</h1>
                <p>
                  Stay connected with your team and make quick decisions
                  wherever you are.
                </p>
              </div>
              <div className="info_pic_card">
                <img src={require("../../Shared/Icons/Temp_logo.png")} alt="" />
                <h1>Build your website</h1>
                <p>
                  A tool that lets you build a dream website even if you know
                  nothing about web design or programming.
                </p>
              </div>
              <div className="info_pic_card">
                <img src={require("../../Shared/Icons/Temp_logo.png")} alt="" />
                <h1>Connect multiple apps</h1>
                <p>
                  The first business platform to bring together all of your
                  products from one place.
                </p>
              </div>
            </div>
            <div className="info_pic_picture">
              <img
                src={require("../../Shared/Pictures/LandingPage_Book.png")}
                alt=""
              />
            </div>
          </div>
          {/* Middle */}
          <div className="info_pic_1 info_pic_middle">
            <div className="info_pic_picture">
              <img
                src={require("../../Shared/Pictures/LandingPage_Book.png")}
                alt=""
              />
            </div>
            <div className="info_pic_information">
              <div className="info_pic_information_inner">
                <Badge color="#DCFCE7" text="#22C55E">
                  FEATURES
                </Badge>
                <h1>Gain more insight into how people use your</h1>
                <p>
                  With our integrated CRM, project management, collaboration and
                  invoicing capabilities, you can manage every aspect of your
                  business in one secure platform.
                </p>
                <ColoredButton background="#22C55E" text="#F0FDF4">
                  GET STARTED
                </ColoredButton>
              </div>
            </div>
          </div>
          {/* Bottom */}
          <div className="info_pic_1">
            <div className="info_pic_information">
              <div className="info_pic_information_inner">
                <Badge color="#DCFCE7" text="#22C55E">
                  FEATURES
                </Badge>
                <h1>Gain more insight into how people use your</h1>
                <p>
                  With our integrated CRM, project management, collaboration and
                  invoicing capabilities, you can manage every aspect of your
                  business in one secure platform.
                </p>
                <ColoredButton background="#22C55E" text="#F0FDF4">
                  GET STARTED
                </ColoredButton>
              </div>
            </div>
            <div className="info_pic_picture">
              <img
                src={require("../../Shared/Pictures/LandingPage_Book.png")}
                alt=""
              />
            </div>
          </div>
        </div>
        {/* Numbers */}
        <div className="numbers">
          <div className="numbers_header">
            <Badge color="#DCFCE7" text="#22C55E">
              NUMBERS
            </Badge>
            <h1>We believe in the power of data</h1>
            <p>
              Flex is the only business platform that lets you run your business
              on one platform, seamlessly across all digital channels.
            </p>
          </div>
          <div className="numbers_info">
            <div>
              <h1>235.000</h1> <h3>Projects completed</h3>
            </div>
            <div>
              <h1>$10m</h1> <h3>APR</h3>
            </div>
            <div>
              <h1>+50.000</h1>
              <h3>Hours Saved Annually</h3>
            </div>
            <div>

              <h1>3.500</h1> <h3>Unique Users</h3>
            </div>
          </div>
        </div>
        {/*  */}
        <div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam,
            necessitatibus amet. Minus suscipit totam est ipsam, eos maiores
            quasi perferendis eius voluptas, repudiandae ab omnis accusantium?
            Necessitatibus cum cumque non. Cumque incidunt quibusdam quo
            molestias id maxime esse in voluptatum dolorem non corporis sequi,
            molestiae doloribus nemo fugit distinctio suscipit aspernatur. Ipsum
            odio nam aliquid minima distinctio autem possimus repellat? Totam
            sunt commodi, doloremque obcaecati tempore ex dolores quod
            voluptatem error, magni molestiae nemo sed accusantium distinctio
            quo atque assumenda? Omnis non, amet explicabo dolor tempore
            quibusdam. Aspernatur, enim quis. Cupiditate quam hic deserunt,
            nobis deleniti nemo iure rem. Laudantium quae dolores nobis
            perferendis a odio totam, explicabo porro eum facere nostrum
            voluptas suscipit rem assumenda. Commodi fugit quidem quam. Error,
            similique modi consequatur nulla, earum libero nihil voluptates
            adipisci, dignissimos omnis molestias vitae illo tempora animi quae
            quos deleniti nostrum dicta quis autem aliquam cupiditate temporibus
            laboriosam porro. Nulla? Perferendis dignissimos ab delectus, sed,
            recusandae ipsam libero harum temporibus at vel, incidunt similique
            quam esse quae voluptas doloremque ullam numquam mollitia. Beatae
            excepturi amet cum obcaecati, possimus nam optio! Fuga at
            repudiandae veritatis esse velit? Sapiente amet, sint rem qui
            quaerat, voluptatem optio culpa maiores quis beatae quibusdam
            tempora, perspiciatis libero. Aspernatur maiores beatae cum veniam
            ea iusto. Doloribus? Dicta ipsam debitis vero voluptatibus nobis! Et
            inventore magni voluptates unde quam amet quae perferendis
            similique, harum sunt, ut a voluptate minima at. Mollitia, quasi
            eos! Amet excepturi ab illo. Dolorum deleniti blanditiis dolores
            fugiat in suscipit ab rem eum dolor nam ea, molestiae voluptas
            quidem et distinctio numquam at voluptatibus. Obcaecati deleniti
            molestiae dolorum repellendus consequatur neque consectetur eos?
            Obcaecati commodi voluptate veniam labore culpa, ipsam perferendis
            eos explicabo maxime nesciunt nemo totam ad nisi fuga ab dolore
            atque fugiat? Rerum consectetur soluta nesciunt velit! Nobis modi
            aliquid maxime!
          </p>
        </div>
      </div>
    );
  }
}
