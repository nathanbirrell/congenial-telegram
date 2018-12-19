import React from 'react'
import getDirections, { Direction } from './getDirections'

/**
 *    - 16-point compass
 */

const options: string[] = [
  'N',
  'NE',
  'E',
  'SE',
  'S',
  'SW',
  'W',
  'NW',
]

const directions: Direction[] = getDirections(options)

console.log(directions)

const radius = 5 // rem
const diameter = radius * 2
const slice = 360 / directions.length
const circumference = Math.PI * diameter
const sliceCircumference = circumference / directions.length

export default class ChooseDirection extends React.Component {
  render() {
    return (
      <div
        style={{
          width: `${diameter}rem`,
          height: `${diameter}rem`,
          // padding: `${radius}rem`,
          position: 'relative',
          clipPath: 'circle(50% at 50% 50%)',
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          // paddingLeft: `${radius / 2}rem`,
          // paddingTop: `${radius / 2}rem`,
        }}
      >
        {
          directions.map((direction, index) => {
            // since our directions are on a 360 degree compass, we can use it as the hue :D
            const hue = direction.range.min
            const rotate = slice * index + -90
            const rotateReverse = rotate * -1
            const rotateSlice = direction.range.min

            return (
              <button
                key={index}
                onClick={() => { console.log(direction.label)}}

                style={{
                  border: 'none',
                  cursor: 'pointer',
                  position: 'absolute',
                  width: `${sliceCircumference}rem`,
                  height: `${radius}rem`,

                  // Position on the circle properly, then spin the triangle itself on its own axis
                  transform: `
                    rotate(${rotate}deg)
                    translate(${radius / 2}rem)
                    rotate(${rotateReverse}deg)
                    rotate(${rotateSlice}deg)
                  `,

                  background: `hsl(${hue}, 100%, 50%)`,
                  clipPath: 'polygon(50% 100%, 0 0, 100% 0)',
                }}
              >
                <div
                  style={{
                    // Offset the triangle rotation
                    transform: `
                      rotate(${direction.range.min * -1}deg
                    `,
                  }}
                >
                  {direction.label}
                </div>
              </button>
            )
          })
        }
      </div>
    )
  }
}