# CSS_Viewer_Chrome_Extension
This is a chrome extension to view the css properties applied on the particular element of the webpage of the website.

# In order to use this Chrome Extension follow the steps:
- Create a folder
- Insert all the files downloaded from the Repository.
- Now go to the chrome browser and type url as:
- [API](#api)
  - [`useClipboard(options?: UseClipboardOptions): ClipboardAPI`](#useclipboardoptions-useclipboardoptions-clipboardapi)
  - [`UseClipboardOptions`](#useclipboardoptions)
    - [`copiedTimeout?: number`](#copiedtimeout-number)
    - [`onSuccess?: () => void`](#onsuccess---void)
    - [`onError?: () => void`](#onerror---void)
    - [`selectOnCopy?: boolean`](#selectoncopy-boolean)
    - [`selectOnError?: boolean`](#selectonerror-boolean)
  - [`ClipboardAPI`](#clipboardapi)
    - [`copy: (text?: string) => void`](#copy-text-string--void)
    - [`target: React.RefObject<any>`](#target-reactrefobjectany)
    - [`isSupported: () => boolean`](#issupported---boolean)
    - [`copied: boolean`](#copied-boolean)
- [Acknowledgements](#acknowledgements)
- [License](#license)
  
  `use-clipboard-copy` is a **lightweight** (< 1KB) React hook that makes it possible to add a copy-to-clipboard functionality to your React application with very little code! A simple implementation looks like this:

```js
function CopyText() {
  const clipboard = useClipboard();
  return (
    <div>
      <input ref={clipboard.target} />
      <button onClick={clipboard.copy}>Copy</button>
    </div>
  );
}
```
