import React from 'react'
import './Home.css';
import Product from './Product';
function Home() {
  return (
    <div className='home'>
        <div className='home_container'>
            <img className='home_image' src='https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img>

            <div className='home_row'>
            <Product
            id="1234567" 
            title="Lean Startup: How to Apply the Lean Startup Methodology to Innovate, Accelerate, and Create Successful Businesses (Lean Guides with Scrum, Sprint, Kanban, DSDM, XP & Crystal) "
            price = {378.99}
            image="https://m.media-amazon.com/images/I/61BFOf9Ap-L._AC_UF1000,1000_QL80_.jpg"
            rating = {4}/>

            <Product 
            id="1234568" 
            title="Veirdo® Oversized Baggy Fit Drop Shoulder Half Sleeves Round Neck Solid Pure 100% Cotton T-Shirt for Men (Available in White, Black, Mustard, Maroon, Green, Lilac, Navy, Red Color)"
            price = {458.99}
            image="https://m.media-amazon.com/images/I/51oTh6-K8KL._AC_UY1100_DpWeblab_.jpg"
            rating = {3}/>
            </div>

            <div className='home_row'>
            <Product 
            id="1234569" 
            title="ASIAN Men's CAPTAIN-12 Sports Running,Walking & Gym Shoes with Eva Sole Memory Form Casual Sneaker Shoes for Men's & Boy's"
            price = {1499.99}
            image="https://img.joomcdn.net/2848a8e95eea7eb0e9e0a6357f854b15385596aa_400_400.jpeg"
            rating = {5}/>

            <Product 
            id="1234557" 
            title="A Full Black Stailess Steel Case with Uniq Time Presentation Analog Watch with FRE King Bracelet for Men/Watch for Boy"
            price = {199.99}
            image="https://www.jiomart.com/images/product/original/rvgappdael/new-luxury-black-round-dail-stainless-steel-belt-professional-look-premium-quality-party-wear-watch-for-men-wrist-analog-watch-for-boys-men-product-images-rvgappdael-4-202310051937.jpg?im=Resize=(500,630)"
            rating = {2}/>

            <Product 
            id="1234558" 
            title="NIVEA Shea Smooth 200ml Body Lotion | 48 H Moisturization | With Deep Moisture Serum & Shea Butter | Non Greasy & Healthy Looking Skin |For Dry Skin"
            price = {79.99}
            image="https://m.media-amazon.com/images/I/41qbJM0ZUIL._AC_UL480_FMwebp_QL65_.jpg"
            rating = {4}/>
            </div>

            <div className='home_row'>
            <Product 
            id="1234559" 
            title="SIRIL Women's Georgette Bandhani Printed Saree With Unstitched Blouse Piece"
            price = {799.29}
            image="https://m.media-amazon.com/images/I/81LJ+s8dzbL._SY879_.jpg"
            rating = {5}/>
            </div>

        </div>
    </div>
  )
}
export default Home