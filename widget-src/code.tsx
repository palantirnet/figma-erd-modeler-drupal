const { widget } = figma
const {
  useSyncedState,
  useSyncedMap,
  usePropertyMenu,
  AutoLayout,
  Frame,
  Input,
  SVG,
  Text,
  waitForTask,
} = widget

import { EntityDetails } from "./components/EntityDetails"
import { EntityColours } from "./types/EntityColours"
import { WidgetContainer } from "./components/WidgetContainer"
import { PropertyTypes, PropertyType } from "./types/PropertyTypes"
import { PROPERTY_TYPE_DISPLAY_NAMES } from "./types/PropertyDisplayNames"

const Widget = () => {
  const [title, setTitle] = useSyncedState("title", "")
  const [description, setDescription] = useSyncedState("description", "")
  const [colour, setColour] = useSyncedState<string>("colour", EntityColours.None)
  const [typeToAdd, setTypeToAdd] = useSyncedState<PropertyType>("typeToAdd", "string")

   usePropertyMenu(
    [
      {
        itemType: "color-selector",
        tooltip: "Entity colour",
        options: Object.keys(EntityColours).map((colourOption) => ({
          option: EntityColours[colourOption],
          tooltip: colourOption,
        })),
        propertyName: "entity-colour",
        selectedOption: colour,
      },
      {
        itemType: "separator",
      },
      {
        itemType: "dropdown",
        propertyName: "property-type",
        options: PropertyTypes.map((type) => ({
          label: PROPERTY_TYPE_DISPLAY_NAMES[type],
          option: type,
        })),
        selectedOption: typeToAdd,
        tooltip: "Property type to add",
      },
    ],
    (event) => {
      if (event.propertyName === "entity-colour" && event.propertyValue) {
        setColour(event.propertyValue)
      }
      else if (event.propertyName === "property-type" && event.propertyValue) {
        setTypeToAdd(event.propertyValue as PropertyType)
      }
    },
  )

  return (
    <WidgetContainer keyColour={colour}>
      <EntityDetails
        title={title}
        description={description}
        setTitle={setTitle}
        setDescription={setDescription}
      />
    </WidgetContainer>
  )
}

widget.register(Widget)
