import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import ProfileCard from "./ProfileCard";
import RectangleSVG from "../static/images/rectangle.svg";

// image imports
import ConnorChongImg from "../static/images/connorChong Small.png";
import carolynCaiImg from "../static/images/carolynCai Small.png";
import coraWenImg from "../static/images/coraWen Small.png";
import emmaTsaiImg from "../static/images/emmaTsai Small.png";
import gaganKangImg from "../static/images/gaganKang Small.png";
import ivyWangImg from "../static/images/ivyWang Small.png";
import jacksonFoltzImg from "../static/images/jacksonFoltz Small.png";
import jasonZhangImg from "../static/images/jasonZhang Small.png";
import jessicaHungImg from "../static/images/jessicaHung Small.png";
import nickRodriguezImg from "../static/images/nickRodriguez Small.png";
import sambaDiaImg from "../static/images/sambaDia Small.png";
import sarinnaSungImg from "../static/images/sarinnaSung Small.png";
import seanChungImg from "../static/images/seanChung Small.png";
import steffenCornwellImg from "../static/images/steffenCornwell Small.png";
import trangNguyenImg from "../static/images/trangNguyen Small.png";
import yingTangImg from "../static/images/yingTang Small.png";
import tirthaKharelImg from "../static/images/tirthaKharel.png";

const AboutTeam = () => (
  <div>
    <Helmet>
      <meta name="description" content="Keep.id" />
    </Helmet>
    <div className="bg-our-team-cover-img viewport-height-100 negative-margin-top">
      <div className="container">
        <div className="viewport-height-100 custom-vertical-center">
          <div>
            <h1 className="hero-header pb-4 text-white">We are Team Keep.</h1>
            <p className="hero-header-2 text-white">
              <img
                className="svg-white mb-5"
                src={RectangleSVG}
                alt="rectangle"
              />
            </p>
          </div>
        </div>
      </div>
    </div>

    <h1 className="hero-header-aboutus text-black pb-3 ">Board of Directors</h1>
    <div className="profile-sizing profile-body">
      <div className="grid">
        <div className="wrapper">
          <ProfileCard
            imgUrl={ConnorChongImg}
            title="Connor Chong"
            description="CEO, Technical Lead"
            info="#connor"
            id="connor"
            personDescription="I am a recent graduate of University of Pennsylvania studying networks
            engineering and operations. I’m one of the founders of Keep.id, and am
            proud and thankful for this amazing journey that we have been on. In my free
            time, I love playing violin, finding new board games, hiking, and hitting up the
            table tennis table"
          />
          <ProfileCard
            imgUrl={steffenCornwellImg}
            title="Steffen Cornwell "
            description="Nonprofit Liaison"
            info="#steffen"
            id="steffen"
            personDescription="Steffen Cornwell is Keep.id’s Nonprofit Liaison, and he currently works as a
            freelance web developer and online teacher after having studied computer
            science and entrepreneurship at Penn. His faith in Christ is central to his life,
            and he loves adventures and music! Steffen wants to see Keep.id transform
            the lives of those experiencing homelessness by empowering them to take
            advantage of all the opportunities available to them and overcome any
            logistical barriers preventing them from reaching their full potential."
          />
          <ProfileCard
            imgUrl={ConnorChongImg}
            title="Daniel Joo"
            description="Legal and Operations Lead"
            info="#daniel"
            id="daniel"
            personDescription=""
          />
          <ProfileCard
            imgUrl={ivyWangImg}
            title="Ivy Wang"
            description="Chief Marketing Officer"
            info="#ivy"
            id="ivy"
            personDescription="I am a third year computer science student at Princeton University who was
            inspired by Keep.id’s mission and the passion of its volunteers to join the
            leadership team in August this year. I am looking forward to all that Keep.id
            will accomplish next year!"
          />
          <ProfileCard
            imgUrl={ConnorChongImg}
            title="Michael Hagan"
            description="Nonprofit Liaison"
            info="#michael"
            id="michael"
            personDescription="I am a third year computer science student at Princeton University who was
            inspired by Keep.id’s mission and the passion of its volunteers to join the
            leadership team in August this year. I am looking forward to all that Keep.id
            will accomplish next year!"
          />
          <ProfileCard
            imgUrl={emmaTsaiImg}
            title="Emma Tsai"
            description="Chief Design Officer"
            info="#emma"
            id="emma"
            personDescription="Hi, I'm Emma. I was R&D manager in the food industry and am studying to be
            a UX designer in the University of Sydney. I am a data-oriented creative
            problem solver who is obsessed with understanding human behaviour, and I
            believe UX design is a way that we can creatively help the world to become
            a better place. Outside of work, I love joining online meetups to stay
            connected with the design industry, weight lifting to stay active and read
            books to keep growing."
          />
        </div>
      </div>
    </div>
    <h2 className="hero-header-aboutus text-black pb-3 ">Leadership</h2>
    <div className="profile-sizing profile-body">
      <div className="grid">
        <div className="wrapper">
          <ProfileCard
            imgUrl={jacksonFoltzImg}
            title="Jackson Foltz"
            description="Nonprofit Liaison"
            info="#jackson"
            id="jackson"
            personDescription=""
          />
          <ProfileCard
            imgUrl={jessicaHungImg}
            title="Jessica Hung"
            description="Director of Marketing"
            info="#jessica"
            id="jessica"
            personDescription=""
          />
        </div>
      </div>
    </div>
    <h2 className="hero-header-aboutus text-black pb-3 ">Engineering</h2>
    <div className="profile-sizing profile-body">
      <div className="grid">
        <div className="wrapper">
          <ProfileCard
            imgUrl={gaganKangImg}
            title="Gagan Kang"
            description="Front-end Developer"
            info="#gagan"
            id="gagan"
            personDescription="My name is Gagandeep Kang and I'm a junior studying Computer Science with a minor 
            in Mathematics from Boston University. As someone with an interest in Full-Stack Development,
            I'm always looking for ways to use my technical skills to build software that will help those
            around me. At BU, I've had the opportunity to create meaningful projects through our Hack4Impact
            Chapter as well as the Global App Initiative, and I'm looking forward to having more of these
            opportunities at Keep.id!"
          />
          <ProfileCard
            imgUrl={nickRodriguezImg}
            title="Nick Rodriguez"
            description="Front-end Developer"
            info="#nick"
            id="nick"
            personDescription="I graduated from high school in 2016 and deferred my college acceptance for a year
            to attend a coding bootcamp in Chicago (Fullstack Academy). After the bootcamp, I started working 
            full time at Catalytic and enjoyed it so much that I cancelled my college plans. I've been there 
            for the last 4 years building an automation platform for businesses. I'm really inspired by the Keep.id
            mission and have always wanted to work on something with a positive social impact, so I'm super excited 
            to be joining the team!"
          />
          <ProfileCard
            imgUrl={jasonZhangImg}
            title="Jason Zhang"
            description="Back-end Developer"
            info="#jason"
            id="jason"
            personDescription="Hey everyone, my name Is Jason and I'm currently a junior majoring in CS at Boston University.
            In my free time, I enjoy exercising (weights, and occasionally handball), and all things productivity-related. 
            Looking forward to being able to contribute to the team while honing my own skills."
          />

          <ProfileCard
            imgUrl={sarinnaSungImg}
            title="Sarinna Sung"
            description="Front-end Developer"
            info="#sarinna"
            id="sarinna"
            personDescription="My name is Sarinna Sung. I am currently studying Computer Science and Statistics at BU.
            During my free time, I love hiking, biking, and pet sitting."
          />
          <ProfileCard
            imgUrl={tirthaKharelImg}
            title="Tirtha Kharel"
            description="Back-end Developer"
            info="#tirtha"
            id="tirtha"
            personDescription="Hi! I’m Tirtha and I’m a senior at the University of Pennsylvania studying Computer Science.
            When I’m not coding I enjoy playing basketball, reading, and making music."
          />
        </div>
      </div>
    </div>
    <h2 className="hero-header-aboutus text-black pb-3 ">Design</h2>
    <div className="profile-sizing profile-body">
      <div className="grid">
        <div className="wrapper">
          <ProfileCard
            imgUrl={yingTangImg}
            title="Ying Tang"
            description="Designer"
            info="#ying"
            id="ying"
            personDescription="Hello! I'm Ying, a designer and researcher working with a human-centred and service design lens. 
            I aim to participate in practices making systems more empathetic and caring, and I'm excited to join the team.
            Let's connect if you like design for social good, strategy games, and dogs!"
          />
          <ProfileCard
            imgUrl={trangNguyenImg}
            title="Trang Nguyen"
            description="Designer"
            info="#trang"
            id="trang"
            personDescription="Hope you are doing well! My name is Trang Nguyen and I am currently a self-taught UX Designer. 
            I am very excited to join Team Keep and can’t wait to start working with the team. "
          />
        </div>
      </div>
    </div>
    <h2 className="hero-header-aboutus text-black pb-3 ">Product</h2>
    <div className="profile-sizing profile-body">
      <div className="grid">
        <div className="wrapper">
          <ProfileCard
            imgUrl={coraWenImg}
            title="Cora Wen"
            description="Product"
            info="#cora"
            id="cora"
            personDescription="I’m Cora, a sophomore studying Economics with minors in Finance and Spanish at Princeton University.
            At Princeton, I’m involved with several groups all aimed to help people in my community, whether it be a student-run 
            nutrition focused start-up, or a firm focused on decarbonizing industries. I’ve worked with both large and small 
            nonprofits in the past and am excited to apply the unique set of skills that I’ve learned to help Keep.id!"
          />
        </div>
      </div>
    </div>
    <h2 className="hero-header-aboutus text-black pb-3 ">Legal and Ops</h2>
    <div className="profile-sizing profile-body">
      <div className="grid">
        <div className="wrapper">
          <ProfileCard
            imgUrl={sambaDiaImg}
            title="Samba Dia"
            description="Legal and Ops"
            info="#samba"
            id="samba"
            personDescription="My name is Samba! I am 23 years old and a recent graduate from Macalester College in Minnesota 
            by way of Frederick, Maryland! Some things I enjoy include listening to music, chatting with friends, and playing 
            trumpet!"
          />
        </div>
      </div>
    </div>
    <h2 className="hero-header-aboutus text-black pb-3 ">Marketing</h2>
    <div className="profile-sizing profile-body">
      <div className="grid">
        <div className="wrapper">
          <ProfileCard
            imgUrl={seanChungImg}
            title="Sean Chung"
            description="Marketing Analyst"
            info="#sean"
            id="sean"
            personDescription="My name is Sean Chung and I am a student at Parkland Community College studying to be a 
            Nurse Assistant. I've been volunteering at Keep.id for over half a year now. It has been a great opportunity to grow 
            and learn about the homeless community and the steps that we can take in order to help them. I look forward to
            continue to work with them and look for ways to challenge myself to develop new skills to help the community."
          />
          <ProfileCard
            imgUrl={carolynCaiImg}
            title="Carolyn Cai "
            description="Marketing Analyst"
            info="#carolyn"
            id="carolyn"
            personDescription="Graduate from University of Urbana-Champaign (UIUC), majored in Agricultural and Consumer Economics,
            with an minor in Spanish. Currently working in the Midwest as a branch banker for PNC Bank. Involved with Keep.id as a
            volunteer since spring 2021 in the marketing/fundraising division."
          />
        </div>
      </div>
    </div>
  </div>
);

export default AboutTeam;
