<!-- eslint-disable -->
<template>
  <div class="projects">
    <div class="button-info">
      <!-- <button class="btn btn-info fade-in">
        <a href="https://docs.google.com/document/d/1u-fsQlWF0vEGIpmHJZEQCp9Wrf9TgWzvzJ7MSMN1D2o/export?format=pdf"
          target="_blank" download>DownLoad Resume</a>
      </button> -->
    </div>
    <h3 class="projects__title">PROJECTS</h3>
    <div class="list-of-projects row container">
      <div class="card-item" v-for="(item, i) in ProjectsList" :key="`${i}-${item.id}`">
        <card :item="item" />
      </div>
    </div>
    <!-- <div v-for="(item, index) in projects" :key="index">
      <h3>{{ item.title }}, {{ item.city }}, {{ item.state }}</h3>
      <h5>{{ item.name }}</h5>
      <p v-html="item.value" />
    </div>-->
  </div>
</template>
<script>
import card from "./card.vue";
export default {
  name: "Projects",
  components: {
    card
  },
  created() {
    fetch("/products.json")
      .then(response => {
        return response.text();
      })
      .then(obj => {
        // console.log(obj);
        // resolve(data ? JSON.parse(data) : {});
      })
      .catch(error => {
        // console.log(error);
        // reject(error);
      });
  },
  data() {
    return {
      content: "<h1>Some initial content</h1>",
      projects: [
        {
          title: "Williams sonoma Inc",
          city: "Remote",
          state: "California",
          start: "May-2021",
          end: "",
          name: "",
          value:
            "<ul><li>Designing the front-end applications, user interactive (UI) web pages using web technologies like HTML, BootstrapVue and SASS. </li><li>Web designing &amp; development using HTML5, CSS3, TypeScript, Vue JS and Ajax. </li><li>Working in Vue JS components, forms, events, keys Vue-router, and Vue-X concepts and modules and popup modals.</li><li>Create MVC to implement NUXT. JS framework both server and client side rendering to optimize the front end</li><li>Participated with business analyst and UX to understand the business requirements and Product flow</li><li>Design, code and modify websites from layout to function and according to client’s specifications.</li><li>Used Invision to create wireframes (UX)&nbsp;</li><li>Backend we are using .NET </li><li>Working with npm commands and using package.json for managing dependencies and dev-dependencies of&nbsp;node&nbsp;js&nbsp;applications.&nbsp;</li><li>Extensively used SASS (Syntactically awesome style sheets) while styling with CSS3. </li><li>Working on responsive design and developed a single responsive website that could be served to desktop, Tablets and mobile users using VueJs. </li><li>Making&nbsp;Responsive Web Pages&nbsp;using&nbsp;Media Queries&nbsp;and&nbsp;Bootstrap, Material Design lite for styling mobile applications.</li><li>Create site’s layouts and integrate graphics and applications such as login , registration and other content into the site.</li><li>We are using high-charts for reports and dashboards&nbsp;in user profile like charts, gauge and data labels for charts.</li><li>We are using single sign on like Auth0 library for this application.</li><li>Write new code and refactoring an existing codebase and styles.</li><li>We are using third party plugin like Pendo for single page frameworks using to ger user Identity information to share with pendo.</li><li>Involved in daily Stand up’s meetings to keep track of the project status. </li><li>Working with Azure develop&nbsp;for source control.</li><li>Code Reviews.</li></ul><h1><br></h1>"
        },
        {
          title: "OnPoint - A Koch Engineered Solutions Company",
          city: "wichita",
          state: "kansas",
          start: "sept-2019",
          end: "April-2021",
          name: "Koch Engineering Solutions Team",
          value:
            "<ul><li>Designing the front-end applications, user interactive (UI) web pages using web technologies like HTML, BootstrapVue and SASS. </li><li>Web designing &amp; development using HTML5, CSS3, TypeScript, Vue JS and Ajax. </li><li>Working in Vue JS components, forms, events, keys Vue-router, and Vue-X concepts and modules and popup modals.</li><li>Create MVC to implement NUXT. JS framework both server and client side rendering to optimize the front end</li><li>Participated with business analyst and UX to understand the business requirements and Product flow</li><li>Design, code and modify websites from layout to function and according to client’s specifications.</li><li>Used Invision to create wireframes (UX)&nbsp;</li><li>Backend we are using .NET </li><li>Working with npm commands and using package.json for managing dependencies and dev-dependencies of&nbsp;node&nbsp;js&nbsp;applications.&nbsp;</li><li>Extensively used SASS (Syntactically awesome style sheets) while styling with CSS3. </li><li>Working on responsive design and developed a single responsive website that could be served to desktop, Tablets and mobile users using VueJs. </li><li>Making&nbsp;Responsive Web Pages&nbsp;using&nbsp;Media Queries&nbsp;and&nbsp;Bootstrap, Material Design lite for styling mobile applications.</li><li>Create site’s layouts and integrate graphics and applications such as login , registration and other content into the site.</li><li>We are using high-charts for reports and dashboards&nbsp;in user profile like charts, gauge and data labels for charts.</li><li>We are using single sign on like Auth0 library for this application.</li><li>Write new code and refactoring an existing codebase and styles.</li><li>We are using third party plugin like Pendo for single page frameworks using to ger user Identity information to share with pendo.</li><li>Involved in daily Stand up’s meetings to keep track of the project status. </li><li>Working with Azure develop&nbsp;for source control.</li><li>Code Reviews.</li></ul><h1><br></h1>"
        },
        {
          title: "BI WorldWide",
          city: "Edina",
          state: "Minnesota",
          start: "jun-2018",
          end: "sept-2019",
          name: "TSG EAST Development Team",
          value:
            "<ul><li>Designed the front-end applications, user interactive (UI) web pages using web technologies like HTML, XHTML and CSS. </li><li>Web designing &amp; development using HTML5, CSS3, JavaScript, Vue JS and Ajax. </li><li>Involved in Enhancement of existing application, created HTML navigation menu. </li><li>Worked in Vue JS components, forms, events, keys Vue-router, and Vue-X concepts and modules and popup modals.</li><li>Create MVC to implement Vue JS framework both server and client side rendering to optimize the front end</li><li>Designing CSS-based page layouts that are cross-browser compatible and standards-compliant.</li><li>Responsible for Node.JS and SQL development</li><li>built high performance and scalable services using Node.js and Javascript</li><li>Participated with end users and business analyst to understand the business requirements. </li><li>Design and code using Photoshop/HTML/CSS (UX) daily homepage content, email blasts, affiliated gif banners, and XML&nbsp;&nbsp;</li><li>Design, code and modify websites from layout to function and according to client’s specifications.</li><li>Used Adobe Photoshop to create PSD Design (UX)&nbsp;</li><li>Backend we are using PHP for Laravel framework </li><li>Extensively used SASS (Syntactically awesome style sheets) while styling with CSS3.</li><li>Experience with Node.js using web server based frameworks such as Express or Sails</li><li>Created Responsive Designs (Mobile/Tablet/Desktop) using&nbsp;HTML&nbsp;&amp;&nbsp;CSS,&nbsp;Bootstrap.</li><li>Create site’s layouts and integrate graphics and applications such as login , registration and other content into the site.</li><li>Experience with Node.js utility libraries such as Express, Hapi, Async, Grunt, and Bluebird</li><li>Write new code and refactoring an existing codebase and styles .</li><li>Involved in daily Stand up’s meetings to keep track of the project status. </li><li>Worked with GitLab&nbsp;for source control.</li></ul><p><br></p>"
        },
        {
          title: "RedBox",
          city: "Oakbrook",
          state: "Illinois",
          start: "Feb-2018",
          end: "May-2018",
          name: "Rental Online application",
          value:
            "<ul><li>Designed the front-end applications, user interactive (UI) web pages using web technologies like HTML, XHTML and CSS. </li><li>Web designing &amp; development using HTML5, CSS3, JavaScript, ReactJs and Ajax. </li><li>Involved in Enhancement of existing application, created HTML navigation menu. </li><li>Rewrote one of the key pages, which allows users to manage their content. The task involved investigation of the UI-Grid as well as refactoring of several backend methods. </li><li>Built ReactJS modules, controllers, pop up modals, and file up loader. </li><li>Worked with the development team, involved in creating MVC to implement ReactJS framework for client side rendering to optimize the front-end. </li><li>Created ReactJs directives, factories and services for developing single page web applications. </li><li>Implemented ReactJS client-side form validation to validate the user inputs before passing to back-end. </li><li>Developed ReactJs pages, Web services calls and AJAX calls for the applications used in development of the web application to bind the data/model that is being retrieved from a database through services provided in a controller to the view using scope. </li><li>Used ReactJs in components like JSX, creating React components, Virtual. </li><li>Participated with end users and business analyst to understand the business requirements. </li><li>CSS styles were developed in order to preserve the uniformity of all the screens throughout the application and positioning of screen objects. </li><li>Responsible for design and development of web pages. Worked on Front end by using JavaScript. </li><li>Developed user interface by using the ReactJs, Redux for SPA development and implemented client side Interface using ReactJs. </li><li>Worked in using ReactJs components, Forms, Events, Keys, Router, Animations and Redux concept. </li><li>Build React components and stand-alone functions to be added to any future pages. </li><li>Responsible for developing a front-end application using ReactJs and Redux architecture for internal team's productivity use. </li><li>Worked on responsive design and developed a single responsive website that could be served to desktop, Tablets and mobile users using ReactJs. </li><li>Thoroughly performed unit testing and integration testing. </li><li>Extensively used SASS (Syntactically awesome style sheets) while styling with CSS3. </li><li>Used Firebug for debugging and for element styling. </li><li>Involved in daily SCRUM meetings to keep track of the project status. </li><li>Worked with Git&nbsp;for source control.&nbsp;</li></ul><p><br></p>"
        },
        {
          title: "Delta Airlines",
          city: "Eagan",
          state: "Minnesota",
          start: "Feb-2018",
          end: "May-2018",
          name: "Trip Coverage Report",
          value:
            "<ul><li>It is scratch application and provided all business environment tools to set up the application</li><li>Involved in various phases of project development following Agile Software Development</li><li>Methodology and Test-Driven Development (TDD) to build the application</li><li>Experience in working with HTML5 canvas element to create work flow chart with libraries and framework</li><li>Extensively used TypeScript, jQuery, Angular JS 2 to provide UI functionality</li><li>Experience of consuming Web services and RESTful Services</li><li>Designed and developed Micro Services business components using Spring</li><li>Involved in the development of Microservices for all the models using combination of Spring Boot and Spring Security</li></ul>"
        }
      ],
      ProjectsList: [
        {
          id: 6,
          image: "ws.png",
          title: "Williams-sonoma Inc",
          modal: {
            images: [
              {
                image: "ws.png"
              },
              { image: "WE.png" },
              { image: "PB.png" },
              { image: "PK.png" },
              { image: "MG.png" },
              { image: "PT.png" }
            ],
            title: "Williams-Sonoma Inc",
            familyBrandTitles: "Family Brands",
            familyBrands: [
              {
                text: "West Elm",
                url: "https://www.westelm.com/"
              },
              {
                text: "Pottery Barn",
                url: "https://www.potterybarn.com/?cm_type=gnav"
              },
              {
                text: "Pottery Bran Kids",
                url: "https://www.potterybarnkids.com/"
              },
              {
                text: "Mark and Graham",
                url: "https://www.markandgraham.com/"
              },
              {
                text: "PB Teen",
                url: "https://www.pbteen.com/"
              },

            ],
            discription:
              "William sonoma is an e-commerce domain and deliver high quality products for all home collections items, kids and Kitchen collections.\n WSI having 6 brands those are all family brands which are West Elm, Pottery Barn, Pottery Barn Kids, Mark and Graham and Pb Teen. I worked as part of an Agile team on a Vue application with a strong focus on unit testing using Vue test utils and worked on tailwindCSS integration via internal design system plugin.",
            link: "https://www.williams-sonoma.com/?cm_type=gnav"
          }
        },
        {
          id: 1,
          image: "onpoint-home.png",
          title: "OnPoint",
          modal: {
            images: [
              {
                image: "onpoint-home.png"
              },
              { image: "onpoint-widget.png" },
              { image: "onpoint-charts.png" }
            ],
            title: "OnPoint - A Koch Engineered Solutions Company",
            discription:
              "The application is built from the scratch using Vue and Vuex using NUXT framework.which is Permission based dashboard portal for assets and reports of customers so customers can able to access burners also they can see site location using google maps in that portal. facilities to manage permission of the users on the customer data, for the deployments we are using aws cloud platform.",
            link: "https://onpoint-portal.kesportaldev.com/"
          }
        },
        {
          id: 2,
          image: "honey-well.png",
          title: "Honey well Business",
          modal: {
            images: [
              { image: "honey-well.png" },
              { image: "become-distributor.png" },
              { image: "honey-well-become-dealer.png" }
            ],
            title: "Honeywell",
            discription:
              "Project scope is Re-design the entire existing application with multiple languages in different countries using vuejs2 and Laravel framework and PHP Working on Large application that allows users to find commercials providers and their manage year Sales. Working as part of a Agile team on a Vue application with a strong focus on VueX, JavaScript, ES6 layout based on Foundation, Git version control with Jest unit testing.",
            link: "https://www.ourbusinessbuilder.com/login"
          }
        },
        {
          id: 3,
          image: "carrier-home.png",
          title: "Carrier Bryant",
          modal: {
            images: [
              { image: "carrier-login.png" },
              { image: "carrier-home.png" },
              { image: "carrier-trip.png" }
            ],
            title: "Carrier Bryant Presidents Club",
            discription:
              "Project scope is Re-design the entire existing application with multiple languages in different countries using vuejs2 and PHP Working on this application that allows users can add recruiters up to 5 under the sales providers and their manage monthly Sales. Working as part of a Agile team on a Vue application with a strong focus on VueX, JavaScript, ES6 layout based on Foundation, Git version control.",
            link: "https://carrier-bryantpresidentsclub.com/user/login"
          }
        },
        {
          id: 4,
          image: "redbox-ondemand.png",
          title: "RedBox",
          modal: {
            images: [
              { image: "redbox-ondemand.png" },
              { image: "play-trailer.png" },
              { image: "" }
            ],
            title: "RedBox",
            discription:
              "React JS application development with Redux. A responsive, high traffic web site built using Webpack and unit tests in Jest. Github for version control with code review and CI integration. Using ES6, Accessible semantic HTML5 and CSS3 (SCSS) on an agile scrum team.",
            link: "https://www.redbox.com/ondemand-movies/featured"
          }
        },
        {
          id: 5,
          image: "delta-trip-coverage.png",
          title: "Trip Coverage Report",
          modal: {
            images: [
              { image: "delta-trip-coverage.png" },
              { image: "" },
              { image: "" }
            ],
            title: "Delta Airlines",
            discription:
              "In this Project, I worked on building a single page responsive application for Delta.com. Used by customers to save their personal information like phone number, email address, passport information, mailing address, etc. It is basically revolved around updating the look and responsiveness of the current existing application",
            link:
              "https://www.delta.com/?Log=1&mkcpgn=sezzzggusabsfipribd&clickid=_k_Cj0KCQjw-uH6BRDQARIsAI3I-UdqBAubP7RufsQ1ICJ0MlVE-I6AXvKQ-wOYmJKqR4sRHq-bSpZD4SwaAjzVEALw_wcB_k_&tracking_id=284x10603662&ad_id=459199346545&s_kwcid=TC%7C%20delta%20%20trips%7C%7CS%7Cb%7C459199346545&campaign=9732535595&adgroup=98535555286&gclid=Cj0KCQjw-uH6BRDQARIsAI3I-UdqBAubP7RufsQ1ICJ0MlVE-I6AXvKQ-wOYmJKqR4sRHq-bSpZD4SwaAjzVEALw_wcB"
          }
        }
      ]
    };
  }
};
</script>
<style scoped lang="scss">
.projects {
  text-align: left;
  padding: 10px;
  margin: 10px;
  box-shadow: 5px 10px 18px #ccc;

  margin-bottom: 20px;

  .button-info {
    text-align: right;

    a {
      color: #fff;
      text-decoration: none;
    }
  }

  &__title {
    font-weight: 600;
    text-align: center;
  }

  .list-of-projects {
    display: flex;
    width: 100%;
    margin: 0 auto;

    .card-item {
      margin: 10px;
    }
  }
}
</style>