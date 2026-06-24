import Navbar from "./Navbar"  
import Hero from "./Hero"     
import OurService from "./OurService"
import FeaturedEvents from "./FeatureEvent"
import Review from "./Review"
import Contact from "./Contact"
import Footer from "./Footer"
                                                                                                                                                                                                                                                                                                                
export default function Home(){
    return <div>
        <Navbar/>
        <Hero />
       <FeaturedEvents />
        <OurService />
       <Review />
       {/* <Contact /> */}
       <Footer />
 </div>
}