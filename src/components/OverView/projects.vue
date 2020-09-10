<template>
  <div class="projects">
    <!-- <vue-editor v-model="content"></vue-editor> -->
    <div class="button-info">
      <button class="btn btn-info fade-in">
        <a href="https://docs.google.com/document/d/1u-fsQlWF0vEGIpmHJZEQCp9Wrf9TgWzvzJ7MSMN1D2o/export?format=pdf" target="_blank" download>
          DownLoad Resume
        </a>
      </button>

    </div>
    <div class="list-of-projects row container">
      <div class="card-item" v-for="(item, i) in ProjectsList" :key="`${i}-${item.id}`">
        <card :item="item"/>      
      </div>
    </div>
    <!-- <div v-for="(item, index) in projects" :key="index">
      <h3>{{ item.title }}, {{ item.city }}, {{ item.state }}</h3>
      <h5>{{ item.name }}</h5>
      <p v-html="item.value" />
    </div> -->
         
  </div>
</template>
<script>
import card from './card.vue';
export default {
    name: 'Projects',
    components: {
      card
    },
    data() {
      return {
        content: "<h1>Some initial content</h1>",
         projects: [
             {
                 title: "OnPoint - A Koch Engineered Solutions Company",
                 city: 'wichita',
                 state: 'kansas',
                 start: "sept-2019",
                 end: "",
                 name: "Koch Engineering Solutions Team",
                 value:"<ul><li>Designing the front-end applications, user interactive (UI) web pages using web technologies like HTML, BootstrapVue and SASS. </li><li>Web designing &amp; development using HTML5, CSS3, TypeScript, Vue JS and Ajax. </li><li>Working in Vue JS components, forms, events, keys Vue-router, and Vue-X concepts and modules and popup modals.</li><li>Create MVC to implement NUXT. JS framework both server and client side rendering to optimize the front end</li><li>Participated with business analyst and UX to understand the business requirements and Product flow</li><li>Design, code and modify websites from layout to function and according to client’s specifications.</li><li>Used Invision to create wireframes (UX)&nbsp;</li><li>Backend we are using .NET </li><li>Working with npm commands and using package.json for managing dependencies and dev-dependencies of&nbsp;node&nbsp;js&nbsp;applications.&nbsp;</li><li>Extensively used SASS (Syntactically awesome style sheets) while styling with CSS3. </li><li>Working on responsive design and developed a single responsive website that could be served to desktop, Tablets and mobile users using VueJs. </li><li>Making&nbsp;Responsive Web Pages&nbsp;using&nbsp;Media Queries&nbsp;and&nbsp;Bootstrap, Material Design lite for styling mobile applications.</li><li>Create site’s layouts and integrate graphics and applications such as login , registration and other content into the site.</li><li>We are using high-charts for reports and dashboards&nbsp;in user profile like charts, gauge and data labels for charts.</li><li>We are using single sign on like Auth0 library for this application.</li><li>Write new code and refactoring an existing codebase and styles.</li><li>We are using third party plugin like Pendo for single page frameworks using to ger user Identity information to share with pendo.</li><li>Involved in daily Stand up’s meetings to keep track of the project status. </li><li>Working with Azure develop&nbsp;for source control.</li><li>Code Reviews.</li></ul><h1><br></h1>"

             },
             {
                 title: "BI WorldWide",
                 city: 'Edina',
                 state: 'Minnesota',
                 start: 'jun-2018',
                 end: 'sept-2019',
                 name: 'TSG EAST Development Team',
                 value:"<ul><li>Designed the front-end applications, user interactive (UI) web pages using web technologies like HTML, XHTML and CSS. </li><li>Web designing &amp; development using HTML5, CSS3, JavaScript, Vue JS and Ajax. </li><li>Involved in Enhancement of existing application, created HTML navigation menu. </li><li>Worked in Vue JS components, forms, events, keys Vue-router, and Vue-X concepts and modules and popup modals.</li><li>Create MVC to implement Vue JS framework both server and client side rendering to optimize the front end</li><li>Designing CSS-based page layouts that are cross-browser compatible and standards-compliant.</li><li>Responsible for Node.JS and SQL development</li><li>built high performance and scalable services using Node.js and Javascript</li><li>Participated with end users and business analyst to understand the business requirements. </li><li>Design and code using Photoshop/HTML/CSS (UX) daily homepage content, email blasts, affiliated gif banners, and XML&nbsp;&nbsp;</li><li>Design, code and modify websites from layout to function and according to client’s specifications.</li><li>Used Adobe Photoshop to create PSD Design (UX)&nbsp;</li><li>Backend we are using PHP for Laravel framework </li><li>Extensively used SASS (Syntactically awesome style sheets) while styling with CSS3.</li><li>Experience with Node.js using web server based frameworks such as Express or Sails</li><li>Created Responsive Designs (Mobile/Tablet/Desktop) using&nbsp;HTML&nbsp;&amp;&nbsp;CSS,&nbsp;Bootstrap.</li><li>Create site’s layouts and integrate graphics and applications such as login , registration and other content into the site.</li><li>Experience with Node.js utility libraries such as Express, Hapi, Async, Grunt, and Bluebird</li><li>Write new code and refactoring an existing codebase and styles .</li><li>Involved in daily Stand up’s meetings to keep track of the project status. </li><li>Worked with GitLab&nbsp;for source control.</li></ul><p><br></p>"
             },
             {
                 title: "RedBox",
                 city: 'Oakbrook',
                 state: 'Illinois',
                 start: 'Feb-2018',
                 end: 'May-2018',
                 name: 'Rental Online application',
                 value:"<ul><li>Designed the front-end applications, user interactive (UI) web pages using web technologies like HTML, XHTML and CSS. </li><li>Web designing &amp; development using HTML5, CSS3, JavaScript, ReactJs and Ajax. </li><li>Involved in Enhancement of existing application, created HTML navigation menu. </li><li>Rewrote one of the key pages, which allows users to manage their content. The task involved investigation of the UI-Grid as well as refactoring of several backend methods. </li><li>Built ReactJS modules, controllers, pop up modals, and file up loader. </li><li>Worked with the development team, involved in creating MVC to implement ReactJS framework for client side rendering to optimize the front-end. </li><li>Created ReactJs directives, factories and services for developing single page web applications. </li><li>Implemented ReactJS client-side form validation to validate the user inputs before passing to back-end. </li><li>Developed ReactJs pages, Web services calls and AJAX calls for the applications used in development of the web application to bind the data/model that is being retrieved from a database through services provided in a controller to the view using scope. </li><li>Used ReactJs in components like JSX, creating React components, Virtual. </li><li>Participated with end users and business analyst to understand the business requirements. </li><li>CSS styles were developed in order to preserve the uniformity of all the screens throughout the application and positioning of screen objects. </li><li>Responsible for design and development of web pages. Worked on Front end by using JavaScript. </li><li>Developed user interface by using the ReactJs, Redux for SPA development and implemented client side Interface using ReactJs. </li><li>Worked in using ReactJs components, Forms, Events, Keys, Router, Animations and Redux concept. </li><li>Build React components and stand-alone functions to be added to any future pages. </li><li>Responsible for developing a front-end application using ReactJs and Redux architecture for internal team's productivity use. </li><li>Worked on responsive design and developed a single responsive website that could be served to desktop, Tablets and mobile users using ReactJs. </li><li>Thoroughly performed unit testing and integration testing. </li><li>Extensively used SASS (Syntactically awesome style sheets) while styling with CSS3. </li><li>Used Firebug for debugging and for element styling. </li><li>Involved in daily SCRUM meetings to keep track of the project status. </li><li>Worked with Git&nbsp;for source control.&nbsp;</li></ul><p><br></p>"

             },
             {
                 title: "Delta Airlines",
                 city: 'Eagan',
                 state: 'Minnesota',
                 start: 'Feb-2018',
                 end: 'May-2018',
                 name: 'Trip Coverage Report',
                 value:"<ul><li>It is scratch application and provided all business environment tools to set up the application</li><li>Involved in various phases of project development following Agile Software Development</li><li>Methodology and Test-Driven Development (TDD) to build the application</li><li>Experience in working with HTML5 canvas element to create work flow chart with libraries and framework</li><li>Extensively used TypeScript, jQuery, Angular JS 2 to provide UI functionality</li><li>Experience of consuming Web services and RESTful Services</li><li>Designed and developed Micro Services business components using Spring</li><li>Involved in the development of Microservices for all the models using combination of Spring Boot and Spring Security</li></ul>"

             }
         ],
         ProjectsList:[
           {
             id:1,
             image: 'onpoint-home.png',
             title: 'OnPoint'
           },
           {
             id:2,
             image: 'honey-well.png',
             title: 'Honey well Business'
           },
           {
             id:3,
             image: 'carrier-home.png',
             title: 'Carrier Bryant'
           },
           {
             id:4,
             image: 'redbox-ondemand.png',
             title: 'RedBox'
           },
           {
             id:5,
             image: 'delta-trip-coverage.png',
             title: 'Trip Coverage Report'
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
    .button-info {
      text-align: right;
      a {
        color: #fff;
        text-decoration: none;
      }
    }
    .list-of-projects{
      display: flex;
      width: 100%;
      .card-item{
       margin: 10px;
      }

    }
}

</style>