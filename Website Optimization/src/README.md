## Website Performance Optimization portfolio project

In this challenge, I optimized this online portfolio for speed. In particular, I optimized the critical rendering path and make this page render as quickly as possible by applying the techniques I have picked up in the course.

To get started, I downloaded the start code from github repository and inspected the code.

### Getting started

####Part 0: Run the code

1. Check out the repository
2. To inspect the site on your phone, you can run a local server

  ```bash
  $> cd /path/to/your-project-folder
  $> python -m SimpleHTTPServer 8080
  ```

3. Open a browser and visit localhost:8080
4. Download and install [ngrok](https://ngrok.com/) to the top-level of your project directory to make your local server accessible remotely.

  ``` bash
  $> cd /path/to/your-project-folder
  $> ./ngrok http 8080
  ```

5. Copy the public URL ngrok gives you and try running it through PageSpeed Insights! Optional: [More on integrating ngrok, Grunt and PageSpeed.](http://www.jamescryer.com/2014/06/12/grunt-pagespeed-and-ngrok-locally-testing/)

Profile, optimize, measure... and then lather, rinse, and repeat. Good luck!

####Part 1: Optimize PageSpeed Insights score for index.html

1. Avoiding Rendering Blocking CSS and using inline CSS code in index.html
2. Reduce the size of text and remove space line (code in the `dist` directory is a compressed version)

####Part 2: Optimize Frames per Second in pizza.html

To optimize views/pizza.html, I need to modify views/js/main.js until my frames' per second rate is 60 fps or higher. 

1. I try to Optimize JavaScript and refactored changePizzaSizes function as follows.

```
function changePizzaSizes(size) {
    switch(size) {
        case "1":
          newwidth = 25;
        case "2":
          newwidth = 33.3;
        case "3":
          newwidth = 50;
        default:
          console.log("bug in sizeSwitcher");
      }
      var randomPizzas = document.document.getElementByClassName("randomPizzaContainer");
      var randomPizzasLength = randomPizzas.length;
      for (var i = 0; i < randomPizzasLength; i++) {
        randomPizzas[i].style.width = newwidth + "%";
      }
  }
```

2. I moved `pizzasDiv` out of the for-loop

```
// This for-loop actually creates and appends all of the pizzas when the page loads
var pizzasDiv = document.getElementById("randomPizzas");
for (var i = 2; i < 100; i++) {
  pizzasDiv.appendChild(pizzaElementGenerator(i));
}
```

3. I modified `updatePositions` function to stop FSL

```
  var top = document.body.scrollTop  / 1250;
  for (var i = 0; i < items.length; i++) {
    var phase = Math.sin(top + i % 5);    
    items[i].style.left = items[i].basicLeft + 100 * phase + 'px';
  }
```
4. I used `getElementById` instead of `querySelector` and reduced the number of background pizza to 24.

```
var movingPizzas1 = document.getElementById("movingPizzas1")
  for (var i = 0; i < 24; i++) {
  	var elem = document.createElement('img');
    elem.className = 'mover';
    elem.src = "images/pizza.png";
    elem.style.height = "100px";
    elem.style.width = "73.333px";
    elem.basicLeft = (i % cols) * s;
    elem.style.top = (Math.floor(i / cols) * s) + 'px';
    movingPizzas1.appendChild(elem);
  }
```
5. I added `transform: translateZ(0)` and `will-change: transform;` to accelerate CSS

```
.mover {
  position: fixed;
  width: 256px;
  z-index: -1;
  will-change: transform;
  transform: translateZ(0);
}
```

5. I used inline CSS to avoid rendering blocking CSS 
6. I removed space line to reduce the size of text (code in the `dist` directory is a compressed version)
7. I also resized all the images

### Optimization Tips and Tricks
* [Optimizing Performance](https://developers.google.com/web/fundamentals/performance/ "web performance")
* [Analyzing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp.html "analyzing crp")
* [Optimizing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/optimizing-critical-rendering-path.html "optimize the crp!")
* [Avoiding Rendering Blocking CSS](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css.html "render blocking css")
* [Optimizing JavaScript](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript.html "javascript")
* [Measuring with Navigation Timing](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp.html "nav timing api"). We didn't cover the Navigation Timing API in the first two lessons but it's an incredibly useful tool for automated page profiling. I highly recommend reading.
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/eliminate-downloads.html">The fewer the downloads, the better</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer.html">Reduce the size of text</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization.html">Optimize images</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching.html">HTTP caching</a>

### Customization with Bootstrap
The portfolio was built on Twitter's <a href="http://getbootstrap.com/">Bootstrap</a> framework. All custom styles are in `dist/css/portfolio.css` in the portfolio repo.

* <a href="http://getbootstrap.com/css/">Bootstrap's CSS Classes</a>
* <a href="http://getbootstrap.com/components/">Bootstrap's Components</a>
