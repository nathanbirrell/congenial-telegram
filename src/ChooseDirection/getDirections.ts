export interface Direction {
  label: string // ie: NNW
  range: {
    min: number // degrees
    max: number // degrees
  }
}

export default (optionLabels: string[]) => {
  const numberOfOptions = optionLabels.length
  const RANGE = 360 / numberOfOptions

  let previousMax = 0

  const directions: Direction[] =
    optionLabels.map((value: string, index: number) => {
      const min = previousMax
      const max = min + RANGE

      previousMax = max

      return {
        label: value,
        range: {
          min,
          max,
        }
      }
    })

  return directions
}