// 1. Librerías principales y de terceros (Core & Libraries)
import { createApp } from 'vue'
import * as TablerIcons from '@tabler/icons-vue'

// 2. Módulos locales de la aplicación (Router, Stores, Utils)
import router from './router'

// 3. Componente Raíz (Root Component)
import App from './App.vue'

// 4. Estilos globales (Siempre al final de los imports)
import './assets/main.css'

// --- Inicialización y Registro ---
const app = createApp(App)

// Registrar componentes globales (Íconos)
for (const [key, component] of Object.entries(TablerIcons)) {
  app.component(key, component)
}

// Usar plugins
app.use(router)

// Montar la aplicación
app.mount('#app')