// Mom making a promise to give cookies
const cookiePromise = new Promise((resolve, reject) => {
  // Baking takes time
  setTimeout(() => {
    let cookiesReady = true;
    
    if (cookiesReady) {
      resolve("🍪 Here are your cookies!");
    } else {
      reject("😢 Sorry, no cookies today");
    }
  }, 5000); // Takes 5 seconds to bake
});

// You can go play while waiting
console.log("Going to play!");
cookiePromise
  .then((result) => console.log(result))  // Yay! Cookies!
  .catch((error) => console.log(error)); // Aw, no cookies
console.log("Playing with toys...");