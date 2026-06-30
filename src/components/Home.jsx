import Navbar from "./Navbar"  
import Hero from "./Hero"     
import OurService from "./OurService"
import FeatureEventSection from "./FeatureEventSection"
import Review from "./Review"
import Contact from "./Contact"
import Footer from "./Footer"
                                                                                                                                                                                                                                                                                                                
export default function Home(){
    return <div>
        <Navbar/>
        <Hero />
       <FeatureEventSection />
        <OurService />
       <Review />
       {/* <Contact /> */}
       <Footer />
 </div>
}