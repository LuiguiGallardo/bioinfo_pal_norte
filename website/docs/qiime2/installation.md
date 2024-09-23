---
sidebar_position: 3
---

# Instalación de QIIME 2

**Requisitos previos:**
- Linux o macOS (QIIME 2 no es compatible con Windows, pero puedes usar una máquina virtual o un entorno basado en contenedores como Docker).
- Python 3.6 o superior.

**Pasos generales para la instalación:**

1. **Crear un entorno virtual (opcional pero recomendado):**
   - Crea un entorno virtual para QIIME 2 utilizando `conda`. Puedes instalar `conda` desde [Anaconda](https://www.anaconda.com/products/individual) o [Miniconda](https://docs.conda.io/en/latest/miniconda.html). Para instalar `conda` se pueden utilizar los siguientes comandos:

      ```bash
      curl -L -O "https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-$(uname)-$(uname -m).sh"

      bash Miniforge3-Linux-x86_64.sh

      source ~/.bashrc

      conda config --add channels bioconda

      conda config --add channels conda-forge
      ```

   - Ten en cuenta que "2024.5" es la versión específica de QIIME 2. Puedes verificar la versión más reciente en la [página de instalación de QIIME 2](https://docs.qiime2.org/2024.5/install/).

2. **Instalar QIIME 2:**
   - Utiliza el siguiente comando para instalar QIIME 2 en el entorno virtual que creaste.

      ```bash
      conda env create -n qiime2-amplicon-2024.5 --file https://data.qiime2.org/distro/amplicon/qiime2-amplicon-2024.5-py39-linux-conda.yml

      conda activate qiime2-amplicon-2024.5
      ```

   - Esto instalará la versión específica de QIIME 2 (2023.9) junto con las dependencias necesarias.

3. **Activar QIIME 2:**
   - Después de la instalación, activa el entorno QIIME 2.

     ```bash
     conda activate qiime2-amplicon-2024.5
     ```

4. **Verificar la instalación:**
   - Puedes verificar que QIIME 2 está instalado correctamente ejecutando el siguiente comando:
      
      ```bash
      qiime info
      ```

   - Esto debería mostrar la ayuda de QIIME 2.

Recuerda que estos pasos están basados en la información disponible hasta la última actualización disponible al 1 de Diciembre del 2023. Te recomiendo consultar la [documentación oficial de QIIME 2](https://docs.qiime2.org/2024.5/install/) para obtener la información más reciente sobre la instalación.