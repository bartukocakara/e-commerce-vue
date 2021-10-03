<template>
    
    <header class="header_area sticky-header">
        <div class="main_menu">
          <nav class="navbar navbar-expand-lg navbar-light main_box">
              <div class="container">
                  <router-link class="nav-link" to="/"><h1>Clothery</h1></router-link>
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                    </button>
                    <div class="collapse navbar-collapse offset" id="navbarSupportedContent">
                      <ul class="nav navbar-nav menu_nav ml-auto">
                          <li class="nav-item active">
                              <router-link class="nav-link" to="/">Home</router-link>
                          </li>
                           <li class="nav-item">
                              <router-link class="nav-link" to="/brands">Brands</router-link>
                          </li>
                          <li class="nav-item submenu dropdown">
                              <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                                aria-expanded="false">Shop</a>
                              <ul class="dropdown-menu">
                                <li class="nav-item"><router-link to="/shop-category" class="nav-link">Categories</router-link></li>
                                <li class="nav-item"><router-link to="/checkout" class="nav-link">Checkout</router-link></li>
                                <li class="nav-item"><router-link to="/shopping-cart" class="nav-link">Shopping Cart</router-link></li>
                              </ul>
                          </li>
                      <li class="nav-item submenu dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                        aria-expanded="false">Blog</a>
                        <ul class="dropdown-menu">
                          <li class="nav-item"><a class="nav-link" href="blog.html">Blog</a></li>
                          <li class="nav-item"><a class="nav-link" href="single-blog.html">Blog Details</a></li>
                        </ul>
                      </li>
                      <li class="nav-item submenu dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                        aria-expanded="false">Pages</a>
                        <ul class="dropdown-menu">
                          <li class="nav-item"><a class="nav-link" href="login.html">Login</a></li>
                          <li class="nav-item"><a class="nav-link" href="tracking.html">Tracking</a></li>
                          <li class="nav-item"><a class="nav-link" href="elements.html">Elements</a></li>
                        </ul>
                      </li>
                      <li class="nav-item">
                          <router-link to="/contact" class="nav-link">Contact</router-link>
                      </li>
                      <li class="nav-item"><router-link to="/profile" class="nav-link">My Profile</router-link></li>
                      <li class="nav-item"><router-link to="/wallet" class="nav-link">Wallet</router-link></li>
                  </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>
