/* Core */
const { widget } = figma
const { AutoLayout, Text, Fragment } = widget

/* Components */
import InputGhost from '../components/InputGhost'
import Divider from '../components/Divider'
import LinkBox from '../patterns/LinkBox'

/* Utils */
import tokens from '../utils/tokens'

/* --- */

function Header(props: IHeaderProps) {
  return props.isTitleVisible || props.isDescriptionVisible || props.suffix !== undefined ? (
    <Fragment>
      <AutoLayout
        name="Header"
        verticalAlignItems="start"
        direction="horizontal"
        spacing={24}
        width="fill-parent"
        padding={tokens.themes.layout.container}
      >
        <AutoLayout
          name="Widget__row"
          verticalAlignItems="center"
          direction="vertical"
          spacing={8}
          width="fill-parent"
          height={props.isTitleVisible || props.isDescriptionVisible ? 'hug-contents' : 1}
        >
          {props.isTitleVisible && (
            <InputGhost
              theme={props.theme}
              variant={{ typo: 'h4', txt: 'primary' }}
              content={props.title}
              placeholder="Title"
              disabled={props.disabled}
              onEditEnd={(e: TextEditEvent) => props.onEditEnd({ property: 'title', value: e })}
            />
          )}
          {props.isDescriptionVisible && (
            <InputGhost
              theme={props.theme}
              variant={{ typo: 'p5', txt: 'secondary' }}
              type={'multiline'}
              content={props.description}
              placeholder="Add any description..."
              disabled={props.disabled}
              onEditEnd={(e: TextEditEvent) => props.onEditEnd({ property: 'description', value: e })}
            />
          )}
          <>
            {props.link && (
              <LinkBox
                theme={props.theme}
                contentTitle={props.link.src}
                placeholderTitle={'Paste any link...'}
                valid={props.link.valid}
                disabled={Boolean(props.disabled)}
                onEditEnd={(e) => props.onEditEnd({ property: 'link', value: e })}
              />
            )}
          </>
        </AutoLayout>
        {props.suffix && (
          <AutoLayout
            name="Widget__suffix"
            verticalAlignItems="start"
            direction="vertical"
            spacing={8}
            padding={{ top: props.isTitleVisible ? 4 : 0 }}
            width="hug-contents"
          >
            {props.suffix}
          </AutoLayout>
        )}
      </AutoLayout>
      <Divider theme={props.theme} />
    </Fragment>
  ) : (
    <></>
  )
}

export default Header
