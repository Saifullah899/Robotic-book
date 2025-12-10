// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

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
  // Textbook sidebar with structured chapters
  textbookSidebar: [
    {
      type: 'category',
      label: 'Physical AI & Humanoid Robotics',
      items: [
        'chapter-1-introduction/chapter',
        'chapter-2-foundations/chapter',
        'chapter-3-perception/chapter',
        'chapter-4-motion/chapter',
        'chapter-5-manipulation/chapter',
        'chapter-6-advanced/chapter',
      ],
    },
  ],
};

export default sidebars;