import BasicTemplate from './Basic'
import DoubleDip from './DoubleDip'
import Fancy from './Fancy'

const templates = [
  BasicTemplate,
  DoubleDip,
  Fancy
]

const templatesDict = {}
templates.map(t => {
  templatesDict[t.id] = t
})

const get = id => templatesDict[id]

export default {
  templates,
  templatesDict,
  get
}
