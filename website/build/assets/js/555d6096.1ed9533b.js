"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[355],{4258:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>d,contentTitle:()=>r,default:()=>m,frontMatter:()=>t,metadata:()=>i,toc:()=>c});var o=n(5893),s=n(1151);const t={sidebar_position:5},r="Remoci\xf3n de adaptadores",i={id:"qiime2/adapters",title:"Remoci\xf3n de adaptadores",description:"Como no hemos hecho ning\xfan preprocesamiento a los datos y sabemos que nuestras secuencias tienen adaptadores, los removeremos con cutadapt dentro de QIIME2.",source:"@site/docs/qiime2/adapters.md",sourceDirName:"qiime2",slug:"/qiime2/adapters",permalink:"/bioinfo_pal_norte/docs/qiime2/adapters",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Documentos iniciales",permalink:"/bioinfo_pal_norte/docs/qiime2/qiime2_files"},next:{title:"Denoising",permalink:"/bioinfo_pal_norte/docs/qiime2/denoising"}},d={},c=[];function p(e){const a={code:"code",h1:"h1",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.h1,{id:"remoci\xf3n-de-adaptadores",children:"Remoci\xf3n de adaptadores"}),"\n",(0,o.jsxs)(a.p,{children:["Como no hemos hecho ning\xfan preprocesamiento a los datos y sabemos que nuestras secuencias tienen adaptadores, los removeremos con ",(0,o.jsx)(a.code,{children:"cutadapt"})," dentro de QIIME2."]}),"\n",(0,o.jsx)(a.p,{children:"\xbfQu\xe9 tanto podemos hacer con este comando?"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-bash",children:"qiime cutadapt trim-paired --help\n"})}),"\n",(0,o.jsx)(a.p,{children:"Ahora si removamos los adaptadores, puedes modificar, agregar par\xe1metros al script para mejorar."}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-bash",children:"# Quitar los adaptadores\nqiime cutadapt trim-paired --i-demultiplexed-sequences results/01_demux.qza --p-front-f CTCCTACGGGAGGCAGCAG --p-front-r CTTGTGCGGGCCCCCGTCAATTC --o-trimmed-sequences results/02_demux_clean_adapter.qza\n\n# Obtener archivo visualizable\nqiime demux summarize --i-data results/02_demux_clean_adapter.qza --o-visualization results/02_demux_clean_adapter.qzv\n"})}),"\n",(0,o.jsxs)(a.p,{children:["Observemos el archivo ",(0,o.jsx)(a.code,{children:"02_demux_clean_adapter.qzv"})," , \xbfqu\xe9 ocurri\xf3 con la calidad?"]})]})}function m(e={}){const{wrapper:a}={...(0,s.a)(),...e.components};return a?(0,o.jsx)(a,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},1151:(e,a,n)=>{n.d(a,{Z:()=>i,a:()=>r});var o=n(7294);const s={},t=o.createContext(s);function r(e){const a=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(t.Provider,{value:a},e.children)}}}]);