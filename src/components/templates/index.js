import BasicTemplate from './Basic'
import DoubleDip from './DoubleDip'
import Fancy from './Fancy'

const templates = [
  BasicTemplate,
  DoubleDip,
  Fancy
]

const templatesDict = {}
for (let t of templates) {
  templatesDict[t.id] = t
}

const get = id => templatesDict[id]

export default {
  templates,
  templatesDict,
  get
}
