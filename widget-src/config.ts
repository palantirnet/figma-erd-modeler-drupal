export const EntryPresets: TableModelerEntryPresetsMapping = {
  header: {
    label: 'Header'
  },
  entry: {
    label: 'Attribute'
  }
}

export const FieldTypePresets: TableModelerFieldTypePresetsMapping = {
  none: {
    label: 'No Type',
    description: '',
    types: [],
  },
  boolean: {
    label:'Boolean',
    description: 'An entity field containing a boolean value.',
    types: [],
  },
  comments: {
    label: 'Comments',
    description: 'This field manages configuration and presentation of comments on an entity.',
    types: [],
  },
  datetime: {
    label: 'Date',
    description: 'Create and store date values.',
    types: [],
  },
  daterange: {
    label: 'Date Range',
    description: 'Create and store date ranges.',
    types: [],
  },
  decimal: {
    label: 'Number (decimal)',
    description: 'This field stores a number in the database in a fixed decimal format.',
    types: [],
  },
  email: {
    label: 'Email',
    description: 'An entity field containing an email value.',
    types: [],
  },
  entity_reference: {
    label: 'Entity Reference',
    description: 'An entity field containing an entity reference.',
    types: [
      'Node',
      'Term',
      'Media',
    ],
  },
  file: {
    label: 'File',
    description: 'This field stores the ID of a file as an integer value.',
    types: [],
  },

  float: {
    label: 'Number (float)',
    description: 'This field stores a number in the database in a floating point format.',
    types: [],
  },
  image: {
    label: 'Image',
    description: 'This field stores the ID of an image file as an integer value.',
    types: [],
  },
  integer: {
    label: 'Number',
    description: 'This field stores a number in the database as an integer.',
    types: [],
  },
  language: {
    label: 'Language',
    description: 'An entity field referencing a language.',
    types: [],
  },
  link: {
    label: 'Link',
    description: 'Stores a URL string, optional varchar link text, and optional blob of attributes to assemble a link.',
    types: [],
  },
  list_float: {
    label: 'List (float)',
    description: 'This field stores float values from a list of allowed "value => label" pairs, i.e. "Fraction": 0 => 0, .25 => 1/4, .75 => 3/4, 1 => 1.',
    types: [],
  },
  list_integer: {
    label: 'List (integer)',
    description: 'This field stores integer values from a list of allowed "value => label" pairs, i.e. "Lifetime in days": 1 => 1 day, 7 => 1 week, 31 => 1 month.',
    types: [],
  },
  list_string: {
    label: 'List (text)',
    description: 'This field stores text values from a list of allowed "value => label" pairs, i.e. "US States": IL => Illinois, IA => Iowa, IN => Indiana.',
    types: [],
  },
  string: {
    label: 'Text (plain)',
    description: 'A field containing a plain string value.',
    types: [
      'none',
      'long'
    ],
  },
  telephone: {
    label: 'Telephone number',
    description: 'This field stores a telephone number in the database.',
    types: [],
  },
  text: {
    label: 'Rich Text',
    description: 'This field stores a text with a text format.',
    types: [
      'formatted',
      'formatted, long',
      'formatted, long, with summary'
    ]
  },
  timestamp: {
    label: 'Timestamp',
    description: 'An entity field containing a UNIX timestamp value.',
    types: [],
  }
}