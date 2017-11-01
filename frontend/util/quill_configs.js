
export const quillModules = {
  toolbar: [
    ['bold', 'italic', 'underline', 'strike'],
    ['blockquote', 'code-block'],
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ 'script': 'sub'}, { 'script': 'super' }],
    [{ 'indent': '-1'}, { 'indent': '+1' }],
    [{ 'direction': 'rtl' }],
    [{ 'size': ['small', false, 'large', 'huge'] }],
    [{ 'color': [] }, { 'background': [] }],
    ['link'],
    [{ 'font': [] }],
    [{ 'align': [] }],
    ['clean']],
};

export const quillFormats = [
  'header', 'font', 'size', 'bold', 'italic', 'underline', 'strike',
  'blockquote', 'code-block', 'list', 'bullet', 'script', 'indent',
  'color', 'background', 'align', 'clean', 'direction', 'image', 'link'
];
