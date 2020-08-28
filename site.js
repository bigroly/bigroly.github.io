const uxWork =[
  {
    title: 'Concept Travel App',
    description: 'UX concept for a simplified travel app. This scenario runs through searching for and booking a flight, destination Hokkaido of course. &#128521',
    imgLink: 'img/ux-1-travelAppConcept.png',
    links:[
      {
        url: 'https://www.instagram.com/p/BykbpUPnarF/',
        faIcon: 'https://www.instagram.com/p/BykbpUPnarF/',
        text: 'View on Instagram'
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
        url: 'https://www.instagram.com/p/BzLHD9eHNNw/',
        faIcon: 'fa-instagram',
        text: 'View on Instagram',
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
}


const buildContent = function(contentArray){
  let domUpdate = ``;

  for(let article of contentArray){
    
    let linkDomHtml = '';
    for(let link of article.links){
      linkDomHtml += `<a class="btn btn-outline-secondary"
                          href="${link.url}" target="_blank">
                          <i class="fab ${link.faIcon}}"></i> ${link.text}
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