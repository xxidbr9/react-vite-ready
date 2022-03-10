import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    // alias: [
    //   { find: "@app", replacement: path.resolve(__dirname, 'src') },
    //   { find: "@assets/images", replacement: path.resolve(__dirname, 'src/assets/images') },
    //   { find: "@assets/scss", replacement: path.resolve(__dirname, 'src/assets/scss') },
    //   { find: "@assets/svg", replacement: path.resolve(__dirname, 'src/assets/svg') },
    //   { find: "@assets/font", replacement: path.resolve(__dirname, 'src/assets/font') },
    //   { find: "@components/atoms", replacement: path.resolve(__dirname, 'src/components/atoms') },
    //   { find: "@components/molecules", replacement: path.resolve(__dirname, 'src/components/molecules') },
    //   { find: "@components/organisms", replacement: path.resolve(__dirname, 'src/components/organisms') },
    //   { find: "@components/templates", replacement: path.resolve(__dirname, 'src/components/templates') },
    //   { find: "@styles", replacement: path.resolve(__dirname, '/src/styles') },
    //   { find: "@utils/constants", replacement: path.resolve(__dirname, 'src/utils/constants') },
    //   { find: "@utils/contexts", replacement: path.resolve(__dirname, 'src/utils/contexts') },
    //   { find: "@utils/mocks", replacement: path.resolve(__dirname, 'src/utils/mocks') },
    //   { find: "@utils/helpers", replacement: path.resolve(__dirname, 'src/utils/helpers') },
    //   { find: "@utils/hooks", replacement: path.resolve(__dirname, 'src/utils/hooks') },
    //   { find: "@utils/libs", replacement: path.resolve(__dirname, 'src/utils/lib') }
    // ]
    alias: {
      "@base/": `${path.resolve(__dirname, '')}/`,
      '@app/': `${path.resolve(__dirname, 'src')}/`,
      '@assets/': `${path.resolve(__dirname, 'src/assets')}/`,
      '@assets/scss/': `${path.resolve(__dirname, 'src/assets/scss')}/`,
      '@assets/svg/': `${path.resolve(__dirname, 'src/assets/svg')}/`,
      '@assets/font/': `${path.resolve(__dirname, 'src/assets/font')}/`,
      '@components/atoms/': `${path.resolve(__dirname, 'src/components/atoms')}/`,
      '@components/molecules/': `${path.resolve(__dirname, 'src/components/molecules')}/`,
      '@components/organisms/': `${path.resolve(__dirname, 'src/components/organisms')}/`,
      '@components/templates/': `${path.resolve(__dirname, 'src/components/templates')}/`,
      '@styles/': `${path.resolve(__dirname, '/src/styles')}/`,
      '@utils/constants/': `${path.resolve(__dirname, 'src/utils/constants')}/`,
      '@utils/contexts/': `${path.resolve(__dirname, 'src/utils/contexts')}/`,
      '@utils/mocks/': `${path.resolve(__dirname, 'src/utils/mocks')}/`,
      '@utils/helpers/': `${path.resolve(__dirname, 'src/utils/helpers')}/`,
      '@utils/hooks/': `${path.resolve(__dirname, 'src/utils/hooks')}/`,
      '@utils/libs/': `${path.resolve(__dirname, 'src/utils/lib')}/`
    }
  },
  plugins: [reactRefresh()]
})
