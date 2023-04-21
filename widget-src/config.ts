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
  },
  address: {
    label:'Address',
    description: 'An entity field containing an address.',
  },
  boolean: {
    label:'Boolean',
    description: 'An entity field containing a boolean value.',
  },
  comments: {
    label: 'Comments',
    description: 'This field manages configuration and presentation of comments on an entity.',
  },
  changed: {
    label: 'Date Changed',
    description: '',
  },
  created: {
    label: 'Date Created',
    description: '',
  },
  datetime: {
    label: 'Date',
    description: 'Create and store date values.',
  },
  daterange: {
    label: 'Date Range',
    description: 'Create and store date ranges.',
  },
  decimal: {
    label: 'Number (decimal)',
    description: 'This field stores a number in the database in a fixed decimal format.',
  },
  email: {
    label: 'Email',
    description: 'An entity field containing an email value.',
  },
  entity_reference: {
    label: 'Entity Reference',
    description: 'An entity field containing an entity reference.',
  },
  file: {
    label: 'File',
    description: 'This field stores the ID of a file as an integer value.',
  },
  float: {
    label: 'Number (float)',
    description: 'This field stores a number in the database in a floating point format.',
  },
  image: {
    label: 'Image',
    description: 'This field stores the ID of an image file as an integer value.',
  },
  integer: {
    label: 'Number',
    description: 'This field stores a number in the database as an integer.',
  },
  language: {
    label: 'Language',
    description: 'An entity field referencing a language.',
  },
  link: {
    label: 'Link',
    description: 'Stores a URL string, optional varchar link text, and optional blob of attributes to assemble a link.',
  },
  list_float: {
    label: 'List (float)',
    description: 'This field stores float values from a list of allowed "value => label" pairs, i.e. "Fraction": 0 => 0, .25 => 1/4, .75 => 3/4, 1 => 1.',
  },
  list_integer: {
    label: 'List (integer)',
    description: 'This field stores integer values from a list of allowed "value => label" pairs, i.e. "Lifetime in days": 1 => 1 day, 7 => 1 week, 31 => 1 month.',
  },
  list_string: {
    label: 'List (text)',
    description: 'This field stores text values from a list of allowed "value => label" pairs, i.e. "US States": IL => Illinois, IA => Iowa, IN => Indiana.',
  },
  path: {
    label: 'Path',
    description: '',
  },
  string: {
    label: 'Text (plain)',
    description: 'A field containing a plain string value.',
  },
  string_long: {
    label: 'Text (plain, long)',
    description: '',
  },
  telephone: {
    label: 'Telephone number',
    description: 'This field stores a telephone number in the database.',
  },
  text: {
    label: 'Rich Text',
    description: 'This field stores a text with a text format.',
  },
  text_long: {
    label: 'Rich Text (long)',
    description: 'This field stores a long text with a text format.',
  },
  text_with_summary: {
    label: 'Rich Text (long, with summary)',
    description: 'This field stores long text with a format and an optional summary.',
  },
  timestamp: {
    label: 'Timestamp',
    description: 'An entity field containing a UNIX timestamp value.',
  },
  uuid: {
    label: 'UUID',
    description: 'A universally unique identifier.',
  }
}