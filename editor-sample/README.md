# Email Builder Inclusio

A powerful and flexible email builder component for React applications. This library provides a complete email template builder interface with a rich set of features and customization options.

## Features

- 🎨 Modern and intuitive user interface
- 📦 Rich set of email building blocks:
  - Avatar
  - Button
  - Columns Container
  - Container
  - Divider
  - Heading
  - HTML
  - Image
  - Spacer
  - Text
- 🔍 Inspector panel for detailed editing
- 📚 Template samples library
- 🎯 TypeScript support
- 🎨 Material-UI theming support

## Installation

Since this is a private package, you'll need to install it directly from Git. Add the following to your project's `package.json`:

```json
{
  "dependencies": {
    "email-builder-inclusio": "git+https://github.com/YOUR_USERNAME/email-builder-js.git#main:editor-sample"
  }
}
```

Then run:
```bash
npm install
```

Alternatively, you can install it directly using npm:
```bash
npm install git+https://github.com/YOUR_USERNAME/email-builder-js.git#main:editor-sample
```

Note: The `:editor-sample` suffix in the URL tells npm to look for the package.json in the `editor-sample` directory.

### Peer Dependencies

This library requires the following peer dependencies to be installed in your project:

```bash
npm install react react-dom @mui/material @emotion/react @emotion/styled
```

## Usage

### Basic Usage

```tsx
import { EmailBuilder } from 'email-builder-inclusio';

function MyComponent() {
  const handleSave = (data: any) => {
    console.log('Email template data:', data);
  };

  return (
    <EmailBuilder 
      onSave={handleSave}
      initialData={/* your initial template data */}
    />
  );
}
```

### Props

The `EmailBuilder` component accepts the following props:

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| onSave | `(data: any) => void` | No | Callback function that receives the template data when saved |
| initialData | `any` | No | Initial template data to populate the builder |

### Example with TypeScript

```tsx
import { EmailBuilder, EmailBuilderProps } from 'email-builder-inclusio';

interface MyComponentProps {
  onTemplateSave: (data: any) => void;
}

const MyComponent: React.FC<MyComponentProps> = ({ onTemplateSave }) => {
  const initialTemplate = {
    // Your initial template structure
  };

  return (
    <div style={{ height: '100vh' }}>
      <EmailBuilder
        onSave={onTemplateSave}
        initialData={initialTemplate}
      />
    </div>
  );
};
```

### Custom Styling

The component uses Material-UI theming. You can customize the appearance by wrapping the `EmailBuilder` with your own `ThemeProvider`:

```tsx
import { ThemeProvider, createTheme } from '@mui/material';
import { EmailBuilder } from 'email-builder-inclusio';

const customTheme = createTheme({
  // Your custom theme configuration
});

function MyComponent() {
  return (
    <ThemeProvider theme={customTheme}>
      <EmailBuilder />
    </ThemeProvider>
  );
}
```

## Development

To run the development server:

```bash
npm run dev
```

To build the library:

```bash
npm run build
```

## License

MIT
