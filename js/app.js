/**
 * El laboratorio de Paint: pequeños artistas digitales
 * Controlador Principal de la Aplicación y Gestión de Estado
 */

class PaintLabApp {
  constructor() {
    this.studentName = '';
    this.challenges = [];
    this.currentChallengeId = null;
    this.tempUploadedImage = null;
    this.unsavedToFile = false;

    this.init();
  }

  init() {
    // 1. Inicializar lista de retos combinando datos pedagógicos
    this.challenges = CHALLENGES_DATA.map(c => ({
      ...c,
      completed: false,
      completedAt: null,
      image: null
    }));

    // 2. Cargar estado previo de localStorage si existe
    this.loadLocalState();

    // 3. Configurar eventos de interfaz
    this.setupEvents();

    // 4. Renderizar vista inicial
    if (this.studentName && this.studentName.trim().length > 0) {
      this.showScreen('dashboard');
    } else {
      this.showScreen('welcome');
    }

    this.updateDashboardUI();
    this.setupBeforeUnloadWarning();
  }

  /* ------------------- ESTADO Y ALMACENAMIENTO ------------------- */

  saveLocalState() {
    try {
      const state = {
        studentName: this.studentName,
        challenges: this.challenges.map(c => ({
          id: c.id,
          completed: c.completed,
          completedAt: c.completedAt,
          image: c.image
        }))
      };
      localStorage.setItem('paint_lab_state', JSON.stringify(state));
    } catch (e) {
      console.warn('No se pudo guardar en localStorage (posible límite de espacio):', e);
    }
  }

  loadLocalState() {
    try {
      const saved = localStorage.getItem('paint_lab_state');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.studentName) {
          this.studentName = parsed.studentName;
        }
        if (Array.isArray(parsed.challenges)) {
          parsed.challenges.forEach(savedItem => {
            const target = this.challenges.find(c => c.id === savedItem.id);
            if (target && savedItem.completed && savedItem.image) {
              target.completed = true;
              target.completedAt = savedItem.completedAt;
              target.image = savedItem.image;
            }
          });
        }
      }
    } catch (e) {
      console.warn('Error al leer de localStorage:', e);
    }
  }

  /* ------------------- NAVEGACIÓN ENTRE PANTALLAS ------------------- */

  showScreen(screenId) {
    document.querySelectorAll('.app-screen').forEach(el => {
      el.classList.add('hidden');
    });

    const target = document.getElementById(`screen-${screenId}`);
    if (target) {
      target.classList.remove('hidden');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    if (screenId === 'dashboard') {
      this.updateDashboardUI();
    } else if (screenId === 'museum') {
      const museumContainer = document.getElementById('museum-content');
      MuseumManager.renderMuseumDOM(museumContainer, this.studentName, this.challenges);
      if (this.getCompletedCount() === this.challenges.length) {
        soundManager.playFanfare();
      }
    }
  }

  /* ------------------- GESTIÓN DEL NOMBRE DEL ESTUDIANTE ------------------- */

  openNamePromptModal() {
    soundManager.playPop();
    const modal = document.getElementById('name-modal');
    const input = document.getElementById('input-student-name');
    input.value = this.studentName || '';
    modal.classList.remove('hidden');
    setTimeout(() => input.focus(), 150);
  }

  saveStudentNameFromModal() {
    const input = document.getElementById('input-student-name');
    const nameVal = (input.value || '').trim();

    if (!nameVal) {
      this.showToast('¡Por favor escribe tu nombre y apellido para comenzar!', 'error');
      input.focus();
      return;
    }

    this.studentName = nameVal;
    this.saveLocalState();
    this.closeModal('name-modal');
    soundManager.playSuccess();
    this.showScreen('dashboard');
    this.showToast(`¡Hola, ${this.studentName}! Bienvenido al laboratorio de Paint.`, 'success');
  }

  /* ------------------- ACTUALIZACIÓN DEL DASHBOARD ------------------- */

  getCompletedCount() {
    return this.challenges.filter(c => c.completed && c.image).length;
  }

  updateDashboardUI() {
    const completedCount = this.getCompletedCount();
    const totalCount = this.challenges.length;
    const percentage = Math.round((completedCount / totalCount) * 100);

    // Saludo
    const greetingEl = document.getElementById('dashboard-greeting');
    if (greetingEl) {
      greetingEl.innerHTML = `¡Hola, <strong class="student-highlight">${this.escapeHtml(this.studentName || 'Artista')}</strong>!`;
    }

    // Contadores
    const countEl = document.getElementById('progress-count-text');
    if (countEl) {
      countEl.textContent = `${completedCount} de ${totalCount} retos completados`;
    }

    const percentEl = document.getElementById('progress-percentage-badge');
    if (percentEl) {
      percentEl.textContent = `${percentage}%`;
    }

    const barEl = document.getElementById('progress-bar-fill');
    if (barEl) {
      barEl.style.width = `${percentage}%`;
    }

    // Botón de Museo
    const museumBtn = document.getElementById('btn-view-museum');
    const museumLockBadge = document.getElementById('museum-lock-badge');
    if (museumBtn) {
      if (completedCount === totalCount) {
        museumBtn.classList.remove('btn-locked');
        museumBtn.classList.add('btn-unlocked', 'btn-pulse');
        museumBtn.removeAttribute('disabled');
        if (museumLockBadge) museumLockBadge.innerHTML = `${ICONS.sparkles} ¡Museo Abierto!`;
      } else {
        museumBtn.classList.add('btn-locked');
        museumBtn.classList.remove('btn-unlocked', 'btn-pulse');
        if (museumLockBadge) museumLockBadge.innerHTML = `${ICONS.clock} Falta ${totalCount - completedCount} para abrir`;
      }
    }

    // Mensaje destacado cuando todo está listo
    const bannerSuccess = document.getElementById('all-complete-banner');
    if (bannerSuccess) {
      if (completedCount === totalCount) {
        bannerSuccess.classList.remove('hidden');
      } else {
        bannerSuccess.classList.add('hidden');
      }
    }

    // Renderizar tarjetas de retos
    this.renderChallengeCards();
  }

  renderChallengeCards() {
    const grid = document.getElementById('challenges-grid');
    if (!grid) return;

    grid.innerHTML = this.challenges.map(c => {
      const isDone = c.completed && c.image;
      const illustration = CHALLENGE_ILLUSTRATIONS[c.id] || '';

      return `
        <article class="challenge-card ${isDone ? 'is-completed' : 'is-pending'}" id="card-challenge-${c.id}">
          <header class="card-header">
            <span class="card-number-badge">Reto ${c.id}</span>
            <span class="card-status-pill ${isDone ? 'status-done' : 'status-pending'}">
              ${isDone ? `${ICONS.check} Completado` : `${ICONS.clock} Pendiente`}
            </span>
          </header>

          <div class="card-preview-zone" onclick="app.openChallengeModal(${c.id})">
            ${isDone ? `
              <div class="card-thumbnail-container">
                <img src="${c.image.dataUrl}" alt="Dibujo del ${c.title}" class="card-thumbnail-img" />
                <span class="thumbnail-overlay-zoom">${ICONS.eye} Ver obra</span>
              </div>
            ` : `
              <div class="card-illustration-placeholder">
                ${illustration}
              </div>
            `}
          </div>

          <div class="card-body">
            <h3 class="card-title">${c.title}</h3>
            <p class="card-desc">${c.instructions}</p>
            
            <div class="card-tools-list">
              <span class="tools-label">Herramientas:</span>
              <div class="tool-tags-wrapper">
                ${c.tools.map(t => `
                  <span class="tool-tag" title="${t.name}">
                    ${ICONS[t.icon] || ''} ${t.name}
                  </span>
                `).join('')}
              </div>
            </div>
          </div>

          <footer class="card-footer">
            <button class="btn ${isDone ? 'btn-outline' : 'btn-primary'} btn-block" onclick="app.openChallengeModal(${c.id})">
              ${isDone ? `${ICONS.edit} Ver / Cambiar dibujo` : `${ICONS.upload} Ver reto y subir dibujo`}
            </button>
          </footer>
        </article>
      `;
    }).join('');
  }

  /* ------------------- MODAL INDIVIDUAL DEL RETO ------------------- */

  openChallengeModal(challengeId) {
    soundManager.playPop();
    const challenge = this.challenges.find(c => c.id === challengeId);
    if (!challenge) return;

    this.currentChallengeId = challengeId;
    this.tempUploadedImage = challenge.image ? { ...challenge.image } : null;

    const modal = document.getElementById('challenge-modal');
    const headerTitle = document.getElementById('modal-challenge-title');
    const badgeCategory = document.getElementById('modal-challenge-category');
    const goalText = document.getElementById('modal-challenge-goal');
    const instructionsText = document.getElementById('modal-challenge-instructions');
    const toolsContainer = document.getElementById('modal-challenge-tools');
    const tipsList = document.getElementById('modal-challenge-tips');
    const refGuideText = document.getElementById('modal-challenge-ref');

    headerTitle.textContent = `Reto ${challenge.id}. ${challenge.title}`;
    badgeCategory.textContent = challenge.category;
    goalText.textContent = challenge.objective;
    instructionsText.textContent = challenge.instructions;
    refGuideText.textContent = challenge.referenceGuide;

    // Herramientas
    toolsContainer.innerHTML = challenge.tools.map(t => `
      <div class="tool-modal-pill">
        <span class="tool-icon">${ICONS[t.icon] || ''}</span>
        <span class="tool-name">${t.name}</span>
      </div>
    `).join('');

    // Consejos creativos
    tipsList.innerHTML = challenge.tips.map(tip => `
      <li><span class="tip-bullet">★</span> ${tip}</li>
    `).join('');

    // Actualizar zona de carga
    this.updateUploadZoneUI();

    modal.classList.remove('hidden');
  }

  updateUploadZoneUI() {
    const dropZone = document.getElementById('challenge-dropzone');
    const previewContainer = document.getElementById('upload-preview-container');
    const previewImg = document.getElementById('upload-preview-img');
    const filenameLabel = document.getElementById('upload-filename');
    const btnSubmit = document.getElementById('btn-confirm-challenge');

    if (this.tempUploadedImage) {
      dropZone.classList.add('hidden');
      previewContainer.classList.remove('hidden');
      previewImg.src = this.tempUploadedImage.dataUrl;
      filenameLabel.textContent = this.tempUploadedImage.originalName || this.tempUploadedImage.filename;
      btnSubmit.removeAttribute('disabled');
      btnSubmit.classList.add('btn-primary', 'btn-pulse');
      btnSubmit.classList.remove('btn-disabled');
    } else {
      dropZone.classList.remove('hidden');
      previewContainer.classList.add('hidden');
      previewImg.src = '';
      filenameLabel.textContent = '';
      btnSubmit.setAttribute('disabled', 'true');
      btnSubmit.classList.add('btn-disabled');
      btnSubmit.classList.remove('btn-primary', 'btn-pulse');
    }
  }

  handleImageFileSelected(imageObject) {
    this.tempUploadedImage = imageObject;
    this.updateUploadZoneUI();
    soundManager.playPop();
    this.showToast('¡Imagen cargada correctamente! Revisa la vista previa.', 'success');
  }

  confirmChallengeSubmission() {
    if (!this.tempUploadedImage) {
      this.showToast('Debes seleccionar un dibujo antes de completar el reto.', 'error');
      return;
    }

    const challenge = this.challenges.find(c => c.id === this.currentChallengeId);
    if (!challenge) return;

    const wasAlreadyCompleted = challenge.completed;

    challenge.image = { ...this.tempUploadedImage };
    challenge.completed = true;
    challenge.completedAt = new Date().toISOString();
    this.unsavedToFile = true;

    this.saveLocalState();
    this.closeModal('challenge-modal');
    this.updateDashboardUI();

    soundManager.playSuccess();

    if (typeof confetti === 'function') {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.7 }
      });
    }

    this.showToast(`¡Felicitaciones! Has completado el Reto ${challenge.id}: ${challenge.title}.`, 'success');

    // Verificar si completó todos los retos por primera vez
    if (this.getCompletedCount() === this.challenges.length && !wasAlreadyCompleted) {
      setTimeout(() => {
        soundManager.playFanfare();
        if (typeof confetti === 'function') {
          confetti({
            particleCount: 150,
            spread: 100,
            origin: { y: 0.5 }
          });
        }
        this.openCelebrationModal();
      }, 600);
    }
  }

  removeCurrentImage() {
    soundManager.playPop();
    this.tempUploadedImage = null;
    this.updateUploadZoneUI();
    // Limpiar el input de archivo
    const fileInput = document.getElementById('challenge-file-input');
    if (fileInput) fileInput.value = '';
  }

  /* ------------------- MODAL DE CELEBRACIÓN FINAL ------------------- */

  openCelebrationModal() {
    const modal = document.getElementById('celebration-modal');
    if (modal) {
      modal.classList.remove('hidden');
    }
  }

  /* ------------------- MODAL DEL TUTORIAL DE EXPORTACIÓN ------------------- */

  openTutorialModal() {
    soundManager.playPop();
    const modal = document.getElementById('tutorial-modal');
    const container = document.getElementById('tutorial-steps-container');

    const stepsData = [
      {
        num: 1,
        title: 'Termina tu dibujo',
        text: 'Abre Microsoft Paint y asegúrate de que tu dibujo esté terminado y con todos sus detalles listos.'
      },
      {
        num: 2,
        title: 'Abre el menú de guardado',
        text: 'Haz clic en la pestaña «Archivo» arriba a la izquierda y luego coloca el cursor sobre «Guardar como».'
      },
      {
        num: 3,
        title: 'Selecciona formato PNG',
        text: 'Elige la opción «Imagen PNG». Este formato conserva la mejor calidad y nitidez de tus trazos para tu museo.'
      },
      {
        num: 4,
        title: 'Escribe un nombre fácil de reconocer',
        text: 'Usa un nombre ordenado como «Reto_01_Mi_primera_casa.png» para saber qué dibujo es.'
      },
      {
        num: 5,
        title: 'Guarda en tu computador',
        text: 'Elige un lugar fácil de encontrar, como el Escritorio o la carpeta de tu clase de tecnología.'
      },
      {
        num: 6,
        title: 'Sube el dibujo al laboratorio',
        text: 'Abre el reto aquí en el navegador y arrastra tu archivo PNG a la zona de carga o haz clic en «Subir mi dibujo».'
      },
      {
        num: 7,
        title: 'Comprueba la vista previa',
        text: 'Revisa que tu dibujo se vea completo y presiona «Confirmar y completar reto» para guardarlo en tu colección.'
      }
    ];

    container.innerHTML = stepsData.map((step, idx) => `
      <div class="tutorial-step-card">
        <div class="step-badge">Paso ${step.num}</div>
        <div class="step-illustration">
          ${TUTORIAL_STEPS_SVGS[idx] || ''}
        </div>
        <h4 class="step-title">${step.title}</h4>
        <p class="step-text">${step.text}</p>
      </div>
    `).join('');

    modal.classList.remove('hidden');
  }

  /* ------------------- PROYECTO: GUARDAR Y CONTINUAR ------------------- */

  async handleExportProject() {
    soundManager.playPop();
    try {
      this.showToast('Generando tu archivo de proyecto...', 'info');
      const result = await ProjectManager.exportProject(this.studentName, this.challenges);
      this.unsavedToFile = false;
      soundManager.playSuccess();
      this.showToast(`¡Proyecto guardado con éxito! Se descargó ${result.filename}. Puedes llevarlo en tu USB o guardarlo en tu carpeta.`, 'success');
    } catch (err) {
      console.error(err);
      this.showToast('Hubo un problema al guardar el proyecto. Intenta de nuevo.', 'error');
    }
  }

  triggerImportProject() {
    soundManager.playPop();
    const fileInput = document.getElementById('input-project-file');
    if (fileInput) {
      fileInput.value = '';
      fileInput.click();
    }
  }

  async handleProjectFileSelected(e) {
    const file = e.target.files && e.target.files[0];
    if (!file) return;

    this.showToast('Leyendo tu proyecto...', 'info');

    try {
      const restored = await ProjectManager.importProject(file);

      // Aplicar al estado de la app
      this.studentName = restored.studentName || this.studentName;

      restored.restoredChallenges.forEach(r => {
        const target = this.challenges.find(c => c.id === r.id);
        if (target) {
          target.completed = r.completed;
          target.completedAt = r.completedAt;
          target.image = r.image;
        }
      });

      this.unsavedToFile = false;
      this.saveLocalState();
      this.updateDashboardUI();
      soundManager.playSuccess();

      if (typeof confetti === 'function') {
        confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
      }

      this.showToast(`¡Proyecto recuperado con éxito! Bienvenido de nuevo, ${this.studentName}. Se cargaron ${restored.completedCount} dibujos.`, 'success');

      // Si estábamos en pantalla de bienvenida, ir directo al dashboard
      this.showScreen('dashboard');

    } catch (err) {
      console.error(err);
      soundManager.playPop();
      this.showToast(err.message || 'No se pudo abrir el proyecto. Comprueba que sea un archivo .laboratoriopaint válido.', 'error');
    }
  }

  /* ------------------- CONFIRMACIÓN DE REINICIO ------------------- */

  confirmResetActivity() {
    soundManager.playPop();
    const conf = confirm('¿Estás seguro de que deseas reiniciar todos los retos? Si no has descargado tu archivo de proyecto, tus dibujos se borrarán de este computador.');
    if (conf) {
      this.challenges.forEach(c => {
        c.completed = false;
        c.completedAt = null;
        c.image = null;
      });
      this.studentName = '';
      this.unsavedToFile = false;
      localStorage.removeItem('paint_lab_state');
      this.updateDashboardUI();
      this.showScreen('welcome');
      this.showToast('Se ha reiniciado el laboratorio.', 'info');
    }
  }

  /* ------------------- CONFIGURACIÓN DE EVENTOS ------------------- */

  setupEvents() {
    // Sonido toggle
    const soundBtn = document.getElementById('btn-sound-toggle');
    if (soundBtn) {
      this.updateSoundBtnUI(soundBtn);
      soundBtn.addEventListener('click', () => {
        const isMuted = soundManager.toggleMute();
        this.updateSoundBtnUI(soundBtn);
        if (!isMuted) soundManager.playPop();
        this.showToast(isMuted ? 'Sonidos silenciados' : 'Sonidos activados', 'info');
      });
    }

    // Botones de pantalla de bienvenida
    const btnStart = document.getElementById('btn-start-adventure');
    if (btnStart) {
      btnStart.addEventListener('click', () => this.openNamePromptModal());
    }

    const btnResumeWelcome = document.getElementById('btn-resume-welcome');
    if (btnResumeWelcome) {
      btnResumeWelcome.addEventListener('click', () => this.triggerImportProject());
    }

    const btnTutorialWelcome = document.getElementById('btn-tutorial-welcome');
    if (btnTutorialWelcome) {
      btnTutorialWelcome.addEventListener('click', () => this.openTutorialModal());
    }

    // Modal de nombre
    const btnSaveName = document.getElementById('btn-save-name');
    if (btnSaveName) {
      btnSaveName.addEventListener('click', () => this.saveStudentNameFromModal());
    }
    const inputName = document.getElementById('input-student-name');
    if (inputName) {
      inputName.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') this.saveStudentNameFromModal();
      });
    }

    // Botones de Dashboard
    const btnEditName = document.getElementById('btn-edit-student-name');
    if (btnEditName) {
      btnEditName.addEventListener('click', () => this.openNamePromptModal());
    }

    const btnSaveProgress = document.getElementById('btn-save-progress');
    if (btnSaveProgress) {
      btnSaveProgress.addEventListener('click', () => this.handleExportProject());
    }

    const btnLoadProgress = document.getElementById('btn-load-progress');
    if (btnLoadProgress) {
      btnLoadProgress.addEventListener('click', () => this.triggerImportProject());
    }

    const btnViewMuseum = document.getElementById('btn-view-museum');
    if (btnViewMuseum) {
      btnViewMuseum.addEventListener('click', () => {
        soundManager.playPop();
        this.showScreen('museum');
      });
    }

    const btnTutorialHeader = document.getElementById('btn-tutorial-header');
    if (btnTutorialHeader) {
      btnTutorialHeader.addEventListener('click', () => this.openTutorialModal());
    }

    // Botón de confirmación de reto en modal
    const btnConfirmChallenge = document.getElementById('btn-confirm-challenge');
    if (btnConfirmChallenge) {
      btnConfirmChallenge.addEventListener('click', () => this.confirmChallengeSubmission());
    }

    const btnRemoveImg = document.getElementById('btn-remove-preview-img');
    if (btnRemoveImg) {
      btnRemoveImg.addEventListener('click', () => this.removeCurrentImage());
    }

    const btnReplaceImg = document.getElementById('btn-replace-preview-img');
    if (btnReplaceImg) {
      btnReplaceImg.addEventListener('click', () => {
        const fileInput = document.getElementById('challenge-file-input');
        if (fileInput) fileInput.click();
      });
    }

    // Input de proyecto oculto
    const inputProj = document.getElementById('input-project-file');
    if (inputProj) {
      inputProj.addEventListener('change', (e) => this.handleProjectFileSelected(e));
    }

    // Configurar Drag & Drop de reto
    const dropZone = document.getElementById('challenge-dropzone');
    const challengeFileInput = document.getElementById('challenge-file-input');
    if (dropZone && challengeFileInput) {
      UploadManager.setupDropZone(
        dropZone,
        challengeFileInput,
        (imgObj) => this.handleImageFileSelected(imgObj),
        (err) => {
          soundManager.playPop();
          this.showToast(err.message || 'Error con el archivo', 'error');
        }
      );
    }

    // Cerrar modales con tecla Escape
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        document.querySelectorAll('.modal-overlay:not(.hidden)').forEach(modal => {
          modal.classList.add('hidden');
        });
      }
    });
  }

  updateSoundBtnUI(btn) {
    if (!btn) return;
    const isMuted = soundManager.muted;
    btn.innerHTML = `${isMuted ? ICONS.soundOff : ICONS.soundOn} <span>${isMuted ? 'Activar sonido' : 'Silenciar'}</span>`;
    btn.setAttribute('title', isMuted ? 'Activar efectos de sonido' : 'Silenciar efectos de sonido');
  }

  closeModal(modalId) {
    soundManager.playPop();
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.add('hidden');
  }

  setupBeforeUnloadWarning() {
    window.addEventListener('beforeunload', (e) => {
      if (this.unsavedToFile && this.getCompletedCount() > 0) {
        e.preventDefault();
        e.returnValue = 'Tienes dibujos que aún no has descargado en tu archivo de proyecto (.laboratoriopaint). ¿Seguro que deseas salir?';
        return e.returnValue;
      }
    });
  }

  /* ------------------- NOTIFICACIONES TOAST AMIGABLES ------------------- */

  showToast(message, type = 'info') {
    const toastContainer = document.getElementById('toast-container');
    if (!toastContainer) return;

    const toast = document.createElement('div');
    toast.className = `toast-card toast-${type} toast-pop-in`;

    let iconSvg = ICONS.sparkles;
    if (type === 'success') iconSvg = ICONS.check;
    if (type === 'error') iconSvg = ICONS.alert;

    toast.innerHTML = `
      <span class="toast-icon">${iconSvg}</span>
      <span class="toast-text">${this.escapeHtml(message)}</span>
    `;

    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('toast-fade-out');
      setTimeout(() => {
        if (toast.parentElement) toast.parentElement.removeChild(toast);
      }, 350);
    }, 4500);
  }

  escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  window.app = new PaintLabApp();
});
