import { Button, Popover, styled } from 'tamagui'

export default function TestPopoverContentStyledPlusAnimations() {
  return (
    <Popover size="$5">
      <Popover.Trigger asChild>
        <Button>go</Button>
      </Popover.Trigger>

      <PopoverStyledContent debug="verbose">
        <Popover.Arrow bw={1} boc="$borderColor" />
      </PopoverStyledContent>
    </Popover>
  )
}
const PopoverStyledContent = styled(Popover.Content, {
  name: 'PopoverContent2',
  debug: 'verbose',
  elevate: true,
  bordered: true,
  p: '$3',
  br: '$3',
  enterStyle: {
    o: 0,
    y: -10,
    x: 0,
  },
  exitStyle: {
    o: 0,
    y: -10,
    x: 0,
  },
  x: 0,
  y: 0,
  o: 1,
  animation: [
    'quick',
    {
      opacity: {
        overshootClamping: true,
      },
    },
  ],
})
console.log('PopoverStyledContent', PopoverStyledContent)
