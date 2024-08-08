<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>
        Demo Page
    </title>
    <link rel="stylesheet" href="layout_css.css">
    <link rel="stylesheet" href="body.css">
    <link rel="stylesheet" href="popup_css.css">
    <link rel="stylesheet" href="flex.css">
    <link rel="stylesheet" href="form_css.css">
    <link rel="stylesheet" href="fixedbutton.css">
</head>

<body>
    <header>
        <ul id="left-h">
            <li><a href=""> Logo </a></li>
        </ul>

        <ul id="right-h">
            <li><a href="">Home</a></li>
            <li><a href="">Shop</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Newsletter</a></li>
            <li><a href="">Topics</a></li>
            <li><a href="">Quiz</a></li>
        </ul>
    </header>

    <br>

    <section>
        <button class="collapsible">Collapsible 1</button>
        <div class="content">
            <p>Just implementing the most basic idea first of having a list to choose from</p>
        </div>
        <ul>
            <li><a href="a.html"> December 8th 2021</a></li>
            <li><a href="b.html">December 1st 2021</a></li>
            <li><a href="c.html">November 24th 2021</a></li>
        </ul>

        <button class="collapsible">Collapsible 2</button>
        <div class="content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Imperdiet massa tincidunt nunc pulvinar. Turpis tincidunt id aliquet risus feugiat
                in ante metus dictum. Varius morbi enim nunc faucibus a pellentesque sit amet porttitor. Viverra justo
                nec ultrices dui. Consequat semper viverra nam libero. Vulputate mi sit amet mauris commodo quis
                imperdiet massa. Ipsum dolor sit amet consectetur adipiscing. Nisi porta lorem mollis aliquam ut
                porttitor leo. Montes nascetur ridiculus mus mauris vitae ultricies. Nulla facilisi morbi tempus iaculis
                urna id volutpat. Mauris augue neque gravida in fermentum. Eget nunc lobortis mattis aliquam faucibus
                purus in massa. Sagittis aliquam malesuada bibendum arcu vitae. Amet cursus sit amet dictum sit amet
                justo donec. Nisi porta lorem mollis aliquam ut porttitor. Magna ac placerat vestibulum lectus mauris
                ultrices eros in. Vitae nunc sed velit dignissim sodales ut eu sem integer. Id leo in vitae turpis massa
                sed.

                Nunc mattis enim ut tellus elementum sagittis vitae et leo. Blandit libero volutpat sed cras ornare. Vel
                elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Faucibus in ornare quam
                viverra orci. Euismod quis viverra nibh cras pulvinar. Lorem dolor sed viverra ipsum nunc. Vitae
                elementum curabitur vitae nunc sed. Scelerisque eu ultrices vitae auctor eu augue ut. Erat nam at lectus
                urna. Commodo ullamcorper a lacus vestibulum sed arcu non odio euismod. Elit eget gravida cum sociis
                natoque. Eget lorem dolor sed viverra ipsum nunc aliquet bibendum. Curabitur vitae nunc sed velit.

                Viverra nibh cras pulvinar mattis nunc sed blandit. Imperdiet proin fermentum leo vel orci. Mollis
                aliquam ut porttitor leo a diam. Non diam phasellus vestibulum lorem sed risus ultricies. Vulputate enim
                nulla aliquet porttitor lacus luctus accumsan. Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla
                posuere sollicitudin. Nisl suscipit adipiscing bibendum est. Sem viverra aliquet eget sit amet tellus
                cras. Odio aenean sed adipiscing diam donec adipiscing tristique risus. Rhoncus urna neque viverra justo
                nec ultrices. Volutpat commodo sed egestas egestas fringilla. Erat velit scelerisque in dictum non
                consectetur a. Praesent semper feugiat nibh sed.

                In nulla posuere sollicitudin aliquam. Fringilla ut morbi tincidunt augue interdum velit euismod in.
                Senectus et netus et malesuada fames ac. Etiam erat velit scelerisque in dictum non consectetur a.
                Tempus quam pellentesque nec nam aliquam sem. Nulla pellentesque dignissim enim sit amet venenatis urna.
                Pulvinar pellentesque habitant morbi tristique senectus et netus. A iaculis at erat pellentesque. Quam
                viverra orci sagittis eu volutpat odio facilisis mauris sit. Quis blandit turpis cursus in hac habitasse
                platea. Blandit turpis cursus in hac. Amet venenatis urna cursus eget. Tincidunt eget nullam non nisi
                est sit amet facilisis. Vitae congue eu consequat ac felis donec et. Pellentesque diam volutpat commodo
                sed. Senectus et netus et malesuada. A erat nam at lectus urna. Turpis egestas maecenas pharetra
                convallis posuere morbi leo urna molestie.</p>
        </div>
    </section>

    <footer>
        &copy;trash
    </footer>

    <script>
        var coll = document.getElementsByClassName("collapsible");
        var i;

        for (i = 0; i < coll.length; i++) {
            coll[i].addEventListener("click", function () {
                this.classList.toggle("active");
                var content = this.nextElementSibling;
                if (content.style.maxHeight) {
                    content.style.maxHeight = null;
                } else {
                    content.style.maxHeight = content.scrollHeight + "px";
                }
            });
        }
    </script>

    <div class="fixed-btn">
   <a class="button" href="#popup2"> <button style="background-color: #80b3b3; color:aliceblue;">Newsletter Signup</button></a>
<div id="popup2" class="overlay">
	<div class="popup">
    <h2>Flexbox sidebar content format</h2>
<div class="content">
  <div class="col">    
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Maecenas accumsan lacus vel facilisis volutpat. Eleifend quam adipiscing vitae proin sagittis.</p>
  </div>
  <div class="col"> 
    <p><form id="subscribe" form action="connect.php" method="POST">
        <input type="text" name="name" placeholder="Name" required>
      <input type="email" name="email"placeholder="Email"class="email-form" required is="email">
    <button type="submit" class="button" id="newsignup">Sign up</button>
    <a class="close" href="#">&times;</a>
    </form>
    </div>

</body>

</html>