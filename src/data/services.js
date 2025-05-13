// src/data/services.js
export const services = [
  {
    id: 'web-development',
    title: "Web Development",
    icon: "💻",
    description: "Complete digital solutions from websites to web applications",
    overview: "We create responsive, user-friendly websites that drive results...",
       image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80",
    workExamples: [
      "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    ],

    subServices: [
      "Custom Website Development",
      "E-commerce Solutions",
      "Web Applications",
      "CMS Development"
    ],
    packages: [
      {
        name: "Basic",
        price: "$999",
        features: ["5 Page Website", "Responsive Design", "Basic SEO"]
        
      }
    ],
    testimonials: [
      {
        quote: "Their web development team transformed our online presence completely.",
        author: "Sarah Johnson, TechStart Inc."
      }
    ]
  },
  // Add other services similarly
];