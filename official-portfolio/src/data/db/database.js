import Mock from "../mock";

const database = {
  information: {
    name: 'Melissa Weirick',
    aboutContent: "Welcome to my captivating personal portfolio, where innovation, expertise, and creativity converge to create extraordinary digital experiences. As a seasoned Full Stack Developer, I invite you to explore my diverse skill set and discover a collection of projects that showcase my passion for cutting-edge technology and elegant design. With meticulous attention to detail and deep proficiency in web development languages like JavaScript, React, Node.js, Express, and MongoDB, my portfolio reflects a relentless commitment to excellence. Whether you're seeking dynamic web applications, responsive interfaces, or seamless back-end integration, my work exemplifies immersive and captivating digital solutions. Join me on this journey and witness the fusion of technology and artistry as we explore the limitless possibilities of the digital realm.",
    phone: '+1 (801) 386-6272',
    nationality: 'American',
    language: 'English',
    email: 'melissaweirickdesigns@gmail.com',
    address: 'Woods Cross, UT 84087 USA',
    freelanceStatus: 'Available',
    socialLinks: {
      facebook: '',
      twitter: '',
      pinterest: '',
      behance: '',
      linkedin: 'https://www.linkedin.com/in/melissaweirick',
      dribbble: '',
      github: 'https://github.com/melissaweirickdesigns'
    },
    brandImage: '/images/melissa-profile-photo.jpg',
    aboutImage: '/images/hiking-about-image.jpg',
    aboutImageLg: '/images/hiking-about-image.jpg',
    cvfile: '/files/Melissa_Weirick_CV.pdf'
  },
  services: [
    {
      title: "Web Design",
      icon: 'brush-alt',
      details: "Elevate your online presence with my exceptional website design services. As an expert in the field, I create immersive and user-friendly websites that align with your brand's identity. From responsive layouts to intuitive navigation, I prioritize seamless user experiences. With my expertise in design trends and best practices, I ensure that your website stands out from the competition. Whether you need a new website or a revamp of your existing one, my tailored solutions empower your business to make a lasting impact. Trust me to bring your vision to life with a visually stunning and functional website that leaves a lasting impression."
    },
    {
      title: "Web Development",
      icon: 'code',
      details: "Unleash your digital potential with my comprehensive Full Stack Development services. As a skilled professional, I create robust and scalable web applications tailored to your needs. From dynamic user interfaces to seamless functionality, I ensure a seamless experience across devices. With expertise in JavaScript, React, Node.js, Express, MongoDB, and more, I bring your vision to life with precision. Whether you need a new application or system enhancements, my solutions keep you ahead in the digital realm. Trust me for exceptional results, blending cutting-edge technology with seamless functionality to drive your business's growth and success."
    },
    // {
    //   title: "Mobile Application",
    //   icon: 'mobile',
    //   details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod."
    // }
  ],
  reviews: [
    {
      id: 1,
      content: `Melissa is a hard worker who is dedicated and professional! I have had the pleasure of getting to know her as one of the students in my coaching cohort of VSchool. She always shows up in a professional manner, is a true problem solver and forward thinker, and is resourceful with her time and energy. She has been working full-time while completing her web development certification on evenings/weekends. I can see how she truly enjoys the assignments and working through problems. Melissa would be a fantastic addition to any company or team!`,
      author: {
        name: 'Cassandra (Cassie) Rolin Koirala, M.S.',
        designation: 'Success Mentor, V School'
      }
    },
    // {
    //   id: 2,
    //   content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam.",
    //   author: {
    //     name: 'Susan Yost',
    //     designation: 'Client'
    //   }
    // },
    // {
    //   id: 3,
    //   content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    //   author: {
    //     name: 'Irving Feeney',
    //     designation: 'Fiverr Client'
    //   }
    // }
  ],
  skills: [
    {
      title: "HTML5",
      value: 25.6
    },
    {
      title: "CSS3",
      value: 20.9
    },
    {
      title: "Javascript/React",
      value: 53.5
    },
    {
      title: "Commits",
      value: 94
    },
    {
      title: "Pull Requests",
      value: 6
    },
    // {
    //   title: "Code Review",
    //   value: 0
    // },
    // {
    //   title: "Issues",
    //   value: 0
    // }
  ],
  portfolios: [
    // {
    //   id: 1,
    //   title: "T-shirt Mockup",
    //   subtitle: "A beautiful t-shirt mockup.",
    //   imageUrl: "/images/portfolio-image-1.jpg",
    //   largeImageUrl: ["/images/portfolio-image-1-lg.jpg"],
    //   url: 'https://dribbble.com'
    // },
    // {
    //   id: 2,
    //   title: "Coffee Mug",
    //   subtitle: "Awesome coffee mug design.",
    //   imageUrl: "/images/portfolio-image-4.jpg",
    //   largeImageUrl: [
    //     "/images/portfolio-image-4-lg.jpg",
    //     "/images/portfolio-image-4-lg2.jpg"
    //   ],
    //   url: 'https://facebook.com'
    // },
    // {
    //   id: 3,
    //   title: "Tea & Coffee Mug",
    //   subtitle: "Beautiful mug with logo.",
    //   imageUrl: "/images/portfolio-image-2.jpg",
    //   url: 'https://pinterest.com'
    // }
  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: "2021 - Present",
        position: "Assistant Operations Manager",
        company: "Symphony Natural Health",
        details: "As a skilled Office Operations Specialist, I successfully manage daily office operations, providing critical support to the Operations Manager in logistics and fulfillment, while delivering excellent customer service to wholesale customers, health professionals, and consumers. With meticulous attention to detail and a pleasant and professional demeanor, I thrive even under pressure. Leveraging my background in natural health and strong passion for self-improvement, I confidently address product-related inquiries and concerns. Collaborating closely with the Operations Manager, Company Accountant, and Sales Managers, I ensure a smooth workflow and contribute to achieving organizational goals. My key responsibilities encompass conducting Amazon reconciliation reporting, facilitating international shipping processes, assisting with HR management tasks, efficiently processing orders, providing exceptional customer service, managing product listings and updates on the Shopify platform, offering technical support for HelpScout technology, undertaking additional assigned projects, overseeing affiliate management initiatives, performing technical troubleshooting, and updating website content with HTML and CSS coding."
      },
      {
        id: 2,
        year: "2019 - Present",
        position: "Founder",
        company: "Binx's Garden",
        details: "I am passionate about empowering individuals to reconnect with nature and cultivate their own thriving vegetable gardens. With a deep understanding of the benefits of sustainable and organic gardening, I am dedicated to providing people with the knowledge, tools, and resources they need to embark on their gardening journey successfully."
      },
      {
        id: 3,
        year: "2018 - 2021",
        position: "Sales Executive",
        company: "ActivityHero",
        details: "As a proactive and results-driven Sales Executive, I excelled in engaging prospective clients and understanding their unique needs, aligning our solutions to optimize their business strategies. With a focus on fostering effective communication channels, I ensured clients felt valued as they expressed their concerns and requirements. Throughout the account lifecycle, I provided personalized recommendations tailored to meet each client's specific needs. By cultivating strong relationships with existing clients, I delivered a VIP experience from initial contact onwards. Additionally, I efficiently oversaw Salesforce accounts, reports, and dashboards, enabling enhanced performance tracking. I actively participated in collaborative daily/weekly meetings, contributing to goal-setting and sales strategy development. As a mentor, I offered guidance to team members, ensuring seamless task execution. Regular meetings with the CEO allowed me to provide updates on company goals, achievements, and valuable ideas for operational improvements in a dynamic startup environment."
      },
      {
        id: 4,
        year: "2013 - 2017",
        position: "Sales Executive",
        company: "Davinci Virtual",
        details: "I effectively managed databases, ensuring accuracy and efficiency in daily operations. With proactive prospecting and direct sales strategies, I played a key role in driving business growth. Skillfully handling client upgrade requests and streamlining processes, I delivered exceptional service. I leveraged competitor insights and a comprehensive understanding of sales policies, pricing, features, and partner policies to excel in complex environments."
      },
      {
        id: 5,
        year: "2014 - 2016",
        position: "Real Estate Agent",
        company: "Coldwell Banker Residential Brokerage · Self-employed",
        details: "As a trusted advisor, guided sellers in effectively marketing assets to captivate buyers. Provided comprehensive support to buyers throughout their property search and offers. Assessed clients' needs and finances, crafting tailored solutions. Facilitated negotiations, offering expert consultation on market conditions, pricing, mortgages, and legal obligations. Utilized comparative market analysis for accurate property valuations. Showcased listings to capture buyer interest. Managed essential paperwork meticulously. Maintained up-to-date property inventory. Collaborated seamlessly with professionals for seamless transactions. Developed networks with attorneys, lenders, and contractors. Implemented effective sales promotion strategies. Stayed informed on real estate markets and best practices."
      },
      {
        id: 6,
        year: "2015 - 2016",
        position: "Barista",
        company: "Starbucks",
        details: "As a coffee connoisseur, I engaged customers by understanding their preferences and needs. I educated them on our coffee menu, showcasing the distinct qualities of different beans and equipment through captivating demonstrations. With precision, I prepared and served exquisite coffee drinks, adhering to recipes and techniques for espresso, Latte, and Cappuccino. I managed inventory and ensured a well-stocked coffee bar, while maintaining a safe and sanitary work environment. Continuously seeking growth, I actively pursued educational opportunities, stayed updated on industry trends, and built professional connections."
      },
      {
        id: 7,
        year: "2010 - 2012",
        position: "Customer Service Supervisor",
        company: "Xerox",
        details: "As a customer service supervisor, I adeptly managed Call Center operations, implementing seamless policies and procedures. I set high performance and service standards, fostering a culture of excellence. Through innovative improvements, we achieved enhanced efficiency and effectiveness. With a focus on productivity, our team consistently exceeded service and quality expectations, delivering impressive results and customer satisfaction."
      },
      {
        id: 8,
        year: "2009",
        position: "Long Form Media Assistant",
        company: "Euro RSCG Edge",
        details: "As a data entry expert, I excelled in booking orders, revisions, logs, and invoices with unwavering accuracy and timeliness. By pulling call reports and verifying logs, I unearthed valuable insights for analysis. I proactively reviewed future media to anticipate traffic changes, cancellations, or rate reductions, optimizing campaign performance. Seamlessly managing Tracker and buyer information, I organized and processed data effortlessly. With exceptional organizational skills, I maintained meticulous records, filed orders, and promptly sent email confirmations. Acting as a reliable support system, I swiftly resolved traffic issues, handled 800# inquiries, and fulfilled tape requests for stations and reps. Building strong connections, I nurtured relationships with various departments, enhancing collaboration and efficiency. In executing buyer's requests and assignments, I consistently delivered exceptional service, meeting their unique needs with precision and professionalism."
      },
      {
        id: 9,
        year: "2006 - 2009",
        position: "Team Lead Processor",
        company: "Lundberg & Associates",
        details: "As a versatile leader, I directed and managed departmental activities, implementing robust policies and procedures for optimized systems. Setting and enforcing performance standards, I fostered a culture of excellence and continuous improvement, exceeding service and quality benchmarks. Additionally, I actively supported the team by assisting with processor duties, fostering collaboration and shared success."
      }
    ],
    educationExperience: [
      {
        id: 1,
        year: "2022 - 2023",
        graduation: "Full Stack Development",
        university: "V School",
        details: `In my educational journey, I have mastered an exciting array of web development tools and languages:

        JavaScript brings web applications to life, creating interactive user experiences. I've explored the power of ES6, writing cleaner and more efficient code.
        
        With React, I build robust and scalable user interfaces using a component-based architecture, creating reusable code. HTML and CSS serve as my artistic palette for visually stunning web designs.
        
        In backend development, I utilize Node.js and Express to build fast and efficient web servers, handling requests and responses.
        
        AJAX/HTTP enables seamless communication between the client and server. Mongoose and MongoDB offer flexible and scalable data manipulation with NoSQL databases.
        
        JSON is my go-to for structured data interchange, and Git helps me collaborate and track changes effectively.
        
        These tools have fueled my passion for web development, equipping me to create immersive and dynamic digital experiences.`
      },
      {
        id: 2,
        year: "2002 - 2006",
        graduation: "High School Diploma",
        university: "West High School"
      }
    ]
  },
  contactInfo: {
    phoneNumbers: ['+1 (801) 386-6272'],
    emailAddress: ['melissaweirickdesigns@gmail.com'],
    address: "Woods Cross, UT 84087 USA"
  }
}


Mock.onGet("/api/information").reply(config => {
  const response = database.information;
  return [200, response];
});

Mock.onGet("/api/services").reply(config => {
  const response = database.services;
  return [200, response];
});

Mock.onGet("/api/reviews").reply(config => {
  const response = database.reviews;
  return [200, response];
});

Mock.onGet("/api/skills").reply(config => {
  const response = database.skills;
  return [200, response];
});

Mock.onGet("/api/portfolios").reply(config => {
  const response = database.portfolios;
  return [200, response];
});

Mock.onGet("/api/experience").reply(config => {
  const response = database.experience;
  return [200, response];
});

Mock.onGet("/api/contactinfo").reply(config => {
  const response = database.contactInfo;
  return [200, response];
});