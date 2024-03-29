import CustomerReviews from "./sections/CustomerReviews";
// import CustomerReviews from "./sections/CustomerReviews";
// import CustomerReviews from "./sections/CustomerReviews";
// import CustomerReviews from "./sections/CustomerReviews";


const App = () => (
  <main className="relative ">
    nav
    <section className="xl:padding-1 wide:padding-r padding-b ">
      <Hero/>
    </section>
    <section className="padding ">
     PopularProducts
    </section>
    <section className="padding">
     <SuperQuality />
    </section>
    <section className="padding-x py-10">
      <Services/>
    </section>
    <section className="padding">
      <SpecialOffers />
    </section>
    <section className="bg-blue-50 padding ">
      <CustomerReviews/>
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe/>
    </section>
    <section className="padding-x padding-t pb-9 bg-black">
      <Footer/>
    </section>
  </main>
);
  
export default App;
