import js from '@eslint/js'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import globals from 'globals'

export default [
  // Ignore build/dist folder
  { ignores: ['dist', 'node_modules'] },

  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest', // Modern JS syntax
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      // Base recommended rules
      ...js.configs.recommended.rules,

      // React plugin recommended rules
      ...react.configs.recommended.rules,

      // React Hooks rules
      ...reactHooks.configs.recommended.rules,

      // React Refresh rules
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

      // Customize unused vars: ignore variables starting with uppercase or _
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],

      // Optional: Tailwind-specific linting (if you want)
      // Example: allow classnames like "bg-blue-500"
    },
    settings: {
      react: { version: 'detect' }, // Auto-detect React version
    },
  },
]
