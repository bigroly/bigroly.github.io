const devWork = [
  {
    title: 'RolyApps Authentication Service Template',
    description: `Almost anything you want to build requires authentication of some sort, so why not centralise it for easy reusability moving forward.
                  I'm hoping to tinker with other new frameworks and technologies in the future by creating simple applications to get experience with them, the first step
                  was to get a fairly lightweight authentication service up to support this, which is where this project comes in. Check out the Readme in repo for more details!`,
    imgLink: 'img/dev-6-auth.png',
    links: [
      {
        url: 'https://github.com/bigroly/roly-auth-backend',
        faIcon: 'fab fa-github',
        text: 'View on Github',
      },
      {
        url: 'https://auth.rolyapps.com/login',
        faIcon: 'fas fa-globe',
        text: 'Try the App',
      }
    ],
    badges: [
      {
        type: 'badge-info',
        text: 'C# (.Net)'
      },
      {
        type: 'badge-warning',
        text: 'AWS Cognito'
      },
      {
        type: 'badge-warning',
        text: 'Lambda'
      },
      {
        type: 'badge-warning',
        text: 'API Gateway'
      }
    ]
  },
  {
    title: 'NgRx Demo',
    description: `Had never tried any formal app-level state management for Angular before so I thought I would give NgRx a try. 
                  This a basic implementation to pull user info from a mock endpoint. Will look to update and point it towards Firebase for something in the future.`,
    imgLink: 'img/dev-5-ngrx.PNG',
    links: [
      {
        url: 'https://github.com/bigroly/ngrx-demo',
        faIcon: 'fab fa-github',
        text: 'View on Github',
      }
    ],
    badges: [
      {
        type: 'badge-danger',
        text: 'Angular'
      },
      {
        type: 'badge-info',
        text: 'NgRx'
      }
    ]
  },
  {
    title: 'Vue State',
    description: `First attempt at a Vue app integrating application level state management using
                  VueX.This builds on the previous app I created, again using the super simple
                  use-case of a
                  To-do list, but this time adding Vuex to manage component state at an app level
                  supporting CRUD functionality,
                  rather than passing props up and down the component chain.`,
    imgLink: 'img/dev-1-vuestate.png',
    links: [
      {
        url: 'https://github.com/bigroly/vue-state',
        faIcon: 'fab fa-github',
        text: 'View on Github',
      }
    ],
    badges: [
      {
        type: 'badge-success',
        text: 'VueJS'
      },
      {
        type: 'badge-info',
        text: 'Vue CLI'
      },
      {
        type: 'badge-info',
        text: 'VueX'
      }
    ]
  },
  {
    title: 'Between The Ears',
    description: `University project where we built a system for BTE - a sports psychology practice in Melbourne.
                  This project was built using CakePHP <sup>pls don't judge me, we were forced to do PHP :'( </sup> and included:
                  <ul class="">
                    <li>Customer self-serve appointment booking and invoice generation</li>
                    <li>Configurable online store, linked to Paypal for payments.</li>
                    <li>Public facing website driven by a CMS.</li>
                    <li>Blog post and subscription functionality.</li>
                  </ul>`,
    imgLink: 'img/dev-4-bte.PNG',
    links: [
      {
        url: 'https://www.betweentheears.com.au/home',
        faIcon: 'fas fa-external-link-alt',
        text: 'View Website',
      }
    ],
    badges: [
      {
        type: 'badge-info',
        text: 'PHP'
      }
    ]
  }
]

const uxWork =[
  {
    title: 'Concept Travel App',
    description: 'UX concept for a simplified travel app. This scenario runs through searching for and booking a flight, destination Hokkaido of course. &#128521',
    imgLink: 'img/ux-1-travelAppConcept.png',
    links:[
      {
        url: 'https://imgur.com/XhpNmc9',
        faIcon: 'fab fa-youtube',
        text: 'View Demo Video'
      }
    ],
    badges: [
      {
        type: 'badge-info',
        text: 'UX'
      },
      {
        type: 'badge-info',
        text: 'UI'
      },
      {
        type: 'badge-info',
        text: 'Adobe XD'
      }
    ]
  },
  {
    title: 'Smart Home Control Centre Concept',
    description: 'Envisaging how a smart home control centre of the future might look and feel and how to keep segregation of controls logical but simple.',
    imgLink: 'img/ux-2-IOTControlConcept.png',
    links: [
      {
        url: 'https://imgur.com/a/LML8gC6',
        faIcon: 'fab fa-youtube',
        text: 'View Demo Video',
      }
    ],
    badges: [
      {
        type: 'badge-info',
        text: 'UX'
      },
      {
        type: 'badge-info',
        text: 'UI'
      },
      {
        type: 'badge-info',
        text: 'Adobe XD'
      }
    ]
  }
]

// {
//   title: '',
//   description: '',
//   imgLink: '',
//   links: [
//     {
//       url: '',
//       faIcon: '',
//       text: '',
//     }
//   ],
//   badges: [
//     {
//       type: '',
//       text: ''
//     }
//   ]
// }

window.onload = function(){
  renderContent();
}

const renderContent = function(){ 
  document.getElementById('uiUxContent').innerHTML = buildContent(uxWork);
  document.getElementById('devContent').innerHTML = buildContent(devWork);
}


const buildContent = function(contentArray){
  let domUpdate = ``;

  for(let article of contentArray){
    
    let linkDomHtml = '';
    for(let link of article.links){
      linkDomHtml += `<a class="btn btn-outline-secondary mx-2"
                          href="${link.url}" target="_blank">
                          <i class="${link.faIcon}"></i> ${link.text}
                      </a>`;
    }

    let badgeDomHtml = '';
    for(let badge of article.badges){
      badgeDomHtml += `<span class="badge badge-pill ${badge.type}">${badge.text}</span>`;
    }
    
    
    domUpdate += 
    `
    <div class="col-12 mb-3">
                <div class="card">
                    <div class="card">
                        <div class="row">
                            <div class="col-12 col-sm-4">
                                <img class="img-fluid" src="${article.imgLink}" />
                            </div>
                            <div class="col-12 col-sm-8 pb-3">
                                <div class="row">
                                    <div class="col-12">
                                        <h3 class="mt-2 p-2 p-sm-1">${article.title}</h3>
                                        <p class="p-2 p-sm-1">
                                            ${article.description}
                                        </p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-12 m-2 m-sm-1">
                                        ${linkDomHtml}
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-12 m-2 m-sm-1 mt-sm-3">
                                        ${badgeDomHtml}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    `;
  }

  return domUpdate;

}