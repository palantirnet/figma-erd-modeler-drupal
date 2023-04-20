const { AutoLayout, Input, Line, Text } = figma.widget

export interface EntityAttributeProps {
  drupal_id: string
  name: string
  type: string
  type_detail: string
  is_required: boolean
  cardinality: string
  description: string
  setDrupalId: (drupal_id: string) => void
  setName: (name: string) => void
  setType: (type: string) => void
  setTypeDetail: (type_detail: string) => void
  setIsRequired: (is_required: boolean) => void
  setCardinality: (cardinality: string) => void
  setDescription: (description: string) => void
}

export const EntityAttribute = (props: EntityAttributeProps) => (
  <AutoLayout direction="horizontal" spacing={10} padding={{ bottom: 2 }}>
    <Input
      value={props.drupal_id}
      onTextEditEnd={(e) => props.setDrupalId(e.characters)}
      placeholder="field_name"
      width="fill-parent"
      fontSize={12.5}
    />
    <Input
      value={props.name}
      onTextEditEnd={(e) => props.setName(e.characters)}
      placeholder="Field Label"
      width="fill-parent"
      fontSize={12.5}
    />
    <Input
      value={props.type}
      onTextEditEnd={(e) => props.setType(e.characters)}
      placeholder="type"
      width="fill-parent"
      fontSize={12.5}
    />
    <Input
      value={props.type_detail}
      onTextEditEnd={(e) => props.setTypeDetail(e.characters)}
      placeholder="type detail"
      width="fill-parent"
      fontSize={12.5}
    />
    <Input
      value={props.is_required}
      onTextEditEnd={(e) => props.setIsRequired(e.characters)}
      placeholder="yes/no"
      width="fill-parent"
      fontSize={12.5}
    />
    <Input
      value={props.cardinality}
      onTextEditEnd={(e) => props.setCardinality(e.characters)}
      placeholder="limit (3), unlimited"
      width="fill-parent"
      fontSize={12.5}
    />
    <Input
      value={props.description}
      onTextEditEnd={(e) => props.setDescription(e.characters)}
      placeholder="help text"
      width="fill-parent"
      fontSize={12.5}
    />
  </AutoLayout>
)
