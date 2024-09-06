"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[869],{2875:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>a,contentTitle:()=>n,default:()=>u,frontMatter:()=>d,metadata:()=>s,toc:()=>l});var i=o(5893),c=o(1151);const d={sidebar_position:8},n="Manipulaci\xf3n de directorios",s={id:"bash/directories_basics",title:"Manipulaci\xf3n de directorios",description:"Creaci\xf3n de directorios mkdir",source:"@site/docs/bash/directories_basics.md",sourceDirName:"bash",slug:"/bash/directories_basics",permalink:"/docs/bash/directories_basics",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Manipulaci\xf3n de archivos",permalink:"/docs/bash/files_basics"},next:{title:"Expresiones regulares y comodines",permalink:"/docs/bash/regular_expressions"}},a={},l=[{value:"Creaci\xf3n de directorios <code>mkdir</code>",id:"creaci\xf3n-de-directorios-mkdir",level:2},{value:"Crear un directorio dentro de otro",id:"crear-un-directorio-dentro-de-otro",level:2},{value:"Cambiar de directorio con <code>cd</code>",id:"cambiar-de-directorio-con-cd",level:2},{value:"Copiar directorios <code>cp -r</code>",id:"copiar-directorios-cp--r",level:2},{value:"Borrar directorios <code>rm -r</code>",id:"borrar-directorios-rm--r",level:2},{value:"Mover directorios <code>mv</code>",id:"mover-directorios-mv",level:2},{value:"Listar contenido de un directorio <code>ls</code>",id:"listar-contenido-de-un-directorio-ls",level:2}];function t(e){const r={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,c.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.h1,{id:"manipulaci\xf3n-de-directorios",children:"Manipulaci\xf3n de directorios"}),"\n",(0,i.jsxs)(r.h2,{id:"creaci\xf3n-de-directorios-mkdir",children:["Creaci\xf3n de directorios ",(0,i.jsx)(r.code,{children:"mkdir"})]}),"\n",(0,i.jsxs)(r.p,{children:["El comando ",(0,i.jsx)(r.code,{children:"mkdir"})," cuyo significado es \u201cmake directory\u201d nos permite crear un directorio. Por ejemplo, para poder crear un directorio llamado prueba podemos utilizar:"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-bash",children:"mkdir prueba\n"})}),"\n",(0,i.jsx)(r.p,{children:"Tambi\xe9n funciona para dos directorios al mismo tiempo:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-bash",children:"mkdir prueba_2 prueba_3\n"})}),"\n",(0,i.jsx)(r.h2,{id:"crear-un-directorio-dentro-de-otro",children:"Crear un directorio dentro de otro"}),"\n",(0,i.jsxs)(r.p,{children:["Creamos el directorio ",(0,i.jsx)(r.code,{children:"temporal"})," dentro del directorio genoma:"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-bash",children:"mkdir -p prueba/temporal\n"})}),"\n",(0,i.jsxs)(r.h2,{id:"cambiar-de-directorio-con-cd",children:["Cambiar de directorio con ",(0,i.jsx)(r.code,{children:"cd"})]}),"\n",(0,i.jsxs)(r.p,{children:["Para acceder a un directorio utilizamos el comando cd seguido del nombre del directorio. Para salir de un directorio utilizamos ",(0,i.jsx)(r.code,{children:"cd .."})," lo que nos lleva al directorio anterior"]}),"\n",(0,i.jsxs)(r.p,{children:["Entramos al directorio ",(0,i.jsx)(r.code,{children:"prueba"})]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-bash",children:"cd prueba/\n"})}),"\n",(0,i.jsxs)(r.p,{children:["Si estamos dentro de ",(0,i.jsx)(r.code,{children:"prueba"}),", lo siguiente nos llevar\xe1 un directorio atr\xe1s."]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-bash",children:"cd ..\n"})}),"\n",(0,i.jsx)(r.p,{children:"Tambi\xe9n podemos movernos de un directorio a otro usando la ruta absoluta o relativa:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-bash",children:"# Con ruta absoluta\ncd /mnt/luigui\n\n# Con ruta relativa\ncd ../\ncd luigui/\n"})}),"\n",(0,i.jsxs)(r.h2,{id:"copiar-directorios-cp--r",children:["Copiar directorios ",(0,i.jsx)(r.code,{children:"cp -r"})]}),"\n",(0,i.jsxs)(r.p,{children:["Al tratarse de un directorio agregamos el argumento ",(0,i.jsx)(r.code,{children:"-r"}),":"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-bash",children:"# cp -r <directorio> <destino>\ncp -r luigui Desktop/\n"})}),"\n",(0,i.jsxs)(r.h2,{id:"borrar-directorios-rm--r",children:["Borrar directorios ",(0,i.jsx)(r.code,{children:"rm -r"})]}),"\n",(0,i.jsxs)(r.p,{children:["Al igual que con archivos, para borrar un directorio podemos utilizar el comando ",(0,i.jsx)(r.code,{children:"rm"})," agregando ",(0,i.jsx)(r.code,{children:"-r"})," para indicar que es un directorio. Por ejemplo, podemos borrar el archivo Borramos el directorio ",(0,i.jsx)(r.code,{children:"temporal"}),":"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-bash",children:"rm -r temporal\n"})}),"\n",(0,i.jsxs)(r.h2,{id:"mover-directorios-mv",children:["Mover directorios ",(0,i.jsx)(r.code,{children:"mv"})]}),"\n",(0,i.jsx)(r.p,{children:"Renombrar el directorio genoma a genomas:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-bash",children:"mv prueba final \n"})}),"\n",(0,i.jsxs)(r.h2,{id:"listar-contenido-de-un-directorio-ls",children:["Listar contenido de un directorio ",(0,i.jsx)(r.code,{children:"ls"})]}),"\n",(0,i.jsxs)(r.p,{children:["Si estamos dentro de un directorio y queremos ver su contenido, utilizamos el comando ",(0,i.jsx)(r.code,{children:"ls"}),". Algunas de sus opciones de este comando son ",(0,i.jsx)(r.code,{children:"-l"}),", y ",(0,i.jsx)(r.code,{children:"-a"}),". Estas opciones acompa\xf1an al comando:"]}),"\n",(0,i.jsx)(r.p,{children:"Nos da un listado del archivo m\xe1s otras caracter\xedsticas entre ellas nombre del usuario que cre\xf3 el  archivo, fecha, tama\xf1o entre otros:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-bash",children:"ls -l\n"})}),"\n",(0,i.jsx)(r.p,{children:"Ordena los archivos por tiempo de modificaci\xf3n:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-bash",children:"ls -t\n"})}),"\n",(0,i.jsx)(r.p,{children:"Muestra todos los archivos incluso los ocultos:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-bash",children:"ls -a\n"})})]})}function u(e={}){const{wrapper:r}={...(0,c.a)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(t,{...e})}):t(e)}},1151:(e,r,o)=>{o.d(r,{Z:()=>s,a:()=>n});var i=o(7294);const c={},d=i.createContext(c);function n(e){const r=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:n(e.components),i.createElement(d.Provider,{value:r},e.children)}}}]);