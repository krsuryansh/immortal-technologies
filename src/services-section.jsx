const soft = "../assets/soft.png";
const servicesimg=["../assets/mob.png","../assets/ecom.png","../assets/cms.png","../assets/billing.png","../assets/multimedia-icon.png","../assets/erp.png","../assets/cloud.png","../assets/seo_icon.png"];
import Card from "./servicecard";
import React from "react";
const OurServices = () => {
  return (
    <div className=" min-h-[100vh] max-h-min max-w-[1280px] pt-6 pb-6  m-auto">
      <div className=" text-black flex w-full justify-center content-center p-4">
        <h2 className="text-4xl">Our Services</h2>
      </div>
      <p className="w-full flex text-center justify-center mb-10">
        As an overview, Immortal Technologies provides every service you might
        need for web and internet marketing. We are a full-service company,
        meaning that we can handle every aspect of your online presence from
        website design to internet marketing.
      </p>
      <div className="grid md:grid-cols-3 grid-cols-1 content-center justify-center gap-8">
        <Card
          imageSrc={soft}
          title="S/W Development"
          description="Our main expertise is software development, whether it is a desktop based application or a browser based web application"
          buttonText="Learn More >>"
        />
        <Card
          imageSrc={servicesimg[0]}
          title="Mobile Apps"
          description="Mobile application development is the set of processes and procedures involved in writing software for small, wireless computing devices"
          buttonText="Learn More >>"
        />
        <Card
          imageSrc={servicesimg[1]}
          title="E-Commerce Solutions"
          description="E-Commerce is the latest mantra for selling your products/services across the globe with the availability of online payment gateway."
          buttonText="Learn More >>"
        />
        <Card
          imageSrc={servicesimg[2]}
          title="CMS"
          description="The custom CMS demand in the current market is increasing per day. The best part is you don't need software to update your content."
          buttonText="Learn More >>"
        />
        <Card
          imageSrc={servicesimg[3]}
          title="Billing Software"
          description="Our Billing software provides the facility to get reminder of pending Bills and Stock Managements, which makes the software unique."
          buttonText="Learn More >>"
        />
        <Card
          imageSrc={servicesimg[4]}
          title="Multimedia Solutions"
          description="Multimedia refers to any application that uses a combination of multiple media, to include text, graphics and animation related files."
          buttonText="Learn More >>"
        />
        <Card
          imageSrc={servicesimg[5]}
          title="ERP"
          description="Smart Education ERP is a web-enabled PHP/ Java based ERP that is apt for education institutes."
          buttonText="Learn More >>"
        />
        <Card
          imageSrc={servicesimg[6]}
          title="Cloud Solution"
          description="A cloud service is any resource that is provided over the Internet. The most common cloud service resources are Software as a Service."
          buttonText="Learn More >>"
        />
        <Card
          imageSrc={servicesimg[7]}
          title="Search Engine Optimization (SEO)"
          description="mmortal Technologies assures organizations of a high-performance, high-bandwidth."
          buttonText="Learn More >>"
        />
      </div>
    </div>
  );
};
export default OurServices;
