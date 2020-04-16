import React from "react";
import PricingCard from "./PricingCard";

import PricingInfo from "./PricingInfo";

const Pricing = () => {
  return (
    <section id="pricing">
      <h2>PiFarm Packages</h2>
      <p>Simple and affordable plans to fit your system</p>
      <div>
        {PricingInfo.map(item=>{
          return(
            <PricingCard
              key={item.key}
              title={item.title}
              price={item.price}
              features={item.features}
            />
          )
        })}
        <p>flames</p>
      </div>
    </section>
  );
};

export default Pricing;
