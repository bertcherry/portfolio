//Store portfolio item content as array of objects to access from projects and home
const projects = [
    { 
        title: 'Strive & Uplift Website',
        titleLink: 'https://www.striveanduplift.com/',
        screenshot: SUScreenshot,
        screenshotAlt: 'Screenshot of the Strive & Uplift website, in bright blue, orange, and yellow color scheme' +
            ' features a top right menu and central logo with friendly "Explore our Services" button.',
        summary: 'Ground up build of webpage for two main client groups. First, for prospective members to find services that fit their needs.' +
            ' Then, for active members to enroll in classes and/or access virtual content.',
        audience: 'There are two typical client types for Strive & Uplift -- someone looking for a community gym space,' +
            ' and someone looking for online programming to train for ultimate frisbee.' +
            ' Both groups tend to be interested in a queer-friendly and body-positive training environment.' +
            ' Clients range in age from youth to seniors; some clients are not tech-savvy, while others work in tech themselves.',
        details: 'During the 2020 redesign of the website,' +
            ' I took into consideration coach feedback on how they wanted themselves and their services to be represented,' +
            ' as decision making trends toward collective processes.' +
            ' Accessbility is a core value for Strive & Uplift, and this extends to the online space.' +
            ' The color themes were chosen based on the established Strive & Uplift logo,' +
            ' conforming with WCAG AAA guidelines for text and interface readability, and A/B tested with the coaches.' +
            ' Mobile useability is a factor, with screen reader friendly options for pricing tables and zoomable images.' +
            ' For this site, I built a custom Wordpress theme and accompanying author guides for coaches.' +
            ' Direct client feedback and trends in frequently asked questions are taken into consideration for website improvements.' +
            ' Since the rebuild, 25% of new clients say they learned about the business from the website or a Google search.' +
            ' The services page is divided into sections based on what prospective clients are looking for, with subpages for more specific offerings.' +
            ' The class and gym access schedule for the community space are easy to locate for prospective and current clients,' +
            ' featured both on the front page of the site and as a screen reader friendly schedule with sign up options linked in the top navigation menu.',
    }, { 
        title: 'Hotaling Photo',
        titleLink: 'https://bertcherry.github.io/hotaling-photo-landing-page/',
        screenshot: HotalingScreenshot,
        screenshotAlt: 'Screenshot of the Hotaling Photo landing page, featuring a slider of images in the main section,' +
        ' followed by four photos captioned with the photographer\'s primary interests.',
        summary: 'Landing page for a photographer\'s portfolio site who is interested in expanding further into sports photography and team studio media.' +
            ' The page integrates with a photo hosting service for direct sales to clients or to view additional galleries of work.',
        audience: 'The audience for this site is primarily on sports team media managers looking for action and studio photography for marketing materials.' +
            ' Additional clients may include individual athletes and fitness models, as well as people interested in purchasing prints of photos.',
        details: 'The design was created in collaboration with the photographer, with the intent to integrate with their current photo hosting site.' +
            ' We first reviewed other portfolios pages of photographers the client admires.' +
            ' Those portfolios used unobtrusive design elements and greyscale color palettes to let the images speak for themselves.' +
            ' A slideshow of featured images, galleries on specific subject matter,' +
            ' and an easy to locate contact button are the most important elements to connect with clients.',
    }, { 
        title: 'School Sports Weather App',
        titleLink: undefined,
        screenshot: WeatherScreenshot,
        screenshotAlt: 'Initial sketch of weather app idea',
        summary: 'This upcoming project plan will leverage WeatherAPI to guide school students who participate in after school sports' +
            ' on what they\'ll need to pack for the day.',
        audience: 'The primary demographic is school students who participate in after school sports, especially outdoor sports.' +
            ' The survey plan focuses on high schoolers, though further surveys could find ways to increase useability for a younger audience.',
        details: 'My plan for this project is to begin with a general survey for 10-15 students asking about their use of their phone`s weather app.' +
            ' I\'ll also ask about the basic features proposed for this app, and what elements would feel helpful to them on a 5-point scale.' +
            ' [Include the survey questions once generated]' +
            ' I will then integrate student feedback with universal design principles for accessibility to build the weather app.' +
            ' Once the app is built, I will return to a smaller subset of the original group to test the app and provide' +
            ' initial impressions from their first user experience in getting the app set up.' +
            ' I will then use their feedback to make improvements and adjustments to the design and features.',
    },

];


//Store bio content as object to access from home and about
const bio = {
    myName: 'Bert Cherry',
    jobTitle: 'UX Developer',
    headshot: BertHeadshot,
    headshotAlt: 'Bert, a white femme-presenting person smiles in font of a blossoming cherry tree.',
    description: 'Creative and analytical thinker motivated to keep learning and building.' +
    ' Former science educator who applies concepts of inquiry and universal design to the UX and web development space.',
    tools: ['HTML', 'CSS', 'Javascript', 'Webpack', 'APIs', 'Photoshop/Gimp', 'Illustrator/Inkscape'],
    resume: BertResume, //Resume file as pdf
};

export { projects, bio };