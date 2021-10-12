<template>
    
    <header class="header_area sticky-header">
        <div class="main_menu">
          <nav class="navbar navbar-expand-lg navbar-light main_box">
              <div class="container row">
                  <router-link class="nav-link  col-md-3" to="/"><img src="https://cdn.dsmcdn.com/web/logo/ty-logo.svg" width="125" alt=""></router-link>
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                    </button>
                    <input type="search" class="form-control w-50 col-md-2" name="searchkey" placeholder="Search...">
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
                                    <li class="nav-item"><router-link to="/cart" class="nav-link">Shopping Cart</router-link></li>
                                    <li class="nav-item"><router-link to="/track-order" class="nav-link">Track Order</router-link></li>
                                </ul>
                            </li>
                     
                            <li class="nav-item">
                                <router-link to="/contact" class="nav-link">Contact</router-link>
                            </li>
                            <li class="nav-item"><router-link to="/profile/my-orders" class="nav-link">My Profile</router-link></li>
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
