/**
 * Módulo del Museo Digital y Exportación a Imagen PNG de Alta Resolución
 * Renderiza la galería interactiva en pantalla y compone el póster final en Canvas.
 */

const MuseumManager = {
  /**
   * Renderiza la galería del museo en el DOM
   */
  renderMuseumDOM(containerElement, studentName, challengesState) {
    if (!containerElement) return;

    const totalCount = challengesState.length;
    const completedChallenges = challengesState.filter(c => c.completed && c.image);
    const missingChallenges = challengesState.filter(c => !c.completed || !c.image);

    if (completedChallenges.length < totalCount) {
      containerElement.innerHTML = `
        <div class="museum-locked-card">
          <div class="locked-icon-wrapper">
            ${ICONS.museum}
          </div>
          <h2>¡El museo aún no está listo para abrir sus puertas!</h2>
          <p class="locked-desc">
            Para inaugurar tu gran exposición debes completar los <strong>${totalCount} retos artísticos</strong>.
            Actualmente tienes <strong>${completedChallenges.length} de ${totalCount}</strong> obras en tu colección.
          </p>
          <div class="missing-challenges-list">
            <h3>Retos que te faltan por completar:</h3>
            <div class="missing-grid">
              ${missingChallenges.map(m => `
                <button class="missing-btn" onclick="app.openChallengeModal(${m.id})">
                  <span class="missing-num">Reto ${m.id}</span>
                  <span class="missing-title">${m.title}</span>
                  <span class="missing-arrow">Ir al reto →</span>
                </button>
              `).join('')}
            </div>
          </div>
          <button class="btn btn-primary btn-lg" onclick="app.showScreen('dashboard')">
            ${ICONS.back} Volver al panel de retos
          </button>
        </div>
      `;
      return;
    }

    // Museo completo listo para exhibición
    containerElement.innerHTML = `
      <div class="museum-exhibition">
        <header class="museum-header">
          <div class="museum-crest">
            ${ICONS.museum}
            <span>EL LABORATORIO DE PAINT</span>
          </div>
          <h1 class="museum-main-title">MUSEO DE ARTE DIGITAL</h1>
          <div class="museum-artist-banner">
            <span class="artist-label">ARTISTA:</span>
            <span class="artist-name">${this.escapeHtml(studentName || 'Pequeño Artista')}</span>
          </div>
          <p class="museum-collection-tag">
            Colección: <strong>Mis ${totalCount} retos creativos</strong> • Cuarto de primaria
          </p>
          
          <div class="museum-actions">
            <button id="btn-export-museum-png" class="btn btn-download-museum btn-xl">
              ${ICONS.download}
              <span>Descargar mi museo en PNG</span>
            </button>
            <button class="btn btn-secondary" onclick="app.showScreen('dashboard')">
              ${ICONS.back} Volver al panel
            </button>
          </div>

          <div class="museum-help-tip">
            ${ICONS.help}
            <span>¿Tienes problemas para descargar? Pide ayuda a tu profesor y toma una captura de pantalla completa donde se vean tu nombre y todas tus obras.</span>
          </div>
        </header>

        <main class="museum-art-grid">
          ${challengesState.map(challenge => `
            <article class="museum-frame-card">
              <div class="frame-outer">
                <div class="frame-matting">
                  <img src="${challenge.image.dataUrl}" alt="${this.escapeHtml(challenge.title)}" class="frame-artwork" loading="lazy" />
                </div>
              </div>
              <footer class="frame-plaque">
                <span class="plaque-number">Reto ${challenge.id}</span>
                <h4 class="plaque-title">${challenge.title}</h4>
                <span class="plaque-category">${challenge.category}</span>
              </footer>
            </article>
          `).join('')}
        </main>

        <footer class="museum-footer">
          <p class="museum-footer-text">
            ★ Creado por un pequeño artista digital de cuarto de primaria • Evidencia pedagógica de Microsoft Paint ★
          </p>
        </footer>
      </div>
    `;

    // Vincular botón de descarga
    const exportBtn = document.getElementById('btn-export-museum-png');
    if (exportBtn) {
      exportBtn.addEventListener('click', () => {
        this.generateAndDownloadPNG(studentName, challengesState);
      });
    }
  },

  /**
   * Genera el póster completo de alta resolución (2400 x 1650 px) en un Canvas y lo descarga
   */
  async generateAndDownloadPNG(studentName, challengesState) {
    soundManager.playPop();

    // Mostrar overlay de carga
    const loader = document.getElementById('export-loading-overlay');
    if (loader) loader.classList.remove('hidden');

    try {
      // 1. Cargar todas las 10 imágenes
      const imageObjects = await Promise.all(
        challengesState.map(c => this.loadImage(c.image.dataUrl))
      );

      // 2. Configurar Canvas de alta resolución para impresión / pantalla
      const width = 2400;
      const height = 1650;
      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');

      // Fondo de museo elegante
      ctx.fillStyle = '#f8fafc';
      ctx.fillRect(0, 0, width, height);

      // Marco perimetral sutil
      ctx.strokeStyle = '#e2e8f0';
      ctx.lineWidth = 12;
      ctx.strokeRect(30, 30, width - 60, height - 60);

      ctx.strokeStyle = '#0284c7';
      ctx.lineWidth = 4;
      ctx.strokeRect(46, 46, width - 92, height - 92);

      // Encabezado decorativo del museo
      const headerY = 70;

      // Barra superior
      ctx.fillStyle = '#0f172a';
      ctx.fillRect(50, headerY, width - 100, 150);

      // Título principal
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      ctx.fillStyle = '#38bdf8';
      ctx.font = 'bold 20px "Segoe UI", sans-serif';
      ctx.fillText('🏛  EL LABORATORIO DE PAINT  •  PEQUEÑOS ARTISTAS DIGITALES', width / 2, headerY + 36);

      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 44px "Segoe UI", sans-serif';
      ctx.fillText('MUSEO DE ARTE DIGITAL', width / 2, headerY + 84);

      ctx.fillStyle = '#cbd5e1';
      ctx.font = '500 20px "Segoe UI", sans-serif';
      ctx.fillText(`Colección: Mis ${challengesState.length} retos creativos • Evidencia de aprendizaje`, width / 2, headerY + 124);

      // Placa de artista
      const artistBarY = 236;
      ctx.fillStyle = '#eff6ff';
      ctx.fillRect(width / 2 - 400, artistBarY, 800, 60);
      ctx.strokeStyle = '#3b82f6';
      ctx.lineWidth = 3;
      ctx.strokeRect(width / 2 - 400, artistBarY, 800, 60);

      ctx.fillStyle = '#1e3a8a';
      ctx.font = 'bold 26px "Segoe UI", sans-serif';
      const cleanArtist = (studentName || 'Pequeño Artista Digital').trim();
      ctx.fillText(`ARTISTA: ${cleanArtist.toUpperCase()}`, width / 2, artistBarY + 30);

      // 3. Cuadrícula de obras: 2 columnas x 2 filas para 4 retos
      const totalArtworks = challengesState.length;
      const cols = totalArtworks === 4 ? 2 : (totalArtworks <= 3 ? totalArtworks : 5);
      const rows = Math.ceil(totalArtworks / cols);

      const gridLeft = totalArtworks === 4 ? 140 : 70;
      const gridTop = 325;
      const gridWidth = width - (gridLeft * 2);
      const gridHeight = 1200;

      const colGap = totalArtworks === 4 ? 40 : 24;
      const rowGap = totalArtworks === 4 ? 40 : 30;

      const cellWidth = (gridWidth - colGap * (cols - 1)) / cols;
      const cellHeight = (gridHeight - rowGap * (rows - 1)) / rows;

      for (let i = 0; i < totalArtworks; i++) {
        const c = challengesState[i];
        const img = imageObjects[i];

        const col = i % cols;
        const row = Math.floor(i / cols);

        const x = gridLeft + col * (cellWidth + colGap);
        const y = gridTop + row * (cellHeight + rowGap);

        // Marco de cuadro exterior
        ctx.fillStyle = '#ffffff';
        ctx.shadowColor = 'rgba(0, 0, 0, 0.15)';
        ctx.shadowBlur = 14;
        ctx.shadowOffsetY = 6;
        ctx.fillRect(x, y, cellWidth, cellHeight);
        ctx.shadowColor = 'transparent'; // Reset shadow

        // Borde elegante del cuadro
        ctx.strokeStyle = '#cbd5e1';
        ctx.lineWidth = 3;
        ctx.strokeRect(x, y, cellWidth, cellHeight);

        // Paspartú / Matting interior
        const mattePadding = 16;
        const artAreaX = x + mattePadding;
        const artAreaY = y + mattePadding;
        const artAreaWidth = cellWidth - mattePadding * 2;
        const artAreaHeight = cellHeight - 100; // espacio para la placa inferior

        ctx.fillStyle = '#f1f5f9';
        ctx.fillRect(artAreaX, artAreaY, artAreaWidth, artAreaHeight);
        ctx.strokeStyle = '#e2e8f0';
        ctx.lineWidth = 1;
        ctx.strokeRect(artAreaX, artAreaY, artAreaWidth, artAreaHeight);

        // Dibujar la obra conservando la proporción exacta (contain)
        if (img) {
          const imgAspect = img.width / img.height;
          const areaAspect = artAreaWidth / artAreaHeight;

          let drawW, drawH, drawX, drawY;

          if (imgAspect > areaAspect) {
            drawW = artAreaWidth;
            drawH = artAreaWidth / imgAspect;
            drawX = artAreaX;
            drawY = artAreaY + (artAreaHeight - drawH) / 2;
          } else {
            drawH = artAreaHeight;
            drawW = artAreaHeight * imgAspect;
            drawX = artAreaX + (artAreaWidth - drawW) / 2;
            drawY = artAreaY;
          }

          ctx.drawImage(img, drawX, drawY, drawW, drawH);
        }

        // Placa del reto inferior
        const plaqueY = y + cellHeight - 80;
        ctx.fillStyle = '#f8fafc';
        ctx.fillRect(x + 12, plaqueY, cellWidth - 24, 70);
        ctx.strokeStyle = '#e2e8f0';
        ctx.lineWidth = 1.5;
        ctx.strokeRect(x + 12, plaqueY, cellWidth - 24, 70);

        // Número de reto
        ctx.fillStyle = '#0284c7';
        ctx.font = 'bold 18px "Segoe UI", sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(`RETO ${c.id}`, x + cellWidth / 2, plaqueY + 20);

        // Título del reto (con ajuste si es largo)
        ctx.fillStyle = '#1e293b';
        ctx.font = 'bold 20px "Segoe UI", sans-serif';
        const displayTitle = c.title.length > 35 ? c.title.substring(0, 32) + '...' : c.title;
        ctx.fillText(displayTitle, x + cellWidth / 2, plaqueY + 42);

        // Herramientas / categoría breve
        ctx.fillStyle = '#64748b';
        ctx.font = '500 14px "Segoe UI", sans-serif';
        ctx.fillText(c.category || 'Microsoft Paint', x + cellWidth / 2, plaqueY + 58);
      }

      // 4. Pie de página del museo
      const footerY = height - 70;
      ctx.fillStyle = '#0f172a';
      ctx.fillRect(50, footerY, width - 100, 48);

      ctx.fillStyle = '#e2e8f0';
      ctx.font = 'bold 18px "Segoe UI", sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(
        '★ Creado por un pequeño artista digital de cuarto de primaria • Evidencia pedagógica de Microsoft Paint ★',
        width / 2,
        footerY + 24
      );

      // 5. Convertir a Blob PNG y descargar
      return await new Promise((resolve, reject) => {
        canvas.toBlob((blob) => {
          if (!blob) {
            const err = new Error('No se pudo generar la imagen del museo.');
            if (loader) loader.classList.add('hidden');
            reject(err);
            return;
          }

          const cleanFilename = cleanArtist.replace(/[^a-zA-Z0-9áéíóúÁÉÍÓÚñÑ_ -]/g, '').replace(/\s+/g, '_');
          ProjectManager.downloadBlob(blob, `Museo_Paint_${cleanFilename}.png`);

          soundManager.playSuccess();

          if (typeof confetti === 'function') {
            confetti({
              particleCount: 120,
              spread: 90,
              origin: { y: 0.6 }
            });
          }

          if (loader) loader.classList.add('hidden');
          if (window.app && typeof window.app.showToast === 'function') {
            window.app.showToast('¡Tu museo se ha descargado en PNG con éxito! Felicitaciones, artista.', 'success');
          }

          resolve(blob);
        }, 'image/png');
      });

    } catch (err) {
      console.error(err);
      if (loader) loader.classList.add('hidden');
      if (window.app && typeof window.app.showToast === 'function') {
        window.app.showToast('Hubo un problema al exportar el museo. Intenta nuevamente.', 'error');
      }
      throw err;
    }
  },

  loadImage(src) {
    return new Promise((resolve) => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => resolve(img);
      img.onerror = () => resolve(null);
      img.src = src;
    });
  },

  escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }
};

window.MuseumManager = MuseumManager;
