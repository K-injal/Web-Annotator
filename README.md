# Web Annotator

Web Annotator is a Chrome extension that empowers users to interact with web content by highlighting important text snippets and adding personalized annotations. Whether you're conducting research, studying, or simply want to remember key information, Web Annotator makes it easy to mark up web pages and save your insights.

## Features

- **Text Highlighting**: Select and highlight text on any web page with a simple click.
- **Annotation**: Add custom notes to your highlighted text, providing context and insights.
- **Automatic Saving**: Annotations are automatically saved, ensuring you never lose your work.
- **Annotation Management**: View and manage your annotations directly from the extension interface.
- **Search Functionality**: Easily search through your annotations by text or note content.
- **Export**: Export your annotations as a JSON file for easy sharing or backup.

## Installation

To start using Web Annotator:

1. **Download**: Download the extension from the repository.
2. **Installation**: Open Chrome and navigate to `chrome://extensions`.
3. **Developer Mode**: Enable Developer mode.
4. **Load Extension**: Click on "Load unpacked" and select the extension directory.

## Usage

1. **Highlighting**: Simply select the text you want to annotate on any web page.
2. **Adding Notes**: When prompted, add a note to your highlighted text to provide additional context.
3. **Saving**: Annotations are automatically saved, allowing you to revisit them later.
4. **Viewing**: Access your annotations by clicking on the extension icon.
5. **Searching**: Use the search bar to filter annotations based on text or note content.
6. **Exporting**: Export your annotations as a JSON file for further use or sharing.

## Options

- **Default Highlight Color**: Customize the default highlight color from the options page to suit your preferences.

## File Structure

- `manifest.json`: Configuration file for the extension.
- `background.js`: Background script responsible for storage management and message handling.
- `popup.html`: HTML file for the extension's popup interface.
- `popup.js`: JavaScript file controlling the functionality of the extension popup.
- `content.js`: JavaScript file injected into web pages to enable interaction.
- `options.html`: HTML file for configuring extension options.
- `options.js`: JavaScript file managing the options page functionality.
- `styles.css`: CSS file for styling the extension popup and options page.
