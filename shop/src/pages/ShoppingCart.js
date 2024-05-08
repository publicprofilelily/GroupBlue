import React from 'react';

export default function ShoppingCart() {
  return (
    	<div>		
		
		//Font
		<script src="https://kit.fontawesome.com/9d9796826b.js" crossorigin="anonymous"></script>
		
		//Bootstrap
		<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>

		<div>
		<nav class="navbar fixed-top bg-light">
			<div class="container-fluid">
			  <a class="navbar-brand" ><i class="fa-solid fa-gift" style="margin-right: 6%;"></i>Westside Belle Cakery</a>

			  <a href="#shopping-cart" style="color: mediumblue;">  <i style="margin-right: 1%;" class="fa-solid fa-cart-shopping justify-content-end fa-xl" ></i></a>
			 
			</div>
		  </nav> 

		//Shopping Cart
		<section class="container content-section" id="shopping-cart">
		  
		  <h3 style="text-decoration: underline;text-align: center; margin-bottom: 7%;">Shopping Cart</h3>
		 
		 <table class="table table-hover table-cart">
		  <thead>
			<tr>
			  <th>Item</th>
			  <th>Price</th>
			  <th>Quantity</th>
			</tr>
		  </thead>
		  <tbody class="cart-items">			
			 
		  </tbody>
		</table>

			<div class="cart-total"> 
			  <strong class="cart-total-title">Total</strong>
			  <span  class="cart-total-price" style="text-align: right;">$0</span>
			</div>		 

			<div class="btn-purchase" style="margin-top: 10%;">
			  <button type="button"  class="btn btn-dark btn-purchase "><i class="fa-solid fa-cart-shopping " style="margin-right: 6%;"></i>Buy</button>
			</div>
		</section>
	 
		//Footer
		<section id="footer">
		  <div class="card text-center">
		   
			<div class="card-body">
			  <h3 class="card-title"><i class="fa-solid fa-gift" style="margin-right: 1%;"></i>Westside Belle Cakery</h3>
			  <p>Thank you! We're looking forward to seeing you again!</p>
			</div>
			<div class="card-footer text-muted">
			   <p></p>
			   <p></p>
			</div>
		  </div>
		</section>
	
	</div>
  );
}




