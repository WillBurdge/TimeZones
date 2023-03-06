function updateTime() {
    const londonTime = new Date().toLocaleString("en-US", {timeZone: "Europe/London"});
    const parisTime = new Date().toLocaleString("en-US", {timeZone: "Europe/Paris"});
    const hongKongTime = new Date().toLocaleString("en-US", {timeZone: "Asia/Hong_Kong"});
    const newYorkTime = new Date().toLocaleString("en-US", {timeZone: "America/New_York"});
    
    document.getElementById("london").textContent = londonTime;
    document.getElementById("paris").textContent = parisTime;
    document.getElementById("hong-kong").textContent = hongKongTime;
    document.getElementById("new-york").textContent = newYorkTime;
  }
  
  setInterval(updateTime, 1000);
  