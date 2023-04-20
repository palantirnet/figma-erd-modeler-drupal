declare global {
  export type TableModelerEntryPresetsMapping = {
    [t: string]: {
      label: string
    }
  }

  export type TableModelerFieldTypePresetsMapping = {
    [t: string]: {
      label: string,
      description: string,
    }
  }
}

export {}
