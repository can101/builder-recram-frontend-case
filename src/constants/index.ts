import { IconText, IconButton, IconBlok, IconInput } from '@/components/icons'

enum WidthSize {
  'default' = '',
  'wide' = 'width__size_wide',
  'full' = 'width__size_full'
}
enum VariantClass {
  'solid' = 'variant__solid',
  'ghost' = 'variant__ghost',
  'outline' = 'variant__outline',
  'soft' = 'variant__soft'
}
enum ComponentTypes {
  BlokStyleBox = 'BlokStyleBox',
  SpacingBox = 'SpacingBox',
  SelectBox = 'SelectBox',
  SpecificationBox = 'SpecificationBox',
  FontSizeBox = 'FontSizeBox',
  TextArea = 'TextArea',
  TextField = 'TextField',
  Title = 'Title',
  Paragraph = 'Paragraph',
  Blok = 'Blok',
  Button = 'Button'
}

type VariantType = 'solid' | 'ghost' | 'outline' | 'soft'
type SizeType = 'wide' | 'full' | 'default'
type EdgeSpacingType = {
  left: number
  top: number
  right: number
  bottom: number
}
type ValueItemType = {
  label?: string
  name?: string
  id: number
}
type EdgeType = {
  segment: number
  id: number
}

type ValuesType = EdgeType[] | ValueItemType[]
type ValueType = EdgeType | ValueItemType

interface IGenerateComponentItem {
  name: string
  icon: any
  isActive?: boolean
  widthSize?: SizeType
  variant?: VariantType
  title?: string
  placeholder?: string
  label?: string
  value?: string
  type?: string
  id?: number
  current?: ValueType
  edgeSpacing?: EdgeSpacingType
  values?: ValuesType
}
const FORM_COMPONENTS_PROPS: any = {
  Button: {
    title: 'button',
    variant: 'solid',
    isActive: false,
    widthSize: 'wide'
  },
  TextField: {
    title: 'input',
    placeholder: 'input',
    label: 'label',
    value: '',
    widthSize: 'wide'
  },
  Paragraph: {
    type: 'Paragraph',
    text: '',
    font_family: {
      name: 'font-rubik',
      label: 'rubik',
      id: 0
    },
    font_size: 'text-base',
    specification: 'text-align-center',
    view: {
      label: 'desktop & mobile',
      id: 0
    }
  },
  Blok: {
    blok_style: {
      segment: 1,
      id: 0
    },
    marginSpacing: {
      left: 20,
      top: 20,
      right: 20,
      bottom: 20
    },
    paddingSpacing: {
      left: 20,
      top: 20,
      right: 20,
      bottom: 20
    }
  }
}
const FORM_COMPONENTS: IGenerateComponentItem[] = [
  {
    name: 'Text',
    icon: IconText,
    type: ComponentTypes.Paragraph,
    ...FORM_COMPONENTS_PROPS['Paragraph']
  },
  {
    name: 'Input',
    icon: IconInput,
    type: ComponentTypes.TextField,
    ...FORM_COMPONENTS_PROPS['TextField']
  },
  {
    name: 'Blok',
    icon: IconBlok,
    type: ComponentTypes.Blok,
    ...FORM_COMPONENTS_PROPS['Blok']
  },
  {
    name: 'Button',
    icon: IconButton,
    type: ComponentTypes.Button,
    ...FORM_COMPONENTS_PROPS['Button']
  }
]
const FORM_COMPONENTS_SETTING_LAYOUT = {
  Blok: [
    {
      id: 0,
      type: ComponentTypes.Title,
      title: 'blok'
    },
    {
      id: 1,
      label: 'blok stili',
      current: {
        segment: 1,
        id: 0
      },
      type: ComponentTypes.BlokStyleBox
    },
    {
      id: 2,
      label: 'İç Kenar Boşluğu',
      type: ComponentTypes.SpacingBox,
      edgeSpacing: {
        left: 20,
        top: 20,
        right: 20,
        bottom: 20
      }
    },
    {
      id: 3,
      label: 'Dış Kenar Boşluğu',
      type: ComponentTypes.SpacingBox,
      edgeSpacing: {
        left: 20,
        top: 20,
        right: 20,
        bottom: 20
      }
    }
  ],
  Paragraph: [
    {
      id: 0,
      type: ComponentTypes.Title,
      title: 'text'
    },
    {
      id: 1,
      type: ComponentTypes.SelectBox,
      values: [{ text: 'paragraph', id: 0 }]
    },
    {
      id: 2,
      type: ComponentTypes.TextArea,
      placeholder: 'text'
    },
    {
      id: 3,
      type: ComponentTypes.SelectBox,
      values: [
        { text: 'rubik', id: 0, name: 'font-rubik' },
        { text: 'urbanist', id: 1, name: 'font-urbanist' }
      ]
    },
    {
      id: 4,
      label: 'font size',
      type: ComponentTypes.FontSizeBox,
      current: 'text-base'
    },
    {
      id: 5,
      label: 'specification',
      type: ComponentTypes.SpecificationBox
    },
    {
      id: 6,
      label: 'link',
      type: ComponentTypes.TextField,
      placeholder: 'https://'
    },
    {
      id: 7,
      label: 'view',
      type: ComponentTypes.SelectBox,
      placeholder: 'https://',
      current: {
        text: 'desktop & mobile',
        id: 0
      },
      values: [
        {
          text: 'desktop & mobile',
          id: 0
        },
        {
          text: 'only desktop',
          id: 1
        },
        {
          text: 'only mobile',
          id: 2
        }
      ]
    }
  ],
  Button: [
    {
      id: 0,
      type: ComponentTypes.Title,
      title: 'button'
    },
    {
      id: 1,
      type: ComponentTypes.TextField,
      placeholder: 'Next Step'
    },
    {
      id: 2,
      type: ComponentTypes.SelectBox,
      label: 'action',
      values: [
        {
          text: 'Dropdown Button',
          id: 0
        }
      ]
    }
  ],
  TextField: [
    {
      id: 0,
      type: ComponentTypes.Title,
      title: 'input'
    },
    {
      id: 1,
      type: ComponentTypes.TextField,
      label: 'placeholder',
      placeholder: 'placeholder'
    },
    {
      id: 2,
      type: ComponentTypes.TextField,
      label: 'name',
      placeholder: 'placeholder'
    }
  ]
}

export { FORM_COMPONENTS, FORM_COMPONENTS_SETTING_LAYOUT, ComponentTypes, WidthSize }
export type { IGenerateComponentItem, SizeType, VariantClass ,EdgeType,EdgeSpacingType}
