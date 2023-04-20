const { AutoLayout, Input, Line, Text, useSyncedState } = figma.widget
import { EntityAttribute } from "./EntityAttribute"

export interface EntityDetailsProps {
  title: string
  description: string
  setTitle: (title: string) => void
  setDescription: (description: string) => void
}

export const EntityDetails = (props: EntityDetailsProps) => {
  const [drupal_id, setDrupalId] = useSyncedState("drupal_id", "")
  const [name, setName] = useSyncedState("name", "")
  const [type, setType] = useSyncedState("type", "")
  const [type_detail, setTypeDetail] = useSyncedState("type_detail", "")
  const [is_required, setIsRequired] = useSyncedState("is_required", false)
  const [description, setDescription] = useSyncedState("description", "")

  return (
    <AutoLayout direction="vertical" spacing={10} padding={{ bottom: 2 }}>
      <Input
        value={props.title}
        onTextEditEnd={(e) => props.setTitle(e.characters)}
        placeholder="Entity name"
        width={1100}
        fontSize={24}
      />
      <Input
        value={props.description}
        onTextEditEnd={(e) => props.setDescription(e.characters)}
        placeholder="Describe your entity here (e.g. what it represents)"
        width={1100}
        fontSize={12.5}
        fontWeight={400}
        lineHeight={20}
      />
      <Line
        length={1100}
        stroke="#dddddd"
      />
      <AutoLayout direction="horizontal" width="fill-parent">
        <Text
          width="fill-parent"
          fontSize={14}
        >
          Name
        </Text>
        <Text
          width="fill-parent"
          fontSize={14}
        >
          Type
        </Text>
        <Text
          width="fill-parent"
          fontSize={14}
        >
          Type Detail
        </Text>
        <Text
          width="fill-parent"
          fontSize={14}
        >
          Required?
        </Text>
        <Text
          width="fill-parent"
          fontSize={14}
        >
          Cardinality
        </Text>
        <Text
          width="fill-parent"
          fontSize={14}
        >
          Help Text
        </Text>
        <Text
          width="fill-parent"
          fontSize={14}
        >
          Drupal ID
        </Text>
      </AutoLayout>
    </AutoLayout>
  )
}
