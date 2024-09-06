import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/bioinfo_pal_norte/markdown-page',
    component: ComponentCreator('/bioinfo_pal_norte/markdown-page', 'a5f'),
    exact: true
  },
  {
    path: '/bioinfo_pal_norte/docs',
    component: ComponentCreator('/bioinfo_pal_norte/docs', '456'),
    routes: [
      {
        path: '/bioinfo_pal_norte/docs',
        component: ComponentCreator('/bioinfo_pal_norte/docs', '623'),
        routes: [
          {
            path: '/bioinfo_pal_norte/docs',
            component: ComponentCreator('/bioinfo_pal_norte/docs', '264'),
            routes: [
              {
                path: '/bioinfo_pal_norte/docs/bash/characteristics',
                component: ComponentCreator('/bioinfo_pal_norte/docs/bash/characteristics', '2db'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/bioinfo_pal_norte/docs/bash/chmod',
                component: ComponentCreator('/bioinfo_pal_norte/docs/bash/chmod', 'f92'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/bioinfo_pal_norte/docs/bash/cut',
                component: ComponentCreator('/bioinfo_pal_norte/docs/bash/cut', '9ee'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/bioinfo_pal_norte/docs/bash/directories_basics',
                component: ComponentCreator('/bioinfo_pal_norte/docs/bash/directories_basics', '3e9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/bioinfo_pal_norte/docs/bash/exercise',
                component: ComponentCreator('/bioinfo_pal_norte/docs/bash/exercise', '172'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/bioinfo_pal_norte/docs/bash/file_tree',
                component: ComponentCreator('/bioinfo_pal_norte/docs/bash/file_tree', '773'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/bioinfo_pal_norte/docs/bash/files_basics',
                component: ComponentCreator('/bioinfo_pal_norte/docs/bash/files_basics', 'f97'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/bioinfo_pal_norte/docs/bash/files_visualization',
                component: ComponentCreator('/bioinfo_pal_norte/docs/bash/files_visualization', '7ec'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/bioinfo_pal_norte/docs/bash/grep',
                component: ComponentCreator('/bioinfo_pal_norte/docs/bash/grep', '297'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/bioinfo_pal_norte/docs/bash/intro',
                component: ComponentCreator('/bioinfo_pal_norte/docs/bash/intro', 'ff4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/bioinfo_pal_norte/docs/bash/man',
                component: ComponentCreator('/bioinfo_pal_norte/docs/bash/man', '2b9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/bioinfo_pal_norte/docs/bash/nano',
                component: ComponentCreator('/bioinfo_pal_norte/docs/bash/nano', '9ae'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/bioinfo_pal_norte/docs/bash/path',
                component: ComponentCreator('/bioinfo_pal_norte/docs/bash/path', '011'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/bioinfo_pal_norte/docs/bash/regular_expressions',
                component: ComponentCreator('/bioinfo_pal_norte/docs/bash/regular_expressions', '6bf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/bioinfo_pal_norte/docs/bash/script',
                component: ComponentCreator('/bioinfo_pal_norte/docs/bash/script', '0a7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/bioinfo_pal_norte/docs/bash/sed',
                component: ComponentCreator('/bioinfo_pal_norte/docs/bash/sed', '45d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/bioinfo_pal_norte/docs/bash/sort',
                component: ComponentCreator('/bioinfo_pal_norte/docs/bash/sort', '970'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/bioinfo_pal_norte/docs/bash/ssh_sftp',
                component: ComponentCreator('/bioinfo_pal_norte/docs/bash/ssh_sftp', '32f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/bioinfo_pal_norte/docs/bash/stdoutput_pipes',
                component: ComponentCreator('/bioinfo_pal_norte/docs/bash/stdoutput_pipes', '4eb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/bioinfo_pal_norte/docs/qiime2/adapters',
                component: ComponentCreator('/bioinfo_pal_norte/docs/qiime2/adapters', 'fca'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/bioinfo_pal_norte/docs/qiime2/adiv',
                component: ComponentCreator('/bioinfo_pal_norte/docs/qiime2/adiv', '113'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/bioinfo_pal_norte/docs/qiime2/bdiv',
                component: ComponentCreator('/bioinfo_pal_norte/docs/qiime2/bdiv', '638'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/bioinfo_pal_norte/docs/qiime2/denoising',
                component: ComponentCreator('/bioinfo_pal_norte/docs/qiime2/denoising', 'db6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/bioinfo_pal_norte/docs/qiime2/fasta_fastq',
                component: ComponentCreator('/bioinfo_pal_norte/docs/qiime2/fasta_fastq', 'ed4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/bioinfo_pal_norte/docs/qiime2/installation',
                component: ComponentCreator('/bioinfo_pal_norte/docs/qiime2/installation', '9d8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/bioinfo_pal_norte/docs/qiime2/intro',
                component: ComponentCreator('/bioinfo_pal_norte/docs/qiime2/intro', '5f6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/bioinfo_pal_norte/docs/qiime2/qiime2_files',
                component: ComponentCreator('/bioinfo_pal_norte/docs/qiime2/qiime2_files', '7e4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/bioinfo_pal_norte/docs/qiime2/taxonomy',
                component: ComponentCreator('/bioinfo_pal_norte/docs/qiime2/taxonomy', 'b88'),
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
    path: '/bioinfo_pal_norte/',
    component: ComponentCreator('/bioinfo_pal_norte/', '04f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
