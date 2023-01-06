export type LogicFunction = (a: boolean, b: boolean) => boolean

export interface LogicFunctionListItem {
  name: string
  func: LogicFunction
}

export const functions: LogicFunctionListItem[] = [
  { name: 'a && b', func: (a, b) => a && b },
  { name: '!a && b', func: (a, b) => !a && b },
  { name: 'a && !b', func: (a, b) => a && !b },
  { name: '!a && !b', func: (a, b) => !a && !b },
  { name: 'a || b', func: (a, b) => a || b },
  { name: '!a || b', func: (a, b) => !a || b },
  { name: 'a || !b', func: (a, b) => a || !b },
  { name: '!a || !b', func: (a, b) => !a || !b },
]
