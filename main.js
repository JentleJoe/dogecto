// RESUGING LOGIC
const textConfig = {
    coinName: "BigBalls",
    coinTitle: "BIGBALLS",
    contract: 'AyYcBvCHijBAEdQRBh6JtjPL7dihDASSP4dDq3HYpump',
    supply: '1,000,000,000',
    disclaimer: `$BIGBALLS is an independent cryptocurrency and is not affiliated with or endorsed by Elon Musk, Donald Trump, or any associated entities, brands, or intellectual properties. This token is purely for entertainment and meme culture and should not be considered financial advice. As with all cryptocurrencies, $BIGBALLS carries risks, and potential investors should conduct independent research and seek professional advice before making any financial decisions.`,
  };
  const srcConfig = {
    chartImageSrc: "https://dexscreener.com/solana/5nd76rgeuezfacqkqugswcstx6dqefndnrcr1bemeu5j?embed=1",
  };
  const siteLinks = {
    'dexscreener': 'https://dexscreener.com/solana/5nd76rgeuezfacqkqugswcstx6dqefndnrcr1bemeu5j',
    'twitter': 'https://x.com/Bigballs_coin',
    'telegram': 'https://t.me/Bigballs_coin',
    'coinmarketcap': 'https://dexscreener.com/solana/5nd76rgeuezfacqkqugswcstx6dqefndnrcr1bemeu5j',
  };
  
  function updateDynamicText(data) {
  
    // Update elements by class name
    document.querySelectorAll('.dynamic-text').forEach(element => {
      const key = element.textContent.match(/\{\{(.*?)\}\}/)?.[1]; // Extract key from {{key}}
      if (key && data[key]) {
        console.log(data[key])
        element.textContent = element.textContent.replace(`{{${key}}}`, data[key]);
      }
    });
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    updateDynamicText(textConfig);
  });
  
  function updateSrc() {
    document.getElementById("chart-embed").src = srcConfig.chartImageSrc;
  }
  
  document.addEventListener("DOMContentLoaded", updateSrc);


// Update Links
function updateLinks() {

  const linkElements = document.querySelectorAll('[data-link-id]');
  
  linkElements.forEach(element => {
      const linkId = element.getAttribute('data-link-id');
      if (siteLinks[linkId]) {
          element.href = siteLinks[linkId];
      } else {
          console.warn(`No URL defined for link-id: ${linkId}`);
      }
  });
}

document.addEventListener('DOMContentLoaded', updateLinks);
