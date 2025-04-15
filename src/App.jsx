import React, { useState } from "react";

const products = [
  {
    name: "Huggies and Pampers (Disposable Nappies & Baby Wipes) 🇺🇸",
    description: "Owned by Kimberly-Clark (US) and Proctor and Gamble (US), companies linked to deforestation, plastic pollution, and aggressive market control.",
    alternatives: [
      "Ecoriginals (Australia) – Compostable, eco-friendly nappies.",
      "Mamia (Germany) - at Aldi are half the price of Huggies or Pampers.",
      "BabyLove (Japan) – at Woolies and Coles.",
      "Rascal + Friends (New Zealand) – Affordable & better for the environment."
    ]
  },
  {
    name: "Coca-Cola (Coke, Sprite, Fanta, Powerade, Mount Franklin, Pump)",
    description: "Coca-Cola is notorious for its environmental impact, water exploitation, and links to anti-union activities.",
    alternatives: [
      "Bickford’s (Australia)",
      "Bundaberg Brewed Drinks (Australia)",
      "Naked Life for soft drinks",
      "Tap water instead of bottled water"
    ]
  },
  {
    name: "Pepsi (Pepsi, Mountain Dew, Gatorade, Lipton Iced Tea, Doritos, Smith’s Chips, Twisties)",
    description: "PepsiCo is a major contributor to plastic pollution and is also notorious for poor labour practices.",
    alternatives: [
      "Nippy’s Iced Tea (Australia)",
      "Australian Kombuchas",
      "Strangelove Soda (Australia)",
      "Red Rock Deli Chips (Australia)"
    ]
  },
  {
    name: "Heinz (Ketchup, Beanz, Golden Circle, Wattie’s, Big Red Soup)",
    description: "Heinz has been criticised for factory closures, offshore production, and price-gouging.",
    alternatives: [
      "Rosella (Australia)",
      "Beerenberg (Australia)",
      "Mutti (Italy) for tomatoes and sauces"
    ]
  },
  {
    name: "Kellogg’s (Corn Flakes, Nutri-Grain, Coco Pops, Froot Loops, Special K, Pringles)",
    description: "Kellogg’s has moved production offshore, axing Aussie jobs. It is also involved in anti-union activity.",
    alternatives: [
      "Carman’s (Australia)",
      "Uncle Tobys (Swiss-owned but Australian-produced)"
    ]
  },
  {
    name: "Campbell’s Soup (Chunky, V8 Juice, Arnott’s [formerly Aussie-owned])",
    description: "Campbell’s now owns Arnott’s, a former Australian company, and lobbies against food regulations.",
    alternatives: [
      "Massel (Australia) for stock",
      "Beerenberg (Australia) for sauces",
      "Homemade soup brands at farmers’ markets"
    ]
  },
  {
    name: "Oreo (Nabisco, Ritz Crackers, Chips Ahoy!)",
    description: "Oreo’s parent company Mondelez has a history of deforestation and unsustainable palm oil use.",
    alternatives: [
      "Bake your own",
      "Kooka’s Country Cookies (Australia)",
      "Vittoria biscuits (Italy)",
      "Nice & Natural (New Zealand)"
    ]
  },
  {
    name: "Mars (M&Ms, Snickers, Milky Way, Maltesers, Skittles, Extra Gum)",
    description: "Mars has been linked to child labour issues in the cocoa industry.",
    alternatives: [
      "Loving Earth (Australia)",
      "Tony’s Chocolonely (Netherlands)",
      "Whittaker’s (New Zealand)"
    ]
  },
  {
    name: "Hershey’s (Reese’s, Hershey’s Bars, Jolly Ranchers)",
    description: "Hershey’s has been involved in human rights controversies in cocoa sourcing.",
    alternatives: [
      "Haigh’s Chocolate (Australia)",
      "Whittaker’s (New Zealand)",
      "Lindt (Switzerland)"
    ]
  },
  {
    name: "McCormick (Aeroplane Jelly, Herbs & Spices, Keen’s Mustard)",
    description: "McCormick dominates the spice industry and has been accused of unsustainable sourcing.",
    alternatives: [
      "Herbie’s Spices (Australia)",
      "Gewürzhaus (Australia)",
      "Madame Flavour for tea"
    ]
  },
  {
    name: "Quaker Oats (Chewy Bars, Oats, Porridge)",
    description: "Quaker is owned by PepsiCo and profits go back to the US.",
    alternatives: [
      "Carman’s Oats (Australia)",
      "Red Tractor (Australia)",
      "Woolies/Aldi/Coles own brands (just check they're Australian made)"
    ]
  },
  {
    name: "Nestlé USA (KitKat, Nescafé, Milo, Allen’s Lollies, Maggi, Purina Pet Food)",
    description: "Nestlé has a long history of unethical water usage and aggressive marketing of infant formula in developing countries.",
    alternatives: [
      "Haigh’s Chocolate (Australia)",
      "Hummingbird Coffee (New Zealand)",
      "Bellamy’s Organic (Australia) for baby food"
    ]
  },
  {
    name: "Old El Paso (Mexican Food, Tacos, Wraps, Refried Beans)",
    description: "Owned by General Mills which is one of the world's largest processed food manufacturers.",
    alternatives: [
      "La Tortilleria (Australia)",
      "Doña Cholita (Mexico/Australia)",
      "Casa Fiesta (Mexico)"
    ]
  },
  {
    name: "Listerine (Johnson & Johnson, Oral Care, Band-Aid, Neutrogena)",
    description: "Johnson & Johnson has faced multiple lawsuits over health concerns and environmental damage.",
    alternatives: [
      "Grants of Australia (natural toothpaste)",
      "Jack N’ Jill (Australia)",
      "Red Seal (New Zealand)"
    ]
  },
  {
    name: "Colgate (Colgate-Palmolive, Sanex, Palmolive Soaps)",
    description: "Colgate has been linked to microplastics pollution and unethical supply chains.",
    alternatives: [
      "Grants of Australia",
      "Red Seal",
      "Dr. Bronner’s (US but ethical)"
    ]
  },
  {
    name: "Gillette (Razors, Shaving Creams, Venus Razors)",
    description: "Gillette (Procter & Gamble) has been criticised for price-gouging and excessive plastic waste.",
    alternatives: [
      "Safety Razors by Leaf (Canada)",
      "Straand (Australia)"
    ]
  },
  {
    name: "Pantene (Shampoo, Conditioner, Hair Treatments)",
    description: "Procter & Gamble brands contribute to deforestation and excessive plastic waste.",
    alternatives: [
      "Ethique (New Zealand)",
      "EverEscents (Australia)",
      "Aussie Hair"
    ]
  },
  {
    name: "Ben & Jerry’s (Ice Cream, Frozen Desserts)",
    description: "While Ben & Jerry’s has progressive values, it is still owned by Unilever, a massive multinational that prioritises profits over ethics.",
    alternatives: [
      "Messina (Australia)",
      "Pana Organic (Australia)",
      "Denada (Australia)"
    ]
  },
  {
    name: "Orville Redenbacher’s (Microwave Popcorn, Conagra Brands)",
    description: "Heavily processed and linked to excessive use of artificial additives.",
    alternatives: [
      "Pop your own corn",
      "The Popcorn Company (Australia)",
      "Cobs (Australian)"
    ]
  },
  {
    name: "Hunt’s (Canned Tomatoes, Tomato Sauce, Pasta Sauce)",
    description: "Hunt’s, owned by Conagra, supports industrial farming that contributes to environmental degradation.",
    alternatives: [
      "Mutti (Italy)",
      "Annalisa (Italy)",
      "Sandhurst (Australia)"
    ]
  },
  {
    name: "Walmart Products (Equate, Great Value, Home Brand US Imports)",
    description: "Walmart has a long history of underpaying workers and driving small businesses into bankruptcy.",
    alternatives: [
      "Aldi",
      "Coles Local",
      "Harris Farm Markets"
    ]
  },
  {
    name: "Tabasco (Hot Sauce & Condiments) 🇺🇸",
    description: "Tabasco is owned by McIlhenny Company, an American firm which lobbies to promote US farming subsidieswhile undercutting global competitors.",
    alternatives: [
      "Bunsters Hot Sauce (Australia) – Locally made, natural ingredients.",
      "Cobra Chilli (Australia) – Award-winning artisan hot sauces.",
      "Cholula (Mexico) – Traditional Mexican-style hot sauce (my favourite)."
    ]
  },
  {
    name: "Monster Energy & Rockstar (Energy Drinks) 🇺🇸",
    description: "Monster and Rockstar are owned by PepsiCo and Coca-Cola, two of the biggest contributors to plastic pollution and health concerns worldwide.",
    alternatives: [
      "Strangelove Energy (Australia) – Natural energy drinks with less sugar.",
      "V Green (New Zealand) – Healthier energy alternative.",
      "Red Bull (Austrian).",
      "Remedy Kombucha (Australia) – Natural energy boost from green tea."
    ]
  },
  {
    name: "Doritos (Chips & Snacks) 🇺🇸",
    description: "Owned by PepsiCo, Doritos contains highly processed ingredients, palm oil, and artificial additives.",
    alternatives: [
      "Red Rock Deli (Australia) – More natural, locally made.",
      "Sakata (Japan/Australia) – Rice-based, healthier alternative."
    ]
  },
  {
    name: "Aeroplane Jelly & Cool Whip 🇺🇸",
    description: "Highly processed, full of artificial chemicals, and owned by Kraft Heinz.",
    alternatives: [
      "Queen Natural Gelatin (Australia) – Natural ingredients.",
      "Pure Harvest (Australia) – Natural dairy alternatives.",
      "Make real whipped cream! (Fresh cream with vanilla beats Cool Whip every time!)"
    ]
  },
  {
    name: "Betty Crocker (Cake Mixes, Frosting, Baking Goods) 🇺🇸",
    description: "Owned by General Mills, Betty Crocker uses artificial additives, excessive sugar, and cheap processed ingredients.",
    alternatives: [
      "Greens Baking (Australia) – Aussie-made, better quality.",
      "Well & Good (Australia) – Gluten-free, allergen-friendly.",
      "Use a recipe and bake from scratch with real flour!"
    ]
  },
  {
    name: "Philadelphia Cream Cheese & Kraft Singles (Processed Cheese) 🇺🇸",
    description: "Kraft and Philadelphia (owned by Kraft Heinz) contain additives, artificial flavours, and excessive sodium.",
    alternatives: [
      "Bega Cream Cheese (Australia) – Aussie-owned and made.",
      "Aldi Cream Cheese (Australia) – High-quality and made in Oz.",
      "Any fresh Australian cheddar instead of Kraft Singles!"
    ]
  },
  {
    name: "Twinkies & Hostess Cakes (Packaged Desserts) 🇺🇸",
    description: "Loaded with preservatives, trans fats, and excessive sugar. These cakes have a half-life longer than uranium! 🤢",
    alternatives: [
      "Kooka’s Country Cookies (Australia) – Classic Aussie sweets.",
      "Balfours (Australia) – Fresh, traditional bakery items.",
      "Homemade muffins or lamingtons – Tastes better, no chemicals!",
      "A piece of fruit."
    ]
  },
  {
    name: "Hidden Valley Ranch & Kraft Salad Dressings 🇺🇸",
    description: "Packed with MSG, artificial thickeners, and preservatives, these US dressings are overpriced junk.",
    alternatives: [
      "Pukara Estate (Australia) – High-quality, natural dressings.",
      "Doodles Creek (Australia) – Fresh, small-batch sauces.",
      "Just make your own! I use olive oil and Aldi balsamic vinegar!"
    ]
  },
  {
    name: "Gatorade (Sports Drinks) 🇺🇸",
    description: "Owned by PepsiCo (US) and packed with artificial colours, sugar and unnecessary additives.",
    alternatives: [
      "Aqualyte (Australia) – Developed by sports scientists for proper hydration.",
      "PURE Sports Nutrition (New Zealand) – No artificial colours or preservatives.",
      "Hydralyte (Australia) – A healthier electrolyte option with lower sugar.",
      "Tap water is the best natural hydration without the junk or cost!"
    ]
  }
];


function App() {
  const [showAbout, setShowAbout] = useState(false);
  return (
    <>
      {/* Top Navigation Bar */}
      <nav className="topnav">
        <div className="nav-left">Ethical Aisles</div>
        <div className="nav-spacer" />
        <button className="nav-about" onClick={() => setShowAbout(true)}>
          About
        </button>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content" style={{width: '100%'}}>
          <h1 className="hero-title">Look beyond labels</h1>
          <p className="hero-desc">This isn’t a boycott—it’s a buy-better movement. Learn which American supermarket products to avoid and discover high-quality local options instead.</p>
        </div>
      </section>

      {/* Main Grid Section */}
      <main className="main-grid" id="products">
        {products.map((product, idx) => (
          <section className="tile tile-product" key={product.name}>
            <h2 className="brand-title">{product.name}</h2>
            <p className="brand-desc">{product.description}</p>
            <ul className="alt-list">
              {product.alternatives.map((alt) => (
                <li className="alt-item" key={alt}>{alt}</li>
              ))}
            </ul>
          </section>
        ))}
        <div className="tile tile-fact">
          <div className="tile-fact-title">Did you know?</div>
          <p>Many supermarket brands are owned by just a handful of multinational companies. Your choices matter!</p>
        </div>
      </main>

      <footer className="footer">
        <span className="footer-left">Flip the aisle. Choose better.</span>
        <a href="#top" className="footer-right">Back to top ↑</a>
      </footer>

      {/* About Modal */}
      {showAbout && (
        <div className="modal-overlay" onClick={() => setShowAbout(false)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowAbout(false)}>&times;</button>
            <h2>Our Manifesto</h2>
            <p><strong>We believe that every purchase is a choice—and a voice.</strong><br/>
            A voice for local jobs. For ethical sourcing. For a cleaner planet.<br/>
            Too many supermarket shelves are stacked with brands that pollute, exploit, and profit without conscience.</p>
            <p><strong>We say: enough.</strong><br/>
            We choose transparency over trickery.<br/>
            We choose small over sprawling.<br/>
            We choose Australian-made, fair, and sustainable over multinational convenience.</p>
            <p><strong>This isn’t about guilt.<br/>It’s about empowerment.</strong><br/>
            Swap the brand. Keep the product. Make the impact.</p>
            <p><strong>Vote with your cart. Shop with heart.</strong></p>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
