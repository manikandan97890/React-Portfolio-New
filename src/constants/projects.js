import businessloan from '../assets/business-loan.jpg';
import Ryzeclaims from '../assets/ClaimsManagment.jpg';
import Medallion from '../assets/medallion.jpg';

export const PROJECTS = [
  {
    id: '1',
    title: '',
    description:
      // 'An online marketplace made with React. The project was developed on 8th Apiko Intensive.',
      'This mortgage lending platform was built for SPS, leveraging the MERN stack to deliver a fast, secure, and scalable application. Deployed on Azure Web App Service, it streamlines mortgage processing, enabling real-time loan tracking and personalized client offers. Key features include JWT-based secure authentication, role-based dashboards, and a responsive UI crafted with React and Tailwind CSS. Continuous integration and deployment are managed through Azure DevOps, with Docker ensuring environment consistency.',
    image: {
      src: businessloan,
      placeholderSrc:require("../assets/business-loan.jpg")
        
    },   
    technologies: [
      '#react',
      '#redux',     
      '#scss',
      '#formik',      
      '#restapi',
      '#node',
      '#express',
      '#mongodb',
      '#mongoose'
    ],
  },
  {
    id: '2',
    title: '',
    description:
      'Developed for a nationwide claims services company, this platform provides comprehensive outsourcing solutions for enterprises and public entities that insure or self-insure. Built with React and Node.js and backed by PostgreSQL for reliable data handling, the application streamlines claims management processes with high availability and security. Deployed on Azure Web App Service, it offers a scalable and secure environment, allowing the company to efficiently support a wide network of clients and claims professionals.',
    image: {
      src: Ryzeclaims,
      placeholderSrc:
        'https://s3.wns.com/S3_5/Images/GenericHeaderBanner/DesktopImg/19352/3151/1980x1080px.jpg',
    },
    technologies: [
      '#react',
      '#nodejs',
      '#express',
      '#postgresql',      
      '#mongoose',
      '#jwt',
      '#azure',
    ],
  },
  {
    id: '3',
    title: '',
    description:
      'Built for a shipping company specializing in logistics and fulfillment, this platform streamlines inventory management, shipment tracking, and order fulfillment. Developed with React and Node.js and supported by a PostgreSQL database, the application ensures efficient data handling and real-time updates, allowing for smooth and reliable logistics operations. This solution enhances visibility and control over the entire shipping process, optimizing workflows and improving service delivery.',
    image: {
      src: Medallion,
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },   
    technologies: [
      '#react',      
      '#redux',
      '#redux-toolkit',
      '#react-navigation',
      '#nodejs',
      '#express',
      '#postgresql'
    ],
  }  
];
