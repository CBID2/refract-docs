/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - share a sidebar for the entire doc set
 - customize the sidebar look and feel

 You can change the order of the sidebar by editing the order of the items.
*/

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      link: {
        type: 'doc',
        id: 'introduction',
      },
      items: [
        'introduction',
        'getting-started',
      ],
    },
    // The following entries are commented out because the files do not yet exist.
    // Uncomment these as you create the corresponding markdown files.
    {
      type: 'category',
       label: 'Concepts',
     items: [
       'concepts/refractions',
         'concepts/lenses',
        'concepts/optics',
    ],
    },
     {
     type: 'category',
       label: 'API',
       items: [
       'api/createComponent',
      'api/useRefraction',
       'api/useEffect',
    ],
    },
    // {
    //   type: 'category',
    //   label: 'Tutorials',
    //   items: [
    //     'tutorials/counter-app',
    //     'tutorials/global-theme',
    //   ],
    // },
    // 'contributing',
  ],
};

export default sidebars;