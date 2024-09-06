"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[683],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"category","label":"bash","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Introducci\xf3n Bash","href":"/docs/bash/intro","docId":"bash/intro","unlisted":false},{"type":"link","label":"L\xednea de comandos","href":"/docs/bash/characteristics","docId":"bash/characteristics","unlisted":false},{"type":"link","label":"Conexi\xf3n con ssh y sftp","href":"/docs/bash/ssh_sftp","docId":"bash/ssh_sftp","unlisted":false},{"type":"link","label":"Comandos","href":"/docs/bash/man","docId":"bash/man","unlisted":false},{"type":"link","label":"Organizaci\xf3n de archivos y directorios en linux","href":"/docs/bash/file_tree","docId":"bash/file_tree","unlisted":false},{"type":"link","label":"Rutas de acceso (pathname)","href":"/docs/bash/path","docId":"bash/path","unlisted":false},{"type":"link","label":"Manipulaci\xf3n de archivos","href":"/docs/bash/files_basics","docId":"bash/files_basics","unlisted":false},{"type":"link","label":"Manipulaci\xf3n de directorios","href":"/docs/bash/directories_basics","docId":"bash/directories_basics","unlisted":false},{"type":"link","label":"Expresiones regulares y comodines","href":"/docs/bash/regular_expressions","docId":"bash/regular_expressions","unlisted":false},{"type":"link","label":"Cambiar permisos con chmod","href":"/docs/bash/chmod","docId":"bash/chmod","unlisted":false},{"type":"link","label":"Editor de texto nano","href":"/docs/bash/nano","docId":"bash/nano","unlisted":false},{"type":"link","label":"Visualizaci\xf3n de archivos","href":"/docs/bash/files_visualization","docId":"bash/files_visualization","unlisted":false},{"type":"link","label":"Comando cut","href":"/docs/bash/cut","docId":"bash/cut","unlisted":false},{"type":"link","label":"Comando grep","href":"/docs/bash/grep","docId":"bash/grep","unlisted":false},{"type":"link","label":"Comando sed","href":"/docs/bash/sed","docId":"bash/sed","unlisted":false},{"type":"link","label":"Comando sort","href":"/docs/bash/sort","docId":"bash/sort","unlisted":false},{"type":"link","label":"Redirecci\xf3n de salida y tuber\xedas","href":"/docs/bash/stdoutput_pipes","docId":"bash/stdoutput_pipes","unlisted":false},{"type":"link","label":"Creaci\xf3n de un script","href":"/docs/bash/script","docId":"bash/script","unlisted":false},{"type":"link","label":"Ejercicios de pr\xe1ctica","href":"/docs/bash/exercise","docId":"bash/exercise","unlisted":false}]},{"type":"category","label":"qiime2","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Introducci\xf3n QIIME 2","href":"/docs/qiime2/intro","docId":"qiime2/intro","unlisted":false},{"type":"link","label":"Formatos comunes de secuencias","href":"/docs/qiime2/fasta_fastq","docId":"qiime2/fasta_fastq","unlisted":false},{"type":"link","label":"Instalaci\xf3n de QIIME 2","href":"/docs/qiime2/installation","docId":"qiime2/installation","unlisted":false},{"type":"link","label":"Documentos iniciales","href":"/docs/qiime2/qiime2_files","docId":"qiime2/qiime2_files","unlisted":false},{"type":"link","label":"Remoci\xf3n de adaptadores","href":"/docs/qiime2/adapters","docId":"qiime2/adapters","unlisted":false},{"type":"link","label":"Denoising","href":"/docs/qiime2/denoising","docId":"qiime2/denoising","unlisted":false},{"type":"link","label":"Asignaci\xf3n taxon\xf3mica","href":"/docs/qiime2/taxonomy","docId":"qiime2/taxonomy","unlisted":false},{"type":"link","label":"Diversidad alfa","href":"/docs/qiime2/adiv","docId":"qiime2/adiv","unlisted":false},{"type":"link","label":"Diversidad beta","href":"/docs/qiime2/bdiv","docId":"qiime2/bdiv","unlisted":false}]}]},"docs":{"bash/characteristics":{"id":"bash/characteristics","title":"L\xednea de comandos","description":"Shell","sidebar":"tutorialSidebar"},"bash/chmod":{"id":"bash/chmod","title":"Cambiar permisos con chmod","description":"Cuando examinamos el contenido de un directorio mediante el comando ls -l, notamos que la salida se organiza en siete columnas. Nos centraremos en detallar la primera columna (observar la siguiente imagen), que proporciona informaci\xf3n crucial sobre los permisos de los archivos. Estos permisos determinan la capacidad de los usuarios para leer (read), modificar (write) y ejecutar los archivos. Esta informaci\xf3n se vuelve especialmente relevante en entornos de servidores compartidos, donde se busca otorgar permisos espec\xedficos a usuarios particulares. En tales entornos, es com\xfan encontrar grupos de trabajo que comparten permisos sobre archivos espec\xedficos. Adem\xe1s, existe la posibilidad de otorgar permisos a todos los usuarios, permiti\xe9ndoles modificar los archivos seg\xfan sea necesario.","sidebar":"tutorialSidebar"},"bash/cut":{"id":"bash/cut","title":"Comando cut","description":"Su funcionalidad principal es recortar y mostrar partes seleccionadas del contenido de un archivo o de la salida de otros comandos, utilizando delimitadores o posiciones espec\xedficas. cut es \xfatil para manipular y trabajar con datos tabulares o estructurados, donde es necesario extraer informaci\xf3n espec\xedfica.","sidebar":"tutorialSidebar"},"bash/directories_basics":{"id":"bash/directories_basics","title":"Manipulaci\xf3n de directorios","description":"Creaci\xf3n de directorios mkdir","sidebar":"tutorialSidebar"},"bash/exercise":{"id":"bash/exercise","title":"Ejercicios de pr\xe1ctica","description":"Ejercicio 1: Listar y contar archivos","sidebar":"tutorialSidebar"},"bash/file_tree":{"id":"bash/file_tree","title":"Organizaci\xf3n de archivos y directorios en linux","description":"En Linux, la organizaci\xf3n de los directorios (equivalentes a carpetas o folders en Windows) sigue una jerarqu\xeda clara. Cada archivo o directorio creado en Linux estar\xe1 ubicado dentro de un directorio principal llamado \\"root\\" (ra\xedz), representado por el s\xedmbolo \\"/\\". Dentro del directorio \\"root\\", encontramos niveles que representan distintos directorios. Algunos de estos directorios tienen nombres predefinidos y contienen archivos esenciales para el funcionamiento adecuado del sistema, por lo que se recomienda no modificarlos.","sidebar":"tutorialSidebar"},"bash/files_basics":{"id":"bash/files_basics","title":"Manipulaci\xf3n de archivos","description":"Creaci\xf3n de archivos vac\xedos con touch","sidebar":"tutorialSidebar"},"bash/files_visualization":{"id":"bash/files_visualization","title":"Visualizaci\xf3n de archivos","description":"Si bien podemos visualizar los archivos con nano, si no deseamos editar el archivo, queremos ver una fracci\xf3n del archivo o es un archivo peque\xf1o que queremos visualizar, podemos utilizar less, more y cat.","sidebar":"tutorialSidebar"},"bash/grep":{"id":"bash/grep","title":"Comando grep","description":"El comando grep es una poderosa herramienta de b\xfasqueda de patrones en archivos o en la salida de otros comandos en sistemas Unix y Linux. Aqu\xed tienes una explicaci\xf3n del comando grep con ejemplos:","sidebar":"tutorialSidebar"},"bash/intro":{"id":"bash/intro","title":"Introducci\xf3n Bash","description":"Este curso ha sido cuidadosamente dise\xf1ado con el prop\xf3sito de familiarizar a los participantes con los fundamentos de UNIX/LINUX, proporcionando las habilidades necesarias para la manipulaci\xf3n efectiva de directorios y archivos, as\xed como su contenido. El conocimiento adquirido a trav\xe9s de este curso representa el primer paso esencial para desarrollar competencias en el manejo de software y la edici\xf3n de archivos, facilitando as\xed el an\xe1lisis de datos a trav\xe9s de la l\xednea de comandos.","sidebar":"tutorialSidebar"},"bash/man":{"id":"bash/man","title":"Comandos","description":"Un comando representa el nombre de un programa particular, cada uno con una tarea espec\xedfica. Por ejemplo, al introducir el comando date en la terminal, obtendremos la fecha y la hora actuales. Es crucial tener en cuenta que los comandos pueden tener opciones, las cuales se a\xf1aden precediendo al nombre del comando.","sidebar":"tutorialSidebar"},"bash/nano":{"id":"bash/nano","title":"Editor de texto nano","description":"Nano es un editor de texto en modo de terminal, dise\xf1ado para ser simple y f\xe1cil de usar, especialmente para usuarios novatos o aquellos que prefieren una interfaz m\xe1s intuitiva. Algunas caracter\xedsticas clave de Nano incluyen:","sidebar":"tutorialSidebar"},"bash/path":{"id":"bash/path","title":"Rutas de acceso (pathname)","description":"Cualquier archivo que se cree, estar\xe1 almacenado en alguno de los subdirectorios del directorio ra\xedz.","sidebar":"tutorialSidebar"},"bash/regular_expressions":{"id":"bash/regular_expressions","title":"Expresiones regulares y comodines","description":"Las expresiones regulares (regex) en Bash son patrones de b\xfasqueda utilizados para encontrar y manipular cadenas de texto de manera eficiente. Aqu\xed hay una breve introducci\xf3n junto con algunos ejemplos b\xe1sicos:","sidebar":"tutorialSidebar"},"bash/script":{"id":"bash/script","title":"Creaci\xf3n de un script","description":"Un script se define como un conjunto de instrucciones en c\xf3digo de programaci\xf3n. Este c\xf3digo contiene una secuencia de comandos u \xf3rdenes que se ejecutan de manera secuencial, y generalmente se utilizan para dirigir un flujo de trabajo o controlar el comportamiento de programas. Durante la ejecuci\xf3n, los comandos dentro del script son interpretados por un int\xe9rprete, el cual se encarga de ejecutar las instrucciones. En el entorno Unix, estos scripts suelen llevar la extensi\xf3n .sh.","sidebar":"tutorialSidebar"},"bash/sed":{"id":"bash/sed","title":"Comando sed","description":"El comando sed (Stream Editor) es una herramienta poderosa para la manipulaci\xf3n de texto en sistemas Unix y Linux. Se utiliza para realizar ediciones en el flujo de texto, ya sea leyendo desde un archivo o mediante la entrada est\xe1ndar.","sidebar":"tutorialSidebar"},"bash/sort":{"id":"bash/sort","title":"Comando sort","description":"El comando sort en sistemas Unix y Linux se utiliza para ordenar l\xedneas de texto en un archivo o desde la entrada est\xe1ndar.","sidebar":"tutorialSidebar"},"bash/ssh_sftp":{"id":"bash/ssh_sftp","title":"Conexi\xf3n con ssh y sftp","description":"SSH (Secure Shell):","sidebar":"tutorialSidebar"},"bash/stdoutput_pipes":{"id":"bash/stdoutput_pipes","title":"Redirecci\xf3n de salida y tuber\xedas","description":"Redirecci\xf3n de Salidas","sidebar":"tutorialSidebar"},"qiime2/adapters":{"id":"qiime2/adapters","title":"Remoci\xf3n de adaptadores","description":"Como no hemos hecho ning\xfan preprocesamiento a los datos y sabemos que nuestras secuencias tienen adaptadores, los removeremos con cutadapt dentro de QIIME2.","sidebar":"tutorialSidebar"},"qiime2/adiv":{"id":"qiime2/adiv","title":"Diversidad alfa","description":"La diversidad alfa se refiere a la diversidad dentro de un h\xe1bitat o una comunidad en particular. Esta puede ser contrastada entre condiciones, como grupos, h\xe1bitats, etc. Se utilizan diferentes m\xe9tricas para medir la diversidad alfa, como la riqueza de especies (n\xfamero total de especies presentes), la equidad (c\xf3mo est\xe1n distribuidas las abundancias de las especies), y otros \xedndices m\xe1s complejos que tienen en cuenta la abundancia relativa y la rareza de las especies. Mientras mayor sea la diversidad alfa, es probable que la comunidad sea m\xe1s resiliente a cambios ambientales y biol\xf3gicos.","sidebar":"tutorialSidebar"},"qiime2/bdiv":{"id":"qiime2/bdiv","title":"Diversidad beta","description":"La diversidad beta se refiere a la variabilidad en composici\xf3n de especies entre diferentes h\xe1bitats. Se utiliza para cuantificar la heterogeneidad o similitud biol\xf3gica entre diferentes comunidades o muestras. Los m\xe9todos de an\xe1lisis de diversidad beta pueden incluir el c\xe1lculo de \xedndices de disimilitud, como el \xedndice de Jaccard o el \xedndice de Bray-Curtis, y la representaci\xf3n gr\xe1fica de relaciones entre muestras mediante an\xe1lisis de coordenadas principales (PCoA) o an\xe1lisis de clasificaci\xf3n. La diversidad beta complementa la diversidad alfa (diversidad dentro de una comunidad) proporcionando informaci\xf3n sobre c\xf3mo las comunidades biol\xf3gicas difieren entre s\xed en diferentes ubicaciones o condiciones.","sidebar":"tutorialSidebar"},"qiime2/denoising":{"id":"qiime2/denoising","title":"Denoising","description":"Antes de comenzar el denoising , veamos la ayuda.","sidebar":"tutorialSidebar"},"qiime2/fasta_fastq":{"id":"qiime2/fasta_fastq","title":"Formatos comunes de secuencias","description":"Formato FASTQ","sidebar":"tutorialSidebar"},"qiime2/installation":{"id":"qiime2/installation","title":"Instalaci\xf3n de QIIME 2","description":"Requisitos previos:","sidebar":"tutorialSidebar"},"qiime2/intro":{"id":"qiime2/intro","title":"Introducci\xf3n QIIME 2","description":"Qiime2 (Quantitative Insights Into Microbial Ecology) es un pipeline desarrollado para el an\xe1lisis de metataxonom\xeda (Bolyen et al., 2019). Contiene herramientas para limpiar secuencias, agrupar, asignar taxonom\xeda, reconstruir filogenias, inferir m\xe9tricas de diversidad, abundancia diferencial, etc. Es de c\xf3digo abierto, posee una interfaz gr\xe1fica amigable, mucha documentaci\xf3n, tutoriales y foros de ayuda.","sidebar":"tutorialSidebar"},"qiime2/qiime2_files":{"id":"qiime2/qiime2_files","title":"Documentos iniciales","description":"Datos crudos","sidebar":"tutorialSidebar"},"qiime2/taxonomy":{"id":"qiime2/taxonomy","title":"Asignaci\xf3n taxon\xf3mica","description":"Utilizaremos sklearn para realizar la asignaci\xf3n taxon\xf3mica, por lo tanto utilizaremos una base de datos preentrenada. La puedes encontrar aqu\xed.","sidebar":"tutorialSidebar"}}}')}}]);