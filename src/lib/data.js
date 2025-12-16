import html from '/src/assets/img/icons8-html5-48.png';
import css from '/src/assets/img/icons8-css-48.png';
import javascript from '/src/assets/img/icons8-javascript-48.png';
import tailwind from '/src/assets/img/icons8-tailwind-css-48.png';
import bootstrap from '/src/assets/img/icons8-bootstrap-48.png';
import reactP from '/src/assets/img/icons8-react-48.png';
import vsCode from '/src/assets/img/icons8-vs-code-50.png';
import typeScript from '/src/assets/img/icons8-typescript-48.png';
import figma from '/src/assets/img/icons8-figma-50.png';
import github from '/src/assets/img/icons8-github-50.png';
import git from '/src/assets/img/icons8-git-48.png';
import project5 from '/src/assets/img/healthDashboard.webp';
import project7 from '/src/assets/img/ticketGenerator.webp';
import project8 from '/src/assets/img/eCommerce.webp';
import project9 from '/src/assets/img/multi-step-form.png';
import project10 from '/src/assets/img/nike-e-commerce.webp';
import meta from '/src/assets/img/Mohamad_Abou_Hamoud_Certification.pdf';
import typeScriptCert from '/src/assets/img/typescript_certification.pdf';
import uiDesign from '/src/assets/img/certificate.pdf';
import metaPic from '/src/assets/img/metaCert.png';
import typeScriptPic from '/src/assets/img/typeSciptCert.png';
import uiDesignPic from '/src/assets/img/uiDesignCert.png';
import linkedin from '/src/assets/img/icons8-linkedin-48.png';
import insta from '/src/assets/img/icons8-instagram-94.png';
import whatsapp from '/src/assets/img/whatsapp.png';
import upwork from '/src/assets/img/upwork-icon.webp';
import motion from '/src/assets/img/motion.webp';
import gsap from '/src/assets/img/gsap.webp';

const projects = [
        {
            name: "health Dashboard",
            src: project5,
            tools: 'TailwindCss| JavaScript | React.js',
            link:'https://mhmd-aho.github.io/healthDashboard/',
            repo:'https://github.com/mhmd-aho/healthDashboard',
            des:'A personal health tracker that brings together multiple aspects of well-being, including mood, sleep, hydration, and exercise. It gives users an overview of their daily habits and progress in one place.'
        },
        {
            name:'Ticket generator (frontend mentor project)',
            src: project7,
            tools: 'TailwindCss| JavaScript | React.js',
            link:'https://mhmd-aho.github.io/ticket-generator/',
            repo:'https://github.com/mhmd-aho/ticket-generator',
            des:'A small project that generates scrolling ticker text based on user input. It’s an interactive way to create live-updating ticker displays, often seen in news or stock websites.'
        },
        {
            name:'e-commerce (frontend mentor project)',
            src: project8,
            tools: 'TailwindCss| JavaScript | React.js',
            link:'https://mhmd-aho.github.io/e-commerce/',
            repo:'https://github.com/mhmd-aho/e-commerce',
            des:'A product page simulation for an e-commerce site. It allows users to browse items, adjust quantities, and add products to a cart, providing a realistic shopping experience.'
        },
        {
            name:'Multi-step form solution (frontend mentor project)',
            src: project9,
            tools: 'TailwindCss | JavaScript |React.js',
            link:'https://mhmd-aho.github.io/multi-step-form/',
            repo:'https://github.com/mhmd-aho/multi-step-form',
            des:'A guided multi-step form that collects information efficiently through clear, user-friendly steps, helping users complete forms without confusion or frustration.'
        },
        {
            name:'Nike e-commerce',
            src: project10,
            tools:'TailwindCss| TypeScript | React.js',
            link:'https://nike-e-commerce-flax.vercel.app/',
            repo:'https://github.com/mhmd-aho/nike-e-commerce',
            des:'A product page simulation for an e-commerce site. It allows users to browse items, adjust quantities, and add products to a cart, providing a realistic shopping experience.'
        }
    ];
        const tools =[
        {
            name:'Figma',
            src: figma,
        },
        { 
            name:'GitHub',
            src: github,
        },
        {
            name:'Git',
            src: git,
        },
        {
            name:'Vs Code',
            src: vsCode
        }
    ]
    const frontEndStack=[
        {
            name:'HTML',
            src: html,
        },
        {
            name:"CSS",
            src: css,
        },
        {
            name:'JavaScript',
            src: javascript
        },
        {
            name:'TypeScript',
            src: typeScript
        },
        {
            name:'Tailwind',
            src: tailwind,
        },
        {
            name:'Bootstrap',
            src: bootstrap
        },
        {
            name:'React',
            src: reactP
        },
        {
            name:'GSAP',
            src: gsap

        },
        {
            name:'Motion',
            src: motion}
    ]
    const certifications = [
        {
            name:'Meta Frontend Developer',
            pdf: meta,
            src: metaPic,
            des:'This 9-course program prepares learners for an entry-level career as a front-end developer.',
            link:'https://www.coursera.org/account/accomplishments/professional-cert/LCMH8N0QIIM1'
        },
        { 
            name:'TypeScript',
            pdf: typeScriptCert,
            src: typeScriptPic,
            des:'an online non-credit course authorized by Scrimba and offered through Coursera',
            link:'https://www.coursera.org/account/accomplishments/verify/NZ2V022J7WYK'
        },
        {
            name:'UI Design',
            pdf: uiDesign,
            src: uiDesignPic,
            des:'UI Design: Create a website in Figma taught by Laura Knoops.',
        },
    ]
    const contactApp = [
       {
            name:'Github',
            icon: github,
            link:'https://github.com/mhmd-aho',
        },
        {
            name:'Linkedin',
            icon: linkedin,
            link:'https://www.linkedin.com/in/mohamad-abou-hamoud',
        }, 
        {
            name:'Instagram',
            icon: insta,
            link:'https://www.instagram.com/m_abouhamoud/',
        },{
            name:'whatsApp',
            icon:whatsapp ,
            link:'https://wa.me/+96171547591',
        },{
            name:'Upwork',
            icon:upwork,
            link:'https://www.upwork.com/freelancers/mohamadah?mp_source=share'
        }

    ]
    export {projects,tools,frontEndStack,certifications,contactApp};
