/**
 * Sistema de Guardado y Recuperación de Proyectos (.laboratoriopaint)
 * Basado internamente en un archivo contenedor ZIP con JSON e imágenes binarias PNG.
 * 100% autónomo, procesado localmente en el navegador.
 */

const ProjectManager = {
  PROJECT_FORMAT: 'laboratorio-paint-project',
  PROJECT_VERSION: '1.0',
  FILE_EXTENSION: '.laboratoriopaint',

  /**
   * Genera y descarga el archivo de proyecto .laboratoriopaint
   */
  async exportProject(studentName, challengesState) {
    if (typeof JSZip === 'undefined') {
      throw new Error('La biblioteca interna de compresión no se encuentra disponible.');
    }

    const zip = new JSZip();
    const imagesFolder = zip.folder('images');

    // Construir metadatos limpios para project.json
    const manifest = {
      format: this.PROJECT_FORMAT,
      version: this.PROJECT_VERSION,
      software: 'El laboratorio de Paint: pequeños artistas digitales',
      studentName: studentName || 'Artista Anónimo',
      exportedAt: new Date().toISOString(),
      challenges: []
    };

    let totalCompleted = 0;

    for (const challenge of challengesState) {
      const challengeMeta = {
        id: challenge.id,
        title: challenge.title,
        completed: Boolean(challenge.completed),
        completedAt: challenge.completedAt || null,
        originalFilename: challenge.image ? challenge.image.originalName || challenge.image.filename : null,
        imagePath: null
      };

      if (challenge.completed && challenge.image && challenge.image.dataUrl) {
        totalCompleted++;
        const safeSlug = challenge.slug || `reto_${challenge.id}`;
        const imageFileName = `reto_${String(challenge.id).padStart(2, '0')}_${safeSlug}.png`;
        challengeMeta.imagePath = `images/${imageFileName}`;

        // Extraer base64 puro
        const commaIdx = challenge.image.dataUrl.indexOf(',');
        const base64Data = commaIdx !== -1 ? challenge.image.dataUrl.substring(commaIdx + 1) : challenge.image.dataUrl;

        imagesFolder.file(imageFileName, base64Data, { base64: true });
      }

      manifest.challenges.push(challengeMeta);
    }

    manifest.totalChallenges = challengesState.length;
    manifest.completedCount = totalCompleted;

    // Agregar el archivo project.json dentro del ZIP
    zip.file('project.json', JSON.stringify(manifest, null, 2));

    // Generar el Blob binario
    const zipBlob = await zip.generateAsync({
      type: 'blob',
      compression: 'DEFLATE',
      compressionOptions: { level: 6 }
    });

    // Descargar con nombre amigable
    const sanitizedName = (studentName || 'Mi_Proyecto')
      .trim()
      .replace(/[^a-zA-Z0-9áéíóúÁÉÍÓÚñÑ_ -]/g, '')
      .replace(/\s+/g, '_');

    const downloadFilename = `Laboratorio_Paint_${sanitizedName}${this.FILE_EXTENSION}`;
    this.downloadBlob(zipBlob, downloadFilename);

    return {
      filename: downloadFilename,
      completedCount: totalCompleted,
      timestamp: manifest.exportedAt
    };
  },

  /**
   * Carga y valida un archivo .laboratoriopaint o .zip seleccionado por el estudiante
   */
  async importProject(file) {
    if (!file) {
      throw {
        title: 'Ningún archivo seleccionado',
        message: 'Por favor selecciona un archivo con extensión .laboratoriopaint para continuar tu proyecto.'
      };
    }

    if (typeof JSZip === 'undefined') {
      throw {
        title: 'Error del sistema',
        message: 'No se pudo inicializar el lector de proyectos.'
      };
    }

    let zip;
    try {
      zip = await JSZip.loadAsync(file);
    } catch (err) {
      throw {
        title: 'Archivo no reconocido',
        message: 'El archivo seleccionado no es un proyecto válido o está dañado. Asegúrate de abrir un archivo .laboratoriopaint.'
      };
    }

    // Buscar project.json dentro del zip
    const projectJsonFile = zip.file('project.json');
    if (!projectJsonFile) {
      throw {
        title: 'Proyecto no compatible',
        message: 'Este archivo no contiene la información del Laboratorio de Paint.'
      };
    }

    let manifest;
    try {
      const manifestText = await projectJsonFile.async('text');
      manifest = JSON.parse(manifestText);
    } catch (e) {
      throw {
        title: 'Archivo dañado',
        message: 'No pudimos leer los datos del proyecto. El archivo parece estar incompleto.'
      };
    }

    if (manifest.format !== this.PROJECT_FORMAT) {
      throw {
        title: 'Formato incorrecto',
        message: 'Este archivo pertenece a otro tipo de aplicación y no es compatible con el Laboratorio de Paint.'
      };
    }

    // Extraer imágenes y reconstruir el estado
    const restoredChallenges = [];

    if (Array.isArray(manifest.challenges)) {
      for (const item of manifest.challenges) {
        let imageData = null;

        if (item.completed && item.imagePath) {
          const imgZipFile = zip.file(item.imagePath);
          if (imgZipFile) {
            try {
              const base64 = await imgZipFile.async('base64');
              imageData = {
                dataUrl: `data:image/png;base64,${base64}`,
                filename: item.originalFilename || `reto_${item.id}.png`,
                originalName: item.originalFilename || `reto_${item.id}.png`,
                mimeType: 'image/png'
              };
            } catch (err) {
              console.warn(`No se pudo leer la imagen de reto ${item.id}`, err);
            }
          }
        }

        restoredChallenges.push({
          id: item.id,
          title: item.title,
          completed: Boolean(item.completed && imageData),
          completedAt: item.completedAt || (imageData ? new Date().toISOString() : null),
          image: imageData
        });
      }
    }

    return {
      studentName: manifest.studentName || '',
      restoredChallenges,
      completedCount: restoredChallenges.filter(c => c.completed).length,
      savedAt: manifest.exportedAt
    };
  },

  /**
   * Descarga un Blob directamente en el navegador del usuario
   */
  downloadBlob(blob, filename) {
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => URL.revokeObjectURL(url), 2000);
  }
};

window.ProjectManager = ProjectManager;
