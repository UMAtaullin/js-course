const link = {
  href: '#',
  title: 'simple link',
  target: 'blank',
  className: 'link',
  id: null,
  children: {
    span: {
      content: 'Click me',
      className: 'anchor',
    },
  },
}

const {
  target: blank = "",
  className: renamed = "",
  children: {
    span: {
      content: clickMe = "",
      className: anchor = ""
    } = {},
  } = {},
} = link || {}
