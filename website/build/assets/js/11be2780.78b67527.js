"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[197],{2531:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>t,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var s=n(5893),r=n(1151);const o={sidebar_position:5},a="Organizaci\xf3n de archivos y directorios en linux",c={id:"bash/file_tree",title:"Organizaci\xf3n de archivos y directorios en linux",description:'En Linux, la organizaci\xf3n de los directorios (equivalentes a carpetas o folders en Windows) sigue una jerarqu\xeda clara. Cada archivo o directorio creado en Linux estar\xe1 ubicado dentro de un directorio principal llamado "root" (ra\xedz), representado por el s\xedmbolo "/". Dentro del directorio "root", encontramos niveles que representan distintos directorios. Algunos de estos directorios tienen nombres predefinidos y contienen archivos esenciales para el funcionamiento adecuado del sistema, por lo que se recomienda no modificarlos.',source:"@site/docs/bash/file_tree.md",sourceDirName:"bash",slug:"/bash/file_tree",permalink:"/docs/bash/file_tree",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Comandos",permalink:"/docs/bash/man"},next:{title:"Rutas de acceso (pathname)",permalink:"/docs/bash/path"}},t={},d=[{value:"Tipos de archivos",id:"tipos-de-archivos",level:2},{value:"Organizaci\xf3n jer\xe1rquica de los directorios en Linux.",id:"organizaci\xf3n-jer\xe1rquica-de-los-directorios-en-linux",level:2}];function l(e){const i={code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{id:"organizaci\xf3n-de-archivos-y-directorios-en-linux",children:"Organizaci\xf3n de archivos y directorios en linux"}),"\n",(0,s.jsx)(i.p,{children:'En Linux, la organizaci\xf3n de los directorios (equivalentes a carpetas o folders en Windows) sigue una jerarqu\xeda clara. Cada archivo o directorio creado en Linux estar\xe1 ubicado dentro de un directorio principal llamado "root" (ra\xedz), representado por el s\xedmbolo "/". Dentro del directorio "root", encontramos niveles que representan distintos directorios. Algunos de estos directorios tienen nombres predefinidos y contienen archivos esenciales para el funcionamiento adecuado del sistema, por lo que se recomienda no modificarlos.'}),"\n",(0,s.jsx)(i.p,{children:"Linux organiza sus directorios de la siguiente manera:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"/bin:"})," Contiene comandos y utilidades esenciales."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"/dev:"})," Almacena archivos de dispositivos conectados al sistema."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"/etc:"})," Incluye comandos y archivos utilizados en la administraci\xf3n del sistema."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"/lib:"})," Contiene bibliotecas compartidas utilizadas por diversos programas o lenguajes."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"/proc:"})," Ofrece informaci\xf3n detallada sobre los procesos en ejecuci\xf3n."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"/tmp:"})," Guarda archivos temporales creados por algunos programas."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"/usr:"})," Alberga aplicaciones instaladas por el usuario."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"/home:"})," Es el directorio personal de cada usuario, donde se encuentran archivos, m\xfasica, videos, etc."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"tipos-de-archivos",children:"Tipos de archivos"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Archivos regulares:"})," Tambi\xe9n conocidos como archivos de texto, este documento, por ejemplo, ser\xeda un archivo regular."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Archivos ejecutables:"})," Se refiere a programas, tambi\xe9n conocidos como scripts, que ejecutan tareas espec\xedficas."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Directorios:"}),' Tambi\xe9n denominados folders o carpetas. Utilizaremos el t\xe9rmino "directorios" para referirnos a ellos.']}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"Es relevante tener en cuenta que en Linux, la premisa fundamental es que todo es tratado como un archivo."}),"\n",(0,s.jsx)(i.h2,{id:"organizaci\xf3n-jer\xe1rquica-de-los-directorios-en-linux",children:"Organizaci\xf3n jer\xe1rquica de los directorios en Linux."}),"\n",(0,s.jsxs)(i.p,{children:["Siguiendo el siguiente \xe1rbol, el directorio ",(0,s.jsx)(i.code,{children:"mthomas"})," est\xe1 dentro del directorio ",(0,s.jsx)(i.code,{children:"home"})," que a su vez esta dentro del directorio ra\xedz."]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Files tree",src:n(8029).Z+"",width:"1000",height:"625"})})]})}function u(e={}){const{wrapper:i}={...(0,r.a)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8029:(e,i,n)=>{n.d(i,{Z:()=>s});const s=n.p+"assets/images/files_tree-3c35c95237ac47f788c57380b1a23a63.png"},1151:(e,i,n)=>{n.d(i,{Z:()=>c,a:()=>a});var s=n(7294);const r={},o=s.createContext(r);function a(e){const i=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(o.Provider,{value:i},e.children)}}}]);