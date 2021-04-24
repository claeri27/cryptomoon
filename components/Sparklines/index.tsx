import { Sparklines as ReactSparklines, SparklinesLine } from 'react-sparklines'
import type { Coin } from '@/types'
import type { FC } from 'react'

const Sparklines: FC<{ coin: Coin; fill?: string }> = ({ coin, fill }) => {
  return (
    <ReactSparklines data={coin.sparkline_in_7d.price}>
      <SparklinesLine
        color={coin.price_change_percentage_7d_in_currency >= 0 ? '#48BB78' : '#F56565'}
        style={{ fill: fill && fill }}
      />
    </ReactSparklines>
  )
}

export default Sparklines
