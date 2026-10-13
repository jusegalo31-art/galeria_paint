/**
 * Sistema de Carga, Validación y Normalización de Dibujos
 * Procesa localmente en el navegador, valida archivos y normaliza a PNG.
 */

const UploadManager = {
  MAX_FILE_SIZE_BYTES: 15 * 1024 * 1024, // 15 Megabytes
  ALLOWED_MIME_TYPES: ['image/png', 'image/jpeg', 'image/jpg', 'image/webp'],

  /**
   * Valida y procesa un archivo subido por el estudiante.
   * Devuelve una promesa con el objeto de la imagen normalizada a PNG.
   */
  processFile(file) {
    return new Promise((resolve, reject) => {
      if (!file) {
        return reject({
          title: 'Archivo no encontrado',
          message: 'Por favor selecciona un dibujo guardado desde Paint.'
        });
      }

      // 1. Validar extensión y tipo MIME
      const name = file.name.toLowerCase();
      const isImageExtension = name.endsWith('.png') || name.endsWith('.jpg') || name.endsWith('.jpeg') || name.endsWith('.webp');
      const isAllowedMime = this.ALLOWED_MIME_TYPES.includes(file.type) || (file.type === '' && isImageExtension);

      if (!isAllowedMime && !isImageExtension) {
        return reject({
          title: 'Formato no compatible',
          message: 'Recuerda que debes subir una imagen PNG o JPG exportada desde Paint. No se admiten documentos, ejecutables u otros archivos.'
        });
      }

      // 2. Validar tamaño máximo
      if (file.size > this.MAX_FILE_SIZE_BYTES) {
        return reject({
          title: 'Archivo muy grande',
          message: 'El dibujo pesa más de 15 MB. En Paint, guárdalo como imagen estándar para que no ocupe tanto espacio.'
        });
      }

      // 3. Leer archivo como Data URL
      const reader = new FileReader();

      reader.onerror = () => {
        reject({
          title: 'Error al leer el archivo',
          message: 'El navegador no pudo abrir este archivo. Intenta guardarlo nuevamente desde Paint.'
        });
      };

      reader.onload = (e) => {
        const rawDataUrl = e.target.result;

        // 4. Cargar en un elemento Image para verificar que sea una imagen real y convertir a PNG estándar
        const img = new Image();
        img.onerror = () => {
          reject({
            title: 'Imagen dañada',
            message: 'El archivo seleccionado no es una imagen válida o está dañado. Abre tu dibujo en Paint y vuelve a guardarlo como PNG.'
          });
        };

        img.onload = () => {
          if (img.width < 10 || img.height < 10) {
            return reject({
              title: 'Imagen demasiado pequeña',
              message: 'El dibujo parece estar vacío o mide menos de 10 píxeles. Revisa tu dibujo en Paint.'
            });
          }

          try {
            // Normalizar siempre a PNG de alta fidelidad usando un canvas en memoria
            const canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext('2d');
            
            // Fondo blanco en caso de que contenga transparencias accidentales
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, 0, 0);

            const pngDataUrl = canvas.toDataURL('image/png', 0.95);

            resolve({
              dataUrl: pngDataUrl,
              filename: file.name.replace(/\.[^/.]+$/, "") + ".png",
              originalName: file.name,
              mimeType: 'image/png',
              width: img.width,
              height: img.height,
              sizeBytes: file.size,
              uploadedAt: new Date().toISOString()
            });
          } catch (err) {
            // Si hay error en canvas, devolvemos el rawDataUrl si es PNG
            resolve({
              dataUrl: rawDataUrl,
              filename: file.name,
              originalName: file.name,
              mimeType: 'image/png',
              width: img.width,
              height: img.height,
              sizeBytes: file.size,
              uploadedAt: new Date().toISOString()
            });
          }
        };

        img.src = rawDataUrl;
      };

      reader.readAsDataURL(file);
    });
  },

  /**
   * Configura una zona de arrastrar y soltar (Drag and Drop)
   */
  setupDropZone(zoneElement, fileInputElement, onFileReady, onError) {
    if (!zoneElement || !fileInputElement) return;

    const preventDefaults = (e) => {
      e.preventDefault();
      e.stopPropagation();
    };

    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
      zoneElement.addEventListener(eventName, preventDefaults, false);
    });

    ['dragenter', 'dragover'].forEach(eventName => {
      zoneElement.addEventListener(eventName, () => {
        zoneElement.classList.add('drag-active');
      }, false);
    });

    ['dragleave', 'drop'].forEach(eventName => {
      zoneElement.addEventListener(eventName, () => {
        zoneElement.classList.remove('drag-active');
      }, false);
    });

    zoneElement.addEventListener('drop', (e) => {
      const dt = e.dataTransfer;
      const files = dt.files;
      if (files && files.length > 0) {
        soundManager.playPop();
        this.processFile(files[0])
          .then(onFileReady)
          .catch(onError);
      }
    });

    fileInputElement.addEventListener('change', (e) => {
      const files = e.target.files;
      if (files && files.length > 0) {
        soundManager.playPop();
        this.processFile(files[0])
          .then(onFileReady)
          .catch(onError);
      }
    });
  }
};

window.UploadManager = UploadManager;
