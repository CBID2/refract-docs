/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      link: {
        type: 'generated-index',
      },
      collapsed: false,
      items: ['introduction', 'getting-started'],
    },
    {
      type: 'category',
      label: 'Concepts',
      items: ['concepts/refractions', 'concepts/lenses', 'concepts/optics'],
    },
    {
      type: 'category',
      label: 'API',
      items: ['api/createComponent', 'api/useRefraction', 'api/useEffect'],
    },
    {
      type: 'category',
      label: 'Tutorials',
      items: ['tutorials/counter-app', 'tutorials/global-theme'],
    },
    'contributing',
  ],
};

export default sidebars;
