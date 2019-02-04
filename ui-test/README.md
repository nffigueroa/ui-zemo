# Development
In this projet atomic design was implemented, so i have organis , molecule and atom folder. This is it because in the design i saw many components taht can be reusables, and the maintainability is better due the organization of the components, also i used scss as my css preprocessator and i applied the BEM pattern for the css code. In the start-square component (Organism) i have the JSON config for the items like that.

config = [
    {
      nameStar: 'Malala',
      name: 'Malala Yousafzai',
      description: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
      timeAgo: '1 Month',
      where: 'Entertainment',
      statusVotation: true // true if the positive votation is higher thant the negative votes
    },
    {
      nameStar: 'Kanye',
      name: 'Kanye Wets',
      description: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
      timeAgo: '1 Month',
      where: 'Entertainment',
      statusVotation: true
    },
    {
      nameStar: 'Mark',
      name: 'Mark Zuckerbeg',
      description: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
      timeAgo: '1 Month',
      where: 'Business',
      statusVotation: true
    },
    {
      nameStar: 'Cristina',
      name: 'Cristina Fernández de Kirchner',
      description: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
      timeAgo: '1 Month',
      where: 'politics',
      statusVotation: true
    }
  ];

  All the information about the stars are nested here. The other components have inputs for parametrization.


  PD: In tablet and mobile breakpoint the page has to be realoded because i used a validation of the width of the page for hidding the items menu.