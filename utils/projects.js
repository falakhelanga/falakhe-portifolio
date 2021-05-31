export const projects = [
  {
    id: "1",
    name: "tekkie shop",
    image: "/tekkie-city.png",
    tags: ["#react", "#javascript", "#express", "#node.js", "#mongoDB"],
    description:
      "This is a fully e-commerce application with user authentication. users can add add/delete items in the cart, they can also add items in their wish list to buy later. users can pay with their credit card. the front-end is built with react.js , redux-toolkit for mananging the state, bootstrap for nice and responsive ui, material ui for icons. in the backend I used node.js to run javascript outside the browser, express for handling the server, Restful apis for end points and mongoDb for database ",
    url: "https://tekkie-city.herokuapp.com/",
    repo: "https://github.com/falakhelanga/tekkie-city",
  },

  {
    id: "2",
    name: "Job portal",
    image: "/job-portal.png",
    tags: ["#react", "#javascript", "#node.js", "#mongoDB", "#graphQL"],
    description:
      "This is a fully responsive job-portal site with a full user authantication and authorization. Job seekers can be able to search and apply for the job, they can also save job under wishlist to apply later. users cannot apply for the job twice. you can also register as an employer. employers have the access to post and delete jobs, view applicants. the front-end is bult with react.js, redux for managing the state, bootstrap and scss for styling.the backend is built with node.js and express server, graphQl,jwt,and mongoDB",

    url: "https://tech-l.herokuapp.com/",
    repo: "https://github.com/falakhelanga/job-portal",
  },
  {
    id: "3",
    name: "procomputers",
    image: "/comp-store.png",
    tags: ["#react", "#javascript", "#node.js", "#mongoDB", "#restapis"],
    description:
      "This is a full e-commers site with admin area, full user authantication and authorization.the loged in users can save items to buy later, add items to the cart, proceed to checkout and pay for their order. users can also track their orders.if log in as admin you can have access to add and delete products,view orders and markorders as deliverd, admin can also add and delete users. the front-end is bult with react.js, redux for managing the state, bootstrap and scss for styling.the backend is built with node.js and express server, graphQl,jwt,and mongoDB",

    url: "https://procomputers.herokuapp.com/",
    repo: "https://github.com/falakhelanga/comp-ecomm",
  },
];
