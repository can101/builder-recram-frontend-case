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
type FontSize = 'text-xs' | 'text-sm' |'text-base'|'text-lg'|'text-xl'
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
    widthSize: 'wide',
    action:null
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
    segmentDomList:[
      {
        "Id": "PtFNiLqykh8XsOPxFoDWV",
        "List": []
      }
      ],
    marginSpacing: {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0
    },
    paddingSpacing: {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0
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
      name:'blok_style',
      current: {
        segment: 1,
        id: 0
      },
      type: ComponentTypes.BlokStyleBox
    },
    {
      id: 2,
      label: 'İç Kenar Boşluğu',
      name:'paddingSpacing',
      type: ComponentTypes.SpacingBox,
      edgeSpacing: {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      }
    },
    {
      id: 3,
      label: 'Dış Kenar Boşluğu',
      name:'marginSpacing',
      type: ComponentTypes.SpacingBox,
      edgeSpacing: {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
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
      values: [{ text: 'paragraph', id: 0 }],
      label:''
    },
    {
      id: 2,
      type: ComponentTypes.TextArea,
      placeholder: 'text'
    },
    {
      id: 3,
      type: ComponentTypes.SelectBox,
      label:'font',
      name:'font_family',
      values: [
        { text: 'rubik', id: 0, name: 'font-rubik' },
        { text: 'urbanist', id: 1, name: 'font-urbanist' }
      ],
    },
    {
      id: 4,
      label: 'font size',
      name:'font_size',
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
      name: 'view',
      type: ComponentTypes.SelectBox,
      placeholder: 'https://',
      current: {
        text: 'desktop & mobile',
        id: 0
      },
      values: [
        {
          text: 'desktop & mobile',
          id: 0,
          name:''
        },
        {
          text: 'only desktop',
          id: 1,
          name:'hidden lg:block'
        },
        {
          text: 'only mobile',
          id: 2,
          name:'block lg:hidden'
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
      name:'action',
      values:[{
          text: 'Dropdown Button',
          id: 0
        }]
    },
    {
      id: 3,
      type: ComponentTypes.SelectBox,
      label: 'width',
      name:'widthSize',
      values:[
        {
        id: 0,
        text: 'default',
        name:'default'
        },
        {
          id: 1,
          text: 'wide',
          name:'wide'
        },
        {
          id: 0,
          text: 'full',
          name:'full'
        },
      ]
    },
    {
      id: 4,
      type: ComponentTypes.SelectBox,
      label: 'variant',
      name:'variant',
      current:{
        id: 3,
        text: 'soft',
        name:'soft'
      },
      values:[
        {
          id: 0,
          text: 'solid',
          name:'solid'
        },
        {
          id: 1,
          text: 'ghost',
          name:'ghost'
        },
        {
          id: 2,
          text: 'outline',
          name:'outline'
        },
        {
          id: 3,
          text: 'soft',
          name:'soft'
        },
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
    },
    {
      id: 3,
      type: ComponentTypes.TextField,
      label: 'label',
      placeholder: 'label'
    },
    {
      id: 4,
      type: ComponentTypes.SelectBox,
      label: 'width',
      name:'widthSize',
      values:[
        {
          id: 0,
          text: 'default',
          name:'default'
        },
        {
          id: 1,
          text: 'wide',
          name:'wide'
        },
        {
          id: 0,
          text: 'full',
          name:'full'
        },
        ]
    },
    {
      id: 5,
      type: ComponentTypes.TextField,
      label: 'value',
      placeholder: 'value'
    },
  ]
}

export { FORM_COMPONENTS, FORM_COMPONENTS_SETTING_LAYOUT, ComponentTypes, WidthSize }
export type { IGenerateComponentItem, SizeType, VariantClass ,EdgeType,EdgeSpacingType,FontSize}
