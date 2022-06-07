$(document).ready(function () {
  var brand = "Trips";
  var menu = `
    <li><a href="#home">HOME</a></li>
    <li><a href="#services">SERVICES</a></li>
    <li><a href="#contact">CONTACT</a></li>
    `;
  var content = `
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitaonsequat.</p>
    <button>Contact</button>
    `
    var title1 = "Lorem ipsum dolor sit amet, ort labore et dolore magna aliqua."
    var text1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    var services = [
        {
            id: 1,
            icon: "fa-solid fa-hotel",
            title: "Hotels",
            desc: "Lorem ipsum dolor sit ametLorem ipsum dolor sit amet"
        },
        {
            id: 2,
            icon: "fa-solid fa-map",
            title: "RoadMap",
            desc: "Lorem ipsum dolor sit ametLorem ipsum dolor sit amet"
        },
        {
            id: 3,
            icon: "fa-solid fa-plane-departure",
            title: "all Trips",
            desc: "Lorem ipsum dolor sit ametLorem ipsum dolor sit amet"
        }
    ]

    var Layout =`
  <div class="firstView" id="home">
  <div class="navbar">
  <h1>${brand}</h1>
   <ul>${menu}</ul>
   </div>
  <div class="content" >${content}</div>
  <div class="bg"></div>
  </div>
  <div class="services" id="services">
  <div class="titles">
  <p class= "title1">${title1}<h1>
  <p class="text1">${text1}</p>
  </div>
  <div class="cards">
  <div class="card">
  <i class="fa-solid fa-hotel"></i>
   <h3>${services[0].title}</h3>
   <p>${services[0].desc}</p>
  </div>
  <div class="card">
  <i class="fa-solid fa-map-location"></i>  
  <h3>${services[1].title}</h3>
   <p>${services[1].desc}</p>
  </div>
  <div class="card">
  <i class="fa-solid fa-plane-departure"></i>  
  <h3>${services[2].title}</h3>
   <p>${services[2].desc}</p>
  </div>
  </div>
  <div class="contact" id="contact">
  <div class="titles">
  <p class= "title1">Contact<h1>
  </div>
  <div class="cards">
  <div class="card">
  <i class="fa-solid fa-phone"></i>   
  <h3>Phone</h3>
   <p>+212600000000</p>
  </div>
  <div class="card">
  <i class="fa-solid fa-envelope"></i>  
  <h3>Email</h3>
   <p>conatact@mail.com</p>
  </div>
  <div class="card">
  <i class="fa-solid fa-location-crosshairs"></i>
  <h3>Location</h3>
  <p>agadir, moroco </p>
  </div>
  </div>
  </div>
  <footer>
  <p>2022 By Noureddine Bachikh</p>
  </footer>
  `
  $("body").prepend(Layout);

  $(".firstView").css({
    background:
      "url(https://res.cloudinary.com/dia3y316g/image/upload/v1654597664/GettyImages-165142598_izlq57.webp)",
    width: "100%",
    height: "100%",
    'background-attachment': "fixed",
    "background-size": "cover",
    position: "relative",
    "max-width": "1300px",
    margin: "auto",
  });
  $(".bg").css({
    position: "absolute",
    top: "0",
    buttom: "0",
    width: "100%",
    height: "100%",
    background: "rgb(0,0,0, 0.7)",
    "z-index": "0",
  });
  $("h1").css({
    margin: "20px",
    color: "white",
    "z-index": "1",
  });
  $("a").css({
    color: "white",
    "text-decoration": "none",
    "z-index": "9999",
  });
  $("ul").css({
    display: "flex",
    "flex-direction": "row",
    "z-index": "1",
  });
  $("li").css({
    "list-style-type": "none",
    margin: "20px",
  });
  $(".navbar").css({
    display: "flex",
    "flex-direction": "row",
    'flex-wrap': 'wrap',
    "justify-content": "space-between",
    padding: "10px",
  });
  $(".content").css({
    display: "flex",
    'flex-direction': 'column',
    'justify-content': 'center',
    'align-items': "flex-start",
    'max-width': "700px",
    height: '100vh',
    padding: "20px",
  });
  $("p:first-child()").css({
    "color": "white",
    'font-size': '50px',
    'font-weight': 'bold',
    margin: '10px 0',
    "z-index": "1",
  });
  $("p:nth-child(2)").css({
      color: 'white',
      'z-index': '1',
      margin: '10px 0',
  })
  $('button').css({
      background: 'blue',
      border: 'none',
      color: "white",
      padding: '15px 30px',
      margin: '10px 0',
      'z-index': '1',
      'font-size': '20px'
  })
  $('.services').css({
      padding: "50px 0"
  })
  $('.titles').css({
      padding:"50px 0"
  })
  $('.title1').css({
    'font-size': '25px',
    'text-align': 'center',
    'color': 'blue',
    'max-width': '1000px',
    'margin': '20px auto'
})
  $('.text1').css({
      'text-align': 'center',
      'color': 'grey',
      'font-size': '16px',
      'max-width': '900px',
      'margin': '20px auto',
      'font-weight': 'normal'
  })
  $('.cards').css({
      display: 'flex',
      'flex-direction': 'row',
      'flex-wrap': 'wrap',
      'justify-content': 'center',
      'text-align': 'center'
  })
  $('.card').css({
      border : '1px solid grey',
      'max-width': "300px",
      color: "black",
      padding: "20px",
      margin: "10px"
  })
  $('.card i').css({
      'font-size':"50px",
      'margin': "10px",
      color: 'blue'
  })
  $('.card h3').css({
      'font-size': "16px",
      "margin": "20px auto"

  })
  $('.card p').css({
      'font-size': '16px',
      'color': "grey",
      'font-weight': 'normal'
  })
  $('.contact').css({
      background: "blue",
      width: "100%",
      padding: "50px 0"
  })
  $('.contact .title1').css({
    'font-size': '25px',
    'text-align': 'center',
    'color': 'white',
    'padding': '20px auto'
})
  $('.contact .cards').css({
    display: 'flex',
    'flex-direction': 'row',
    'flex-wrap': 'wrap',
    'justify-content': 'center',
    'text-align': 'center',
})
$('.contact .card').css({
    border : '1px solid grey',
    'width': "300px",
    color: "white",
    padding: "20px",
    margin: "10px"
})
$('.contact .card i').css({
    'font-size':"50px",
    'margin': "10px",
    color: 'white'
})
$('.contact .card h3').css({
    'font-size': "16px",
    "margin": "20px auto",
    color: "white"

})
$('.contact .card p').css({
    'font-size': '16px',
    'color': "grey",
    'font-weight': 'normal',
    color: 'white'
})
$('footer').css({
    background: "white",
    color: "black",

})
$('footer p').css({
    'text-align': "center",
     color : 'black',
    'font-size': "14px",
    'font-weight': 'normal'
})
  var x = window.matchMedia('(max-width: 900px)')
  if(x.matches){
        $('.navbar').css({
            "justify-content": "center",
            padding: "10px",
          })
          $("li").css({
            "list-style-type": "none",
            margin: "7px",
          });
      }
});
