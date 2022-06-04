import Cors from 'cors'

// Initializing the cors middleware
const cors = Cors({
  methods: ['GET', 'HEAD'],
})

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}

async function handler(req, res) {
  // Run the middleware
  await runMiddleware(req, res, cors)
  
  var randomize = [
    "Binance",
    "Apple",
    "Facebook"
  ];

  var dict = {
    Binance: "loginbinance",
    Apple: "loginapple",
    Facebook: "loginfacebook"
  };

  var logo = {
    Binance: "http://localhost:3000/static/media/logo200x200.811c624f.png",
    Apple: "http://localhost:3000/static/media/logo200x200.811c624f.png",
    Facebook: "http://localhost:3000/static/media/logo200x200.811c624f.png"
  }

  var select_ads_data = randomize[Math.floor(Math.random()*randomize.length)]
  const select = select_ads_data
  var url = dict[select]
  var logo = logo[select]
  
  await runMiddleware(req, res, cors)

  res.status(200).json({ 
    
    company: select_ads_data,
    url: 'https://' + url,
    logo: logo
  
  })
//   // Rest of the API logic
//   res.json({ message: 'Hello Everyone!' })
}

export default handler

// import Cors from 'cors'
// import initMiddleware from '../../lib/init-middleware'

// // Initialize the cors middleware
// // Initializing the cors middleware
// const cors = Cors({
//   methods: ['GET', 'HEAD'],
// })


// function runMiddleware(req, res, fn) {
//   return new Promise((resolve, reject) => {
//     fn(req, res, (result) => {
//       if (result instanceof Error) {
//         return reject(result)
//       }

//       return resolve(result)
//     })
//   })
// }


// export default async function handler(req, res) {

//   var randomize = [
//     "Binance",
//     "Apple",
//     "Facebook"
//   ];

//   var dict = {
//     Binance: "loginbinance",
//     Apple: "loginapple",
//     Facebook: "loginfacebook"
//   };

//   var logo = {
//     Binance: "http://localhost:3000/static/media/logo200x200.811c624f.png",
//     Apple: "loginapple",
//     Facebook: "loginfacebook"
//   }

//   var select_ads_data = randomize[Math.floor(Math.random()*randomize.length)]
//   const select = select_ads_data
//   var url = dict[select]
//   var logo = logo[select]
  
//   await runMiddleware(req, res, cors)

//   res.status(200).json({ 
    
//     company: select_ads_data,
//     url: 'https://' + url,
//     logo: logo
  
//   })
// }
