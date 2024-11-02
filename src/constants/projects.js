import businessloan from '../assets/business-loan.jpg';
import Ryzeclaims from '../assets/ClaimsManagment.jpg';
import Medallion from '../assets/medallion.jpg';

export const PROJECTS = [
  {
    id: '1',
    title: '',
    description:
      // 'An online marketplace made with React. The project was developed on 8th Apiko Intensive.',
      'An mortgage lending company SPS APP made with MERN,The project was deployed on Azure Webapp service',
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
      'A Claims services company with a national footprint providing outsourcing solutions to those who insure and self-insure the risks of enterprises and the public. It is made with react,node with postgresql and was deployed on Azure ',
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
      'It is a Shipping Based Company who controlling the fulfillment and logistics. It is made with React,Node and PostgreSql',
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
