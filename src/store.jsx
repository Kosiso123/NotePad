import {create} from 'zustand';

export const useNoteStore = create((set) => ({
  note: '',
  formatting: {
    bold: false,
    italic: false,
    underline: false,
    font: 'Arial',
  },
  // Action to add an image to the note
  addImage: (imageUrl) =>
    set((state) => ({ note: state.note + `<img src="${imageUrl}" />` })),
  // Action to add a video to the note
  addVideo: (videoUrl) =>
    set((state) => ({ note: state.note + `<video src="${videoUrl}" />` })),
  // Action to add a gif to the note
  addGif: (gifUrl) =>
    set((state) => ({ note: state.note + `<img src="${gifUrl}" />` })),
  // Action to update the note content
  updateNote: (newNote) => set({ note: newNote }),
  // Action to toggle bold formatting
  toggleBold: () =>
    set((state) => ({ formatting: { ...state.formatting, bold: !state.formatting.bold } })),
  // Action to toggle italic formatting
  toggleItalic: () =>
    set((state) => ({ formatting: { ...state.formatting, italic: !state.formatting.italic } })),
  // Action to toggle underline formatting
  toggleUnderline: () =>
    set((state) => ({
      formatting: { ...state.formatting, underline: !state.formatting.underline },
    })),
  // Action to change the font
  changeFont: (font) => set((state) => ({ formatting: { ...state.formatting, font } })),
}));