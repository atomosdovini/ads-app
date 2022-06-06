import Cors from 'cors'
import Apple from './assets/apple.png'
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
    "Facebook",
    "Ecoexchange"
  ];

  var dict = {
    Binance: "https://www.binance.com/",
    Apple: "https://www.apple.com/",
    Facebook: "https://www.facebook.com/",
    Ecoexchange: "https://ecoexchange.tech/"
  };

  var logo = {
    Binance:"https://raw.githubusercontent.com/atomosdovini/ads-app/main/pages/api/assets/binance.png",
    Apple: "https://raw.githubusercontent.com/atomosdovini/ads-app/main/pages/api/assets/apple.png",
    Facebook: "https://raw.githubusercontent.com/atomosdovini/ads-app/main/pages/api/assets/facebook.png",
    Ecoexchange: "https://raw.githubusercontent.com/atomosdovini/ads-app/main/pages/api/assets/ecoexchange.png"
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

}

export default handler
