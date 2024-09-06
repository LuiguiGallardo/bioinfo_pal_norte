"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[730],{4784:(e,a,i)=>{i.r(a),i.d(a,{assets:()=>d,contentTitle:()=>n,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var s=i(5893),t=i(1151);const r={sidebar_position:8},n="Diversidad alfa",o={id:"qiime2/adiv",title:"Diversidad alfa",description:"La diversidad alfa se refiere a la diversidad dentro de un h\xe1bitat o una comunidad en particular. Esta puede ser contrastada entre condiciones, como grupos, h\xe1bitats, etc. Se utilizan diferentes m\xe9tricas para medir la diversidad alfa, como la riqueza de especies (n\xfamero total de especies presentes), la equidad (c\xf3mo est\xe1n distribuidas las abundancias de las especies), y otros \xedndices m\xe1s complejos que tienen en cuenta la abundancia relativa y la rareza de las especies. Mientras mayor sea la diversidad alfa, es probable que la comunidad sea m\xe1s resiliente a cambios ambientales y biol\xf3gicos.",source:"@site/docs/qiime2/adiv.md",sourceDirName:"qiime2",slug:"/qiime2/adiv",permalink:"/bioinfo_pal_norte/docs/qiime2/adiv",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Asignaci\xf3n taxon\xf3mica",permalink:"/bioinfo_pal_norte/docs/qiime2/taxonomy"},next:{title:"Diversidad beta",permalink:"/bioinfo_pal_norte/docs/qiime2/bdiv"}},d={},l=[];function c(e){const a={admonition:"admonition",code:"code",h1:"h1",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.h1,{id:"diversidad-alfa",children:"Diversidad alfa"}),"\n",(0,s.jsx)(a.p,{children:"La diversidad alfa se refiere a la diversidad dentro de un h\xe1bitat o una comunidad en particular. Esta puede ser contrastada entre condiciones, como grupos, h\xe1bitats, etc. Se utilizan diferentes m\xe9tricas para medir la diversidad alfa, como la riqueza de especies (n\xfamero total de especies presentes), la equidad (c\xf3mo est\xe1n distribuidas las abundancias de las especies), y otros \xedndices m\xe1s complejos que tienen en cuenta la abundancia relativa y la rareza de las especies. Mientras mayor sea la diversidad alfa, es probable que la comunidad sea m\xe1s resiliente a cambios ambientales y biol\xf3gicos."}),"\n",(0,s.jsxs)(a.p,{children:["Antes de obtener la diversidad, alfa o beta, podemos optar por obtener una filogenia con nuestros ",(0,s.jsx)(a.code,{children:"ASVs"})," y que esta filogenia sea considerar para los siguientes an\xe1lisis. Para crear la filogen\xeda utilizamos el siguiente comando:"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"qiime phylogeny align-to-tree-mafft-fasttree --i-sequences results/05_rep-seqs_filter_chloro.qza --o-alignment results/07_aligned-rep-seqs.qza --o-masked-alignment results/07_masked-aligned-rep-seqs.qza --o-tree results/07_unrooted-tree.qza --o-rooted-tree results/07_rooted-tree.qza --verbose\n"})}),"\n",(0,s.jsx)(a.p,{children:"Ahora podemos obtener la diversidad alfa con los diferentes \xedndices. Generalmente lo que buscamos visualizar primero es una curva de rarefacci\xf3n para darnos una idea de la diversidad en las diferentes muestras/grupos:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:" qiime diversity alpha-rarefaction \\\n  --i-table results/05_feature-table_filter_chloro.qza \\\n  --i-phylogeny results/07_rooted-tree.qza \\\n  --p-max-depth 118 \\\n  --m-metadata-file rawdata/metadata.tsv \\\n  --o-visualization results/10_alpha-rarefaction.qzv\n"})}),"\n",(0,s.jsx)(a.p,{children:"Posteriormente podemos obtener la diversidad con un \xedndice en espec\xedfico y determinar si hay diferencias significativas entre los grupos:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"qiime diversity alpha-phylogenetic \\\n  --i-table results/05_feature-table_filter_chloro.qza \\\n  --i-phylogeny results/07_rooted-tree.qza \\\n  --p-metric faith_pd \\\n  --o-alpha-diversity results/08_faith_pd_vector.qza\n\n# Para saber si hay diferencias significativas entre los grupos utilizamos\nqiime diversity alpha-group-significance \\\n  --i-alpha-diversity results/08_faith_pd_vector.qza \\\n  --m-metadata-file rawdata/metadata.tsv \\\n  --o-visualization results/09_faith-pd-group-significance.qzv\n"})}),"\n",(0,s.jsxs)(a.admonition,{type:"info",children:[(0,s.jsx)(a.p,{children:"Existe una ruta m\xe1s r\xe1pida para obtener tanto diversidad alfa como beta en un solo comando. Para nuestro set de datos podemos utilizar el siguiente comando:"}),(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"qiime diversity core-metrics-phylogenetic   --i-phylogeny results/07_rooted-tree.qza  --i-table results/05_feature-table_filter_chloro.qza  --m-metadata-file rawdata/metadata.tsv   --output-dir results/13_core-metrics-results --p-sampling-depth 5000\n"})})]})]})}function u(e={}){const{wrapper:a}={...(0,t.a)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},1151:(e,a,i)=>{i.d(a,{Z:()=>o,a:()=>n});var s=i(7294);const t={},r=s.createContext(t);function n(e){const a=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:n(e.components),s.createElement(r.Provider,{value:a},e.children)}}}]);