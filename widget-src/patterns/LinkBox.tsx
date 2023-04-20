const { widget } = figma
const { AutoLayout } = widget

/* Components */
import Icon from '../components/Icon'
import InputGhost from '../components/InputGhost'

/* Utils */
import tokens from '../utils/tokens'

/* --- */

function LinkBox(props: ILinkBoxProps) {
  return (
    <AutoLayout
      key={props.key}
      name="LinkBox"
      direction="horizontal"
      height="hug-contents"
      width="fill-parent"
      spacing={4}
    >
      <Icon
        glyph={'link'}
        size={16}
        color={
          props.contentTitle.length === 0
            ? tokens.themes.txt.minor.default[props.theme].color
            : props.valid
            ? tokens.themes.txt.secondary.default[props.theme].color
            : tokens.themes.txt.error.default[props.theme].color
        }
      />
      <InputGhost
        theme={props.theme}
        variant={{ typo: 'p6', txt: props.contentTitle.length === 0 ? 'minor' : props.valid ? 'secondary' : 'error' }}
        type={'truncate'}
        content={props.contentTitle}
        placeholder={props.placeholderTitle}
        disabled={Boolean(props.disabled)}
        onEditEnd={(e) => props.onEditEnd(e)}
        style={{
          href: props.valid ? props.contentTitle : '',
          textDecoration: props.valid ? 'underline' : 'none'
        }}
      />
    </AutoLayout>
  )
}

export default LinkBox
