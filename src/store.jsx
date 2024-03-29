import { create } from 'zustand';

export const useNoteStore = create((set) => ({
  note: '',
  formatting: {
    bold: false,
    italic: false,
    underline: false,
    font: 'Arial',
  },
  addImage: (imageUrl) =>
    set((state) => ({
      note: state.note + `<img src="${imageUrl}" alt="Image" />`,
    })),
  addVideo: (videoUrl) =>
    set((state) => ({
      note: state.note + `<video src="${videoUrl}" controls></video>`,
    })),
  addGif: (gifUrl) =>
    set((state) => ({
      note: state.note + `<img src="${gifUrl}" alt="GIF" />`,
    })),
  updateNote: (newNote) => set({ note: newNote }),
  toggleBold: () =>
    set((state) => ({
      formatting: { ...state.formatting, bold: !state.formatting.bold },
    })),
  toggleItalic: () =>
    set((state) => ({
      formatting: { ...state.formatting, italic: !state.formatting.italic },
    })),
  toggleUnderline: () =>
    set((state) => ({
      formatting: { ...state.formatting, underline: !state.formatting.underline },
    })),
  changeFont: (font) => set((state) => ({ formatting: { ...state.formatting, font } })),
}));