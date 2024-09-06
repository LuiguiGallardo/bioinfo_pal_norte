import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', 'b34'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '950'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'c36'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'e45'),
            routes: [
              {
                path: '/docs/bash/characteristics',
                component: ComponentCreator('/docs/bash/characteristics', '9ee'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/bash/chmod',
                component: ComponentCreator('/docs/bash/chmod', '3f2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/bash/cut',
                component: ComponentCreator('/docs/bash/cut', 'd4d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/bash/directories_basics',
                component: ComponentCreator('/docs/bash/directories_basics', '821'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/bash/exercise',
                component: ComponentCreator('/docs/bash/exercise', 'fba'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/bash/file_tree',
                component: ComponentCreator('/docs/bash/file_tree', '263'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/bash/files_basics',
                component: ComponentCreator('/docs/bash/files_basics', 'd0b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/bash/files_visualization',
                component: ComponentCreator('/docs/bash/files_visualization', '245'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/bash/grep',
                component: ComponentCreator('/docs/bash/grep', '059'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/bash/intro',
                component: ComponentCreator('/docs/bash/intro', 'd17'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/bash/man',
                component: ComponentCreator('/docs/bash/man', '9c8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/bash/nano',
                component: ComponentCreator('/docs/bash/nano', '01d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/bash/path',
                component: ComponentCreator('/docs/bash/path', '624'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/bash/regular_expressions',
                component: ComponentCreator('/docs/bash/regular_expressions', '388'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/bash/script',
                component: ComponentCreator('/docs/bash/script', 'e22'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/bash/sed',
                component: ComponentCreator('/docs/bash/sed', '678'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/bash/sort',
                component: ComponentCreator('/docs/bash/sort', '9ec'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/bash/ssh_sftp',
                component: ComponentCreator('/docs/bash/ssh_sftp', '5c5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/bash/stdoutput_pipes',
                component: ComponentCreator('/docs/bash/stdoutput_pipes', '321'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/qiime2/adapters',
                component: ComponentCreator('/docs/qiime2/adapters', '378'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/qiime2/adiv',
                component: ComponentCreator('/docs/qiime2/adiv', 'b33'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/qiime2/bdiv',
                component: ComponentCreator('/docs/qiime2/bdiv', '4cb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/qiime2/denoising',
                component: ComponentCreator('/docs/qiime2/denoising', '6ad'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/qiime2/fasta_fastq',
                component: ComponentCreator('/docs/qiime2/fasta_fastq', 'e29'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/qiime2/installation',
                component: ComponentCreator('/docs/qiime2/installation', '309'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/qiime2/intro',
                component: ComponentCreator('/docs/qiime2/intro', '543'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/qiime2/qiime2_files',
                component: ComponentCreator('/docs/qiime2/qiime2_files', 'f88'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/qiime2/taxonomy',
                component: ComponentCreator('/docs/qiime2/taxonomy', 'c93'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '203'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
