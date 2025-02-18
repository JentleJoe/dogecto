// RESUGING LOGIC
const textConfig = {
    coinName: "DSS",
    coinTitle: "DSS",
    contract: '0xf179f713557198db3cdaf3e3e26ab024fa5dcce3',
    supply: '420,690,000',
    disclaimer: `$BIGBALLS is an independent cryptocurrency and is not affiliated with or endorsed by Elon Musk, Donald Trump, or any associated entities, brands, or intellectual properties. This token is purely for entertainment and meme culture and should not be considered financial advice. As with all cryptocurrencies, $BIGBALLS carries risks, and potential investors should conduct independent research and seek professional advice before making any financial decisions.`,
  };
  const srcConfig = {
    chartImageSrc: "https://www.dextools.io/token/dogesocialsecurity?embed=1",
  };
  const siteLinks = {
    'dexscreener': 'https://www.dextools.io/app/en/token/dogesocialsecurity?t=1739793996281',
    'twitter': 'https://x.com/dogesocialsec',
    'telegram': 'https://t.me/DOGE_SSA',
    'coinmarketcap': 'https://www.dextools.io/app/en/token/dogesocialsecurity?t=1739793996281',
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
